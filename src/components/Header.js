import React from "react";
import { Row } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <Row>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/characters">Characters</NavLink>
            </nav>
            {/* <header className="ui centered">
                <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
            </header> */}
        </Row>
    );
}
