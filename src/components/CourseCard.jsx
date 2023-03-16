import { Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";

export const CourseCard = ({ title, description, imgUrl, fecha,link }) => {
	return (
		<Col sm={6} md={4}>
			<div className={'proj-imgbx'}>
				<img src={imgUrl} alt='Info'/>
				<div className={'proj-txtx'}>
					<h4>{title}</h4>
					<span>{description}</span>
					<h5>{fecha}</h5>
					<a className="btn btn-success" target="_blank" href={link}>Ir a&nbsp;<ArrowRightCircle size={25} /></a>
				</div>
			</div>
		</Col>
	)
}