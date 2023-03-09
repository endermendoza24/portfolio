import { Col } from "react-bootstrap";

export const CourseCard = ({ title, description, imgUrl, fecha }) => {
	return (
		<Col sm={6} md={4}>
			<div className={'proj-imgbx'}>
				<img src={imgUrl} />
				<div className={'proj-txtx'}>
					<h4>{title}</h4>
					<span>{description}</span>
					<h5>{fecha}</h5>
				</div>
			</div>
		</Col>
	)
}