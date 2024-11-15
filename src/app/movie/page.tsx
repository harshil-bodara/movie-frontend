"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import MovieForm from '@/components/movieForm';
import useMovie from '../hooks/useMovie';
import { MovieCardProps } from '../../components/movieCard';


const Create = () => {
    const router = useRouter();
    const { addMovie } = useMovie();

    const handleSubmit = async (value: MovieCardProps) => {
        await addMovie(value);
    };

    return (
        <div className='min-h-screen'>
            <div className='sm:pt-[49px] pt-20 pb-[200px] max-w-[1248px] mx-auto px-6'>
                <div className='flex items-center gap-2 sm:mb-[50px] mb-20'>
                    <IoArrowBackCircleSharp className='sm:text-4xl text-xl cursor-pointer' onClick={() => router.back()} />
                    <h1 className='sm:text-5xl text-[32px] font-semibold '>Create a new movie </h1>
                </div>
                <MovieForm handleSubmit={handleSubmit} isEditing={false} />
            </div>
        </div>
    );
};

export default Create;