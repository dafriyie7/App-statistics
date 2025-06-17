import "bootstrap/dist/css/bootstrap.min.css";
/* <!--plugins--> */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
/* <!--main css--> */
import "../assets/css/bootstrap-extended.css";
import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

const Cart = () => {
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart">
			<div className="offcanvas-header border-bottom h-70">
				<h5 className="mb-0" id="offcanvasRightLabel">
					8 New Orders
				</h5>
				<a
					href="javascript:;"
					className="primaery-menu-close"
					data-bs-dismiss="offcanvas"
				>
					<i className="material-icons-outlined">close</i>
				</a>
			</div>
			<div className="offcanvas-body p-0">
				<div className="order-list">
					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/01.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">White Men Shoes</h5>
							<p className="mb-0 order-price">$289</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/02.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Red Airpods</h5>
							<p className="mb-0 order-price">$149</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/03.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Men Polo Tshirt</h5>
							<p className="mb-0 order-price">$139</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/04.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Blue Jeans Casual</h5>
							<p className="mb-0 order-price">$485</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/05.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Fancy Shirts</h5>
							<p className="mb-0 order-price">$758</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/06.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Home Sofa Set </h5>
							<p className="mb-0 order-price">$546</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/07.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Black iPhone</h5>
							<p className="mb-0 order-price">$1049</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>

					<div className="order-item d-flex align-items-center gap-3 p-3 border-bottom">
						<div className="order-img">
							<img
								src="assets/images/orders/08.png"
								className="img-fluid rounded-3"
								width="75"
								alt=""
							/>
						</div>
						<div className="order-info flex-grow-1">
							<h5 className="mb-1 order-title">Goldan Watch</h5>
							<p className="mb-0 order-price">$689</p>
						</div>
						<div className="d-flex">
							<a className="order-delete">
								<span className="material-icons-outlined">
									delete
								</span>
							</a>
							<a className="order-delete">
								<span className="material-icons-outlined">
									visibility
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="offcanvas-footer h-70 p-3 border-top">
				<div className="d-grid">
					<button
						type="button"
						className="btn btn-grd btn-grd-primary"
						data-bs-dismiss="offcanvas"
					>
						View Products
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
