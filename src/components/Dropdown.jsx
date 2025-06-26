import React from "react";

const Dropdown = () => {
	return (
		<div className="dropdown">
			<a
				href="javascript:;"
				className="dropdown-toggle-nocaret options dropdown-toggle"
				data-bs-toggle="dropdown"
			>
				<span className="material-icons-outlined fs-5">more_vert</span>
			</a>
			<ul className="dropdown-menu">
				<li>
					<a className="dropdown-item" href="javascript:;">
						Action
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="javascript:;">
						Another action
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="javascript:;">
						Something else here
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
