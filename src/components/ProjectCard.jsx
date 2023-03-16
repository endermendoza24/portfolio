import { Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, tecnologia, link }) => {
    return (
        <Col sm={6} md={4}>
            <div className={'proj-imgbx'}>
                <img src={imgUrl} />
                <div className={'proj-txtx'}>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span>{tecnologia}</span> <br/>
                    <a className="btn btn-success" target="_blank" href={link}>Ir...&nbsp;<ArrowRightCircle size={25} /></a>
                </div>

            </div>
        </Col>
    )
}