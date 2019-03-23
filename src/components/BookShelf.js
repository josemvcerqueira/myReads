import React, { Component } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";

class BookShelf extends Component {
	state = { value: "" };

	_isMounted = false;

	handleSelectChange = event => {
		if (this._isMounted) {
			BooksAPI.update(this.props.book, event.target.value);
			this.getBookShelf();
			if (this.props.updateListBooks) {
				this.props.updateListBooks();
			}
		}
	};

	componentDidMount() {
		this._isMounted = true;
		this.getBookShelf();
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	getBookShelf = () => {
		BooksAPI.get(this.props.book.id).then(book =>
			this.setState(prevState => ({
				value: book.shelf
			}))
		);
	};

	render() {
		const { book } = this.props;
		if (book.authors !== undefined) {
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
										backgroundImage: `url(${
											book.imageLinks.thumbnail
										})`
									}}
								/>
								<div className="book-shelf-changer">
									<select
										value={this.state.value}
										onChange={this.handleSelectChange}
									>
										<option value="move" disabled>
											Move to...
										</option>
										<option
											label="currentlyReading"
											value="currentlyReading"
										>
											Currently Reading
										</option>
										<option
											label="wantToRead"
											value="wantToRead"
										>
											Want to Read
										</option>
										<option label="read" value="read">
											Read
										</option>
										<option label="none" value="none">
											None
										</option>
									</select>
								</div>
							</div>
							<div className="book-title">{book.title}</div>
							<div className="book-authors">
								{book.authors.reduce(
									(acc, curr) => curr.concat(" ", acc),
									""
								)}
							</div>
						</div>
					</li>
				</div>
			);
		}
		return <div />;
	}
}

BookShelf.propTypes = {
	book: PropTypes.object.isRequired,
	updateListBooks: PropTypes.func
};

export default BookShelf;
