import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image }) => {
	return (
		<>
			<div className="col-3">
				<div className="blog-card">
					<div className="card-image">
						<img src={image} className="img-fluid" alt="blog-img" />
					</div>
					<div className="blog-content">
						<p className="date">26 June 2024 </p>
						<h5 className="title">A beautiful friday morning renaissance </h5>
						<p className="desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
							provident fug
						</p>
						<Link to="/" className="button">
							Read More
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
