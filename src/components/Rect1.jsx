import React from 'react'

const Rect1 = () => {
  return (
		<div className="col-12 col-lg-4 col-xxl-4 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="">
						<div className="d-flex align-items-center gap-2 mb-2">
							<h5 className="mb-0">
								Congratulations{" "}
								<span className="fw-600">Jhon</span>
							</h5>
							<img
								src="assets/images/apps/party-popper.png"
								width="24"
								height="24"
								alt=""
							/>
						</div>
						<p className="mb-4">
							You are the best seller of this monnth
						</p>
						<div className="d-flex align-items-center justify-content-between">
							<div className="">
								<h3 className="mb-0 text-indigo">$168.5K</h3>
								<p className="mb-3">58% of sales target</p>
								<button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
									View Details
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