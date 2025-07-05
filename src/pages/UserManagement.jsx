import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table"; // adjust path as needed
import users from "../components/data/usersData";

/*********************************************************************
 * User Management Page                                              *
 * ------------------------------------------------------------------*
 *   • Table: avatar, name, email, organization, role, created at    *
 *   • Edit/Delete per row with confirmation                        *
 *   • Add user button                                               *
 *   • Bulk delete, disable, change role                             *
 *   • Filters by name/email                                         *
 *********************************************************************/

const getInitials = (name = "") =>
	name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

const UserManagement = () => {
	const navigate = useNavigate();
	const [userList, setUserList] = useState(users);

	const renderAvatar = (u) => {
		const src = u.photo || u.avatar || "";
		return src ? (
			<img
				src={src}
				alt={u.name}
				className="rounded-circle object-fit-cover"
				width={32}
				height={32}
			/>
		) : (
			<div
				className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
				style={{ width: 32, height: 32, fontSize: 12 }}
			>
				{getInitials(u.name)}
			</div>
		);
	};

	const columns = [
		{ header: "", accessor: "avatar", render: renderAvatar },
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "Organization", accessor: "organisation" },
		{ header: "Role", accessor: "role" },
		{ header: "Created", accessor: "enrolled" },
	];

	const roleColumns = [
		{ header: "Name", accessor: "name" },
		{ header: "Role", accessor: "role" },
		{
			header: "Permissions",
			accessor: "permissions",
			render: (row) =>
				row.permissions?.length ? (
					<div className="d-flex flex-wrap gap-1">
						{row.permissions.map((p) => (
							<span key={p} className="badge bg-secondary">
								{p}
							</span>
						))}
					</div>
				) : (
					<span className="text-muted">None</span>
				),
		},
	];

	const roleData = userList.map(({ id, name, role, permissions }) => ({
		id,
		name,
		role,
		permissions,
	}));

	const addUser = () => navigate("/users/new");
	const editUser = (u) => navigate(`/users/${u.id}/edit`);
	const deleteUser = (id) =>
		setUserList((prev) => prev.filter((u) => u.id !== id));
	const bulkDelete = (ids) =>
		setUserList((prev) => prev.filter((u) => !ids.includes(u.id)));

	const extraTabs = [
		{
			id: "roles",
			label: "Roles & Permissions",
			content: (
				<div className="p-4 text-muted">
					<ManagementTable
						title="Roles & Permissions"
						columns={roleColumns}
						data={roleData}
						searchKeys={["role", "permissions"]}
					/>
				</div>
			),
		},
	];

	return (
		<ManagementTable
			title="User Management"
			data={userList}
			columns={columns}
			searchKeys={["name", "email"]}
			addButtonLabel="Add User"
			onAdd={addUser}
			onEdit={editUser}
			onDelete={deleteUser}
			onBulkDelete={bulkDelete}
			rowLink={(u) => navigate(`/users/${u.id}`)}
			tabs={extraTabs}
		/>
	);
};

export default UserManagement;
