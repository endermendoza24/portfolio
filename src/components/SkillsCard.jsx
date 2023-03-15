import React from "react";
import "../App.css";
import { Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";



export const SkillsCard = ({image, title, description}) =>{
	return (
		<Col>
			<div className="card-skills">
				<img src={image} className='imagen-card' alt='Imagen'/>
					<div className='textos-skill'>
						<h3>{title}</h3>
						<span>{description}</span>
					</div>
			</div>
		</Col>
	);
}