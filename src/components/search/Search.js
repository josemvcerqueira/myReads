import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";
import * as BooksAPI from "../../utils/BooksAPI";

class Search extends Component {
	state = { query: "", booksArr: false };

	handleInputChange = value => {
		const userInput = value;
		this.setState(prevState => ({
			query: userInput
		}));

		BooksAPI.search(userInput)
			.then(booksArr => {
				this.setState(prevState => ({
					booksArr: booksArr
				}));
			})
			.catch(error => {
				console.log(error);
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
				<SearchResults state={this.state} />
			</div>
		);
	}
}

export default Search;
