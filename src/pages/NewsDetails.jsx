import React from 'react';
import Header from '../components/Header';
import RightAside from '../homeLayout/RightAside';
import DetailsNews from '../components/DetailsNews';

const NewsDetails = () => {
    return (
        <div>
            <header className='flex justify-center py-2'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <DetailsNews></DetailsNews>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;