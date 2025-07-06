// DonutChart.jsx
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const DonutChart = ({
	chartId = "chart2",
	labels = [],
	dataSales = [],
	label = "Usage",
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		Chart.register(ChartDataLabels);

		/* palette (12 colours) */
		const sliceColours = [
			"#005bea",
			"#00c6fb",
			"#ff6a00",
			"#ee0979",
			"#8e54e9",
			"#4776e6",
			"#34e89e",
			"#0f3443",
			"#ff512f",
			"#dd2476",
			"#1d2b64",
			"#f8cdda",
		];

		/* fallbacks */
		const defaultLabels = [
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
		const defaultData = [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13];

		/* data */
		const chartData = {
			labels: labels.length ? labels : defaultLabels,
			datasets: [
				{
					label,
					data: dataSales.length ? dataSales : defaultData,
					backgroundColor: sliceColours.slice(
						0,
						dataSales.length || defaultData.length
					),
					borderWidth: 0, // ← no borders
				},
			],
		};

		/* config */
		const config = {
			type: "doughnut",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				cutout: "80%", // ← slimmer ring
				plugins: {
					legend: { display: true, position: "bottom" },
					datalabels: {
						color: "#333",
						font: { weight: "bold", size: 12 },
						anchor: "end", // stick outside
						align: "end",
						offset: 8, // little gap from edge
						formatter: (v) => `${v} min`,
					},
				},
			},
			plugins: [ChartDataLabels],
		};

		/* (re)draw */
		if (chartInstance.current) chartInstance.current.destroy();
		chartInstance.current = new Chart(ctx, config);
	}, [labels, dataSales, label]);

	return <canvas id={chartId} ref={chartRef}></canvas>;
};

export default DonutChart;
