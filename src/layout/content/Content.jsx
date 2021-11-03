import { Switch, Route } from "react-router-dom";
import "./Content.css";
import HomePage from "../../views/home/Home";
import NotFoundPage from "../../views/not-found/NotFound";

function Content() {
    return (
        <div className="content main-scrollbar">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="**" component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default Content;
