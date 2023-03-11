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
						<p>
							As a <strong>frontend developer</strong>, I possess skills in creating attractive and responsive user interfaces.
							<strong>I am proficient in HTML, CSS, JavaScript and C#</strong>, enabling me to create interactive and dynamic web applications.
							I use frameworks like <strong>React and Blazor</strong> to build scalable and maintainable solutions. Additionally, I have strong teamwork
							and communication skills to provide high-quality solutions and exceed my clients' expectations.
						</p>
						<div className='habilidades'>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={softwareDevelopment} alt='Software development'/>
									<h5>Web development</h5>
								</div>
								<div className='habilidades-texto'>
									As a frontend web developer, I have skills in designing and developing attractive and
									functional user interfaces using HTML, CSS, and JavaScript. I have experience using React
									and Blazor to create dynamic and interactive web applications, and I am committed to continuous
									learning to stay up-to-date on the latest technologies and tackle new challenges in the future.
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

