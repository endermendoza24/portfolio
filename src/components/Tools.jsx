import React from 'react';
import {Col, Container, Row, Tab} from "react-bootstrap";
import {ToolCard} from "./ToolCard";
import github from "../assets/img/github-icon.svg";
import git from "../assets/img/git.svg";

export const Tools = () =>{
	// arreglo con las habilidades
	const myTools = [
		{
			image:github,
			title:"Github"
		},
		{
			image:git,
			title:"Git"
		},
		{
			image:github,
			title:"Github"
		},
		{
			image:git,
			title:"Git"
		},
		{
			image:github,
			title:"Github"
		},
		{
			image:git,
			title:"Git"
		},
		{
			image:github,
			title:"Github"
		},
	]
	return(
		<section className="tools-box" id="tools">
			<Container>
				<Row>
					<Col size={12}>
						<div>
							<h2>Herramientas</h2>
							<Tab.Container id="tools-tab" defaultActiveKey="first">
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<Row className="tools-container">
											{
												myTools.map((item, index) => {
													return (
														<div >
															<ToolCard
																key={index}
																{...item}
															/>
														</div>
													)
												})
											}
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