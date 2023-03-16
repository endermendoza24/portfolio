import React from "react";
import unan from '../assets/img/unan.webp';
export const Education = () => {
	return (
		<div className='container' id={'education'}>
			<div className='row'>
				<div className='col-12'>
					<div className='education-box'>
						<h2>Educación</h2>
						<p>Estudié en la UNAN - MANAGUA</p>
						<div className={'education-elements'}>
							<div className='education-image'>
								<img src={unan} alt={'Logo unan'}/>
								<h5>Universidad Nacional Autónoma de Nicaragua</h5>
								<h4>Ingeniería en sistemas de información</h4>
							</div>
							<div className='education-text'>
								<div className={'lista'}>
									2018 - 2023
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}