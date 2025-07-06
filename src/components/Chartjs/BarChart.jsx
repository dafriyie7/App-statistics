import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels"; // ← import plugin

const BarChart = ({
	chartId = "chart2",
	labels = [],
	dataSet1 = [],
	dataset2 = [],
	label = "",
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		// Register the plugin
		Chart.register(ChartDataLabels);

		// Gradients
		const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
		gradient1.addColorStop(0, "#005bea");
		gradient1.addColorStop(1, "#00c6fb");

		const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
		gradient2.addColorStop(0, "#ff6a00");
		gradient2.addColorStop(1, "#ee0979");

		const chartData = {
			labels: labels.length
				? labels
				: [
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
					label: label,
					data: dataSet1.length
						? dataSet1
						: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
					backgroundColor: gradient1,
					borderColor: gradient1,
					borderWidth: 0,
					tension: 0.4,
				},
			],
		};

		const config = {
			type: "bar",
			data: chartData,
			options: {
				borderRadius: 0,
				categoryPercentage: 0.5,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: "bottom",
					},
					datalabels: {
						anchor: "end",
						align: "end",
						color: "#999",
						font: {
							weight: "bold",
							size: 12,
						},
						formatter: (value) => `${value} min`,
					},
				},
			},
			plugins: [ChartDataLabels], // ← activate the plugin
		};

		// Destroy existing chart if already rendered
		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		chartInstance.current = new Chart(ctx, config);
	}, [labels, dataSet1, dataset2, label]);

	return <canvas id={chartId} ref={chartRef}></canvas>;
};

export default BarChart;
