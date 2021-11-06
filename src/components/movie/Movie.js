import "./Movie.css";

export function Movie(props) {
    const movie = props.movie;
    return (
        <div className="movie">
            <img className="movie-thumbnail" src="" alt="" />
            <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-description">{movie.description}</p>
            </div>
        </div>
    );
}
