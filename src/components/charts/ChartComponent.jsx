import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ chartId, datasets, createGradients }) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		// Create config inside the component
		const config = {
			type: "bar",
			data: {
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
				datasets: JSON.parse(JSON.stringify(datasets)), // clone to avoid mutation
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
		};

		if (createGradients) {
			createGradients(ctx, config);
		}

		chartInstance.current = new Chart(ctx, config);

		return () => chartInstance.current.destroy();
	}, [datasets, createGradients]);

	return (
		<canvas
			id={chartId}
			ref={chartRef}
			style={{ height: "300px", width: "100%" }}
		/>
	);
};

export default ChartComponent;
