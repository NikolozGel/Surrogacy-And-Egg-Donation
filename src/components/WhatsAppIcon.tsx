import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  return (
    <div>
      <a
        href="https://wa.me/+995511106081"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 left-7 bg-[#67A684] p-3 rounded-full shadow-lg hover:bg-orange-400"
      >
        <FaWhatsapp
          size={48}
          className="text-white 
         "
        />
      </a>
    </div>
  );
}
