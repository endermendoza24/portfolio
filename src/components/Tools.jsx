import React from 'react';
import { Col, Container, Row, Tab } from "react-bootstrap";
import { ToolCard } from "./ToolCard";
import git from "../assets/img/technologies/git.svg";
import github from "../assets/img/technologies/github-icon.svg";
import dotnet from "../assets/img/technologies/dot-net-core-7.svg";
import blazor from "../assets/img/technologies/blazor.svg";
import powerBi from "../assets/img/technologies/power-bi-1.svg";
import javascript from "../assets/img/technologies/logo-javascript.svg";
import css from "../assets/img/technologies/css-3.svg";
import html from "../assets/img/technologies/html-1.svg";
import wordpress from "../assets/img/technologies/wordpress.svg";

export const Tools = () => {
	// arreglo con las habilidades
	const myTools = [
		{
			image: git,
			title: "Git"
		},
		{
			image: github,
			title: "Github"
		},
		{
			image: dotnet,
			title: ".NetCore"
		},
		{
			image: javascript,
			title: "Javascript"
		},
		{
			image: css,
			title: "CSS"
		},
		{
			image: html,
			title: "HTML"
		},
		{
			image: blazor,
			title: "Blazor"
		},
		{
			image: powerBi,
			title: "PowerBI"
		},
		{
			image: wordpress,
			title: "WordPress"
		},

	]
	return (
		<section className="tools-box" id="tools">
			<Container>
				<Row>
					<Col size={12}>
						<div>
							<h2>Herramientas</h2>
							<Tab.Container id="tools-tab" defaultActiveKey="first">
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<Row>
											<div className='tools-container'>
												{
													myTools.map((item, index) => {
														return (
															<ToolCard
																key={index}
																{...item}
															/>
														)
													})
												}
											</div>
										</Row>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}