import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { data } from '../../../../Components/chartData/chartData';

const AreaChartTest = () => {
    return (
        <div>
            <h1 className=' text-center text-2xl text-indigo-600 font-semibold'>Area Chart</h1>
            <ResponsiveContainer width={'99%'} height={300}>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartTest;
