import React from "react";
import Dropdown from "./Dropdown";

import facebook from "../assets/images/apps/17.png";
import twitter from "../assets/images/apps/twitter-circle.png";
import instagram from "../assets/images/apps/19.png";
import snapchat from "../assets/images/apps/20.png";
import tiktok from "../assets/images/apps/03.png";

const AppUsageHoursCard = () => {
	return (
		<div className="col-12 col-lg-6 col-xxl-4 d-flex">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					{/* Header */}
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">App Usage</h5>
						<Dropdown />
					</div>

					{/* Summary */}
					<div className="mb-4">
						<div className="d-flex align-items-center gap-3">
							<h3 className="mb-0">654 hrs</h3>
							<p className="mb-0 text-success gap-3">
								+15%
								<span className="material-icons-outlined fs-6">
									arrow_upward
								</span>
							</p>
						</div>
						<p className="mb-0 font-13">Total usage this month</p>
					</div>

					{/* App Usage List */}
					<div className="table-responsive">
						<div className="d-flex flex-column gap-4">
							{[
								{
									icon: facebook,
									name: "Facebook",
									category: "Social Media",
									hours: "142 hrs",
									trend: "+12.3%",
									up: true,
								},
								{
									icon: twitter,
									name: "Twitter",
									category: "News & Social",
									hours: "98 hrs",
									trend: "-4.1%",
									up: false,
								},
								{
									icon: tiktok,
									name: "TikTok",
									category: "Media",
									hours: "173 hrs",
									trend: "+7.9%",
									up: true,
								},
								{
									icon: instagram,
									name: "Instagram",
									category: "Photo Sharing",
									hours: "121 hrs",
									trend: "-2.5%",
									up: false,
								},
								{
									icon: snapchat,
									name: "Snapchat",
									category: "Messaging",
									hours: "120 hrs",
									trend: "+5.6%",
									up: true,
								},
							].map((app, i) => (
								<div
									className="d-flex align-items-center gap-3"
									key={i}
								>
									<div className="d-flex align-items-center gap-3 flex-grow-1">
										<img
											src={app.icon}
											width="40"
											alt={app.name}
										/>
										<div>
											<h6 className="mb-0">{app.name}</h6>
											<p className="mb-0">
												{app.category}
											</p>
										</div>
									</div>
									<h5 className="mb-0">{app.hours}</h5>
									<div
										className={`card-lable bg-opacity-10 ${
											app.up
												? "bg-success text-success"
												: "bg-danger text-danger"
										}`}
									>
										<p className="mb-0">{app.trend}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppUsageHoursCard;
