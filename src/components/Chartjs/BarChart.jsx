import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BarChart = ({
	chartId = "chart2",
	labels = [],
	dataSales = [],
	dataVisits = [],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

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
					label: "Sales",
					data: dataSales.length
						? dataSales
						: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
					backgroundColor: gradient1,
					borderColor: gradient1,
					borderWidth: 0,
					tension: 0.4,
				},
				{
					label: "Visits",
					data: dataVisits.length
						? dataVisits
						: [15, 30, 22, 55, 14, 35, 20, 35, 20, 15, 18, 5],
					backgroundColor: gradient2,
					borderColor: gradient2,
					borderWidth: 0,
					tension: 0.4,
					fill: {
						target: "origin",
						above: "rgb(238 9 121 / 5%)",
						below: "rgb(238 9 121 / 5%)",
					},
				},
			],
		};

		const config = {
			type: "bar",
			data: chartData,
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
		};

		// Destroy existing chart if already rendered
		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		chartInstance.current = new Chart(ctx, config);
	}, [labels, dataSales, dataVisits]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default BarChart;
