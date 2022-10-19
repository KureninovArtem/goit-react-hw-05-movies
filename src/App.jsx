import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header'
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';

const Home = lazy(() =>
  import('./pages/Home/Home' )
);
const Movies = lazy(() =>
  import('./pages/Movies/Movies')
);
const MovieDetails = lazy(() =>
  import(
    './pages/MovieDetails/MovieDetails' 
  )
);
const NotFound = lazy(() =>
  import('./pages/NotFound/NotFound')
);

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />}/>
          <Route exact path="/" element={<Home />} >
          </Route>

          <Route exact path="/movies" element={<Movies />}>
          </Route>

          <Route path="/movies/:movieId" element={<MovieDetails />}>

            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews  />}></Route>

          </Route>

          <Route path="*" element={<NotFound />}>
          </Route>
          
        </Routes>
      </Suspense>
    </>
  );
}