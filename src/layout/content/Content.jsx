import { Route, Switch } from "react-router-dom";
import "./Content.css";
import HomePage from "../../views/home/Home";
import MoviesPage from "../../views/movies/Movies";
import NotFoundPage from "../../views/not-found/NotFound";

function Content() {
    return (
        <div className="content main-scrollbar">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies" component={MoviesPage} />
                <Route exact path="**" component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default Content;
