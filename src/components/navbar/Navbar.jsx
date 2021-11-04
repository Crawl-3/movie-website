import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/Context";

function Navbar() {
    const history = useHistory();
    const [state, dispatch] = useContext(Context);

    return (
        <nav className="navbar">
            <div className="tools">
                <button onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })} className="toggle-sidebar-button">
                    {state.sidebarEnabled ? <box-icon name="menu-alt-left" /> : <box-icon name="menu" />}
                </button>

                <div className="history-buttons">
                    <button onClick={() => history.goBack()}>
                        <box-icon type="regular" name="left-arrow" size="sm" />
                    </button>
                    <button onClick={() => history.goForward()}>
                        <box-icon type="regular" name="right-arrow" size="sm" />
                    </button>
                </div>
            </div>
            <div className="right">
                <button>Profile</button>
            </div>
        </nav>
    );
}

export default Navbar;
