import React from 'react'
import events from './tempData.js'
import EventsList from './EventsList.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: events.events
        }

    }

    render() {
        return (
        <div>
            <h1>Hello History</h1>
            <EventsList events={this.state.events}/>        
        </div>

        )
    }

}


export default App;