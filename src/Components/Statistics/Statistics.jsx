import React from 'react';
import ScatterChartWithCells from './ChartReport/ScatterChartWithCells/ScatterChartWithCells';
import MixBarChart from './ChartReport/MixBarChart/MixBarChart';
import AreaChartTest from './ChartReport/AreaChartTest/AreaChartTest';
import LineChartTest from './ChartReport/LineChartTest/LineChartTest';
import { useLoaderData } from 'react-router-dom';
const Statistics = () => {
    const getData = useLoaderData().data;
    console.log(getData);
    return (
        <div>
            <div className='py-4 px-3 bg-purple-400 flex justify-center items-center'>
                <div className=' flex justify-center w-40'>
                    <img className=' w-3/5' src={'/statistics.png'} alt="" />
                </div>
                <h1 className=' text-white font-light font-sans text-center text-4xl'>Awesome charts demo</h1>
            </div>
            <div className=' grid md:grid-cols-2 tablet:grid-cols-1 sm:grid-cols-1 gap-3'>
                <div><ScatterChartWithCells getData={getData}></ScatterChartWithCells></div>
                <div><MixBarChart getData={getData}></MixBarChart></div>
                <div><AreaChartTest getData={getData}></AreaChartTest></div>
                <div><LineChartTest getData={getData}></LineChartTest></div>
            </div>
        </div>
    );
};

export default Statistics;
