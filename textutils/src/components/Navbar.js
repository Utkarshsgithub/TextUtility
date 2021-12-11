import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    const [myStyle, setMyStyle] = useState({
        change: "False",
        "--primary-color": "#fff",
        "--secondary-color": "#141850",
        "--tirtiary-color": "rgb(243, 243, 243)",
    });

    function handleDarkMode() {
        if (myStyle.change === "False") {
            setMyStyle({
                "--primary-color": "#111",
                "--secondary-color": "#fff",
                "--tirtiary-color": "rgb(43, 43, 43)",
                change: "True",
            });
        } else {
            setMyStyle({
                "--primary-color": "#fff",
                "--secondary-color": "#141850",
                "--tirtiary-color": "rgb(243, 243, 243)",
                change: "False",
            });
        }
    }

    return ( <
        nav id = "navbar"
        style = { myStyle } >
        <
        h1 > { props.title } < /h1>{" "} <
        ul >
        <
        li >
        <
        a href = "/" > Home < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "/" > About < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "/" > Contact < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "/" > IDK < /a>{" "} <
        /li>{" "} <
        /ul>{" "} <
        div style = { myStyle }
        onClick = {
            () => {
                handleDarkMode();
                props.toggleMode();
            }
        }
        id = "darkmode" >
        <
        i className = "fas fa-moon" > < /i>{" "} <
        /div>{" "} <
        /nav>
    );
}

Navbar.defaultProps = {
    title: "Set title",
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};