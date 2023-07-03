import React from 'react';
import './index.css'
const ChatItem = ({imgSrc, text}) => {
    return (
        <div className={"chatItem"}>
            <img src={imgSrc} width={30} height={30} style={{objectFit:"cover"}}/>
            <pre>{text}</pre>
        </div>
    );
};


export default ChatItem;