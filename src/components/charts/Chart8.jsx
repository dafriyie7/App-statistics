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

// Chart 8: Mixed Line and Bar Chart
export const Chart8 = () => {
    const config = {
        type: "bar", // base type can be bar for mixed charts
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    type: "bar",
                    label: "Google",
                    data: [6, 20, 14, 12, 17, 8, 10],
                    backgroundColor: "#008cff",
                    borderColor: "#008cff",
                    borderWidth: 1,
                    barThickness: 20,
                },
                {
                    type: "line",
                    label: "Facebook",
                    data: [5, 30, 16, 23, 8, 14, 11],
                    borderColor: "#fd3550",
                    backgroundColor: "rgba(253, 53, 80, 0.1)",
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: "#fd3550",
                    fill: true,
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
                        padding: 12,
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
                        color: "#333",
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#333",
                    },
                },
            },
        },
    };

    return <ChartComponent chartId="chart8" config={config} />;
};