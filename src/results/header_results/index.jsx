import React from "react";
import { useEffect, useState } from 'react'
import "./styles.css";


export const HeaderResults = () => {

    const [data, setData] = useState([])
    const [country, setCountry] = useState('');

    async function getData() {
        const rs = await fetch('./stays.json')
        const rsJson = await rs.json()

        setData(rsJson.results)

        if (rsJson.length > 0) {
            setCountry(rsJson[0].country);
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <>
            <div className="header_results">
                <div>
                    <span className="text_city">Stays in {country}</span>
                </div>
                <div>
                    <span className="amount">All stays</span>
                </div>
            </div>

 
        </>

    )
}