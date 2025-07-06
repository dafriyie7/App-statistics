// LineChart.jsx  – line + area blend with data‑labels
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LineChart = ({
	chartId = "chart2",
	labels = [],
	dataSales = [],
	dataVisits = [],
	label = "Usage",
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		Chart.register(ChartDataLabels); // register once

		/* ── gradients for stroke ── */
		const stroke1 = ctx.createLinearGradient(0, 0, 0, 300);
		stroke1.addColorStop(0, "#005bea");
		stroke1.addColorStop(1, "#00c6fb");

		const stroke2 = ctx.createLinearGradient(0, 0, 0, 300);
		stroke2.addColorStop(0, "#ff6a00");
		stroke2.addColorStop(1, "#ee0979");

		/* ── gradients for area fill ── */
		const fill1 = ctx.createLinearGradient(0, 0, 0, 300);
		fill1.addColorStop(0, "rgba(0, 91, 234, 0.25)"); // top 25 % opacity
		fill1.addColorStop(1, "rgba(0, 198, 251, 0.05)"); // fade to 5 %

		const fill2 = ctx.createLinearGradient(0, 0, 0, 300);
		fill2.addColorStop(0, "rgba(255, 106, 0, 0.25)");
		fill2.addColorStop(1, "rgba(238, 9, 121, 0.05)");

		/* ── data ── */
		const defaultMonths = [
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
		];

		const chartData = {
			labels: labels.length ? labels : defaultMonths,
			datasets: [
				{
					label,
					data: dataSales.length
						? dataSales
						: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
					borderColor: stroke1,
					backgroundColor: fill1,
					borderWidth: 2,
					tension: 0.35,
					fill: { target: "origin" }, // ← area under line
					pointRadius: 4,
					pointHoverRadius: 6,
				},
				...(dataVisits.length
					? [
							{
								label: "Visits",
								data: dataVisits,
								borderColor: stroke2,
								backgroundColor: fill2,
								borderWidth: 2,
								tension: 0.35,
								fill: { target: "origin" },
								pointRadius: 4,
								pointHoverRadius: 6,
							},
					  ]
					: []),
			],
		};

		/* ── config ── */
		const config = {
			type: "line",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: { display: true, position: "bottom" },
					datalabels: {
						anchor: "end",
						align: "top",
						color: "#ffffff", // bright text
						font: { weight: "bold", size: 12 },
						formatter: (v) => `${v} min`,
					},
				},
				scales: {
					y: { beginAtZero: true, grid: { drawBorder: false } },
					x: { grid: { display: false } },
				},
			},
			plugins: [ChartDataLabels],
		};

		/* ── (re)draw ── */
		if (chartInstance.current) chartInstance.current.destroy();
		chartInstance.current = new Chart(ctx, config);
	}, [labels, dataSales, dataVisits, label]);

	return <canvas id={chartId} ref={chartRef}></canvas>;
};

export default LineChart;
