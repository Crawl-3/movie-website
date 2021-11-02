import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
    const [data, setData] = useState({});

    useEffect(() => {
        // api fetch...
        const latestMovies = [
            { id: 1, title: "A movie TittlllE", description: "Jjasdlljdas, asdlas." },
            { id: 2, title: "A mOvIe TiTle", description: "A kjdkkjkjlj, dklsahdja sHjd!" },
        ];
        setData({ latestMovies });
    }, []);

    return (
        <div className="home">
            <div className="latest-movies-wrapper">
                <h3 className="latest-movies-title">Latest Movies</h3>
                <div className="latest-movies">
                    {data.latestMovies &&
                        data.latestMovies.map((movie) => (
                            <div key={movie.id} className="latest-movie">
                                <h4 className="latest-movie-title">{movie.title}</h4>
                                <p className="latest-movie-description">{movie.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
