import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { FaDownload } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';
// import profilePic from '../assets/img/profile-pic.png';
import developer from '../assets/img/developer.svg';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Desarrollador frontend JR", "Ingeniero en sistemas", "Soporte técnico", "Analista de datos"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <a className='enlace' target='_blank' href='https://drive.google.com/file/d/1m5vSiJtf7I2rOJUXzga2Evp3Kr0f8VNi/view?usp=share_link' download>
                                      <span className="tagline">
                                        <FaDownload /> Descargar mi CV
                                      </span>
                                    </a>
                                    <h1>{`Hola, soy Endersson `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer JR", "Frontend developer JR", "Technical support" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>
                                        Recientemente graduado de ingeniería en sistemas.
                                        Apasionado de la tecnología, estoy buscando iniciar
                                        mi carrera contribuyendo con
                                        sólidos conocimientos académicos en tecnología.
                                        Mis principales habilidades es generar nuevas ideas,
                                        trabajar en equipo, ser proactivo, ser autodidacta.
                                    </p>
                                    <button onClick={() => console.log('connect')}><a style={{color:"#fff"}} href="#connect">Contacto<ArrowRightCircle size={25} /></a></button>

                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className={"animate__animated animate__zoomIn"}>
                            <img src={developer} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
