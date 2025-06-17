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
			label: "Sales",
			data: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
			tension: 0.4,
			borderWidth: 0,
		},
		{
			label: "Visits",
			data: [15, 30, 22, 55, 14, 35, 20, 35, 20, 15, 18, 5],
			tension: 0.4,
			borderWidth: 0,
		},
	],
};

//Chart 2: Bar Chart
export const Chart2 = () => {
	const config = {
		type: "bar",
		data: {
			labels: chartData.labels,
			datasets: chartData.datasets,
		},
		options: {
			borderRadius: 30,
			categoryPercentage: 0.3,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: true,
					position: "bottom",
				},
			},
		},
		createGradients: (ctx) => {
			const gradient1 = createGradient(ctx, [
				[0, "#0d6efd"],
				[1, "#0dcaf0"],
			]);
			const gradient2 = createGradient(ctx, [
				[0, "#dc3545"],
				[1, "#f66d9b"],
			]);

			config.data.datasets[0].backgroundColor = gradient1;
			config.data.datasets[0].borderColor = gradient1;

			config.data.datasets[1].backgroundColor = gradient2;
			config.data.datasets[1].borderColor = gradient2;
		},
	};

	return <ChartComponent chartId="chart2" config={config} />;
};

const createGradient = (ctx, colors) => {
	const gradient = ctx.createLinearGradient(0, 0, 0, 300);
	colors.forEach(([stop, color]) => gradient.addColorStop(stop, color));
	return gradient;
};
