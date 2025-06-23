import twitter from '../assets/images/apps/twitter-circle.png';
import facebook from "../assets/images/apps/17.png";
import slack from "../assets/images/apps/03.png";
import instagram from "../assets/images/apps/19.png"
import snapchat from "../assets/images/apps/04.png";

const TrackedAppStats = () => {
	return (
		<div className="col-12 col-lg-6 col-xxl-4 d-flex">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div>
							<h5 className="mb-0">Tracked App Stats</h5>
						</div>
						<div className="dropdown">
							<a
								href="#"
								className="dropdown-toggle-nocaret options dropdown-toggle"
								data-bs-toggle="dropdown"
							>
								<span className="material-icons-outlined fs-5">
									more_vert
								</span>
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Add App
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Download Report
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Refresh
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="mb-4">
						<div className="d-flex align-items-center gap-3">
							<h3 className="mb-0">48,569</h3>
							<p className="mb-0 text-success gap-3">
								27%
								<span className="material-icons-outlined fs-6">
									arrow_upward
								</span>
							</p>
						</div>
						<p className="mb-0 font-13">
							Total Users Tracked (Past Year)
						</p>
					</div>

					<div className="table-responsive">
						<div className="d-flex flex-column gap-4">
							{[
								{
									img: facebook,
									name: "Facebook",
									category: "Engagement Tracker",
									count: "45,689",
									change: "+28.5%",
									trend: "success",
								},
								{
									img: twitter,
									name: "Twitter",
									category: "Sentiment Monitor",
									count: "34,248",
									change: "-14.5%",
									trend: "danger",
								},
								{
									img: slack,
									name: "TikTok",
									category: "Audience Analytics",
									count: "45,689",
									change: "+28.5%",
									trend: "success",
								},
								{
									img: instagram,
									name: "Instagram",
									category: "Media Insights",
									count: "67,249",
									change: "-43.5%",
									trend: "danger",
								},
								{
									img: snapchat,
									name: "Snapchat",
									category: "User Behavior",
									count: "89,178",
									change: "+24.7%",
									trend: "success",
								},
							].map((app, idx) => (
								<div
									className="d-flex align-items-center gap-3"
									key={idx}
								>
									<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
										<img
											src={app.img}
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
									<h5 className="mb-0">{app.count}</h5>
									<div
										className={`card-lable bg-${app.trend} text-${app.trend} bg-opacity-10`}
									>
										<p className={`mb-0`}>{app.change}</p>
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

export default TrackedAppStats;
