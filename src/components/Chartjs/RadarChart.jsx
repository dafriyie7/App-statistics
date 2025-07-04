import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const RadarChart = ({
	chartId = "chart5",
	labels = [],
	datasets = [],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const chartData = {
			labels: labels.length
				? labels
				: [
						"Eating",
						"Drinking",
						"Sleeping",
						"Designing",
						"Coding",
						"Cycling",
						"Running",
				  ],
			datasets: datasets.length
				? datasets
				: [
						{
							label: "My First Dataset",
							data: [65, 59, 90, 81, 56, 55, 40],
							fill: true,
							backgroundColor: "rgba(255, 99, 132, 0.2)",
							borderColor: "rgb(255, 99, 132)",
							pointBackgroundColor: "rgb(255, 99, 132)",
							pointBorderColor: "#fff",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "rgb(255, 99, 132)",
						},
						{
							label: "My Second Dataset",
							data: [28, 48, 40, 19, 96, 27, 100],
							fill: true,
							backgroundColor: "rgba(54, 162, 235, 0.2)",
							borderColor: "rgb(54, 162, 235)",
							pointBackgroundColor: "rgb(54, 162, 235)",
							pointBorderColor: "#fff",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "rgb(54, 162, 235)",
						},
				  ],
		};

		const config = {
			type: "radar",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: "bottom",
					},
				},
				elements: {
					line: {
						borderWidth: 3,
					},
				},
			},
		};

		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		chartInstance.current = new Chart(ctx, config);
	}, [labels, datasets]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default RadarChart;