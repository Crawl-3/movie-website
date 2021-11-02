import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./layout/content/Content";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import "./App.css";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Sidebar />
                <div className="wrapper">
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
