import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getReviews } from '../../shared/Api/Api';
import style from './Reviews.module.css';

export default function Reviews() {
const [reviews, setReviews] = useState([]);
const { movieId } = useParams();


useEffect(() => {
    const getCast = async () => {
        const { results } = await getReviews(movieId);
        setReviews(results);
    };
    getCast();
}, [movieId]);

return (
    <div>
        {reviews.length > 0 ? (
            <>
            <ul className={style.list}>
                {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                </li>
                ))}
            </ul>
            </>
        ) : (
            <p>We don't have any reviews for this movie</p>
        )}
    </div>
);
}