import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-gray-200 p-2 flex gap-3 items-center'>
            <p className='bg-[#FF0B55] text-white p-2'>Latest</p>
            <div className='flex gap-4 cursor-pointer'>
                <Marquee speed={60} pauseOnHover={true}>
                <p className='mr-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, earum.</p>
                <p className='mr-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, incidunt!</p>
                <p className='mr-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, exercitationem?.</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;