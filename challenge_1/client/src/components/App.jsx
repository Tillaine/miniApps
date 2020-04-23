import React from 'react'
import events from './tempData.js'
import EventsList from './EventsList.jsx'
import Search from './Search.jsx'



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            events: events.events,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loadEvents = this.loadEvents.bind(this)
    }

    handleSubmit(term) {
        console.log('term', term)
        let url = `http://localhost:3000/events?q=${term.term}`
        fetch(url)
        .then(events => events.json())
        .then(events => {
            this.setState({events:events, pageCount:(events.length/5)})})
    }

    loadEvents() {
        let url = `http://localhost:3000/events?q=Brittany`
        fetch(url)
        .then(events => events.json())
        .then(events => this.setState(
            {events}))
        
    }

    componentDidMount() {
        this.loadEvents()
    }
    render() {
        return (
        <div>
            <h1>Hello History</h1>
            <Search submit={this.handleSubmit}/>
            <EventsList events={this.state.events}/> 
        </div>

        )
    }

}


export default App;