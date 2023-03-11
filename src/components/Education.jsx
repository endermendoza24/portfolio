import React from "react";
import unan from '../assets/img/unan.webp';
export const Education = () => {
	return (
		<div className='container' id={'education'}>
			<div className='row'>
				<div className='col-12'>
					<div className='education-box'>
						<h2>Education</h2>
						<p>I studied at UNAN - MANAGUA</p>
						<div className={'education-elements'}>
							<div className='education-image'>
								<img src={unan} alt={'Logo unan'}/>
								<h5>National Autonomus University of Nicaragua</h5>
								<h4>Information systems engineer</h4>
							</div>
							<div className='education-text'>
								<div className={'lista'}>
									<ul>
										<li>I studied project planning, coordination and ethics</li>
										<li>I got acquainted with technical support.</li>
										<li>I studied technologies like .Net, SQL server,
											Javascript, development. web, PowerBi, software
											preventive maintenance and repair.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}