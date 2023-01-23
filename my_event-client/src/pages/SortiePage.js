import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/sortiePage.css'


function SortiePage() {

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
      <div className='sortie-grid'>
        {events.map((data) => (
          <div key={data.recordid} className='sortie_card'>
            <div className='left_side'>
              <h4 className='addresse'>{data.fields.location_address}, {data.fields.location_postalcode}</h4>
              <iframe title='map' id="gmap_canvas" src={`https://maps.google.com/maps?q=${data.fields.location_address}&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>

              <h4 className='participants'>Participants</h4>
              <div className='espace_participants'>
                <h1>Espace participans</h1>
              </div>
            </div>
            <div className='sortie_card_contents'>
              <h3>{data.fields.title_fr}</h3>
              <p>{data.fields.description_fr}</p>
              <div className='sortie_chat'>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SortiePage