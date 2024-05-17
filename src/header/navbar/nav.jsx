import React from "react";
import "./nav.css";
import seacrh from "../../images/search.png";

export const Navbar = () => {

    return (
        <>
                <div className="search">
                    <div className="div_city">
                        <input className="city" placeholder="Helsinki, Finland" />
                    </div>

                    <div className="div_guests">
                        <input className="guests" placeholder="Add guests" />
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