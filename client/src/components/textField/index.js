import React, {useState} from 'react';
import "./index.css";
import {Send} from "../../icons";

const TextField = ({setQuestion}) => {
    const [userInput, setUserInput] = useState("");

    return (
        <div className={"text-field"}>
            <input onChange={(e) => setUserInput(e.target.value)}/>
            <Send onClick={() => setQuestion(userInput)} />
        </div>
    )
};

export default TextField;