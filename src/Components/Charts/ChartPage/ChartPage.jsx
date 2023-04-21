import React from 'react';
import ScatterChartWithCells from './../../Charts/ChartReport/ScatterChartWithCells/ScatterChartWithCells';
import MixBarChart from './../../Charts/ChartReport/MixBarChart/MixBarChart';
import AreaChartTest from '../ChartReport/AreaChartTest/AreaChartTest';
import LineChartTest from './../../Charts/ChartReport/LineChartTest/LineChartTest';

const ChartPage = () => {
    return (
        <div>
            <div className=' grid md:grid-cols-2 tablet:grid-cols-2 sm:grid-cols-1 gap-3'>
                <div><ScatterChartWithCells></ScatterChartWithCells></div>
                <div><MixBarChart></MixBarChart></div>
                <div><AreaChartTest></AreaChartTest></div>
                <div><LineChartTest></LineChartTest></div>
            </div>
        </div>
    );
};

export default ChartPage;