import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/eventPage.css'


function EventPage() {

  const { uid } = useParams();
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function getEventData() {
      await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=" + uid + "&rows=10")
        .then((response) => {
          setEvents(response.data.records)
          console.log(response.data.records)
        })
    }
    getEventData()
  }, [uid])


  return (
    <div className='event_container'>
      <div className='events-grid'>
        {events.map((data) => (
          <div key={data.recordid} className='event_card'>
            <img src={data.fields.image} alt="" />
            <div className='event_card_contents'>
              <h3>{data.fields.title_fr}</h3>
              <p>{data.fields.description_fr}</p>
              <p>{data.fields.conditions_fr}</p>
              <div className='event_card_content_footer'>
                <h4>{data.fields.daterange_fr}</h4>
                <h4>{data.fields.age_max}</h4>
                <div className='event_infos'>
                  <div>
                    <h4>Addresse: {data.fields.location_address}, {data.fields.location_postalcode}</h4>
                    <h4>Region: {data.fields.location_department}</h4>
                    <h4>Pays : {data.fields.country_fr}</h4>
                  </div>
                </div>
                <Link to={`/sortie/${data.fields.uid}`}>
                  <button>Organiser une sortie</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventPage