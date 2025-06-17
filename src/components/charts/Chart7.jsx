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

// Chart 7: Horizontal Bar Chart
export const Chart7 = () => {
    const config = {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Google",
                    data: [18, 25, 14, 12, 17, 8, 10],
                    backgroundColor: "#fd3550",
                    borderColor: "#fd3550",
                    borderWidth: 0,
                    barThickness: 20,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            indexAxis: "y", // horizontal bar chart
            barPercentage: 0.6,
            categoryPercentage: 0.8,
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
            scales: {
                x: {
                    grid: {
                        color: "rgba(0, 0, 0, 0.05)",
                    },
                    ticks: {
                        color: "#444",
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#444",
                    },
                },
            },
        },
    };

    return <ChartComponent chartId="chart7" config={config} />;
};