import React from 'react';
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { data } from '../../../chartData/chartData';

const MixBarChart = () => {
    return (
        <div>
            <h1 className=' text-center text-2xl text-indigo-600 font-semibold'>MixBar Chart</h1>
            <ResponsiveContainer width={'99%'} height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="uv" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MixBarChart;