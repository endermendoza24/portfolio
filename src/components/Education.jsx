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
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos magnam quidem reiciendis, veritatis vitae.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}