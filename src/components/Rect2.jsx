import BarChart from "../components/Chartjs/BarChart";
import Drect from "./Drect"; // ← keep: can still show month / year KPIs
import Dropdown from "./Dropdown";

const Rect2 = () => (
	<div className="col-12 col-xl-8">
		<div className="card w-100 rounded-4">
			<div className="card-body">
				{/* Header */}
				<div className="d-flex align-items-start justify-content-between mb-3">
					<h5 className="mb-0">Usage & Sessions</h5>
					<Dropdown />
				</div>

				{/* BarChart (e.g. hours + sessions over months) */}
				<div style={{ height: "170px" }}>
					{/* You might pass props to BarChart later: <BarChart metric="hours" /> */}
					<BarChart />
				</div>

				{/* KPI strip (Monthly / Yearly usage) */}
				<Drect
					metricLabel="Total Hours"
					metricValue="2,354 hrs"
					growth="+12.4%"
					subLabel="vs last year"
				/>
			</div>
		</div>
	</div>
);

export default Rect2;
