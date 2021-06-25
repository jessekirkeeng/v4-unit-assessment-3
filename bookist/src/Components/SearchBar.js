import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            input:''
        }
    }

    handleChange(){

    }

    handleSearch() {
        this.props.add(this.state.input);
        this.setState({ input: "" });
        }

    render(){
        return <div>
                <input
                    <button onClick={this.handleSearch}>Search</button>
                    <button>Clear Search</button>
                </div>
    }
}