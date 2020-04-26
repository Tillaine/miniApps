import React from 'react'
import Event from './Event.jsx'


const EventsList = (props) => {

    console.log('events from list', props.events)
    return (
        <div>
            <ul>
                {
                    props.events.map((event, i) =>  {
                        return(
                        <li>
                            <Event event={event} key={i}/>
                        </li>)
                    })
                }
            </ul>
            
        </div>
    )
}
    
 






export default EventsList

