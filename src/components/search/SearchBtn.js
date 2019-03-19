import React from "react";

const SearchBtn = ({ handleClick }) => {
	return (
		<div className="open-search">
			<button onClick={() => handleClick()}>Add a book</button>
		</div>
	);
};

export default SearchBtn;
