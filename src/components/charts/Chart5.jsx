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

// Chart 5: Radar Chart
export const Chart5 = () => {
    const config = {
        type: "radar",
        data: {
            labels: [
                "Eating",
                "Drinking",
                "Sleeping",
                "Designing",
                "Coding",
                "Cycling",
                "Running",
            ],
            datasets: [
                {
                    label: "Activity A",
                    data: [65, 59, 90, 81, 56, 55, 40],
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.3)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    pointBackgroundColor: "rgba(255, 99, 132, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255, 99, 132, 1)",
                },
                {
                    label: "Activity B",
                    data: [28, 48, 40, 19, 96, 27, 100],
                    fill: true,
                    backgroundColor: "rgba(54, 162, 235, 0.3)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    pointBackgroundColor: "rgba(54, 162, 235, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(54, 162, 235, 1)",
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    grid: {
                        color: "rgba(0, 0, 0, 0.1)",
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                        },
                        color: "#444",
                    },
                },
            },
            elements: {
                line: {
                    borderWidth: 2,
                },
            },
            plugins: {
                legend: {
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

    return <ChartComponent chartId="chart5" config={config} />;
};