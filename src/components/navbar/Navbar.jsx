import "./Navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();

    return (
        <nav className="navbar">
            <div>
                <button onClick={() => history.goBack()}>Back</button>
                <button onClick={() => history.goForward()}>Forward</button>
            </div>
            <div>
                <button>Profile</button>
            </div>
        </nav>
    );
}

export default Navbar;
