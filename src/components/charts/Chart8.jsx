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

// Chart 8: Mixed Line and Bar Chart
export const Chart8 = () => {
	const config = {
		type: "bar", // mixed chart base
		data: {
			labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			datasets: [
				{
					type: "bar",
					label: "New Signups",
					data: [30, 45, 22, 55, 38, 20, 25],
					backgroundColor: "#0d6efd",
					borderColor: "#0d6efd",
					borderWidth: 1,
					barThickness: 20,
				},
				{
					type: "line",
					label: "Daily Active Users",
					data: [120, 150, 135, 160, 145, 110, 90],
					borderColor: "#fd7e14",
					backgroundColor: "rgba(253, 126, 20, 0.2)",
					tension: 0.4,
					borderWidth: 3,
					pointBackgroundColor: "#fd7e14",
					fill: true,
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
						padding: 12,
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
						color: "#333",
					},
				},
				x: {
					grid: {
						display: false,
					},
					ticks: {
						color: "#333",
					},
				},
			},
		},
	};

	return <ChartComponent chartId="chart8" config={config} />;
};
