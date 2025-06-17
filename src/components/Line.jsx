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
import { Chart1 } from "./charts/Chart1";
import { Breadcrumb } from "react-bootstrap";

const Line = () => {
	return (
		<div className="col-12 col-lg-4 col-xxl-2 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="mb-3 d-flex align-items-center justify-content-between">
						<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success">
							<span className="material-icons-outlined fs-5">
								attach_money
							</span>
						</div>
						<div>
							<span className="text-success d-flex align-items-center">
								+14%
								<i className="material-icons-outlined">
									expand_less
								</i>
							</span>
						</div>
					</div>
					<div>
						{/* <h4 className="mb-0">$47.6k</h4>
                                        <p className="mb-3">Total Sales</p>
                                        <div id="chart2"></div> */}

						<Chart1 />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Line;
