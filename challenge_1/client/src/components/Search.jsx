import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.clearForm= this.clearForm.bind(this)

    }

    handleChange(e) {
        if(e){

            this.setState({
                term: e.target.value
            })
            console.log(this.state)
            e.preventDefault();
        }
    }
    handleSubmit(e) {
        this.clearForm()
        this.props.submit(this.state)
        e.preventDefault();
    }

    clearForm() {
        this.setState({term: ''})
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className='formContainer'>
                    <input onChange={this.handleChange} value={this.state.term || ''} className='searchInput' id='term' placeholder='keyword'></input>
                    <button className='searchBtn'>🔎</button>
                </div>
            </form>       
        </div>

        )
    }

}


export default Search;