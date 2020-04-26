import React from 'react'
import Chart from './Chart.jsx'
import {data} from './tempData'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: Object.keys(data),
            values: Object.values(data)
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/history/')
        .then(data => data.json())
        .then(data => this.setState({
            dates: Object.keys(data),
            values: Object.values(data)
        }))
        .catch(err => console.log(err))
    }

    render() {
        console.log('data', this.state.data)
        return (
        <div className='appContainer'>
            <h1>BitTracker</h1>
            <Chart 
                dates={this.state.dates}
                values={this.state.values}/>
        </div>
        )

    }
}

export default App