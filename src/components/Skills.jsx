import React from "react";
import {Col, Container, Row, Tab} from "react-bootstrap";
import {SkillsCard} from "./SkillsCard";
import softwareDevelopment from '../assets/img/software-development.png';
import technicalSupport from '../assets/img/technical-support.png';
import businessIntelligence from '../assets/img/business-intelligence.png';
import wordpress from '../assets/img/wordpress.svg';
import dotnet from '../assets/img/dot-net-core-7.svg';
import blazor from '../assets/img/blazor.svg';
import {CourseCard} from "./CourseCard";

export const Skills = () =>{
    // habilidades
    const mySkills = [
        {
            title: "Software development",
            description: "As a frontend web developer, I have skills in designing and developing attractive and functional user interfaces using HTML, CSS, and JavaScript.",
            image: softwareDevelopment,
        },
        {
            title: ".Net Core",
            description: "As a university student, I have some experience with .NET Core development and am eager to learn and improve.",
            image: dotnet,
        },
        {
            title: "Blazor",
            description:"I have beginner-level experience with Blazor, but I am eager to learn and showcase\n" +
                "\t\t\t\t\t\t\t\t\tmy skills to demonstrate my ability and grow professionally",
            image: blazor,
        },
        {
            title: "Wordpress",
            description: "Although my experience with WordPress is limited, I am eager to learn and improve.\n" +
                "\t\t\t\t\t\t\t\t\tI have dabbled with the platform and have a basic understanding of its functionality and customization options.",
            image: wordpress,
        },
        {
            title: "PowerBI",
            description: "I have some exposure to Power BI, although I consider myself a beginner. However, I am highly motivated to enhance my\n" +
                "\t\t\t\t\t\t\t\t\tskills and knowledge of this technology in order to demonstrate my ability and progress in my career",
            image: businessIntelligence,
        },
        {
            title: "Technical support",
            description: "I have experience in software technical support, repairing software errors,\n" +
                "\t\t\t\t\t\t\t\t\tproviding customer service, and configuring Hostinger servers.",
            image: technicalSupport,
        },

    ];
    return (
        <section className="skill-bx" id="skills">
            <Container>
                <Row>
                   <Col size={12}>
                       <div>
                           <h2>Skills</h2>
                           <p>As a frontend developer, I possess skills in creating attractive and responsive user interfaces.
                               I am proficient in HTML, CSS, JavaScript and C#, enabling me to create interactive and dynamic web applications.
                               I use frameworks like React and Blazor to build scalable and maintainable solutions. Additionally,
                               I have strong teamwork and communication skills to provide high-quality solutions and exceed my clients'
                               expectations.</p>
                           <Tab.Container id="projects-tabs" defaultActiveKey="first">
                               <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
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