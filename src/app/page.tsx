"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pagination, Spinner } from '@nextui-org/react';
import { FiPlusCircle } from 'react-icons/fi';
import { LuLogOut } from 'react-icons/lu';
import MovieCard from '@/components/movieCard';
import Buttons from '@/components/button';
import EmptyList from '@/components/emptyList';
import useMovie from './hooks/useMovie';


const MovieList = () => {
    const [numPages, setNumPages] = useState(0);
    const { getAllMovies, page, movies, loading, handleLogout, setPage, total } = useMovie();

    useEffect(() => {
        const calculateTotalPages = () => {
            const totalPages = Math.ceil(total / 8);
            setNumPages(totalPages);
        };
        calculateTotalPages();
    }, [movies]);

    useEffect(() => {
        getAllMovies();
    }, [page]);

    return (
        <div className='min-h-screen'>
            {loading ?
                <div className='h-screen flex items-center justify-center '>
                    <Spinner color="white" size="lg" />
                </div>
                :
                <>
                    {(!loading && movies.length === 0) ?
                        <EmptyList />
                        :
                        <div className='sm:pt-[50px] pt-20 pb-[220px] max-w-[1248px] mx-auto px-6'>
                            <div className='sm:mb-[50px] mb-20 flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                    <h1 className='sm:text-5xl text-[32px] font-semibold'>My movies</h1>
                                    <Link href="/movie">
                                        <FiPlusCircle className='sm:text-3xl text-xl sm:mt-2 mt-1' />
                                    </Link>
                                </div>
                                <Buttons onClick={handleLogout} className='flex gap-3 items-center bg-transparent'>
                                    <h6 className='text-base font-semibold sm:block hidden'>Logout</h6>
                                    <LuLogOut className='text-xl' />
                                </Buttons>
                            </div>
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-5 sm:mb-[50px] mb-20'>
                                {movies.map((movie, index) => (
                                    <MovieCard key={index} movie={movie} />
                                ))}
                            </div>
                            <Pagination loop showControls color="primary" total={numPages} onChange={(page) => setPage(page)} initialPage={page}
                                className='flex justify-center pagination' />
                        </div>
                    }

                </>
            }

        </div>
    );
};

export default MovieList;