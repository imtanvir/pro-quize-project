import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeSection from './QuizeSection/QuizeSection';

const QuizeHome = () => {
    const quizeSectionData = useLoaderData().data;
    return (
        <div>
            <div className='py-4 px-3 bg-purple-400 flex justify-center items-center'>
                <div className=' w-40 mr-3'>
                    <img className='w-full' src={'/code.png'} alt="" />
                </div>
                <h1 className='  text-white font-light font-sans text-center text-4xl'>Let's Take challange and show your Coding Heroism!</h1>
            </div>
            <div className='grid md:grid-cols-4 tablet:grid-cols-2 sm:grid-cols-1 gap-5 px-4 mt-5'>
                {
                    quizeSectionData.map(quizeItem => (<QuizeSection key={quizeItem.id} quizeData={quizeItem}></QuizeSection>))
                }
            </div>
        </div>
    );
};

export default QuizeHome;