import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const DoughnutChart = ({
	chartId = "chart4",
	labels = [],
	dataValues = [],
	backgroundColors = [],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const chartData = {
			labels: labels.length
				? labels
				: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [
				{
					data: dataValues.length ? dataValues : [12, 19, 3, 5, 2, 3],
					backgroundColor: backgroundColors.length
						? backgroundColors
						: [
								"#0d6efd",
								"#6f42c1",
								"#d63384",
								"#fd7e14",
								"#15ca20",
								"#0dcaf0",
						  ],
					borderWidth: 1,
				},
			],
		};

		const config = {
			type: "doughnut",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: "bottom",
					},
				},
			},
		};

		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		chartInstance.current = new Chart(ctx, config);
	}, [labels, dataValues, backgroundColors]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default DoughnutChart;
