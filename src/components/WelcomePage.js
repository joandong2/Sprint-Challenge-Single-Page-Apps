import React from "react";
import homeIMG from "../images/bg1.jpg";

export default function WelcomePage() {
    return (
        <section className="welcome-page">
            <header className="ui centered">
                <h1>Welcome to the ultimate fan site!</h1>
            </header>
            <img className="main-img" src={homeIMG} alt="rick" />
        </section>
    );
}
