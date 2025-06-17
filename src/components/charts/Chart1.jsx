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

const createGradient = (ctx, colors) => {
	const gradient = ctx.createLinearGradient(0, 0, 0, 300);
	colors.forEach(([stop, color]) => gradient.addColorStop(stop, color));
	return gradient;
};

// Chart 1: Line Chart
export const Chart1 = () => {
	const config = {
		type: "line",
		data: {
			labels: ["Jan", "Feb", "Mar", "Th", "Fr", "Sa", "Su"],
			datasets: [
				{
					label: "Google",
					data: [10, 20, 35, 10, 27, 11, 20],
					lineTension: 0.4,
					pointRadius: 0,
					pointHoverRadius: 0,
					borderWidth: 4,
					fill: {
						target: "origin",
						above: "rgb(13 110 253 / 15%)",
					},
				},
				{
					label: "Facebook",
					data: [5, 30, 16, 23, 18, 14, 5],
					tension: 0.4,
					pointRadius: 0,
					pointHoverRadius: 0,
					borderWidth: 4,
					fill: {
						target: "origin",
						above: "rgb(252 24 90 / 15%)",
					},
				},
			],
		},
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

	const createGradients = (ctx, cfg) => {
		const gradient1 = createGradient(ctx, [
			[0, "#0d6efd"],
			[1, "#6f42c1"],
		]);

		const gradient2 = createGradient(ctx, [
			[0, "#fc185a"],
			[1, "#c11244"],
		]);

		cfg.data.datasets[0].borderColor = gradient1;
		cfg.data.datasets[0].backgroundColor = gradient1;
		cfg.data.datasets[1].borderColor = gradient2;
		cfg.data.datasets[1].backgroundColor = gradient2;
	};

	return (
		<ChartComponent
			chartId="chart1"
			config={config}
			createGradients={createGradients}
		/>
	);
};
