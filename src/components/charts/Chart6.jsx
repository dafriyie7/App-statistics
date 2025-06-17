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

// Chart 6: Polar Area Chart
export const Chart6 = () => {
    const config = {
        type: "polarArea",
        data: {
            labels: ["Red", "Purple", "Yellow", "Grey", "Green"],
            datasets: [
                {
                    label: "Category Distribution",
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        "#0d6efd", // Blue
                        "#6f42c1", // Purple
                        "#ffc107", // Yellow
                        "#6c757d", // Grey
                        "#198754", // Green
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