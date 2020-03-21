import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "reactstrap";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [charSet, setCharSet] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
            )
            .then((res) => {
                // handle success
                setCharSet(res.data.results);
            });
    }, []);

    // console.log(
    //     charSet.map((char) => {
    //         return char.name;
    //     })
    // );

    return (
        <section className="character-list">
            <Row>
                {charSet.map((char, i) => {
                    return <CharacterCard char={char} key={i} />;
                })}
            </Row>
        </section>
    );
}
