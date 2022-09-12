import React from "react";
import logo from "../tvm-header-logo.png";
export default function Header(){
    return(
        <>
            <div className="imagelogo">
                <img className="logo" src={logo}/>
            </div>
        </>
    )
}