import React, { useState } from "react";
import "./nav.css";
import seacrh from "../../images/search.png";

export const Navbar = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [guests, setGuests] = useState(0);

    const handleSearch = () => {
        onSearch({ city, guests });
    };

    return (
        <>
            <div className="search">
                <div className="div_city">
                    <select className="city" value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value=""> -locations-</option>
                        <option value="Helsinki">Helsinki</option>
                        <option value="Turku">Turku</option>
                        <option value="Vaasa">Vaasa</option>
                        <option value="Oulu">Oulu</option>
                    </select>
                </div>

                <div className="div_guests">
                    <input className="guests" type="number" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} placeholder="Add guests" max="10" min="0"></input>
                </div>

                <div className="div_btn_search">
                    <button className="btn_search" onClick={handleSearch}>
                        <img className="icon_search" src={seacrh} alt="Search" />
                    </button>
                </div>
            </div>
        </>
    )
}
