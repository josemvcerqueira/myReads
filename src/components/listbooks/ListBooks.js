import React, { Component } from "react";
import BookShelf from "../BookShelf";
import * as BooksAPI from "../../utils/BooksAPI";

class ListBooks extends Component {
	render() {
		const { state, updateCR } = this.props;
		console.log(state);
		return (
			<div className="list-books">
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<ol className="books-grid">
							{state.currentlyReading.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
						<h2 className="bookshelf-title">Want to Read</h2>
						<ol className="books-grid">
							{state.wantToRead.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
						<h2 className="bookshelf-title">Read</h2>
						<ol className="books-grid">
							{state.read.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default ListBooks;
