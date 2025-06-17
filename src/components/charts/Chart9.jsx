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

// Chart 9: Line Chart with Fill
export const Chart9 = () => {
    const config = {
        type: "line",
        data: {
            labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            datasets: [
                {
                    label: "Facebook",
                    data: [5, 30, 16, 23, 8, 14, 2],
                    fill: {
                        target: "origin",
                        above: "rgba(21, 202, 32, 0.2)", // smooth fallback for older browsers
                    },
                    tension: 0.4,
                    backgroundColor: "#15ca20",
                    borderColor: "#15ca20",
                    borderWidth: 3,
                    pointBackgroundColor: "#15ca20",
                    pointBorderColor: "#fff",
                    pointHoverBorderColor: "#15ca20",
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 20,
                        color: "#333",
                    },
                },
                tooltip: {
                    mode: "index",
                    intersect: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: "rgba(0,0,0,0.05)",
                    },
                    ticks: {
                        color: "#555",
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#555",
                    },
                },
            },
        },
    };

    return <ChartComponent chartId="chart9" config={config} />;
};