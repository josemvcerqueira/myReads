# MyReads Project

This is a web application that allows the user to search for books and organize them on three different categories:

-   Currently Reading
-   Want to Read
-   Read

## TL;DR

To run the project right away:

-   clone the repo with `git clone https://github.com/josemvcerqueira/myReads.git`
-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## What You're Getting

```bash
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
├── src
│   ├── components
    │   ├── listOfBooks
        │   └── ListOfBooks.js # Stateful component that displays the home page.
    │   ├── search
        │   ├── Search.js # Stateful component that fetches all books based on a query.
        │   └── SearchResults.js # Stateless component that displays the UI of the search page
    │   ├── App.css # Styles for the app.
    │   ├── App.js # This is the root of the app. Routing is controlled by this component.
    │   ├── App.test.js # Used for testing. Provided with Create React App.
    │   ├── BookShelf.js # A stateful component that displays the card of the book
    │   └── HomeSearchBtn.js # A stateless Component that displays search button
├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
├── utils
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
│   ├── index.css # Global styles.
│   └── index.js # This file is used for DOM rendering only.
├── .eslintrc.json # Configuration for the format used in this app.
├── .gitignore # Simple file to prevent unnedded files to be stored on GitHub.
├── README.md - This file.
├── package-lock.json # npm package manager file.
├── package.json # npm package manager file.
└── yarn.lock # yarn package manager file.

```

## Backend Server

The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

-   query: `<String>`
-   Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. Don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Purpose

This repository is the final project for the React Fundamentals section of the Udacity Nanodegree program for React.
