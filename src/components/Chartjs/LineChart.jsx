// ChartComponent.jsx
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const LineChart = ({
	chartId = "chart1",
	labels = [],
	datasets = [],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		// Create gradients
		const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
		gradient1.addColorStop(0, "#005bea");
		gradient1.addColorStop(1, "#00c6fb");

		const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
		gradient2.addColorStop(0, "#ff6a00");
		gradient2.addColorStop(1, "#ee0979");

		const chartData = {
			labels: labels.length
				? labels
				: ["Jan", "Feb", "Mar", "Th", "Fr", "Sa", "Su"],
			datasets: datasets.length
				? datasets
				: [
						{
							label: "Google",
							data: [10, 20, 35, 10, 27, 11, 20],
							backgroundColor: gradient1,
							borderColor: gradient1,
							borderWidth: 4,
							lineTension: 0.4,
							pointRadius: 0,
							pointHoverRadius: 0,
							fill: {
								target: "origin",
								above: "rgb(13 110 253 / 15%)",
							},
						},
						{
							label: "Facebook",
							data: [5, 30, 16, 23, 18, 14, 5],
							backgroundColor: gradient2,
							borderColor: gradient2,
							borderWidth: 4,
							tension: 0.4,
							pointRadius: 0,
							pointHoverRadius: 0,
							fill: {
								target: "origin",
								above: "rgb(252 24 90 / 15%)",
							},
						},
				  ],
		};

		const config = {
			type: "line",
			data: chartData,
			options: {
				maintainAspectRatio: false,
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

		// Destroy existing chart instance if it exists
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

export default LineChart;
