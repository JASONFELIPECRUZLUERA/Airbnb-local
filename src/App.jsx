import React, { useEffect, useState } from "react";
import './App.css'
import { Footer } from './footer/footer'
import { HeaderResults } from './results/header_results'
import { Results } from './results/card'
import { Navbar } from "./header/navbar/nav";
import { Brand } from "./header/brand/logo";

function App() {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const getData = async () => {
    const rs = await fetch('stays.json');
    const rsJson = await rs.json();
    setData(rsJson);
    setFiltered(rsJson);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (params) => {
    const filteredData = data.filter(item => {
      const locationMatch = params.city === "" || item.city.toLowerCase() === params.city.toLowerCase();
      const guestsMatch = params.guests === 0 || item.maxGuests >= params.guests;
      return locationMatch && guestsMatch;
    });
    setFiltered(filteredData);
  };

  return (
    <>
      <div className="header_container">
        <Brand></Brand>
        <Navbar data={data} setFiltered={setFiltered} onSearch={handleSearch}></Navbar>
      </div>

      <br></br>
      <HeaderResults></HeaderResults>
      <br></br>
      <Results data={filtered} />
      <br></br>
      <Footer></Footer>
    </>
  )
}

export default App
