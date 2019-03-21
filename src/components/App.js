import React, { Component } from "react";
import "./App.css";
import Search from "./search/Search";
import ListBooks from "./listbooks/ListBooks";
import SearchBtn from "./search/SearchBtn";
import * as BooksAPI from "../utils/BooksAPI";

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
      read: []
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

  addBooktoState = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.setState(prevState => ({
        ...prevState,
        home: response
      }));
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then(response => {
      console.log(response);
    });
  }

  render() {
    const {
      handleSearchBtnClick,
      handleSearchCloseBtn,
      state,
      addBooktoState
    } = this;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            updateShelf={addBooktoState}
            handleClick={handleSearchCloseBtn}
          />
        ) : (
          <div>
            <Title title="My Reads" />
            <ListBooks updateShelf={addBooktoState} state={state.home} />
            <SearchBtn handleClick={handleSearchBtnClick} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
