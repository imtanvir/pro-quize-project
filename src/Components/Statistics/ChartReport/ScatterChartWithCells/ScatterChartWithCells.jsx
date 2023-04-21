import React from "react";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
    ResponsiveContainer
} from "recharts";

const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const ScatterChartWithCells = ({ getData }) => {
    return (
        <div>
            <h1 className=' text-center text-2xl text-indigo-600 font-semibold'>ScatterChart Chart</h1>
            <ResponsiveContainer width={"99%"} height={300}>
                <ScatterChart
                    width={400}
                    height={400}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="name" name="Lan:" />
                    <YAxis type="number" dataKey="total" name="Question:" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter name="Programming" data={getData} fill="#8884d8">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}
export default ScatterChartWithCells;