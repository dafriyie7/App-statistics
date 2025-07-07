import React from "react";

const SmallSquare = (props) => {
	return (
		<div className="col-12 col-lg-4 col-xxl-2 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="mb-3 d-flex align-items-center justify-content-between">
						<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
							<span className="material-icons-outlined fs-5">
								{props.icon}
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
						<h4 className="mb-0">{props.figure}</h4>
						<p className="mb-3">{props.title}</p>
						<div style={{ height: "70px" }}>{props.chart}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallSquare;
