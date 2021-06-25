import React, {Component} from 'react';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './Components/data'
import SearchBar from './Components/SearchBar'


class App extends Component {
  constructor(){
    super()

    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    }

    filterBooks(input){
      let filteredBooks = this.state.books.filter(if(
        books.author && title.includes(input){
          return input
        }
      ))
        this.setState({books: filteredBooks})
    }

    clearShelf(){
      this.setState = []
    }

    addToShelf(bookTitle){
      bookTitle.push(this.setState(this.shelf))
    }

    render(){
      return (
        <div className='App'>
          <Header/>
          <SearchBar filterBooks={this.filterBooks}/>
          <Booklist books={this.state.data}/>
          <Shelf shelf={this.state.shelf}/>
          <Shelf clearShelf={this.clearShelf}/>
        </div>
      )
  }
};

export default App;
