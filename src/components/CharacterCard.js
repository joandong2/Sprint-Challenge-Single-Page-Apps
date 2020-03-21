import React from "react";
import { Col } from "reactstrap";

export default function CharacterCard(props) {
    console.log(props);
    return (
        <Col md="3" className="char-card">
            <img src={props.char.image} alt={props.char.name} />
            <h4>{props.char.name}</h4>
            <p>
                {props.char.gender}, {props.char.species}
            </p>
        </Col>
    );
}
