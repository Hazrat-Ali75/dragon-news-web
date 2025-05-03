import React from 'react';
import Navbar from '../components/Navbar';
import errorImg from '../assets/error.webp'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-4'>
              <Navbar></Navbar>
            </div>
            <div className='w-11/12 mx-auto h-[calc(100vh-75px)]'>
               <div className='flex flex-col justify-center items-center'>
                <img className='w-[350px] h-[270px]' src={errorImg} alt="" />
                    <Link to="/" className='btn bg-red-500 text-white  mt-8'>Go to home</Link>
               </div>
            </div>
        </div>
    );
};

export default Error;