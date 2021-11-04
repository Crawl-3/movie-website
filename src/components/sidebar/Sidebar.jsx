import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useCallback, useContext, useLayoutEffect } from "react";
import { Context } from "../../store/Context";

function Sidebar() {
    const [state, dispatch] = useContext(Context);

    const updateSidebar = useCallback(() => {
        if (window.innerWidth <= 600) {
            dispatch({ type: "DISABLE_SIDEBAR" });
        } else {
            dispatch({ type: "ENABLE_SIDEBAR" });
        }
    }, [dispatch]);

    useLayoutEffect(() => {
        updateSidebar();
    }, [updateSidebar]);

    window.addEventListener("resize", () => {
        updateSidebar();
    });
    window.removeEventListener("resize", updateSidebar);


    return (
        <div className={`sidebar ${state.sidebarEnabled ? "sidebar-enabled" : "sidebar-disabled"}`}>
            <nav>
                <h4 className="group-name">Explore</h4>
                <ul className="links">
                    <li>
                        <NavLink className="link" exact activeClassName="active" to="/">
                            <span><box-icon type="solid" name="home" /></span>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" exact activeClassName="active" to="/movies">
                            <span><box-icon type="solid" name="movie-play" /></span>
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" exact activeClassName="active" to="/collection">
                            <span><box-icon type="solid" name="collection" /></span>
                            Collection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" exact activeClassName="active" to="/trend-movies">
                            <span><box-icon name="trending-up" /></span>
                            Trend Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
