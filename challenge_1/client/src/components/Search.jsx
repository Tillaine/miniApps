import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }

    }

    render() {
        return (
        <div>
            <form on onSubmit={this.props.search}>
                <div className='formContainer'>
                    <input className='searchInput' value={this.state.term} id='term' placeholder='keyword'></input>
                    <button className='searchBtn'>🔎</button>
                </div>
            </form>       
        </div>

        )
    }

}


export default Search;