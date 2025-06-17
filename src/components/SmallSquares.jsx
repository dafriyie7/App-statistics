import {Chart9} from "./charts/Chart9";
const SmallSquares = () => {
	return (
		<div className="col-12 col-lg-4 col-xxl-2 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="mb-3 d-flex align-items-center justify-content-between">
						<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
							<span className="material-icons-outlined fs-5">
								shopping_cart
							</span>
						</div>
						<div>
							<span className="text-success d-flex align-items-center">
								+24%
								<i className="material-icons-outlined">
									expand_less
								</i>
							</span>
						</div>
					</div>
					<div>
						<h4 className="mb-0">248k</h4>
						<p className="mb-3">Total Orders</p>
						{/* <div id="chart1"></div> */}
						<div style={{ height: "170px" }}>
							<Chart9 />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallSquares;
