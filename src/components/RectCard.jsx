const RectCard = () => {
	return (
		<div className="col-12 col-lg-4 col-xxl-4 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div>
						<div className="d-flex align-items-center gap-2 mb-2">
							<h5 className="mb-0">
								Well done,{" "}
								<span className="fw-600">Daniel</span>!
							</h5>
							<img
								src="../assets/images/apps/party-popper.png"
								width="24"
								height="24"
								alt="Milestone"
							/>
						</div>
						<p className="mb-4">
							You completed all your app goals this month.
						</p>
						<div className="d-flex align-items-center justify-content-between">
							<div>
								<h3 className="mb-0 text-indigo">
									92% Completed
								</h3>
								<p className="mb-3">Milestone Reached</p>
								<button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
									Track Progress
								</button>
							</div>
							<img
								src="../assets/images/apps/gift-box-3.png"
								width="100"
								alt="Achievement"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RectCard;
