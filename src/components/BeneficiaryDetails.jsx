import { useParams, Link } from "react-router-dom";
import users from "../components/data/usersData";

const BeneficiaryDetails = () => {
	const { id } = useParams();
	const user = users.find((u) => u.id === parseInt(id));

	if (!user) return <div>User not found</div>;

	return (
		<div>
			{/* Breadcrumb */}
			<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
				<div className="breadcrumb-title pe-3">Beneficiary Details</div>
				<div className="ps-3">
				</div>
			</div>

			{/* Profile Card */}
			<div className="card rounded-4">
				<div className="card-body p-4">
					<div className="position-relative mb-5">
						<img
							src="/assets/images/gallery/profile-cover.png"
							className="img-fluid rounded-4 shadow"
							alt="Cover"
						/>
						<div className="profile-avatar position-absolute top-100 start-50 translate-middle">
							<img
								src={user.avatar}
								className="img-fluid rounded-circle p-1 bg-white shadow"
								style={{
									width: "170px",
									height: "170px",
									objectFit: "cover",
								}}
								alt={user.name}
							/>
						</div>
					</div>

					<div className="profile-info pt-5 d-flex align-items-center justify-content-between flex-wrap gap-3">
						<div>
							<h3 className="mb-1">{user.name}</h3>
							<p className="mb-0 text-muted">{user.email}</p>
						</div>
					</div>
				</div>
			</div>

			{/* Edit Form */}
			<div className="card rounded-4 border-top border-4 border-primary mt-4">
				<div className="card-body p-4">
					<h5 className="fw-bold mb-3">Edit Beneficiary Details</h5>
					<form className="row g-4">
						<div className="col-md-6">
							<label className="form-label">Full Name</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.name}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input
								type="email"
								className="form-control"
								defaultValue={user.email}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">District</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.district}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Organisation</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.organisation}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Sub-Programme</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.subProgramme}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Device</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.device}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Enrolled Date</label>
							<input
								type="date"
								className="form-control"
								defaultValue={user.enrolled}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Role</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.role}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Status</label>
							<select
								className="form-select"
								defaultValue={user.status}
							>
								<option value="Active">Active</option>
								<option value="Inactive">Inactive</option>
							</select>
						</div>
						<div className="col-md-6">
							<label className="form-label">Permissions</label>
							<input
								type="text"
								className="form-control"
								defaultValue={user.permissions?.join(", ")}
							/>
						</div>
						<div className="col-12 d-flex gap-3">
							<button
								type="submit"
								className="btn btn-grd-primary px-4"
							>
								Update
							</button>
							<button type="reset" className="btn btn-light px-4">
								Reset
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BeneficiaryDetails;
