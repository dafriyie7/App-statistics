import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const DonutChart = ({
	chartId = "chart2",
	labels = [],
	dataSales = [],
	label = "Usage",
	hideLegend = false,
	hideDataLabels = false,
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		Chart.register(ChartDataLabels);

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

		const activeData = dataSales.length ? dataSales : defaultData;

		const chartData = {
			labels: labels.length ? labels : defaultLabels,
			datasets: [
				{
					label,
					data: activeData,
					backgroundColor: sliceColours.slice(0, activeData.length),
					borderWidth: 0,
				},
			],
		};

		const config = {
			type: "doughnut",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				cutout: "80%",
				plugins: {
					legend: {
						display: !hideLegend,
						position: "bottom",
					},
					datalabels: {
						display: !hideDataLabels,
						color: "#333",
						font: { weight: "bold", size: 12 },
						anchor: "end",
						align: "end",
						offset: 8,
						formatter: (v, ctx) => {
							const total =
								ctx.chart.data.datasets[0].data.reduce(
									(a, b) => a + b,
									0
								);
							return `${((v / total) * 100).toFixed(1)}%`;
						},
					},
				},
			},
			plugins: [ChartDataLabels],
		};

		if (chartInstance.current) chartInstance.current.destroy();
		chartInstance.current = new Chart(ctx, config);
	}, [labels, dataSales, label, hideLegend, hideDataLabels]);

	return <canvas id={chartId} ref={chartRef}></canvas>;
};

export default DonutChart