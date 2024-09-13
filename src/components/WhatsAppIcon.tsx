import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  return (
    <div>
      <a
        href="https://wa.me/+995511106081"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 left-6 bg-[#67A684] p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        <FaWhatsapp
          size={40}
          className="text-white bg-[#67A684] rounded-full
          "
        />
      </a>
    </div>
  );
}
