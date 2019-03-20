import React, { Component } from "react";
import BookShelf from "../BookShelf";

class ListBooks extends Component {
	render() {
		const { state } = this.props;
		return (
			<div className="list-books">
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<ol className="books-grid">
							{state.currentlyReading.map(book => (
								<BookShelf
									key={book.industryIdentifiers[0].identifier}
									book={book}
								/>
							))}
						</ol>
						<h2 className="bookshelf-title">Want to Read</h2>
						<ol className="books-grid">
							{state.currentlyReading.map(book => (
								<BookShelf
									key={book.industryIdentifiers[0].identifier}
									book={book}
								/>
							))}
						</ol>
						<h2 className="bookshelf-title">Read</h2>
						<ol className="books-grid">
							{state.currentlyReading.map(book => (
								<BookShelf
									key={book.industryIdentifiers[0].identifier}
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

export default ListBooks;
