import BarChart from "../components/Chartjs/BarChart"
import Drect from "./Drect";
import Dropdown from "./Dropdown";
const Rect2 = () => {
	return (
		<div className="col-12 col-xl-8">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div className="">
							<h5 className="mb-0">Sales & Views</h5>
						</div>
						<Dropdown />
					</div>
                    <div style={{ height: "170px" }}>
                        <BarChart />
                    </div>
					<Drect />
				</div>
			</div>
		</div>
	);
};

export default Rect2;
