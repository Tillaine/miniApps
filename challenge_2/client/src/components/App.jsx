import React from 'react'
import Chart from './Chart.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    }

    render() {
        return (
        <div className='appContainer'>
            <h1>Hello BitCoin</h1>
            <Chart data={this.state.data}/>
        </div>
        )

    }
}

export default App