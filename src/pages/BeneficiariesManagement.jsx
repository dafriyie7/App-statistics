import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table"; // adjust path as needed
import users from "../components/data/usersData";

/*********************************************************************
 * BeneficiariesManagement                                           *
 * ------------------------------------------------------------------*
 *   • Table columns: avatar/initials, name, email, district, etc    *
 *   • Search by name/email/phone                                    *
 *   • Add, Edit, Delete, Bulk-select                                *
 *   • Tab: Device Stats                                             *
 *********************************************************************/

const getInitials = (name = "") =>
	name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

const BeneficiariesManagement = () => {
	const navigate = useNavigate();
	const [beneficiaries, setBeneficiaries] = useState(users);

	const renderAvatar = (b) =>
		b.avatar ? (
			<img
				src={b.avatar}
				alt={b.name}
				className="rounded-circle object-fit-cover"
				width={32}
				height={32}
			/>
		) : (
			<div
				className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
				style={{ width: 32, height: 32, fontSize: 12 }}
			>
				{getInitials(b.name)}
			</div>
		);

	const columns = [
		{ header: "", accessor: "avatar", render: renderAvatar },
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "District", accessor: "district" },
		{ header: "Organisation", accessor: "organisation" },
		{ header: "Sub‑Programme", accessor: "subProgramme" },
		{ header: "Device", accessor: "device" },
		{ header: "Date Enrolled", accessor: "enrolled" },
	];

	const deviceColumns = [
		{ header: "Name", accessor: "name" },
		{ header: "Device", accessor: "device" },
		{ header: "Status", accessor: "status" },
	];

	const deviceStats = beneficiaries.map(({ id, name, device, status }) => ({
		id,
		name,
		device,
		status: status || "Active",
	}));

	const addBeneficiary = () => navigate("/beneficiaries/new");
	const editBeneficiary = (b) => navigate(`/beneficiaries/${b.id}/edit`);
	const deleteBeneficiary = (id) =>
		setBeneficiaries((prev) => prev.filter((b) => b.id !== id));
	const bulkDelete = (ids) =>
		setBeneficiaries((prev) => prev.filter((b) => !ids.includes(b.id)));

	const extraTabs = [
		{
			id: "deviceStats",
			label: "Device Stats",
			content: (
				<div className="p-4 text-muted">
					<ManagementTable
						title="Beneficiary Device Stats"
						columns={deviceColumns}
						data={deviceStats}
						searchKeys={["name", "device"]}
					/>
				</div>
			),
		},
	];

	return (
		<ManagementTable
			title="Beneficiaries Management"
			data={beneficiaries}
			columns={columns}
			searchKeys={["name", "email", "phone"]}
			addButtonLabel="Add Beneficiary"
			onAdd={addBeneficiary}
			onEdit={editBeneficiary}
			onDelete={deleteBeneficiary}
			onBulkDelete={bulkDelete}
			rowLink={(b) => navigate(`/beneficiaries/${b.id}`)}
			tabs={extraTabs}
		/>
	);
};

export default BeneficiariesManagement;
