import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const PolarAreaChartComponent = ({
	chartId = "chart6",
	labels = [],
	data = [],
	backgroundColors = [],
}) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const chartData = {
			labels: labels.length
				? labels
				: ["Red", "Purple", "Yellow", "Grey", "Green"],
			datasets: [
				{
					label: "My First Dataset",
					data: data.length ? data : [11, 16, 7, 3, 14],
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
				},
			],
		};

		const config = {
			type: "polarArea",
			data: chartData,
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
						position: "bottom",
					},
				},
				elements: {
					line: {
						borderWidth: 3,
					},
				},
			},
		};

		if (chartInstance.current) {
			chartInstance.current.destroy();
		}

		chartInstance.current = new Chart(ctx, config);
	}, [labels, data, backgroundColors]);

	return (
		<>
			<canvas id={chartId} ref={chartRef}></canvas>
		</>
	);
};

export default PolarAreaChartComponent;
