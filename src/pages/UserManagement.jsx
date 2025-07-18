// src/pages/UserManagement.jsx – edit & delete wired to thunks
import React, { useEffect, useState, useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table";
import CreateUserModal from "../components/CreateUserModal";
import EditUserModal from "../components/EditUserModal";
import {
	fetchUsers,
	updateUser as updateUserThunk,
	deleteUser as deleteUserThunk,
} from "../features/users/usersSlice";

const initials = (name = "") =>
	name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

export default function UserManagement() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// → fetch on mount
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const selectUsersData = createSelector(
		(s) => s.users.list,
		(list) => list?.data ?? []
	);
	const apiUsers = useSelector(selectUsersData);

	const userList = useMemo(() => {
		return apiUsers.map((u) => ({
			id: u.id,
			avatar: u.photo,
			name:
				`${u.first_name ?? ""} ${u.last_name ?? ""}`.trim() ||
				u.username,
			email: u.email,
			organisation: u.organization,
			role: u.roles?.[0]?.name ?? "—",
			permissions: u.permissions ?? [],
			enrolled: new Date(u.created_at).toLocaleDateString(),
			raw: u, // keep original for editing
		}));
	}, [apiUsers]);

	// modal state
	const [showCreate, setShowCreate] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	/* ─ helpers ─ */
	const renderAvatar = (row) => {
		const src = row.avatar;
		return src ? (
			<img
				src={src}
				alt={row.name}
				className="rounded-circle object-fit-cover"
				width={32}
				height={32}
			/>
		) : (
			<div
				className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
				style={{ width: 32, height: 32, fontSize: 12 }}
			>
				{initials(row.name)}
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
				row.permissions.length ? (
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

	const roleData = userList.map((u) => ({
		id: u.id,
		name: u.name,
		role: u.role,
		permissions: u.permissions,
	}));

	/* ─ CRUD actions ─ */
	const refresh = () => dispatch(fetchUsers());

	const addUser = () => setShowCreate(true);

	const editUser = (row) => {
		setSelectedUser(row.raw);
		setShowEdit(true);
	};

	const handleEditSuccess = (updatedPayload) => {
		dispatch(
			updateUserThunk({ id: updatedPayload.id, data: updatedPayload })
		)
			.unwrap()
			.then(() => {
				setShowEdit(false);
				refresh();
			});
	};

	const handleDelete = (id) => {
		dispatch(deleteUserThunk(id)).unwrap().then(refresh);
	};

	const handleBulkDelete = (ids) => {
		Promise.all(
			ids.map((id) => dispatch(deleteUserThunk(id)).unwrap())
		).then(refresh);
	};

	/* ─ tabs ─ */
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
		<>
			<ManagementTable
				title="User Management"
				data={userList}
				columns={columns}
				searchKeys={["name", "email"]}
				addButtonLabel="Add User"
				onAdd={addUser}
				onEdit={editUser}
				onDelete={handleDelete}
				onBulkDelete={handleBulkDelete}
				rowLink={(u) => navigate(`/users/${u.id}`)}
				tabs={extraTabs}
			/>

			{/* Modals */}
			<CreateUserModal
				open={showCreate}
				onClose={() => setShowCreate(false)}
				onSuccess={refresh}
			/>

			<EditUserModal
				open={showEdit}
				user={selectedUser}
				onClose={() => setShowEdit(false)}
				onSuccess={handleEditSuccess}
			/>
		</>
	);
}
