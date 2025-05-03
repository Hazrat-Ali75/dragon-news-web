import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = ({data}) => {

    const breakingNews = data.filter(news => news.others.is_today_pick === true);
        
    return (
        <div className='bg-gray-200 p-2 flex gap-3 items-center'>
            <p className='bg-[#FF0B55] text-white p-2'>Latest</p>
            <div className='flex gap-4 cursor-pointer overflow-x-hidden'>
                <Marquee speed={60} pauseOnHover={true}>
                {
                    breakingNews.map(news => <p className='mr-7 ' key={news.id}> -{news.title}</p>)
                }
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;