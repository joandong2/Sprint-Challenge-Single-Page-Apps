import React from "react";

export default function SearchForm(props) {
    return (
        <section className="search-form">
            Character Search:{" "}
            <input
                type="text"
                name="search"
                onChange={props.handler}
                className="char-search"
            />
        </section>
    );
}
