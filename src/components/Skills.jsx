import React from "react";
import {Col, Container, Row, Tab} from "react-bootstrap";
import {SkillsCard} from "./SkillsCard";
import softwareDevelopment from '../assets/img/software-development.png';
import technicalSupport from '../assets/img/technical-support.png';
import businessIntelligence from '../assets/img/business-intelligence.png';
import wordpress from '../assets/img/wordpress.svg';
import dotnet from '../assets/img/dot-net-core-7.svg';
import git from "../assets/img/git.svg";
import blazor from '../assets/img/blazor.svg';
import {CourseCard} from "./CourseCard";

export const Skills = () =>{
    // habilidades
    const mySkills = [

        {
            title: ".Net Core",
            description: "Como estudiante universitario, tengo algo de experiencia en desarrollo .NET Core y muchas ganas de aprender y mejorar.",
            image: dotnet,
        },
        {
            title: "Blazor",
            description:"Tengo experiencia a nivel principiante con Blazor, pero tengo muchas ganas de aprender y mostrar mis habilidades para demostrar mi capacidad y crecer profesionalmente",
            image: blazor,
        },
        {
            title: "Git & Github",
            description: "Como profesional en la tecnología es fundamental poseer conocimientos en control de versiones, en este caso con GIT ",
            image: git,
        },
        {
            title: "Wordpress",
            description: "He tenido la oportunidad de trabajar algunas veces en Wordpress",
            image: wordpress,
        },
        {
            title: "PowerBI",
            description: "He utilizado PowerBI como herramienta de presentación de datos, fundamentalmente en la materia de inteligencia de negocios.",
            image: businessIntelligence,
        },
        {
            title: "Soporte técnico",
            description: "Tengo experiencia en soporte técnico de software, reparación de errores, soporte a usuarios, " +
                "instalación de sistemas operativos, instalación de softwares, etc.",
            image: technicalSupport,
        },

    ];
    return (
        <section className="skill-bx" id="skills">
            <Container>
                <Row>
                   <Col size={12}>
                       <div>
                           <h2>Habilidades</h2>
                           <Tab.Container id="projects-tabs" defaultActiveKey="first">
                               <Tab.Content>
                                   <Tab.Pane eventKey="first">
                                       <Row className='contenedor'>
                                           {
                                               mySkills.map((item, index) => {
                                                   return (
                                                       <div >
                                                           <SkillsCard
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
    )
}