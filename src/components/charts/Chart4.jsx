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

// Chart 4: Doughnut Chart
export const Chart4 = () => {
    const config = {
        type: "doughnut",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "Color Distribution",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "#0d6efd", // Blue
                        "#6f42c1", // Purple
                        "#d63384", // Pink
                        "#fd7e14", // Orange
                        "#15ca20", // Green
                        "#0dcaf0", // Cyan
                    ],
                    borderColor: "#fff",
                    borderWidth: 2,
                    hoverOffset: 10,
                    cutout: "60%", // Optional: adjust donut hole size
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
                        boxWidth: 20,
                        padding: 15,
                    },
                },
                tooltip: {
                    enabled: true,
                    padding: 10,
                    backgroundColor: "#000",
                    titleColor: "#fff",
                    bodyColor: "#fff",
                },
            },
        },
    };

    return <ChartComponent chartId="chart4" config={config} />;
};