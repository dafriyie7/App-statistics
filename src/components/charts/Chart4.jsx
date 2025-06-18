import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ chartId, config, createGradients }) => {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		if (createGradients) {
			createGradients(ctx, config);
		}
		chartInstance.current = new Chart(ctx, config);
		return () => chartInstance.current.destroy();
	}, [config, createGradients]);

	return (
		<canvas
			id={chartId}
			ref={chartRef}
			style={{ height: "300px", width: "100%" }}
		/>
	);
};

// Chart 4: Doughnut Chart - User Device Distribution
export const Chart4 = () => {
	const config = {
		type: "doughnut",
		data: {
			labels: ["Android", "iOS", "Web", "Tablet", "Smart TV"],
			datasets: [
				{
					label: "Device Usage",
					data: [45, 30, 15, 7, 3],
					backgroundColor: [
						"#0d6efd", // Android - Blue
						"#198754", // iOS - Green
						"#fd7e14", // Web - Orange
						"#6f42c1", // Tablet - Purple
						"#dc3545", // TV - Red
					],
					borderColor: "#fff",
					borderWidth: 2,
					hoverOffset: 12,
					cutout: "65%", // Donut hole size
				},
			],
		},
		options: {
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: true,
					position: "bottom",
					labels: {
						boxWidth: 18,
						padding: 12,
					},
				},
				tooltip: {
					enabled: true,
					padding: 10,
					backgroundColor: "#000",
					titleColor: "#fff",
					bodyColor: "#fff",
					borderColor: "#fff",
					borderWidth: 1,
				},
			},
		},
	};

	return <ChartComponent chartId="chart4" config={config} />;
};
