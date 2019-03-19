import React from "react";

const SearchResults = ({ books }) => {
	let view;
	if (books && !books.error) {
		view = books.map(book => (
			<ol
				key={book.industryIdentifiers[0].identifier}
				className="books-grid"
			>
				{book.title}
			</ol>
		));
	} else if (books) {
		view = <p>Not found</p>;
	}
	return <div className="search-books-results">{view}</div>;
};

export default SearchResults;
