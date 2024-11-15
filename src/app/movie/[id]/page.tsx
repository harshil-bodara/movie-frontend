import React from 'react';
import MovieForm from '@/components/movieForm';

const Edit = () => {
  return (
    <div className='min-h-screen'>
      <div className='sm:pt-[120px] pt-20 pb-[200px] max-w-[1248px] mx-auto px-6'>
        <h1 className='sm:text-5xl text-[32px] font-semibold sm:mb-[120px] mb-20'>Edit</h1>
        <MovieForm isEditing={true} />
      </div>
    </div>
  );
};

export default Edit;