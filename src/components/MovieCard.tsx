'use client';
import Link from 'next/link';
import React from 'react';

interface MovieCardInfo {
  imageUrl: string;
  movieTitle: string;
  movieRating: string;
  movieId: string;
}

interface RatingProps {
  rating: string;
}

function CardRating({ rating }: RatingProps) {
  return (
    <div className="absolute right-0 top-0 pr-1 pt-1">
      <div className="inline-flex items-center gap-0.5 rounded-xl bg-black px-2 py-1 text-xs font-semibold text-slate-50 opacity-90">
        {rating}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
  );
}

export default function MovieCard(props: MovieCardInfo) {
  return (
    <Link href={'/' + props.movieId}>
      <div className="h-full items-stretch overflow-hidden rounded-xl bg-slate-900 p-4 transition duration-200 ease-out hover:scale-[1.03]">
        <div className="relative block">
          <img
            className="w-full rounded-lg object-cover"
            src={'https://image.tmdb.org/t/p/w300' + props.imageUrl}
            alt={props.movieTitle}
          />
          <CardRating rating={props.movieRating} />
        </div>
        <div className="py-2">
          <div className="px-2 text-base font-medium leading-6 tracking-tight text-slate-50">
            {props.movieTitle}
          </div>
        </div>
      </div>
    </Link>
  );
}
