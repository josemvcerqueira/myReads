import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";

class BookShelf extends Component {
	state = { value: "" };

	componentDidMount() {
		if (this.props.updateShelf) {
			this.getBookShelf();
		} else {
			this.handleSearchShelfValue();
		}
	}

	handleSelectChange = event => {
		BooksAPI.update(this.props.book, event.target.value);
		if (this.props.updateShelf) {
			this.props.updateShelf(this.props.book, event.target.value);
			this.getBookShelf();
		} else if (!this.props.updateShelf) {
			this.handleSearchShelfValue();
		}
	};

	handleSearchShelfValue = () => {
		BooksAPI.get(this.props.book.id).then(book =>
			this.setState(prevState => ({
				value: book.shelf
			}))
		);
	};

	getBookShelf = () => {
		this.setState({
			value: this.props.book.shelf
		});
	};

	render() {
		const { book } = this.props;
		const { state, handleSelectChange } = this;
		let cover;
		if (book.imageLinks) {
			cover = book.imageLinks.thumbnail;
		}
		return (
			<div>
				<li>
					<div className="book">
						<div className="book-top">
							<div
								className="book-cover"
								style={{
									width: 128,
									height: 193,
									backgroundImage: `url(${cover})`
								}}
							/>
							<div className="book-shelf-changer">
								<select
									value={state.value}
									onChange={handleSelectChange}
								>
									<option value="move" disabled>
										Move to...
									</option>
									<option
										label="Currently Reading"
										value="currentlyReading"
									>
										Currently Reading
									</option>
									<option
										label="Want to Read"
										value="wantToRead"
									>
										Want to Read
									</option>
									<option label="Read" value="read">
										Read
									</option>
									<option label="none" value="none">
										None
									</option>
								</select>
							</div>
						</div>
						{book.title && (
							<div className="book-title">{book.title}</div>
						)}
						{book.authors && (
							<div className="book-authors">
								{book.authors.reduce(
									(acc, curr) => curr.concat(" ", acc),
									""
								)}
							</div>
						)}
					</div>
				</li>
			</div>
		);
	}
}

BookShelf.propTypes = {
	book: PropTypes.object.isRequired,
	updateShelf: PropTypes.func
};

export default BookShelf;
