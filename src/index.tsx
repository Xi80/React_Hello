import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";

type NameProps = {
    name : string
}
function Greetings(props : NameProps) : JSX.Element {
    return <h1>Hello,{props.name}</h1>;
}

const elm : JSX.Element = (
    <Greetings name = "Luna"/>
);

function tick() : void{
    const element : JSX.Element = (
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    );

    ReactDOM.render(element,document.getElementById("clock"));
}

setInterval(tick,1000);

ReactDOM.render(
    elm,
    document.getElementById("root")
);