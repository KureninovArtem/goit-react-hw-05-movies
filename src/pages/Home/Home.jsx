import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../shared/Api/Api';
import { Link, useLocation } from 'react-router-dom';
import style from './Home.module.css';

export default function Home() {
const location = useLocation();
const [movies, setMovies] = useState([]);

useEffect(() => {
    const getMovies = async () => {
        const { results } = await getTrendingMovies();

        setMovies(results);
    };

    getMovies();
}, []);

return (
    <>
        <h1 className={style.title}>Tranding today</h1>
        <ul className={style.list}>
        {movies &&
            movies.map(
            ({id, title, }) => (            
                <li key={id} id={id}>
                    <Link
                    to={{
                        pathname: `/movies/${`${id}`}`,
                        state: {
                        from: {
                            location,
                            label: 'Back to Home',
                        },
                        },
                    }}
                    >
                    <p>{title}</p>
                    </Link>
                </li>
                
            )
        )}
        </ul>
    </>
);
};