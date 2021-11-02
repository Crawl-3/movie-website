import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <h4 className="group-name">Explore</h4>
                <ul className="links">
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/movies">
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/trends">
                            Trends
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/collections">
                            Collections
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
