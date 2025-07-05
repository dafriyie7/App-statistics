import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table";
import device from "../components/data/devicedata";

const DeviceManagement = () => {
	const navigate = useNavigate();

	// 👉 Device ID column becomes a link
	const deviceColumns = [
		{
			header: "Device ID",
			accessor: "deviceId",
			render: (d) => (
				<Link
					to={`/devices/${d.deviceId}`}
					className="text-decoration-none"
				>
					{d.deviceId}
				</Link>
			),
		},
		{ header: "Model", accessor: "model" },
		{ header: "Org.", accessor: "organisation" },
		{ header: "Sub-Programme", accessor: "subProgramme" },
		{ header: "Beneficiary", accessor: "beneficiary" },
		{ header: "Date Enrolled", accessor: "enrolled" },
		{ header: "Last Sync", accessor: "lastSync" },
		{ header: "Status", accessor: "status" },
	];

	const [devices, setDevices] = useState(device);

	const addDevice = () => navigate("/devices/new");
	const editDevice = (d) => navigate(`/devices/${d.deviceId}/edit`);
	const deleteDevice = (deviceId) =>
		setDevices((prev) => prev.filter((d) => d.deviceId !== deviceId));
	const bulkDelete = (ids) =>
		setDevices((prev) => prev.filter((d) => !ids.includes(d.deviceId)));

	return (
		<ManagementTable
			title="Devices"
			data={devices}
			columns={deviceColumns}
			searchKeys={["deviceId", "model", "beneficiary"]}
			addButtonLabel="Add Device"
			onAdd={addDevice}
			onEdit={editDevice}
			onDelete={(row) => deleteDevice(row.deviceId)}
			onBulkDelete={bulkDelete}
			/* rowLink not needed because we link inside the first cell */
		/>
	);
};

export default DeviceManagement;
