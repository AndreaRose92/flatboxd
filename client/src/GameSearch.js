import React from "react";

function GameSearch({ searchString, onSearchChange }) {
    return (
        <div>
            <input
                type = "text"
                placeholder = "Search for games..."
                value = {searchString}
                onChange = {(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default GameSearch