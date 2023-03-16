import React from 'react';
import '../App.css';
import diploma1 from '../assets/img/diploma1.png';
import diploma2 from '../assets/img/diploma2.png';
import diploma3 from '../assets/img/diploma3.png';
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Col, Container, Row, Tab} from "react-bootstrap";
// import {ProjectCard} from "./ProjectCard";
import {CourseCard} from "./CourseCard";

export const Courses = () =>{
	// cursos
	const projects = [
		{
			title: "Frontend development",
			description: "Desarrollo web de frontend",
			fecha: '2022',
			imgUrl: diploma1,
			link : "https://platzi.com/p/endermendoza12/curso/2477-frontend-developer-practico/diploma/detalle/"
		},
		{
			title: "Responsive design",
			description: "Maquetación web adaptable",
			fecha: '2022',
			imgUrl: diploma2,
			link:"https://platzi.com/p/endermendoza12/curso/2030-mobile-first/diploma/detalle/"
		},
		{
			title: "Platzi - desarrollo práctico en javascript",
			description: "Desarrollo práctico en javascript",
			fecha: '2022',
			imgUrl: diploma3,
			link:"https://platzi.com/p/endermendoza12/curso/2327-javascript-practico-2021/diploma/detalle/"
		},
	];
	// cursos
	return(
		<section className="project" id="project">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h2>Cursos y certificaciones</h2>
									<p>Estos son algunos de los cursos que he completado en diversas plataformas.</p>

									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
											<Tab.Pane eventKey="first">
												<Row>
													{
														projects.map((project, index) => {
															return (
																<CourseCard
																	key={index}
																	{...project}
																/>
															)
														})
													}
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
}