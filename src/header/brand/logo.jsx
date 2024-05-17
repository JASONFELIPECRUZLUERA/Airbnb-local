import React from "react";
import "./logo.css";
import polygon from "../../images/polygon.png";

export const Brand = () => {

    return (
        <>
            <div className="brand">
                <img className="icon_polygon" src={polygon} alt="icono poligono" />
                <span className="text_brand">Windbnb</span>
            </div>
        </>
    )
}


