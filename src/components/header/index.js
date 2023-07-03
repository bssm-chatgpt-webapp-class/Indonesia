import {Ham, Plus} from '../../icons'
import './index.css'

const Header = () => {
    return (
        <div className={"header"}>
            <Ham/>
            <div>New Chat</div>
            <Plus/>
        </div>
    );
};

export default Header;