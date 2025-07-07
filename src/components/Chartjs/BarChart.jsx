// BarChart.jsx
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChart = ({
	/* ---------- data & identity ---------- */
	chartId = "chart2",
	labels = [],
	dataSet1 = [],
	label = "",
	/* ---------- hide controls ------------ */
	hideLegend = false,
	hideDataLabels = false,
	hideXAxis = false,
	hideYAxis = false,
}) => {
	const canvasRef = useRef(null);
	const chartRef = useRef(null);

	useEffect(() => {
		/* ------- context & plugin reg ------- */
		const ctx = canvasRef.current.getContext("2d");
		Chart.register(ChartDataLabels);

		/* ------- colours / gradients -------- */
		const gradient = ctx.createLinearGradient(0, 0, 0, 300);
		gradient.addColorStop(0, "#005bea");
		gradient.addColorStop(1, "#00c6fb");

		/* ------------- data ----------------- */
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
					label,
					data: dataSet1.length
						? dataSet1
						: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
					backgroundColor: gradient,
					borderColor: gradient,
					borderWidth: 0,
				},
			],
		};

		/* ------------- config --------------- */
		const config = {
			type: "bar",
			data: chartData,
			plugins: [ChartDataLabels],
			options: {
				maintainAspectRatio: false,
				categoryPercentage: 0.5,
				borderRadius: 0,
				plugins: {
					legend: { display: !hideLegend, position: "bottom" },
					datalabels: {
						display: !hideDataLabels,
						anchor: "end",
						align: "end",
						color: "#999",
						font: { weight: "bold", size: 12 },
						formatter: (v) => `${v} min`,
					},
				},
				scales: {
					x: {
						display: !hideXAxis,
						grid: { display: !hideXAxis },
						ticks: { display: !hideXAxis },
					},
					y: {
						display: !hideYAxis,
						grid: { display: !hideYAxis },
						ticks: { display: !hideYAxis },
					},
				},
			},
		};

		/* ------- destroy & render ----------- */
		if (chartRef.current) chartRef.current.destroy();
		chartRef.current = new Chart(ctx, config);
	}, [
		labels,
		dataSet1,
		label,
		hideLegend,
		hideDataLabels,
		hideXAxis,
		hideYAxis,
	]);

	return <canvas id={chartId} ref={canvasRef}></canvas>;
};

export default BarChart;
