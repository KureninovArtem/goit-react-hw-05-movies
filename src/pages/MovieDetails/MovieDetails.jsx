import Loader from '../../components/Loader/Loader';
import { useState, useEffect, Suspense } from 'react';
import style from './MovieDetails.module.css'
import {
    useParams,
    useNavigate,
    useMatch,
    NavLink,
    useLocation,
    Link,
    Outlet,
} from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from '../../shared/Api/Api';


export default function MovieDetails() {
const [movie, setMovie] = useState(null);
const { movieId } = useParams();
const history = useNavigate();
const location = useLocation();
const { pathname } = useMatch("/movies/:movieId/*");
var url = pathname.match(/^(\/movies\/\d+)/)[1];

useEffect(() => {
    const getMovie = async () => {
        const currentMovie = await getMovieDetails(movieId);

        setMovie(currentMovie);
    };

    getMovie();
}, [movieId]);

function historyBack() {
    history(-1);
}

return (
    <>
        {!movie ? (
            <div className={style.notFound}>Movie is not found</div>
        ) : (
            <>
            <button type="button" onClick={historyBack} className={style.button}>Go back</button>
            <div className={style.movieContainer}>
                <div className={style.movieImg}>
                <img
                    src={
                    movie.poster_path
                        ? IMAGE_URL + movie.poster_path
                        : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                    }
                    alt={movie.title}
                    widht=""
                    height=""
                />
                </div>

                <div>
                <h2>{movie.title}</h2>
                <p>User Score: {`${(movie.vote_average * 10).toFixed(1)}`}%</p>
                <h3>Overview</h3>
                <p>{`${movie.overview}`}</p>
                <h3>Genres</h3>
                <p>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
                </div>
            </div>
            </>
        )}
        <hr />
        <p>Additional information</p>
        <nav>
            <NavLink
            to={{ pathname: `${url}/cast`  }}
            className={style.link}
            state={{location}} replace
            >
            Cast
            </NavLink>
            <NavLink
            to={{ pathname: `${url}/reviews`, }}
            className={style.link}
            state={{location}} replace
            >
            Reviews
            </NavLink>
        </nav>

        <Suspense fallback={<Loader />}>

            <Link to="/movies/cast"></Link>
            <Link to="/movies/reviews"></Link>
            <Outlet />    
        
        </Suspense>
    </>
);
}