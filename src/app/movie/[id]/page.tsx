"use client";
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import MovieForm from '@/components/movieForm';
import { MovieCardProps } from '@/components/movieCard';
import useMovie from '../../hooks/useMovie';
import { Spinner } from '@nextui-org/react';


const Edit = () => {
  const { editMovie, movieData, getMovie, loading } = useMovie();
  const router = useRouter();
  const params = useParams();

  const handleSubmit = async (value: MovieCardProps) => {
    const data = {
      id: params.id,
      ...value
    };
    await editMovie(data);
  };

  useEffect(() => {
    getMovie(params?.id);
  }, [params]);

  return (
    <div className='min-h-screen'>
      {loading ?
        <div className='h-screen flex items-center justify-center '>
          <Spinner color="white" size="lg" />
        </div>
        :
        <div className='sm:pt-[49px] pt-20 pb-[200px] max-w-[1248px] mx-auto px-6'>
          <div className='flex items-center gap-2 sm:mb-[50px] mb-20'>
            <IoArrowBackCircleSharp className='sm:text-4xl text-xl cursor-pointer' onClick={() => router.back()} />
            <h1 className='sm:text-5xl text-[32px] font-semibold '>Edit </h1>
          </div>
          <MovieForm isEditing={true} handleSubmit={handleSubmit} movieData={movieData} />
        </div>
      }

    </div>
  );
};

export default Edit;