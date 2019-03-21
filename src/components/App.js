import React, { Component } from "react";
import "./App.css";
import Search from "./search/Search";
import ListBooks from "./listbooks/ListBooks";
import SearchBtn from "./search/SearchBtn";

const Title = ({ title }) => {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
};

class BooksApp extends Component {
  state = {
    home: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: []
    },
    showSearchPage: false
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  handleSearchCloseBtn = () => {
    this.setState({ showSearchPage: false });
  };

  handleSearchBtnClick = () => {
    this.setState({ showSearchPage: true });
  };

  addBook = (shelf, book) => {
    const arr = [];
    arr.push(book);
    this.setState(prevState => ({
      ...prevState,
      home: {
        ...prevState.home,
        [shelf]: prevState.home[shelf].concat(arr)
      }
    }));
  };

  render() {
    const { handleSearchBtnClick, handleSearchCloseBtn, state, addBook } = this;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search updateCR={addBook} handleClick={handleSearchCloseBtn} />
        ) : (
          <div>
            <Title title="My Reads" />
            <ListBooks updateCR={addBook} state={state.home} />
            <SearchBtn handleClick={handleSearchBtnClick} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
