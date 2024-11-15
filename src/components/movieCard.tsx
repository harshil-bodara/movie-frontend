"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@nextui-org/react';
import Buttons from './button';
import DeleteModal from './deleteModal';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

export type MovieCardProps = {
    title?: string;
    poster?: string | any;
    publishedYear?: string;
};

const MovieCard = (props: { movie: MovieCardProps; }) => {
    const { onOpen, isOpen, onOpenChange } = useDisclosure();
    const router = useRouter();
    return (
        <div className='group bg-[#092C39] hover:bg-[#082935]/[0.55] rounded-xl sm:p-2 sm:pb-4 transition duration-500'>
            <div className='relative overflow-hidden'>
                <Image src={props.movie.poster ?? ""} alt='movie' height={400} width={300} className='sm:rounded-xl rounded-t-xl sm:mb-4 mb-3 w-full' />
                <div className='absolute top-3 right-3 opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition duration-500'>
                    <Buttons onClick={() => router.push('/movie/1')} className='!p-0 h-8 w-8 min-w-min rounded-full text-base bg-[#092C39]'><FiEdit /></Buttons>
                    <Buttons onClick={onOpen} className='!p-0 h-8 w-8 min-w-min rounded-full text-lg mt-1.5 bg-[#092C39]'><RiDeleteBinLine /></Buttons>
                </div>
            </div>
            <h6 className='sm:text-xl text-base font-medium mb-2 sm:px-2 px-3'>{props.movie.title}</h6>
            <p className='text-sm sm:px-2 sm:py-0 pt-0 p-3'>{props.movie.publishedYear}</p>
            <DeleteModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
};

export default MovieCard;