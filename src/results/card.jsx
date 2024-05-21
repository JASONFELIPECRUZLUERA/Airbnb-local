import React from "react";
import { useEffect, useState } from 'react'
import "./card.css";
import star from "./../images/star.png"

export const Results = ({ data }) => {



    return (
        <>

            <div className="container">
                <div className="grid">
                    {data.map(user =>
                            <div>
                                <div className="card" key={user.id}>
                                    <img src={user.photo} alt="Stylish apartment in center of the city" />
                                    <div className="info">
                                        {user.superHost && <span className="super-host">SUPERHOST</span>}
                                        <span className="type">{user.type} . {user.beds} beds</span>
                                        <div className="container_rating">
                                            <img src={star} alt="icon-star" />
                                            <span className="rating">{user.rating}</span>
                                        </div>
                                    </div>
                                    <span className="description">{user.title}</span>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>

        </>
    )
}