import { Movie } from "../../components/movie/Movie";
import { movieData } from "../../fake-data";
import "./Movies.css";
import { Link } from "react-router-dom";

function Movies() {
    return (
        <div className="movies">
            {movieData.map((movie) => (
                <Link to={`/movies/${movie.id}`}>
                    <Movie key={movie.id} movie={movie} />
                </Link>
            ))}
        </div>
    );
}

export default Movies;
