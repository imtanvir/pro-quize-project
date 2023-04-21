import React from "react";
import {
    ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, Scatter
} from "recharts";

const LineChartTest = ({ getData }) => {
    return (
        <div>
            <h1 className=' text-center text-2xl text-indigo-600 font-semibold'>Line Composed Chart</h1>
            <ResponsiveContainer width={'99%'} height={300}>
                <ComposedChart width={400} height={300} data={getData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="total" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="total" name="Question" stroke="#ff7300" />
                    <Scatter dataKey="total" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
export default LineChartTest;