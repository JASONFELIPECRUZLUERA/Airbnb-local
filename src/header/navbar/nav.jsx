import React from "react";
import "./nav.css";
import seacrh from "../../images/search.png";

export const Navbar = () => {

    return (
        <>
            <div className="search">
                <div className="div_city">
                    <select className="city" type="text" placeholder="city">

                        <option value=""> -locations-</option>
                        <option value="Helsinki">Helsinki</option>
                        <option value="Turku">Turku</option>
                        <option value="Vaasa">Vaasa</option>
                        <option value="Oulu">Oulu</option>
                    </select>
                </div>

                <div className="div_guests">
                    <input className="guests" type="number" placeholder="Add guests" max="10" min="0"></input>
                </div>

                <div className="div_btn_search">
                    <button className="btn_search">
                        <img className="icon_search" src={seacrh} />
                    </button>
                </div>
            </div>

        </>
    )
}