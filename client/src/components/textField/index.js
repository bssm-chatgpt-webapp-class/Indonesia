import React, {useState} from 'react';
import "./index.css";
import {Send} from "../../icons";

const TextField = ({sendChat}) => {
    const [userInput, setUserInput] = useState("");

    return (
        <div className={"text-field"}>
            <input onChange={(e) => setUserInput(e.target.value)}/>
            <Send onClick={() => sendChat(userInput)} />
        </div>
    )
};

export default TextField;