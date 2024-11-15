"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import InputBox from './input';
import Buttons from './button';
import Movie1 from "@/assets/images/movie1.png";
import { LuUpload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

const MovieForm = ({ isEditing }: any) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };
    return (
        <div>
            <div className='grid sm:grid-cols-2 gap-6'>
                <div className='relative sm:max-w-[473px] w-full aspect-square bg-[#224957] border-dashed border-2 border-white rounded-[10px] flex items-center justify-center sm:order-1 order-2'>
                    {fileName ? (
                        <div className='relative h-full w-full'>
                            <Image alt="movie" src={Movie1} height={500} width={500} className='aspect-square h-full w-full' />
                            <Buttons onClick={() => setFileName('')} className='absolute top-1 right-2 !p-0 h-6 w-6 min-w-min rounded-full text-lg mt-1.5 bg-[#092C39] !cursor-pointer'><IoClose /></Buttons>
                        </div>
                    ) : (
                        <>
                            <div className='flex flex-col items-center gap-2'>
                                <LuUpload />
                                <p className="text-sm">Drop an image here</p>
                            </div>
                            <input
                                type='file'
                                className='h-full w-full opacity-0 absolute cursor-pointer'
                                onChange={handleFileChange}
                            />
                        </>
                    )}
                </div>
                <div className='sm:max-w-[362px] sm:order-2 order-1'>
                    <div className='space-y-6'>
                        <InputBox placeholder='Title' type='text' />
                        <InputBox placeholder='Publishing year' type='number' className='sm:max-w-[216px]' />
                    </div>
                    <div className='sm:flex gap-4 sm:mt-16 mt-10 hidden'>
                        <Buttons variant='outline' className='w-full'>Cancel</Buttons>
                        <Buttons className='w-full'>{isEditing ? "Update" : "Submit"}</Buttons>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 sm:mt-16 mt-10 sm:hidden'>
                <Buttons variant='outline' className='w-full'>Cancel</Buttons>
                <Buttons className='w-full'>{isEditing ? "Update" : "Submit"}</Buttons>
            </div>
        </div >
    );
};

export default MovieForm;