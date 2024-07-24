// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template trial 4
//     </div>
//   );
// };

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom';
import Home from '../../src/components/Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from '../components/Movies/Movies';
import styles from '../components/App.module.css';


const App = () => (
  <Router>
    <div>
      <nav>
        <ul className={styles.navBar}>
          <li className={styles.navLink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </Router>
);

export default App;
