import './App.css';

function App() {
	return (
		<div className="">
			<nav className="navbar navbar-expand-lg navbar-light bg-light container">
				<div className="container px-4 px-lg-5">
					<a className="navbar-brand" href="#!">Start Bootstrap</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
							<li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
							<li className="nav-item"><a className="nav-link" href="#!">About</a></li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#!">All Products</a></li>
									<li><hr className="dropdown-divider" /></li>
									<li><a className="dropdown-item" href="#!">Popular Items</a></li>
									<li><a className="dropdown-item" href="#!">New Arrivals</a></li>
								</ul>
							</li>
						</ul>
						<form className="d-flex">
							<button className="btn btn-outline-dark d-flex justify-content-center align-items-center" type="submit">
								<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
								</svg>
								Cart
								<span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
							</button>
						</form>
					</div>
				</div>
			</nav>
			<header className="container-fluid bg-dark py-5">
				<div className="container px-4 px-lg-5 my-5">
					<div className="text-center text-white">
						<h1 className="display-4 fw-bolder">Shop in style</h1>
						<p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
					</div>
				</div>
			</header>
			<main className="py-5 container">
				<div className="container-fluid px-4 px-lg-5 mt-5">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Fancy Product
										</h5>
										<span>
											$40.00 - $80.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											View options
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<div className="badge bg-dark text-white position-absolute sale">
									Sale
								</div>
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Special Item
										</h5>
										<div className="d-flex justify-content-center small text-warning mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
										</div>
										<span>
											<span className="text-muted text-decoration-line-through">$20.00</span> - $18.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											Add to catr
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<div className="badge bg-dark text-white position-absolute sale">
									Sale
								</div>
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Sale Item
										</h5>
										<span>
											<span className="text-muted text-decoration-line-through">$50.00</span> - $25.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											Add to catr
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Popular Item
										</h5>
										<div className="d-flex justify-content-center small text-warning mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
										</div>
										<span>
											$40.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											Add to catr
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid px-4 px-lg-5 mt-5">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<div className="badge bg-dark text-white position-absolute sale">
									Sale
								</div>
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Sale item
										</h5>
										<span>
											<span className="text-muted text-decoration-line-through">$50.00</span> $25.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											View options
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Fancy Product
										</h5>
										<span>
											$120.00 - $280.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											Add to catr
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<div className="badge bg-dark text-white position-absolute sale">
									Sale
								</div>
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Special Item
										</h5>
										<div className="d-flex justify-content-center small text-warning mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
										</div>
										<span>
											<span className="text-muted text-decoration-line-through">$20.00</span> - $18.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											Add to catr
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 mb-5">
							<div className="card h-100">
								<img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
								<div className="card-body p-4">
									<div className="text-center">
										<h5 className="fw-bolder">
											Popular Item
										</h5>
										<div className="d-flex justify-content-center small text-warning mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
										</div>
										<span>
											$40.00
										</span>
									</div>
								</div>
								<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
									<div className="text-center">
										<a href="#" className="btn btn-outline-dark mt-auto">
											Add to catr
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="py-5 bg-dark">
				<div className="container-fluid">
					<p className="m-0 text-center text-white">
						Copyright © Your Website 2022
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
