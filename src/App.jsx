import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components/Layout/Layout';

const HomeView = lazy(() => import('./views/HomeView'));
const MoviesSearchView = lazy(() => import('./views/MoviesSearchView'));
const MovieDetailsPageView = lazy(() => import('./views/MovieDetailsPageView'));
const CastView = lazy(() => import('./views/CastView'));
const ReviewsView = lazy(() => import('./views/ReviewsView'));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<MoviesSearchView />} />
            <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
              <Route path="cast" element={<CastView />} />
              <Route path="reviews" element={<ReviewsView />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
