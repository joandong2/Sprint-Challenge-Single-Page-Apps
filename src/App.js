import React from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header.js";
import Welcome from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
    return (
        <main data-testid="app">
            <Container>
                <Route path="/" component={Header} />
                <Route exact path="/" component={Welcome} />
                <Route exact path="/characters" component={CharacterList} />
            </Container>
        </main>
    );
}
