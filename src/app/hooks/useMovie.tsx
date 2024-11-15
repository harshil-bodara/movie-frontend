"use client";

import { useRouter } from "next/navigation";
import { MovieCardProps } from "../../components/movieCard";
import axiosClient from "../../utils/axiosClient";
import { useState } from "react";
import { deleteCookie } from "cookies-next";
import Toast from "../../components/toast";

const useMovie = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [movieData, setMovieData] = useState<MovieCardProps>();
    const [movies, setMovies] = useState<MovieCardProps[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const addMovie = async (data: MovieCardProps) => {
        try {
            const response = await axiosClient.post('/movie', data);

            if (!response?.data?.error) {
                Toast.success(response?.data?.message);
                router.push('/');
            } else {
                throw new Error(response?.data?.message);
            }
        } catch (error: any) {
            Toast.error("Something went wrong");
        };
    };

    const editMovie = async (data: any) => {
        try {
            const response = await axiosClient.put('/movie', data);

            if (!response.data.error) {
                Toast.success(response.data.message);
                router.push('/');

            }
            else {
                Toast.error(response.data.message);
            }
        }
        catch (error: any) {
            Toast.error("Something went wrong");
        }
    };

    const getMovie = async (id: any) => {
        try {
            setLoading(true);
            const response = await axiosClient.get(`/movie?id=${id}`);

            if (!response.data.error) {
                setMovieData(response.data.data);
                setLoading(false);
            }
            else {
                throw new Error();
            }
        } catch (error) {
            Toast.error("Something went wrong");
            setLoading(false);
            return false;
        }
    };

    const getAllMovies = async () => {
        try {
            setLoading(true);
            const { data } = await axiosClient.get(`/movie/getAll?page=${page}`);
            setMovies(data.data.movies);
            setTotal(data.data.total);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const deleteMovie = async (id: number | string | undefined) => {
        try {
            const response = await axiosClient.delete(`/movie?id=${id}`);

            if (!response.data.error) {
                Toast.success(response.data.message);
                getAllMovies();

            } else {
                Toast.error("movie deleted successfully");
            }
        } catch (error) {
            Toast.error("Something went wrong");
        }
    };

    const handleLogout = () => {
        deleteCookie("token");
        router.push("/login");
    };

    return {
        addMovie,
        editMovie,
        movieData,
        getMovie,
        getAllMovies,
        page,
        loading,
        movies,
        handleLogout,
        setPage,
        total,
        deleteMovie
    };
};

export default useMovie;