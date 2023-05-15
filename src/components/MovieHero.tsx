import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

type MovieDetailProps = {
  title: string;
  overview: string;
  posterImage: string;
  tagline: string;
};

export default function MovieHero(props: MovieDetailProps) {
  const posterImage = 'https://image.tmdb.org/t/p/w780' + props.posterImage;
  return (
    <div className="container mx-auto pb-8">
      <div className="relative ">
        <img
          className="h-[24rem] w-full object-cover object-top brightness-50 md:h-[26rem]"
          src={posterImage}
        ></img>
        <Link href="/">
          <Image
            className="absolute left-0 top-0 m-4"
            src="/logo.svg"
            height={40}
            width={139}
            alt={'Movie time'}
          />
        </Link>
        <div className="absolute left-0 top-0 ml-0 mt-36 max-w-xl md:ml-16">
          <div className="pb-2 pl-8 text-2xl font-extrabold text-white md:text-4xl">{props.title}</div>
          <div className="pl-8 text-lg italic text-slate-300">{props.tagline}</div>
        </div>
      </div>
    </div>
  );
}
