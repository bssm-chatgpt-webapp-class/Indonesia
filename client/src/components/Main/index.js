import './index.css'
import {gptSay, imgSrc} from "../../fixture";
import ChatItem from "../chatItem";

const Main = ({question}) => {
    return (
        <div className={"main"}>
            <ChatItem
                imgSrc={imgSrc}
                text={question}
            />
            <ChatItem
                imgSrc={"/image/Chatgpt.png"}
                text={gptSay}
            />
            <ChatItem
                imgSrc={imgSrc}
                text={"코딩잘하는법"}
            />
            <ChatItem
                imgSrc={"/image/Chatgpt.png"}
                text={gptSay}
            />
        </div>

    );
};

export default Main;