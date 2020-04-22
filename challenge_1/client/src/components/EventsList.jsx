import React from 'react'
import Event from './Event.jsx'
let id = 0

const EventsList = (props) => {
    console.log('events from list', props.events)
    return (
        <div>
            <ul>
                {
                    props.events.map(event =>  {
                        id ++
                        return(
                        <li>
                            <Event event={event} key={id}/>
                        </li>)
                    })
                }
            </ul>
            
        </div>
    )
}


export default EventsList

