import React from "react";
import { Col } from "react-bootstrap";

export const ToolCard = ({ image, title }) => {
	return (
		<Col className="tool-imgbx" sm={6} md={4}>
			<img src={image} alt={title} />
			<div className="tool-txtx">
				<h4>{title}</h4>
			</div>

		</Col>
	);
}