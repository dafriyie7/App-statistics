// AppsUsagePage.jsx
import React from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom"; // ← ①
import usageData from "../components/data/apps";
import { ManagementTable } from "../components/Table";

const columns = [
	{
		header: "App",
		accessor: "name",
		render: (row) => (
			<div className="d-flex align-items-center gap-2">
				<row.icon /> {row.name}
			</div>
		),
	},
	{ header: "Category", accessor: "category" },
	{ header: "Screen Time", accessor: "screenTime" },
	{ header: "Launches", accessor: "launches" },
	{ header: "Data Used", accessor: "dataUsed" },
	{ header: "Last Used", accessor: "lastUsed" },
];

const searchKeys = ["name", "category"];

export default function AppsUsagePage() {
	const navigate = useNavigate(); // ← ②

	return (
		<IconContext.Provider value={{ size: 20 }}>
			<ManagementTable
				title="Application Usage"
				data={usageData}
				columns={columns}
				searchKeys={searchKeys}
				showActions={false}
				/* row click → /apps/<id> */
				rowLink={(row) => navigate(`/apps/${row.id}`)}
			/>
		</IconContext.Provider>
	);
}
