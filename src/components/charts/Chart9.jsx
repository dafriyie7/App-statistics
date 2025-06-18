import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ chartId, config, createGradients }) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		if (createGradients) {
			createGradients(ctx, config);
		}
		chartInstance.current = new Chart(ctx, config);
		return () => chartInstance.current.destroy();
	}, [config, createGradients]);

	return (
		<canvas
			id={chartId}
			ref={chartRef}
			style={{ height: "300px", width: "100%" }}
		/>
	);
};

// Chart 9: Line Chart - Push Notifications Sent
export const Chart9 = () => {
	const config = {
		type: "line",
		data: {
			labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			datasets: [
				{
					label: "Push Notifications Sent",
					data: [50, 120, 90, 160, 130, 80, 40],
					fill: {
						target: "origin",
						above: "rgba(13, 110, 253, 0.2)", // blue shade
					},
					tension: 0.4,
					backgroundColor: "#0d6efd",
					borderColor: "#0d6efd",
					borderWidth: 3,
					pointBackgroundColor: "#0d6efd",
					pointBorderColor: "#fff",
					pointHoverBorderColor: "#0d6efd",
				},
			],
		},
		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: "bottom",
					labels: {
						boxWidth: 20,
						color: "#333",
					},
				},
				tooltip: {
					mode: "index",
					intersect: false,
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					grid: {
						color: "rgba(0,0,0,0.05)",
					},
					ticks: {
						color: "#555",
					},
				},
				x: {
					grid: {
						display: false,
					},
					ticks: {
						color: "#555",
					},
				},
			},
		},
	};

	return <ChartComponent chartId="chart9" config={config} />;
};
