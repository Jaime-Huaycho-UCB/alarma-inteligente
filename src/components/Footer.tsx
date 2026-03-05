import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#2C3A47] text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo + Descripción */}
        <div>
          <h3 className="text-2xl font-bold">Alarma Inteligente</h3>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Proyecto de presentación — Sistema de Alarma Antirrobo Inteligente para Casas.
          </p>
        </div>

        {/* Secciones */}
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm text-[#A0AEC0]">
              <li className="hover:text-white cursor-pointer">Inicio</li>
              <li className="hover:text-white cursor-pointer">La Pregunta</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="text-sm text-[#A0AEC0] space-y-2">
              <li>Email: info@alarma.com</li>
              <li>Tel: +591 60000000</li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="text-sm">
          <h4 className="font-semibold mb-3">Síguenos</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-[#65A6B4] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#65A6B4] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#65A6B4] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-[#A0AEC0] mt-6">
        © {new Date().getFullYear()} Alarma Inteligente. Todos los derechos reservados.
      </div>
    </footer>
  );
};