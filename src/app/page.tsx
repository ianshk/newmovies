import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import MovieHero from '../components/MovieHero';
import { getMovie, getRandomNumber, getTrendingMovies, shuffleArray } from '../utils';

export default async function Home() {
  const movieList = await getTrendingMovies(1);

  // Get a random movie to display in the hero
  const movieCount = movieList.results.length;
  let rand = getRandomNumber(movieCount - 1);

  const movieId = movieList.results[rand].id;
  const randomMovie = await getMovie(movieId);

  // Shuffle movie results so images are not always static on refresh
  shuffleArray(movieList.results);

  return (
    <>
      <MovieHero
        posterImage={randomMovie.backdrop_path}
        title={randomMovie.title}
        overview={randomMovie.overview}
        tagline={randomMovie.tagline}
      />
      <div className="container mx-auto px-4">
        <h2 className="pb-4 pl-2 text-3xl md:text-4xl">Latest Movies</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {movieList.results.map((film: any) => {
            if (film.poster_path !== null || film.background_path) {
              return (
                <MovieCard
                  imageUrl={film.poster_path}
                  movieTitle={film.title}
                  movieRating={`${Math.round(film.vote_average * 10) / 10}`}
                  movieId={`${film.id}`}
                />
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
