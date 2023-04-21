import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const QuizeSection = ({ quizeData }) => {
    const { logo, id, name, } = quizeData;
    return (
        <div>
            <div className="quize-card flex flex-col p-3 drop-shadow-md rounded border border-slate-200">
                <div className='flex justify-center'>
                    <img className='bg-indigo-100 md:w-full sm:w-3/4' src={logo} alt="" />
                </div>
                <div className='flex justify-between items-center py-3'>
                    <h1 className=' block text-sm font-bold text-indigo-600'>{name}</h1>
                    <NavLink to={`/take-your-quize/${id}`}>
                        <button className=' block px-2 py-1 text-base text-white bg-indigo-700 rounded hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-offset-2'>Start Practice<i className="text-sm ml-2 fa-solid fa-arrow-right"></i></button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default QuizeSection;