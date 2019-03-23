import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ListOfBooks from "./listOfBooks/ListOfBooks";
import Search from "./search/Search";
import HomeSearchBtn from "./HomeSearchBtn";

const Title = ({ title }) => {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
};

const BooksApp = () => {
  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Title title="My Reads" />
            <ListOfBooks />
            <HomeSearchBtn />
          </div>
        )}
      />
      <Route path="/search" component={Search} />
    </div>
  );
};

export default BooksApp;
