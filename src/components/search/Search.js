import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import SearchResults from "./SearchResults";
import * as BooksAPI from "../../utils/BooksAPI";

class Search extends Component {
	constructor() {
		super();
		this.inputChangeDebounced = debounce(this.inputChange, 50);
	}

	state = { query: "", booksArr: false };

	handleInputChange = value => {
		this.inputChangeDebounced(value);
	};

	componentWillUnmount() {
		this.inputChangeDebounced.cancel();
	}

	inputChange = value => {
		this.setState({ query: value });

		BooksAPI.search(value)
			.then(booksArr => {
				this.setState({ booksArr });
			})
			.catch(error => {
				this.setState({ booksArr: false });
			});
	};

	render() {
		const { state, handleInputChange } = this;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							value={state.query}
							onChange={event =>
								handleInputChange(event.target.value)
							}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<SearchResults state={state} />
			</div>
		);
	}
}

export default Search;
