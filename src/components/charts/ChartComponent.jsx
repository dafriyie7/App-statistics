import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ chartId, datasets, createGradients }) => {
	// Create a ref for the canvas element.
	const chartRef = useRef(null);
	// Create a ref to store the Chart.js instance.
	const chartInstance = useRef(null);

	useEffect(() => {
		// Get the canvas rendering context
		const ctx = chartRef.current.getContext("2d");

		// Build the chart configuration. Here, we use fixed month labels.
		// You can adjust these labels or make them props if needed.
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
				// Clone the datasets to prevent accidental mutation of props.
				datasets: JSON.parse(JSON.stringify(datasets)),
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

		// If a gradient creation function is provided, call it.
		if (createGradients) {
			createGradients(ctx, config);
		}

		// Create the Chart using the provided configuration.
		chartInstance.current = new Chart(ctx, config);

		// Cleanup function to destroy the chart instance when the component unmounts.
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
