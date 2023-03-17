import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/*<MailchimpForm />*/}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon" id="footer-icons">
                            <a target='_blank' href="https://www.linkedin.com/in/endersson-alonso-mendoza-mu%C3%B1oz-16909a232/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.facebook.com/endermendoza2405" target='_blank'><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/mendalonso2405/" target='_blank'><img src={navIcon3} alt="Icon" /></a>
                            <a href="https://github.com/endermendoza24" target='_blank'><img src={navIcon4} alt="Github" /></a>
                        </div>
                        <p>&copy;Copyright {currentYear}. Endersson Mendoza Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
