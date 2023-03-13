import React from 'react';
import '../App.css';
import softwareDevelopment from '../assets/img/software-development.png';
import technicalSupport from '../assets/img/technical-support.png';
import businessIntelligence from '../assets/img/business-intelligence.png';
import wordpress from '../assets/img/wordpress.svg';
import dotnet from '../assets/img/dot-net-core-7.svg';
import blazor from '../assets/img/blazor.svg';

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
									<img src={softwareDevelopment} alt='Web development'/>
									<h5>Web development</h5>
								</div>
								<div className='habilidades-texto'>
									As a frontend web developer, I have skills in designing and developing attractive and
									functional user interfaces using HTML, CSS, and JavaScript.
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={dotnet} alt='Dotnet experiencie'/>
									<h5>.Net Core experiencie</h5>
								</div>
								<div className='habilidades-texto'>
									As a university student, I have some experience with .NET Core development and am eager to learn and improve.
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={wordpress} alt='Wordpress experiencie'/>
									<h5>Wordpress experiencie</h5>
								</div>
								<div className='habilidades-texto'>
									Although my experience with WordPress is limited, I am eager to learn and improve.
									I have dabbled with the platform and have a basic understanding of its functionality and customization options.
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={blazor} alt="Blazor"/>
									<h5>Blazor</h5>
								</div>
								<div className='habilidades-texto'>
									I have beginner-level experience with Blazor, but I am eager to learn and showcase
									my skills to demonstrate my ability and grow professionally
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={businessIntelligence} alt='Business intelligence'/>
									<h5>Business intelligence</h5>
								</div>
								<div className='habilidades-texto'>
									I have some exposure to Power BI, although I consider myself a beginner. However, I am highly motivated to enhance my
									skills and knowledge of this technology in order to demonstrate my ability and progress in my career
								</div>
							</div>
							<div className='habilidades-hijos'>
								<div className='habilidades-iconos'>
									<img src={technicalSupport} alt='Technical support'/>
									<h5>Technical support</h5>
								</div>
								<div className='habilidades-texto'>
									I have experience in software technical support, repairing software errors,
									providing customer service, and configuring Hostinger servers.
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

