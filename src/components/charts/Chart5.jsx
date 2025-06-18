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

// Chart 5: Radar Chart - Feature Engagement Comparison
export const Chart5 = () => {
	const config = {
		type: "radar",
		data: {
			labels: [
				"Login",
				"Dashboard",
				"Messages",
				"Notifications",
				"Settings",
				"Profile",
				"Search",
			],
			datasets: [
				{
					label: "This Week",
					data: [85, 72, 65, 50, 90, 60, 70],
					fill: true,
					backgroundColor: "rgba(13, 110, 253, 0.3)",
					borderColor: "rgba(13, 110, 253, 1)",
					pointBackgroundColor: "rgba(13, 110, 253, 1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(13, 110, 253, 1)",
				},
				{
					label: "Last Week",
					data: [60, 58, 40, 30, 75, 45, 50],
					fill: true,
					backgroundColor: "rgba(25, 135, 84, 0.3)",
					borderColor: "rgba(25, 135, 84, 1)",
					pointBackgroundColor: "rgba(25, 135, 84, 1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(25, 135, 84, 1)",
				},
			],
		},
		options: {
			maintainAspectRatio: false,
			scales: {
				r: {
					angleLines: { display: true },
					suggestedMin: 0,
					suggestedMax: 100,
					grid: {
						color: "rgba(0, 0, 0, 0.05)",
					},
					pointLabels: {
						font: {
							size: 14,
						},
						color: "#333",
					},
				},
			},
			elements: {
				line: {
					borderWidth: 2,
				},
			},
			plugins: {
				legend: {
					position: "bottom",
					labels: {
						boxWidth: 18,
						padding: 10,
					},
				},
				tooltip: {
					backgroundColor: "#000",
					titleColor: "#fff",
					bodyColor: "#fff",
				},
			},
		},
	};

	return <ChartComponent chartId="chart5" config={config} />;
};
