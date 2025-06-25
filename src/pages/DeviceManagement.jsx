import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table"; // new path

const DeviceManagement = () => {
	const navigate = useNavigate();

	/*  column definitions */
	const deviceColumns = [
		{ header: "Device ID", accessor: "deviceId" },
		{ header: "Model", accessor: "model" },
		{ header: "Org.", accessor: "organisation" },
		{ header: "Sub-Programme", accessor: "subProgramme" },
		{ header: "Beneficiary", accessor: "beneficiary" },
		{ header: "Date Enrolled", accessor: "enrolled" },
		{ header: "Last Sync", accessor: "lastSync" },
		{ header: "Status", accessor: "status" },
	];

	/*  sample data – replace with API in useEffect later */
	const [devices, setDevices] = useState([
		{
			id: 1,
			deviceId: "SN-1234",
			model: "Google Pixel 9 Pro XL",
			organisation: "Parent Org A",
			subProgramme: "Programme Alpha",
			beneficiary: "Tiger Nixon",
			enrolled: "2024-02-10",
			lastSync: "2025-06-20 14:22",
			status: "Active",
		},
		{
			id: 2,
			deviceId: "SN-5678",
			model: "Samsung Galaxy S25 Ultra",
			organisation: "Parent Org B",
			subProgramme: "Programme Beta",
			beneficiary: "Garrett Winters",
			enrolled: "2024-05-02",
			lastSync: "2025-06-24 09:10",
			status: "Inactive",
		},
	]);

	/* handlers */
	const addDevice = () => navigate("/devices/new");
	const editDevice = (d) => navigate(`/devices/${d.id}/edit`);
	const deleteDevice = (id) =>
		setDevices((prev) => prev.filter((d) => d.id !== id));
	const bulkDelete = (ids) =>
		setDevices((prev) => prev.filter((d) => !ids.includes(d.id)));

	const extraTabs = [
		{
			id: "stats",
			label: "Device Stats",
			content: <div className="p-4 text-muted">…</div>,
		},
		{
			id: "history",
			label: "History",
			content: <div className="p-4 text-muted">…</div>,
		},
	];

	return (
		<ManagementTable
			title="Devices"
			data={devices}
			columns={deviceColumns}
			searchKeys={["deviceId", "model", "beneficiary"]}
			addButtonLabel="Add Device"
			onAdd={addDevice}
			onEdit={editDevice}
			onDelete={deleteDevice}
			onBulkDelete={bulkDelete}
			rowLink={(d) => navigate(`/devices/${d.id}`)}
			tabs={extraTabs}
		/>
	);
};

export default DeviceManagement;
