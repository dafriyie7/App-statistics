import React from 'react'

const Rect1 = (props) => {
  return (
		<div className="col-12 col-lg-4 col-xxl-4 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="">
						<div className="d-flex align-items-center gap-2 mb-2">
							<h5 className="mb-0">
								{props.title}{" "}
								<span className="fw-600">{props.name}</span>
							</h5>
							<img
								src="assets/images/apps/party-popper.png"
								width="24"
								height="24"
								alt=""
							/>
						</div>
						<p className="mb-4">
							{props.text}
						</p>
						<div className="d-flex align-items-center justify-content-between">
							<div className="">
							  <h3 className="mb-0 text-indigo">{props.figure}</h3>
								<p className="mb-3">{props.round}</p>
								<button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
									{props.button}
								</button>
							</div>
							<img
								src="assets/images/apps/gift-box-3.png"
								width="100"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Rect1