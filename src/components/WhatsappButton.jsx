import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = ({ phoneNumber }) => {
	const handleWhatsAppClick = () => {
		// Abre una nueva ventana de chat directo en WhatsApp
		window.open(`https://wa.me/${phoneNumber}`);
	};

	return (
		<button onClick={handleWhatsAppClick} className="whatsapp-button">
			<FaWhatsapp />
		</button>
	);
};
