import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const MixedChart = ({
	chartId = "chart8",
	labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const config = {
			type: "line", // Base type
			data: {
				labels,
				datasets: [
					{
						type: "bar",
						label: "Google",
						data: [6, 20, 14, 12, 17, 8, 10],
						backgroundColor: "#008cff",
						borderColor: "#008cff",
						borderWidth: 1,
						barPercentage: 0.5,
						categoryPercentage: 0.5,
					},
					{
						type: "line",
						label: "Facebook",
						data: [5, 30, 16, 23, 8, 14, 11],
						backgroundColor: "#fd3550",
						borderColor: "#fd3550",
						borderWidth: 4,
						tension: 0.4,
						fill: false,
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: "bottom",
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
	}, [labels]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default MixedChart;
