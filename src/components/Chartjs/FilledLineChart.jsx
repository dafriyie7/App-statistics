import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const FilledLineChart = ({
	chartId = "chart9",
	labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	data = [5, 30, 16, 23, 8, 14, 2],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const config = {
			type: "line",
			data: {
				labels,
				datasets: [
					{
						label: "Facebook",
						data,
						backgroundColor: "#15ca20",
						fill: {
							target: "origin",
							above: "rgb(21 202 32 / 20%)",
						},
						tension: 0.4,
						borderColor: "#15ca20",
						borderWidth: 4,
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				barPercentage: 0.5,
				categoryPercentage: 0.5,
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
	}, [labels, data]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default FilledLineChart;
