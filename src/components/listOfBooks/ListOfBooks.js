import React, { Component } from "react";
import BookShelf from "../BookShelf";
import * as BooksAPI from "../../utils/BooksAPI";

class ListOfBooks extends Component {
	state = {
		books: []
	};

	_isMounted = false;

	componentDidMount() {
		this._isMounted = true;
		this.renderBooks();
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	updateShelf = (book, shelf) => {
		let _state = this.state.books;
		_state = _state.map(item => {
			if (item === book) {
				item.shelf = shelf;
			}
			return item;
		});

		this.setState({
			books: _state
		});
	};

	renderBooks = () => {
		if (this._isMounted) {
			BooksAPI.getAll()
				.then(booksArr =>
					this.setState({
						books: booksArr
					})
				)
				.catch(error => {
					this.setState({
						books: []
					});
				});
		}
	};

	render() {
		const { state, updateShelf } = this;

		return (
			<div className="list-books">
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<ol className="books-grid">
							{state.books
								.filter(
									book => book.shelf === "currentlyReading"
								)
								.map(book => (
									<BookShelf
										updateShelf={updateShelf}
										key={book.id}
										book={book}
									/>
								))}
						</ol>
						<h2 className="bookshelf-title">Want to Read</h2>
						<ol className="books-grid">
							{state.books
								.filter(book => book.shelf === "wantToRead")
								.map(book => (
									<BookShelf
										updateShelf={updateShelf}
										key={book.id}
										book={book}
									/>
								))}
						</ol>
						<h2 className="bookshelf-title">Read</h2>
						<ol className="books-grid">
							{state.books
								.filter(book => book.shelf === "read")
								.map(book => (
									<BookShelf
										updateShelf={updateShelf}
										key={book.id}
										book={book}
									/>
								))}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default ListOfBooks;
