import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "reactstrap";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [charSet, setCharSet] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${searchKey}`
            )
            .then((res) => {
                // handle success
                //console.log(res);
                setCharSet(res.data.results);
            });
    }, [searchKey]);

    // console.log(
    //     charSet.map((char) => {
    //         return char.name;
    //     })
    // );

    //console.log(charSet);

    const changeHandler = (e) => {
        //console.log(e.target.value);
        setSearchKey(e.target.value);
    };

    return (
        <section className="character-list">
            <SearchForm handler={changeHandler} />
            <Row>
                {charSet.map((char, i) => {
                    return <CharacterCard char={char} key={i} />;
                })}
            </Row>
        </section>
    );
}
