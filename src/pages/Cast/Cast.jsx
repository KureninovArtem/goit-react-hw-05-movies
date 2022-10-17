import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getMovieCast, IMAGE_URL } from '../../shared/Api/Api';
import style from './Cast.module.css';

export default function Cast() {
const [cast, setCast] = useState(null);
const { movieId } = useParams();

useEffect(() => {
    const getCast = async () => {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
    };

    getCast();
}, [movieId]);

return (
    <ul className={style.list}>
        {cast && cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
                <img src={
                        profile_path
                    ? IMAGE_URL + profile_path
                    : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                }
                alt={name}
                width="100"
                height=""
                />
                <p>{name}</p>
                <p>Character: {character}</p>
            </li>
        ))}
    </ul>
);
}