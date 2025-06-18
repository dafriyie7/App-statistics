import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

// Chart Component
const ChartComponent = ({ chartId, config, createGradients }) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		if (createGradients) {
			createGradients(ctx, config);
		}
		chartInstance.current = new Chart(ctx, config);
		return () => chartInstance.current?.destroy();
	}, [config, createGradients]);

	return (
		<canvas
			id={chartId}
			ref={chartRef}
			style={{ height: "300px", width: "100%" }}
		/>
	);
};

// Chart Data
const chartData = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			label: "Active Users",
			data: [120, 200, 150, 300, 250, 400, 350, 370, 330, 380, 390, 420],
			tension: 0.4,
			borderWidth: 0,
		},
		{
			label: "App Launches",
			data: [80, 160, 140, 270, 230, 310, 280, 300, 260, 290, 310, 340],
			tension: 0.4,
			borderWidth: 0,
		},
	],
};

// Chart 2: App Metrics Bar Chart
export const Chart2 = () => {
	const config = {
		type: "bar",
		data: {
			labels: chartData.labels,
			datasets: chartData.datasets,
		},
		options: {
			borderRadius: 30,
			categoryPercentage: 0.4,
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
					title: {
						display: true,
						text: "Count",
					},
				},
				x: {
					title: {
						display: true,
						text: "Month",
					},
				},
			},
		},
		createGradients: (ctx) => {
			const gradient1 = createGradient(ctx, [
				[0, "#198754"], // green
				[1, "#20c997"],
			]);
			const gradient2 = createGradient(ctx, [
				[0, "#0d6efd"], // blue
				[1, "#6f42c1"],
			]);

			config.data.datasets[0].backgroundColor = gradient1;
			config.data.datasets[0].borderColor = gradient1;

			config.data.datasets[1].backgroundColor = gradient2;
			config.data.datasets[1].borderColor = gradient2;
		},
	};

	return <ChartComponent chartId="chart2" config={config} />;
};

// Helper: Gradient Generator
const createGradient = (ctx, colors) => {
	const gradient = ctx.createLinearGradient(0, 0, 0, 300);
	colors.forEach(([stop, color]) => gradient.addColorStop(stop, color));
	return gradient;
};
