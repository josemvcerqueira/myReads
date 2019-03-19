import React from "react";

const BookShelf = ({
	bookOneTitle,
	bookOneAuthor,
	bookOneUrl,
	bookTwoTitle,
	bookTwoAuthor,
	bookTwoUrl,
	children
}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{children}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					<li>
						<div className="book">
							<div className="book-top">
								<div
									className="book-cover"
									style={{
										width: 128,
										height: 193,
										backgroundImage: `url(${bookOneUrl})`
									}}
								/>
								<div className="book-shelf-changer">
									<select>
										<option value="move" disabled>
											Move to...
										</option>
										<option value="currentlyReading">
											Currently Reading
										</option>
										<option value="wantToRead">
											Want to Read
										</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className="book-title">{bookOneTitle}</div>
							<div className="book-authors">{bookOneAuthor}</div>
						</div>
					</li>
					<li>
						<div className="book">
							<div className="book-top">
								<div
									className="book-cover"
									style={{
										width: 128,
										height: 188,
										backgroundImage: `url(${bookTwoUrl})`
									}}
								/>
								<div className="book-shelf-changer">
									<select>
										<option value="move" disabled>
											Move to...
										</option>
										<option value="currentlyReading">
											Currently Reading
										</option>
										<option value="wantToRead">
											Want to Read
										</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className="book-title">{bookTwoTitle}</div>
							<div className="book-authors">{bookTwoAuthor}</div>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default BookShelf;
