import React from "react";
import "./card.css";
import departamento from "./../images/departamento.jpg"
import star from "./../images/star.png"

export const Results = () => {

    return (
        <>
        
        <div className="container">
            <div className="grid">
                <div className="card">
                    <img src={departamento} alt="Stylish apartment in center of the city"/>
                    <div className="info">
                        <span className="super-host">SUPER HOST</span>
                        <span className="type">Entire apartment . 2 beds</span>
                        <div className="container_rating">
                            <img src={star} alt="icon-star"/>
                            <span className="rating">4.25</span>
                        </div>
                    </div>
                    <span className="description">Stylish apartment in center of the city</span>
                </div>
                <div className="card">
                    <img src={departamento} alt="Cozy, peaceful and private room with..."/>
                    <div className="info">
                        <span className="type">Private room</span>
                        <div className="container_rating">
                            <img src={star}alt="icon-star"/>
                            <span className="rating">4.25</span>
                        </div>

                    </div>
                    <span className="description">Cozy, peaceful and private room with...</span>
                </div>
                <div className="card">
                    <img src={departamento} alt="Modern House in a remote area"/>
                    <div className="info">
                        <span className="type">Entire house</span>
                        <div className="container_rating">
                            <img src={star} alt="icon-star"/>
                            <span className="rating">4.25</span>
                        </div>
                    </div>
                    <span className="description">Modern House in a remote area</span>
                </div>
                <div className="card">
                    <img src={departamento} alt="Stylish room in design district"/>
                    <div className="info">
                        <div className="super-host">SUPER HOST</div>
                        <span className="type">Entire apartment . 2 beds</span>
                        <div className="container_rating">
                            <img src={star} alt="icon-star"/>
                            <span className="rating">4.25</span>
                        </div>
                    </div>
                    <span className="description">Stylish room in design district</span>
                </div>
                <div className="card">
                    <img src={departamento} alt="Modern apartment close to nature"/>
                    <div className="info">
                        <span className="type">Private room</span>
                        <div className="container_rating">
                            <img src={star} alt="icon-star"/>
                            <span className="rating">4.25</span>
                        </div>
                    </div>
                    <span className="description">Modern apartment close to nature</span>
                </div>
                <div className="card">
                    <img src={departamento} alt="House in a remote area"/>
                    <div className="info">
                        <span className="type">Entire house</span>
                        <div className="container_rating">
                            <img src={star} alt="icon-star"/>
                            <span className="rating">4.25</span>
                        </div>
                    </div>
                    <span className="description">House in a remote area</span>
                </div>
            </div>
        </div>
        </>
    )
}