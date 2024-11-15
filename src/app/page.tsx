import React from 'react';
import Link from 'next/link';
import { Pagination } from '@nextui-org/react';
import MovieCard, { MovieCardProps } from '@/components/movieCard';
import Movie1 from '@/assets/images/movie1.png';
import { FiPlusCircle } from 'react-icons/fi';
import { LuLogOut } from 'react-icons/lu';

const MovieList = () => {

    const movie : MovieCardProps = {
        title : "Movie 1",
        poster : Movie1,
        publishedYear : "2022"
    }
    return (
        <div className='min-h-screen'>
            <div className='sm:pt-[120px] pt-20 pb-[220px] max-w-[1248px] mx-auto px-6'>
                <div className='sm:mb-[120px] mb-20 flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <h1 className='sm:text-5xl text-[32px] font-semibold'>My movies</h1>
                        <Link href="/movie/create">
                            <FiPlusCircle className='sm:text-3xl text-xl sm:mt-2 mt-1' />
                        </Link>
                    </div>
                    <Link href="#" className='flex gap-3 items-center'>
                        <h6 className='text-base font-semibold sm:block hidden'>Logout</h6>
                        <LuLogOut className='text-xl' />
                    </Link>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-5 sm:mb-[120px] mb-20'>
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                    <MovieCard movie={movie} />
                </div>
                <Pagination loop showControls color="primary" total={2} initialPage={1} className='flex justify-center pagination' />
            </div>
        </div>
    );
};

export default MovieList;