import React from "react";
import { Col } from "react-bootstrap";

export const ToolCard = ({image, title}) =>{
	return(
		<Col sm={6} md={4}>
			<div className="tool-card">
				<img src={image} alt={title}/>
				<h4>{title}</h4>
			</div>
		</Col>
	);
}