import React, { useEffect } from "react";
import Pace from "pace-js";
import "pace-js/themes/blue/pace-theme-minimal.css"; // or another theme css

const PaceLoader = () => {
	useEffect(() => {
		Pace.start();

		return () => {
			Pace.stop();
			// If you want to remove the pace elements from DOM on unmount, you can do it here.
		};
	}, []);

	return null; // This component doesn't render anything itself
};

export default PaceLoader;