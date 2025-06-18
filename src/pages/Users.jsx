

const UserAnalyticsCard = () => {

	const metrics = [
		{
			label: "Active Users",
			value: "2,145",
			sub: "DAU / WAU / MAU",
		},
		{
			label: "New vs Returning",
			value: "64% Returning",
			sub: "36% New Users",
		},
		{
			label: "Avg. Session Duration",
			value: "5m 12s",
			sub: "Across all users",
		},
		{
			label: "Session Count",
			value: "12,670",
			sub: "Monthly Sessions",
		},
		{
			label: "Retention Rate",
			value: "42%",
			sub: "30-day Retention",
		},
		{
			label: "Churn Rate",
			value: "21%",
			sub: "Users lost in 30 days",
		},
	];

	return (
		<main className="main-wrapper">
			<div className="main-content">
				<div className="p-6">
					<div className="max-w-6xl mx-auto">
						<div className="mb-6">
							<h2 className="text-2xl font-semibold">
								📈 User & Session Analytics
							</h2>
							<p className="text-muted-foreground text-sm">
								Overview of user engagement and behavior
							</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{metrics.map((metric) => (
								<div
									key={metric.label}
									className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition"
								>
									<h4 className="text-lg font-medium">
										{metric.label}
									</h4>
									<p className="text-2xl font-semibold mt-2">
										{metric.value}
									</p>
									<p className="text-sm text-muted-foreground">
										{metric.sub}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default UserAnalyticsCard;
