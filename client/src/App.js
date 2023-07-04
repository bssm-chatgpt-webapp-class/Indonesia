import {Header, Main} from "./components";
import TextField from "./components/textField";
import {useEffect, useState} from "react";
import io from 'socket.io-client'

const socket = io('http://localhost:5001', {
    path: '/socket.io',
})



const App = () => {
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        socket.on('chat', (data) => {
            setChatMessages(prevState => [...prevState,{isMine: false, message: data}])
        })
    },[])

    const sendChat = (data) => {
        socket.emit('chat', data)
        setChatMessages(prevState => [...prevState,{isMine: true, message: data}])
    }


    return (
        <div className="App">...............................,,,,,,
            /,
            <Header/>
            <Main chatMessages={chatMessages}/>
            <TextField sendChat={sendChat}/>
        </div>
    );
}

export default App;
