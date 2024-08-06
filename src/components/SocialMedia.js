import React from "react";
import "../assets/styles/socialmedia.css";

const SocialMedia = ({link, src}) => {
    return (
        <a className="social-media" href={link} target="_blank" rel="noreferrer"><img  alt="media" src={src}/></a>
    )
}

export default SocialMedia;