import OrderStatDoeNot from "../components/OrderStatDoeNot";
import DRectCard from "../components/DRectCard";

const Details = () => {
	return (
		<div className="main-wrapper">
			<div className="main-content">
				<div className="row">
					<OrderStatDoeNot />
					<DRectCard />
				</div>
			</div>
		</div>
	);
};

export default Details;
