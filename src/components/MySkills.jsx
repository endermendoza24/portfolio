import React from 'react';
import '../App.css';
import softwareDevelopment from '../assets/img/software-development.png';
import technicalSupport from '../assets/img/technical-support.png';
import businessIntelligence from '../assets/img/business-intelligence.png';

export const  MySkills = () => {
  return (
    <section className='skill' id={'skills'}>
		<div className={'container'}>
			<div className={'row'}>
				<div className='col-12'>
					<div className="skill-bx wow zoomIn">
						<h2>My skills</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, mollitia quas! Assumenda illo neque nesciunt odit quam quasi, quibusdam vero?</p>
						<div className='habilidades'>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={softwareDevelopment} alt='Software development'/>
									<h5>Web development</h5>
								</div>
								<div className='habilidades-texto'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={technicalSupport} alt='Technical support'/>
									<h5>Technical support</h5>
								</div>
								<div className='habilidades-texto'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={businessIntelligence} alt='Business intelligence'/>
									<h5>Business intelligence</h5>
								</div>
								<div className='habilidades-texto'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ullam.
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

