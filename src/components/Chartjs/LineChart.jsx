// LineChart.jsx
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LineChart = ({
	chartId = "chart-line",
	labels = [],
	dataSet1 = [],
	label = "",
	hideLegend = false,
	hideDataLabels = false,
	hideXAxis = false,
	hideYAxis = false,
}) => {
	const canvasRef = useRef(null);
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = canvasRef.current.getContext("2d");
		Chart.register(ChartDataLabels);

		// ───── Generate hue and build color helpers ─────
		const hue = Math.floor(Math.random() * 360);
		const lineColor = `hsl(${hue}, 80%, 50%)`;

		// ───── Gradient from top to bottom of canvas ─────
		const height = ctx.canvas.clientHeight || 300;
		const gradient = ctx.createLinearGradient(0, 0, 0, height);
		gradient.addColorStop(0, `hsla(${hue}, 80%, 55%, 0.6)`); // top
		gradient.addColorStop(1, `hsla(${hue}, 80%, 55%, 0.05)`); // bottom

		// ───── Chart data ─────
		const chartData = {
			labels: labels.length
				? labels
				: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			datasets: [
				{
					label,
					data: dataSet1.length
						? dataSet1
						: [15, 25, 18, 32, 28, 30, 22],
					borderColor: lineColor,
					backgroundColor: gradient,
					tension: 0.4,
					pointRadius: 3,
					pointHoverRadius: 5,
					fill: { target: "origin" },
				},
			],
		};

		// ───── Chart config ─────
		const config = {
			type: "line",
			data: chartData,
			plugins: [ChartDataLabels],
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: { display: !hideLegend, position: "bottom" },
					datalabels: {
						display: !hideDataLabels,
						align: "top",
						anchor: "end",
						color: "#666",
						font: { weight: "bold", size: 11 },
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

		// ───── Destroy previous & render new ─────
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

	return (
		<canvas
			id={chartId}
			ref={canvasRef}
			style={{ width: "100%", height: "100%" }}
		></canvas>
	);
};

export default LineChart;
