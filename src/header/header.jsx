import React from "react";
import "./header.css";
import { Brand } from "./brand/logo";
import { Navbar } from "./navbar/nav";



export const Header = () =>{

    return(

        <>
         <div className="header_container">
         <Brand></Brand>
         <Navbar></Navbar>
         </div>

        </>
    )
}