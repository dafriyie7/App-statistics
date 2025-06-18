import OrderStatDoeNot from "../components/OrderStatDoeNot";
import DRectCard from "../components/DRectCard";
import BigRect from "../components/BigRect";
import AppListingCard from "../components/AppListingCard";

const Details = () => {
	return (
		<div className="main-wrapper">
			<div className="main-content">
				<div className="row">
					<OrderStatDoeNot />
					<DRectCard />
				</div>
				<div className="row">
				<AppListingCard />
				<BigRect />
				</div>
			</div>
		</div>
	);
};

export default Details;
