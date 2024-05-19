import React from "react";
import { useEffect, useState } from 'react'
import "./card.css";
import star from "./../images/star.png"

export const Results = () => {


    const [data, setData] = useState([])

    async function getData() {
        const rs = await fetch('./stays.json')
        const rsJson = await rs.json()

        const filteredData = rsJson.map(user => {

            return {
                id: user.id,
                img: user.photo,
                type_beds: user.type + " . " + user.beds + "beds",
                rating: user.rating,
                title: user.title
            }

        })

        setData(filteredData)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>

            <div className="container">
                <div className="grid">
                {data &&
                    data.map(user =>
                        <div>
                        <div className="card" key={user.id}>
                            <img src={user.img} alt="Stylish apartment in center of the city" />
                            <div className="info">
                                <span className="super-host">SUPER HOST</span>
                                <span className="type">{user.type_beds}</span>
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