import React, { Component } from "react";
import BookShelf from "../BookShelf";
import * as BooksAPI from "../../utils/BooksAPI";

class ListBooks extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	};

	componentDidMount() {
		this.handleIds();
	}

	handleIds = () => {
		const stateKeys = Object.keys(this.state);
		stateKeys.map(key =>
			this.props.state[key].map(id =>
				BooksAPI.get(id).then(book => {
					const arr = [];
					arr.push(book);
					this.setState(prevState => ({
						...prevState,
						[key]: prevState[key].concat(arr)
					}));
				})
			)
		);
		console.log("how many times is this running");
	};
	render() {
		return (
			<div className="list-books">
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<ol className="books-grid">
							{this.state.currentlyReading.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
						<h2 className="bookshelf-title">Want to Read</h2>
						<ol className="books-grid">
							{this.state.wantToRead.map(book => (
								<BookShelf key={book.id} book={book} />
							))}
						</ol>
						<h2 className="bookshelf-title">Read</h2>
						<ol className="books-grid">
							{" "}
							{this.state.read.map(book => (
								<BookShelf key={book.id} book={book} />
							))}{" "}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default ListBooks;
