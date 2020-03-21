import React from "react";
import { Row, Col } from "reactstrap";

export default function CharacterCard(props) {
    console.log(props);
    return (
        <Col md="3">
            <img src={props.char.image} alt={props.char.name} height="40" />
            <h2>{props.char.name}</h2>
        </Col>
    );
}
