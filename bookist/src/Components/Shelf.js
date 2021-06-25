import React, {Component} from 'react'

class Shelf extends Component{
    render(){
        let mappedTitles = this.props.shelf.map((element) => {
            return <App element={this.shelf}/>
        })
        return (
            <div>
                <h1>{this.shelf}</h1>
                <button onClick={this.clearShelf}>Clear Shelf</button>
            </div>
        )
    }
}
export default Shelf;