// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { ManagementTable } from "../components/Table";
// import { fetchDevices, deleteDevice } from "../features/devices/devicesSlice";
// import { fetchBeneficiary } from "../features/beneficiaries/beneficiariesSlice";
// import CreateDeviceModal from "../components/CreateDeviceModal";
// import EditDeviceModal from "../components/EditDeviceModal"; // ✅ new import

// const DeviceManagement = () => {
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();

// 	const [page, setPage] = useState(1);
// 	const [showCreateModal, setShowCreateModal] = useState(false);
// 	const [showEditModal, setShowEditModal] = useState(false); // ✅
// 	const [selectedDevice, setSelectedDevice] = useState(null); // ✅

// 	const { list, status } = useSelector((state) => state.devices);
// 	const beneficiaries = useSelector((state) => state.beneficiaries.entities);

// 	useEffect(() => {
// 		dispatch(fetchDevices({ page }));
// 	}, [dispatch, page]);

// 	useEffect(() => {
// 		if (Array.isArray(list?.data)) {
// 			list.data.forEach((device) => {
// 				const benId = device.current_beneficiary_id;
// 				if (benId && !beneficiaries?.[benId]) {
// 					dispatch(fetchBeneficiary(benId));
// 				}
// 			});
// 		}
// 	}, [list, beneficiaries, dispatch]);

// 	const devices = useMemo(() => {
// 		if (!Array.isArray(list?.data)) return [];

// 		return list.data.map((d) => {
// 			const benId = d.current_beneficiary_id;
// 			const beneficiary = beneficiaries?.[benId];
// 			const beneficiaryName =
// 				beneficiary?.first_name && beneficiary?.last_name
// 					? `${beneficiary.first_name} ${beneficiary.last_name}`
// 					: benId
// 					? "Loading..."
// 					: "—";

// 			return {
// 				id: d.id,
// 				deviceId: d.id,
// 				model: d.device_name,
// 				organisation: d.organization,
// 				subProgramme: d.programme,
// 				beneficiary: beneficiaryName,
// 				enrolled: new Date(d.date_enrolled).toLocaleDateString(),
// 				lastSync: d.last_synced
// 					? new Date(d.last_synced).toLocaleString()
// 					: "—",
// 				status: d.is_active ? "Active" : "Inactive",
// 				raw: d, // ✅ keep raw data for editing
// 			};
// 		});
// 	}, [list, beneficiaries]);

// 	const deviceColumns = [
// 		{ header: "Device ID", accessor: "deviceId" },
// 		{ header: "Model", accessor: "model" },
// 		{ header: "Org.", accessor: "organisation" },
// 		{ header: "Sub-Programme", accessor: "subProgramme" },
// 		{ header: "Beneficiary", accessor: "beneficiary" },
// 		{ header: "Date Enrolled", accessor: "enrolled" },
// 		{ header: "Last Sync", accessor: "lastSync" },
// 		{ header: "Status", accessor: "status" },
// 	];

// 	const addDevice = () => setShowCreateModal(true);
// 	const editDevice = (row) => {
// 		setSelectedDevice(row.raw); // ✅ pass full raw object
// 		setShowEditModal(true);
// 	};
// 	const deleteSingle = (deviceId) => dispatch(deleteDevice(deviceId));
// 	const bulkDelete = (ids) => ids.forEach((id) => dispatch(deleteDevice(id)));

// 	const pagination = {
// 		page,
// 		limit: list?.pagination?.limit ?? 10,
// 		total: list?.pagination?.total ?? 0,
// 		onPageChange: (newPage) => setPage(newPage),
// 	};

// 	return (
// 		<>
// 			<ManagementTable
// 				title="Devices"
// 				data={devices}
// 				columns={deviceColumns}
// 				searchKeys={["deviceId", "model", "beneficiary"]}
// 				addButtonLabel="Add Device"
// 				onAdd={addDevice}
// 				onEdit={editDevice}
// 				onDelete={(row) => deleteSingle(row.deviceId)}
// 				onBulkDelete={bulkDelete}
// 				rowLink={(row) => navigate(`/devices/${row.deviceId}`)}
// 				pagination={pagination}
// 			/>

// 			<CreateDeviceModal
// 				show={showCreateModal}
// 				onClose={() => {
// 					setShowCreateModal(false);
// 					dispatch(fetchDevices({ page }));
// 				}}
// 			/>

// 			<EditDeviceModal
// 				show={showEditModal}
// 				device={selectedDevice}
// 				onClose={() => {
// 					setShowEditModal(false);
// 					setSelectedDevice(null);
// 					dispatch(fetchDevices({ page }));
// 				}}
// 			/>
// 		</>
// 	);
// };

// export default DeviceManagement;
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table";
import { fetchDevices, deleteDevice } from "../features/devices/devicesSlice";
import { fetchBeneficiary } from "../features/beneficiaries/beneficiariesSlice";
import CreateDeviceModal from "../components/CreateDeviceModal";
import EditDeviceModal from "../components/EditDeviceModal";

const DeviceManagement = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [page, setPage] = useState(1);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedDevice, setSelectedDevice] = useState(null);

	const { list } = useSelector((state) => state.devices);
	const beneficiaries = useSelector((state) => state.beneficiaries.entities);

	useEffect(() => {
		dispatch(fetchDevices({ page }));
	}, [dispatch, page]);

	useEffect(() => {
		if (!Array.isArray(list?.data)) return;

		const uniqueBenIds = new Set();

		list.data.forEach((device) => {
			const benId = device.current_beneficiary_id;

			// Only fetch if valid and not already in state
			if (benId && typeof benId === "string" && !beneficiaries?.[benId]) {
				uniqueBenIds.add(benId);
			}
		});

		uniqueBenIds.forEach((benId) => {
			dispatch(fetchBeneficiary(benId));
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [list, dispatch]);

	useEffect(() => {
		console.log("Beneficiaries updated:", Object.keys(beneficiaries));
	}, [beneficiaries]);

	const devices = useMemo(() => {
		if (!Array.isArray(list?.data)) return [];

		return list.data.map((d) => {
			const benId = d.current_beneficiary_id;
			const beneficiary = beneficiaries?.[benId];
			const beneficiaryName =
				beneficiary?.first_name && beneficiary?.last_name
					? `${beneficiary.first_name} ${beneficiary.last_name}`
					: benId
					? "Loading..."
					: "—";

			return {
				id: d.id,
				deviceId: d.id,
				model: d.device_name,
				organisation: d.organization,
				subProgramme: d.programme,
				beneficiary: beneficiaryName,
				enrolled: new Date(d.date_enrolled).toLocaleDateString(),
				lastSync: d.last_synced
					? new Date(d.last_synced).toLocaleString()
					: "—",
				status: d.is_active ? "Active" : "Inactive",
				raw: d,
			};
		});
	}, [list, beneficiaries]);

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

	const addDevice = () => setShowCreateModal(true);
	const editDevice = (row) => {
		setSelectedDevice(row.raw);
		setShowEditModal(true);
	};
	const deleteSingle = (deviceId) => dispatch(deleteDevice(deviceId));
	const bulkDelete = (ids) => ids.forEach((id) => dispatch(deleteDevice(id)));

	const pagination = {
		page,
		limit: list?.pagination?.limit ?? 10,
		total: list?.pagination?.total ?? 0,
		onPageChange: (newPage) => setPage(newPage),
	};

	return (
		<>
			<ManagementTable
				title="Devices"
				data={devices}
				columns={deviceColumns}
				searchKeys={["deviceId", "model", "beneficiary"]}
				addButtonLabel="Add Device"
				onAdd={addDevice}
				onEdit={editDevice}
				onDelete={(row) => deleteSingle(row.deviceId)}
				onBulkDelete={bulkDelete}
				rowLink={(row) => navigate(`/devices/${row.deviceId}`)}
				pagination={pagination}
			/>

			<CreateDeviceModal
				show={showCreateModal}
				onClose={() => {
					setShowCreateModal(false);
					dispatch(fetchDevices({ page }));
				}}
			/>

			<EditDeviceModal
				show={showEditModal}
				device={selectedDevice}
				onClose={() => {
					setShowEditModal(false);
					setSelectedDevice(null);
					dispatch(fetchDevices({ page }));
				}}
			/>
		</>
	);
};

export default DeviceManagement;
