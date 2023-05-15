import MovieCard from '@/components/MovieCard';
import MovieHero from '@/components/MovieHero';
import { getMovie, getSimilarMovies } from '@/app/utils';
import React from 'react';
import Footer from '../../components/Footer';

// Next 13 way of getting the search params
// https://nextjs.org/docs/app/api-reference/file-conventions/page
export default async function Page({ params }: { params: { id: string } }) {
  const movieId = parseInt(params.id);
  const movieData = await getMovie(movieId);
  const movieList = await getSimilarMovies(movieId);

  return (
    <>
      <MovieHero
        posterImage={movieData.backdrop_path}
        title={movieData.title}
        overview={movieData.overview}
        tagline={movieData.tagline}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-20">
          <div className="hidden lg:block">
            <img
              className="w-52 w-72 rounded-xl"
              src={'https://image.tmdb.org/t/p/w300' + movieData.poster_path}
            ></img>
          </div>
          <div>
            <h3 className="pb-2 text-3xl md:text-4xl">Storyline</h3>
            <div className="max-w-lg pb-2 text-slate-400">{movieData.overview}</div>
            <h2 className="pb-4 pt-2 text-2xl">Details</h2>

            <div className="grid grid-cols-2 gap-10">
              <p className="text-slate-50">Watch time</p>
              <p className="text-slate-400">{movieData.runtime} min</p>
            </div>
            <hr className="my-2 h-px border-0 bg-slate-700" />
            <div className="grid grid-cols-2 gap-10">
              <p className="text-slate-50">Release date</p>
              <p className="text-slate-400">{movieData.release_date}</p>
            </div>
          </div>
        </div>
        <h2 className="pb-4 pt-10 text-2xl md:text-4xl">Similar Movies</h2>
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
