// DailyUsageChart.jsx
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

/**
 * @param {string[]} labels   – e.g. ["Mon","Tue",…,"Sun"]
 * @param {number[]} values   – minutes per day (length 7)
 */
const DailyUsageChart = ({ labels, values, color = "#00c6fb", title }) => {
	const canvasRef = useRef(null);
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = canvasRef.current.getContext("2d");

		if (chartRef.current) chartRef.current.destroy();

		chartRef.current = new Chart(ctx, {
			type: "bar",
			data: {
				labels,
				datasets: [
					{
						label: title,
						data: values,
						backgroundColor: color,
						borderRadius: 6,
					},
				],
			},
			options: {
				plugins: {
					legend: { display: false },
				},
				scales: {
					y: {
						title: { display: true, text: "Minutes" },
						beginAtZero: true,
					},
				},
				maintainAspectRatio: false,
			},
		});
	}, [labels, values, color, title]);

	return <canvas ref={canvasRef} style={{ height: 260 }} />;
};

export default DailyUsageChart;
