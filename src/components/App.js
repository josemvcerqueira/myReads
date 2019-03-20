import React, { Component } from "react";
import "./App.css";
import Search from "./search/Search";
import ListBooks from "./listbooks/ListBooks";
import SearchBtn from "./search/SearchBtn";

const book = {
  imageLinks: {
    thumbnail:
      "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
  },
  title: "To Kill a Mockingbird",
  authors: ["Harper Lee"],
  industryIdentifiers: [{ identifier: "00007" }]
};

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
      currentlyReading: [book, book, book],
      wantToRead: [book],
      read: [book]
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

  render() {
    const { handleSearchBtnClick, handleSearchCloseBtn, state } = this;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search handleClick={handleSearchCloseBtn} />
        ) : (
          <div>
            <Title title="My Reads" />
            <ListBooks state={state.home} />
            <SearchBtn handleClick={handleSearchBtnClick} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
