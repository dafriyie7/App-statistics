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

// Chart 6: Polar Area Chart – Traffic Source Distribution
export const Chart6 = () => {
	const config = {
		type: "polarArea",
		data: {
			labels: ["Direct", "Social", "Paid Ads", "Email", "Referral"],
			datasets: [
				{
					label: "Traffic Sources",
					data: [40, 25, 15, 10, 10],
					backgroundColor: [
						"#0d6efd", // Direct - Blue
						"#6f42c1", // Social - Purple
						"#ffc107", // Ads - Yellow
						"#fd7e14", // Email - Orange
						"#198754", // Referral - Green
					],
					borderColor: "#fff",
					borderWidth: 1,
				},
			],
		},
		options: {
			maintainAspectRatio: false,
			scales: {
				r: {
					grid: {
						color: "rgba(0, 0, 0, 0.05)",
					},
					ticks: {
						color: "#555",
					},
				},
			},
			plugins: {
				legend: {
					display: true,
					position: "bottom",
					labels: {
						boxWidth: 20,
						padding: 12,
					},
				},
				tooltip: {
					backgroundColor: "#000",
					titleColor: "#fff",
					bodyColor: "#fff",
				},
			},
		},
	};

	return <ChartComponent chartId="chart6" config={config} />;
};
