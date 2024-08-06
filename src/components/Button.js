import React from "react";

const Button = ({text, primary = true}) => {
    return (
    <button className={primary ? "button--primary" : "button--secundary"}>{text}</button>
    )
}

export default Button;