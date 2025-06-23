import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BarChart2 = ({
	chartId = "chart7",
	labels = [],
	data = [],
	backgroundColor = "#fd3550",
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const chartData = {
			labels: labels.length
				? labels
				: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			datasets: [
				{
					label: "Google",
					data: data.length ? data : [18, 25, 14, 12, 17, 8, 10],
					backgroundColor,
					borderColor: backgroundColor,
					borderWidth: 0,
				},
			],
		};

		const config = {
			type: "bar",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				indexAxis: "y",
				barPercentage: 0.5,
				categoryPercentage: 0.7,
				plugins: {
					legend: {
						position: "bottom",
						display: true,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		};

		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		chartInstance.current = new Chart(ctx, config);
	}, [labels, data, backgroundColor]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default BarChart2;