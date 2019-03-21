import React from "react";
import BookShelf from "../BookShelf";

const SearchResults = ({ state, updateShelf }) => {
	let view;
	if (!state.query) {
		view = null;
	} else if (state.booksArr && !state.booksArr.error) {
		view = (
			<div className="bookshelf">
				<div className="bookshelf-books">
					<h2 className="bookshelf-title">Search Results</h2>
					<ol className="books-grid">
						{state.booksArr.map(book => (
							<BookShelf
								updateShelf={updateShelf}
								key={book.id}
								book={book}
							/>
						))}
					</ol>
				</div>
			</div>
		);
	} else if (state.booksArr) {
		view = (
			<p>
				Your search -
				<span style={{ color: "red" }}> {state.query} </span> - did not
				match any books.
			</p>
		);
	}
	return <div className="search-books-results">{view}</div>;
};

export default SearchResults;
