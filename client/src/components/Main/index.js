import './index.css'
import {imgSrc} from "../../fixture";
import ChatItem from "../chatItem";

const Main = ({chatMessages}) => {
    return (
        <div className={"main"}>
            {
                chatMessages.map((chatMessage, index) => {
                    return <ChatItem
                        key={index}
                        imgSrc={chatMessage.isMine ? imgSrc : "/image/Chatgpt.png"}
                        text={chatMessage.message}
                    />
                })
            }
        </div>

    );
};

export default Main;