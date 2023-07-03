import {Header, Main} from "./components";
import TextField from "./components/textField";
import {useState} from "react";

const App = () => {
    const [question, setQuestion] = useState("");
    return (
        <div className="App">
            <Header/>
            <Main question={question}/>
            <TextField setQuestion={setQuestion}/>
        </div>
    );
}

export default App;
