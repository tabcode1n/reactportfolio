import React from "react";
import { outlet } from "react-router-dom";  
import Navbar from "./components/Navbar.jsx";

const Layout = () => {
    return (
        <div>
        <Navbar />
        {outlet}
        </div>
    );
    }