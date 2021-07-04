import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            input:''
        }
    }

    handleChange(){
        this.props.add(this.state.input);
        this.setState({ input: "" });
    }

    handleSearch(){
        this.props.add(this.state.input);
        this.setState({ input: "" });
        }

    render(){
        return
                <input
                    onClick={this.handleSearch}/>
                    <button>Clear Search</button>
                
    }
}