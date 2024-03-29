import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contact from '../assets/img/contact.svg';
import emailJs from "@emailjs/browser";
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // funciona
    const sendEmail = (event) => {
        event.preventDefault();
        setButtonText("Sending...");
        emailJs.sendForm('service_268zf7b', 'template_zyxuf1b', event.target, 'xV5DPJXqfhVbzimjL')
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setStatus({ success: true, message: 'Message sent successfully' });
                    setFormDetails({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                } else {
                    setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                }
            })
            .catch(error => {
                console.log(error);
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            });
    }

    // funciona

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = await response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code == 200) {
    //         setStatus({ succes: true, message: 'Message sent successfully' });
    //     } else {
    //         setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    //     }
    // };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} alt="Contactanos" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Envíame un mensaje</h2>
                                    <form onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input required type="text" value={formDetails.firstName} placeholder="Nombres" name='user_name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input required type="text" value={formDetails.lastName} name="user_lastname" placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input required type="email" value={formDetails.email} name='user_email' placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phone} name="user_phone" placeholder="Número de teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" value={formDetails.message} name="user_message" placeholder="Deja tu mensaje aquí" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
