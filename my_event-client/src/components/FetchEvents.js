import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../styles/fetch.css'

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (results) => JSON.stringify(results),
});

function FetchEvents() {
  const [events, setEvents] = useState([]);
  const [displayPerPage, setDisplayPerPage ] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState();

  const numOfPages = Math.ceil(events.length / displayPerPage);
  const pages = [...Array(numOfPages + 1).keys()].slice(1);
  const indexOfLastEvent = currentPage * displayPerPage;
  const indexOfFirstEvent = indexOfLastEvent - displayPerPage;

  const visibleEvent = events.slice(indexOfFirstEvent, indexOfLastEvent);


  useEffect(() => {
    if(search){
      setEvents([search])
    }else{
    axios({
      method: "GET",
      url: "https://public.opendatasoft.com//api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=100",
      headers: { "content-type": "application/json" },
    }).then((res) => {
        setEvents(res.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
    return;}
  }, [search]);


  const prevHandler = () => {
    if (currentPage !== 1 ) setCurrentPage(currentPage - 1);
  }

  const nextHandler = () => {
    if (currentPage !== numOfPages ) setCurrentPage(currentPage + 1);
  }
  
  const handleSearch = (e, v) => {
    if (e.key === "Enter"){
      setSearch(v);
    }
  }
  
  if (!events) return <div>Nothing to see here!</div>;
  return (
    <div className='fetch_container'>
      <Box className='search'>
        <Autocomplete
          freeSolo
          options={events}
          sx={{ width: 300 }}
          getOptionLabel={(results) => results.fields.title_fr}
          noOptionsText={"Sorry, but I couldn't find anything..."}
          onChange={(e, v) => setSearch(v)}
      
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Evenement"
              placeholder='Evenement'
              className="rounded-full"
            />
          )}
        />
        <Autocomplete
          freeSolo
          options={events}
          sx={{ width: 300 }}
          getOptionLabel={(results) => results.fields.keywords_fr}
          noOptionsText={"Sorry, but I couldn't find anything..."}
          onChange={(e, v) => setSearch(v)}
      
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Type d'evenement"
              placeholder='Type'
              className="rounded-full"
            />
          )}
        />
        <Autocomplete
          freeSolo
          options={events}
          sx={{ width: 300 }}
          getOptionLabel={(results) => results.fields.location_region}
          noOptionsText={"Sorry, but I couldn't find anything..."}
          onChange={(e, v) => setSearch(v)}
          onKeyDown={handleSearch}
      
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Region"
              placeholder="Lieu de l'evenement"
              className="rounded-full"
            />
          )}
        />
      </Box>

      <h2>Evenements disponible</h2>
      <div className='events-grid'>
        {visibleEvent.map((data) => (
          <div key={data.recordid} className='card'>
            <div className='card_contents'>
              <Link to={`/event/${data.fields.uid}`}>
                <h3>{data.fields.title_fr}</h3>
              </Link> 
              <p>{data.fields.description_fr}</p>
              <div className='card_content_footer'>
                <h4>{data.fields.daterange_fr}</h4>
                <div className='event_infos'>
                  <div>
                    <h4>Ville: {data.fields.location_city}</h4>
                    <h4>Region: {data.fields.location_region}</h4>
                    <h4>Pays : {data.fields.country_fr}</h4>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`event/${data.fields.uid}`}>
              <img src={data.fields.image} alt="" />
            </Link>            
          </div>
        ))}
      </div>
      <div className='pagination'>
        <span onClick={prevHandler}>
          <img src="https://img.icons8.com/external-zen-filled-royyan-wijaya/24/FFFFFF/external-so-chevrons-left-arrow-zen-filled-royyan-wijaya.png" height={20}/>
        </span>
          {pages.map(page => 
            <span key={page} 
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? 'active' : ''}`}
            >
              {`${page} `}
          </span>)}
        <span onClick={nextHandler}>
        <img src="https://img.icons8.com/external-zen-filled-royyan-wijaya/24/FFFFFF/external-so-chevrons-right-arrow-zen-filled-royyan-wijaya.png" height={20}/>
        </span>
      </div>
      
    </div>
  )
}

export default FetchEvents

