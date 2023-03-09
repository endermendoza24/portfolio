import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = ({ phoneNumber }) => {
	const handleWhatsAppClick = () => {
	const message = "Me interesa tu trabajo, contáctemonos..."; // default message
	window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
};


	return (
		<button onClick={handleWhatsAppClick} className="whatsapp-button">
			<FaWhatsapp />
		</button>
	);
};
