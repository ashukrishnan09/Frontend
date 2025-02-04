import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
	const img1 = "images/blog-1.jpg";
	const img2 = "images/blog-2.jpg";
	const img3 = "images/blog-3.jpg";
	const img4 = "images/blog-4.jpg";

	return (
		<>
			<section className="home-wrapper-1 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-6">
							<div className="main-banner  position-relative">
								<img
									src="images/main-banner-1.jpg"
									className="img-fluid rounded-3"
									alt="main-banner"
								/>
								<div className="main-banner-content position-absolute">
									<h4>SUPERCHARGED FOR PROS.</h4>
									<h5>iPad 15+ Pro.</h5>
									<p>
										From ₹31000.00 <br />
										or 1500.50/mo.
									</p>
									<Link className="button">BUY NOW</Link>
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
								<div className="small-banner  position-relative">
									<img
										src="images/catbanner-01.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>BEST SALE</h4>
										<h5>Computer Maxx.</h5>
										<p>
											From ₹31000.00 <br />
											or 1500.50/mo.
										</p>
									</div>
								</div>
								<div className="small-banner  position-relative">
									<img
										src="images/catbanner-02.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>SUPERCHARGED FOR PROS.</h4>
										<h5>iPad 15+ Pro.</h5>
										<p>
											From ₹31000.00 <br />
											or 1500.50/mo.
										</p>
									</div>
								</div>
								<div className="small-banner  position-relative">
									<img
										src="images/catbanner-03.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>SUPERCHARGED FOR PROS.</h4>
										<h5>iPad 15+ Pro.</h5>
										<p>
											From ₹31000.00 <br />
											or 1500.50/mo.
										</p>
									</div>
								</div>
								<div className="small-banner  position-relative">
									<img
										src="images/catbanner-04.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>SUPERCHARGED FOR PROS.</h4>
										<h5>iPad 15+ Pro.</h5>
										<p>
											From ₹31000.00 <br />
											or 1500.50/mo.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="services d-flex align-items-center justify-content-between">
								<div className="d-flex align-items-center gap-15">
									<img src="images/service.png" alt="services" />
									<div>
										<h6>Free Shipping</h6>
										<p className="mb-0">From all order over ₹100</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-15">
									<img src="images/service-02.png" alt="services" />
									<div>
										<h6>Daily Surprize Offers</h6>
										<p className="mb-0">Save upto 25% off</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-15">
									<img src="images/service-03.png" alt="services" />
									<div>
										<h6>Support 24/7</h6>
										<p className="mb-0">Shop with an expert</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-15">
									<img src="images/service-04.png" alt="services" />
									<div>
										<h6>Affordable Prices</h6>
										<p className="mb-0">Get Factory Default Price</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-15">
									<img src="images/service-05.png" alt="services" />
									<div>
										<h6>Secure Payments</h6>
										<p className="mb-0">100% Protected Payents</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="home-wrapper-2 py-5">
				<div className="conatiner-xxl">
					<div className="row">
						<div className="col-12 d-flex  ">
							<div className="categories d-flex  justify-content-between flex-wrap align-items-center">
								<div className="d-flex gap align-items-center">
									<div>
										<h6>Cameras</h6>
										<p>10 Items</p>
									</div>
									<img src="images/camera.jpg" alt="camera" />
								</div>
								<div className="d-flex gap align-items-center">
									<div>
										<h6>Music and Gaming</h6>
										<p>10 Items</p>
									</div>
									<img src="images/camera.jpg" alt="camera" />
								</div>
								<div className="d-flex gap align-items-center">
									<div>
										<h6>Smart Tv</h6>
										<p>10 Items</p>
									</div>
									<img src="images/tv.jpg" alt="camera" />
								</div>
								<div className="d-flex gap align-items-center">
									<div>
										<h6>Headphones</h6>
										<p>10 Items</p>
									</div>
									<img src="images/headphone.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Cameras</h6>
										<p>10 Items</p>
									</div>
									<img src="images/camera.jpg" alt="camera" />
								</div>
								<div className=" d-flex gap align-items-center">
									<div>
										<h6>Music and Gaming</h6>
										<p>10 Items</p>
									</div>
									<img src="images/camera.jpg" alt="camera" />
								</div>
								<div className=" d-flex gap align-items-center">
									<div>
										<h6>Smart Tv</h6>
										<p>10 Items</p>
									</div>
									<img src="images/tv.jpg" alt="camera" />
								</div>
								<div className="d-flex gap align-items-center">
									<div>
										<h6>Headphones</h6>
										<p>10 Items</p>
									</div>
									<img src="images/headphone.jpg" alt="camera" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="marque-wrapper home-wrapper-2 py-5">
				<div className="conatiner-xxl">
					<div className="row">
						<div className="col-12">
							<div className="marque-inner-wrapper card-wrapper">
								<Marquee className="d-flex">
									<div className="mx-4 w-25">
										<img src="images/brand-01.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-02.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-03.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-04.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-05.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-06.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-07.png" alt="brand" />
									</div>
									<div className="mx-4 w-25">
										<img src="images/brand-08.png" alt="brand" />
									</div>
								</Marquee>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="blog-wrapper py-5 home-wrapper-2">
				<div className="conatiner-xxl">
					<div className="row">
						<h3 className="section-heading">Featured Collections</h3>
						<ProductCard></ProductCard>
						<ProductCard></ProductCard>
						<ProductCard></ProductCard>
						<ProductCard></ProductCard>
					</div>
				</div>
			</section>
			<section className="blog-wrapper py-5 home-wrapper-2">
				<div className="conatiner-xxl">
					<div className="row">
						<h3 className="section-heading">Our Latest Blogs</h3>
						<BlogCard image={img1}></BlogCard>
						<BlogCard image={img2}></BlogCard>
						<BlogCard image={img3}></BlogCard>
						<BlogCard image={img4}></BlogCard>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
