import React, { Component } from "react";
import SearchResults from "./SearchResults";
import * as BooksAPI from "../../utils/BooksAPI";

class Search extends Component {
	state = { query: "", booksArr: false };

	handleInputChange = value => {
		const userInput = value.trim();
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
		const { handleClick } = this.props;
		const { state, handleInputChange } = this;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button
						className="close-search"
						onClick={() => handleClick()}
					>
						Close
					</button>
					<div className="search-books-input-wrapper">
						{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
