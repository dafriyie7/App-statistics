// src/utils/timeFormat.js
export const formatMinutesToTime = (minutes) => {
	if (!minutes || isNaN(minutes)) return "0m";

	const h = Math.floor(minutes / 60);
	const m = minutes % 60;

	return h > 0 ? `${h}h ${m}m` : `${m}m`;
};
