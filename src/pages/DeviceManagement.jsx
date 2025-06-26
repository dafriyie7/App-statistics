import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table"; // adjust if the file name is different
import device from "../components/devicedata"

const DeviceManagement = () => {
	const navigate = useNavigate();

	/* column definitions */
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

	/* sample data – replace with a fetch in useEffect later */
	const [devices, setDevices] = useState(device);

	/* handlers */
	const addDevice = () => navigate("/devices/new");
	const editDevice = (d) => navigate(`/devices/${d.id}/edit`);
	const deleteDevice = (id) =>
		setDevices((prev) => prev.filter((d) => d.id !== id));
	const bulkDelete = (ids) =>
		setDevices((prev) => prev.filter((d) => !ids.includes(d.id)));

	/* optional extra tabs */
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
			/* rowLink should return a URL string, not call navigate itself */
			rowLink={(d) => `/devices/${d.id}`}
			tabs={extraTabs}
		/>
	);
};

export default DeviceManagement;
