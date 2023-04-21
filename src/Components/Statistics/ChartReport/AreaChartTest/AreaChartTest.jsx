import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
];
const colors = ["#3498db", "#f1c40f", "#2ecc71", "#e67e22"];
const AreaChartTest = ({ getData }) => {
    return (
        <div>
            <h1 className=' text-center text-2xl text-indigo-600 font-semibold'>Pie Chart</h1>
            <ResponsiveContainer className='flex justify-center items-center my-8 box-border' width={'99%'} height={300}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={getData}
                        dataKey="total"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label
                    >
                        {getData.map((entry, index) => (
                            <Cell key={index} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip active={true} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartTest;
