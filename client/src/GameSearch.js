import React from "react";
import { SearchInput } from "./Styles/Search.Styles";

function GameSearch({ searchString, onSearchChange }) {
    return (
        <div>
            <SearchInput
                type = "text"
                placeholder = "Search for games..."
                value = {searchString}
                onChange = {(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default GameSearch