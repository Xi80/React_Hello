import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";


interface Name {
    firstName: string;
    lastName: string;
}

function formatName(user : Name) : string{
    return user.firstName + " " + user.lastName;
}

const user : Name = {
    firstName : "Luna",
    lastName : "Tsukinashi"
};

const elm = (
    <h1>Hello,{formatName(user)}!</h1>
);
ReactDOM.render(
    elm,
    document.getElementById("root")
);