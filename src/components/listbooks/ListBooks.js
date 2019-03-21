import React, { Component } from "react";
import BookShelf from "../BookShelf";
import * as BooksAPI from "../../utils/BooksAPI";

class ListBooks extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	};

	componentDidMount() {
		BooksAPI.getAll()
			.then(booksArr =>
				booksArr.reduce((acc, book) => {
					const {
						currentlyReading = [],
						wantToRead = [],
						read = []
					} = acc;
					let arr = [book];
					if (book.shelf === "currentlyReading") {
						return {
							...acc,
							currentlyReading: currentlyReading.concat(arr)
						};
					} else if (book.shelf === "wantToRead") {
						return { ...acc, wantToRead: wantToRead.concat(arr) };
					} else if (book.shelf === "read") {
						return { ...acc, read: read.concat(arr) };
					}
				}, {})
			)
			.then(newState => {
				this.setState(prevState => ({
					...newState
				}));
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<ol className="books-grid">
							{this.state.currentlyReading.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
						<h2 className="bookshelf-title">Want to Read</h2>
						<ol className="books-grid">
							{this.state.wantToRead.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
						<h2 className="bookshelf-title">Read</h2>
						<ol className="books-grid">
							{" "}
							{this.state.read.map(book => (
								<BookShelf key={book.id} book={book} />
							))}{" "}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default ListBooks;
