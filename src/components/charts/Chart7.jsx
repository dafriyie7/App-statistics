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

// Chart 7: Horizontal Bar Chart - Feature Usage
export const Chart7 = () => {
	const config = {
		type: "bar",
		data: {
			labels: [
				"Dashboard",
				"Messages",
				"Notifications",
				"Search",
				"Settings",
				"Profile",
				"Help Center",
			],
			datasets: [
				{
					label: "Weekly Feature Usage (Clicks)",
					data: [320, 270, 180, 210, 90, 160, 60],
					backgroundColor: "#0d6efd",
					borderColor: "#0d6efd",
					borderWidth: 0,
					barThickness: 20,
				},
			],
		},
		options: {
			maintainAspectRatio: false,
			indexAxis: "y", // Makes it horizontal
			barPercentage: 0.6,
			categoryPercentage: 0.8,
			plugins: {
				legend: {
					display: true,
					position: "bottom",
					labels: {
						boxWidth: 20,
						padding: 12,
					},
				},
				tooltip: {
					backgroundColor: "#000",
					titleColor: "#fff",
					bodyColor: "#fff",
				},
			},
			scales: {
				x: {
					grid: {
						color: "rgba(0, 0, 0, 0.05)",
					},
					ticks: {
						color: "#444",
					},
				},
				y: {
					beginAtZero: true,
					ticks: {
						color: "#444",
					},
				},
			},
		},
	};

	return <ChartComponent chartId="chart7" config={config} />;
};
