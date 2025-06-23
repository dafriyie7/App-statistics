
import BarChart from "./Chartjs/BarChart";

const SmallSquares = (props) => {
	return (
		<div className="col-12 col-lg-4 col-xxl-2 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="mb-3 d-flex align-items-center justify-content-between">
						<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
							<span className="material-icons-outlined fs-5">
								{props.icon || "trending_up"}
							</span>
						</div>
						<div>
							<span className="text-success d-flex align-items-center">
								{props.change || "2.5%"}
								<i className="material-icons-outlined">
									expand_less
								</i>
							</span>
						</div>
					</div>
					<div>
						<h4 className="mb-0">248k</h4>
						<p className="mb-3">New Installs</p>
						<div style={{ height: "170px" }}>
							{props.chart ? props.chart : <BarChart />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallSquares;
