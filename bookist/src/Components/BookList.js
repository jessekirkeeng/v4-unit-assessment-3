import React, {Component} from 'react'

class BookList extends Component{
    render(){
        let mappedBooks = this.props.books.map((element, index) => {
        return <data key={index} element={this.books}/>
        })
        return <div>
            <button onClick={this.addToShelf}>Add to shelf</button>
            {this.list}</div>
}
}

export default BookList;