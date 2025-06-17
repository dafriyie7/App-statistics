import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* <!--plugins--> */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
/* <!--bootstrap css--> */
import "../assets/css/bootstrap.min.css";
/* <!--main css--> */
import "../assets/css/bootstrap-extended.css";
import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

const BigSquares = () => {
	return (
		<div className="col-12 col-lg-6 col-xxl-4 d-flex">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div className="">
							<h5 className="mb-0">Social Revenue</h5>
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
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
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
						<p className="mb-0 font-13">Last 1 Year Income</p>
					</div>
					<div className="table-responsive">
						<div className="d-flex flex-column gap-4">
							<div className="d-flex align-items-center gap-3">
								<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
									<img
										src="assets/images/apps/17.png"
										width="40"
										alt=""
									/>
									<div>
										<h6 className="mb-0">Facebook</h6>
										<p className="mb-0">Social Media</p>
									</div>
								</div>
								<h5 className="mb-0">45,689</h5>
								<div className="card-lable bg-success text-success bg-opacity-10">
									<p className="text-success mb-0">+28.5%</p>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3">
								<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
									<img
										src="assets/images/apps/twitter-circle.png"
										width="40"
										alt=""
									/>
									<div>
										<h6 className="mb-0">Twitter</h6>
										<p className="mb-0">Social Media</p>
									</div>
								</div>
								<h5 className="mb-0">34,248</h5>
								<div className="card-lable bg-danger text-danger bg-opacity-10">
									<p className="text-red mb-0">-14.5%</p>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3">
								<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
									<img
										src="assets/images/apps/03.png"
										width="40"
										alt=""
									/>
									<div>
										<h6 className="mb-0">Tik Tok</h6>
										<p className="mb-0">Entertainment</p>
									</div>
								</div>
								<h5 className="mb-0">45,689</h5>
								<div className="card-lable bg-success text-success bg-opacity-10">
									<p className="text-green mb-0">+28.5%</p>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3">
								<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
									<img
										src="assets/images/apps/19.png"
										width="40"
										alt=""
									/>
									<div>
										<h6 className="mb-0">Instagram</h6>
										<p className="mb-0">Social Media</p>
									</div>
								</div>
								<h5 className="mb-0">67,249</h5>
								<div className="card-lable bg-danger text-danger bg-opacity-10">
									<p className="text-red mb-0">-43.5%</p>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3">
								<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
									<img
										src="assets/images/apps/20.png"
										width="40"
										alt=""
									/>
									<div>
										<h6 className="mb-0">Snapchat</h6>
										<p className="mb-0">Conversation</p>
									</div>
								</div>
								<h5 className="mb-0">89,178</h5>
								<div className="card-lable bg-success text-success bg-opacity-10">
									<p className="text-green mb-0">+24.7%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BigSquares;
