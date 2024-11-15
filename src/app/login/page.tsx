import React from 'react';
import Link from 'next/link';
import { Checkbox } from '@nextui-org/checkbox';
import Buttons from '@/components/button';
import InputBox from '@/components/input';

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen max-w-[428px] mx-auto px-6">
            <p className='text-center font-semibold sm:text-[64px] text-5xl mb-10'>
                Sign in
            </p>
            <form className="w-full space-y-6">
                <InputBox placeholder='Email' type='email' />
                <InputBox placeholder='Password' type='password' />
                <div className="flex-row flex items-center justify-between gap-3">
                    <Checkbox className='checkbox'>Remember me</Checkbox>
                    <Link href="#" className="text-sm block text-right hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <Buttons type="submit" className="w-full">
                    Login
                </Buttons>
            </form>
        </div>
    );
};

export default Login;