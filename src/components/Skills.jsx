import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { SkillsCard } from "./SkillsCard";
import softwareDevelopment from '../assets/img/software-development.png';
import webDevelopment from "../assets/img/web-development-svgrepo-com.svg";
import businessIntelligence from '../assets/img/business-intelligence.png';



import { CourseCard } from "./CourseCard";

export const Skills = () => {
    // habilidades
    const mySkills = [

        {
            title: "Desarrollo de software",
            description: "Desarrollo software con experiencia en lenguajes JavaScript y C#. Conocimientos en metodologías ágiles, " +
                "bases de datos y diseño orientado a objetos. Capacidad de trabajo en equipo y resolución de problemas",
            image: softwareDevelopment,
        },
        {
            title: "Blazor",
            description: "Inteligencia de Negocios con habilidades en análisis de datos, modelado y visualización. " +
                "Conocimientos de herramientas como Power BI, Excel y SQL. " +
                "Experiencia en la implementación de soluciones BI y la toma de decisiones empresariales basadas en datos.",
            image: businessIntelligence,
        },
        {
            title: "Desarrollo web",
            description: "Desarrollo web con habilidades en HTML, CSS y JavaScript." +
                " Experiencia en la creación de sitios web responsivos y optimizados " +
                "para motores de búsqueda. Capacidad para trabajar en equipo y adaptarse a cambios en el proyecto",
            image: webDevelopment,
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