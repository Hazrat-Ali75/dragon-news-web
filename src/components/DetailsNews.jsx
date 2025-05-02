import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsnewsCard from './DetailsnewsCard';

const DetailsNews = () => {

    const [news, setNews] = useState({});

    const {id} = useParams();
    const data = useLoaderData();
    useEffect(()=>{
        const detailsNews = data.find(search => search.id == id);
        setNews(detailsNews);
        console.log(detailsNews);
    },[data,id])
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News</h2>
            <DetailsnewsCard news={news}></DetailsnewsCard>
        </div>
    );
};

export default DetailsNews;