import { motion } from "framer-motion";

export const LaPregunta = () => {
  return (
    <section className="space-y-16">

      {/* Sección de cabecera visual */}
      <motion.div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2807016/pexels-photo-2807016.jpeg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 text-center text-5xl md:text-6xl font-extrabold text-[#A4E0CE] pt-32">
          ¿Cómo solucionar el problema de <span className="text-white">robos a domicilios?</span>
        </h1>
      </motion.div>

      {/* Infografía de prevención (imagen grande) */}
      <div className="flex justify-center">
        <img
          src="https://blog.nationwide.com/wp-content/uploads/2013/07/HomeTheft.png"
          alt="Infografía prevención de robos"
          className="w-full max-w-4xl rounded-lg shadow-xl"
        />
        {/* Esta imagen es un ejemplo de infografía con consejos y estadísticas reales. */}
      </div>

      {/* Video explicativo adicional */}
      <div className="flex justify-center">
        <iframe
          className="w-full max-w-4xl h-64 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/QJc7LSnDt-Q"
          title="Tips de prevención de robos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      {/* Sección: Descarga y recursos visuales */}
      <div className="bg-[#F8FAFC] p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-[#3A7CA5] text-center mb-8">
          Recursos útiles para reforzar la seguridad de tu hogar
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <ResourceCard
            title="Checklist de seguridad descargable"
            description="Lista de verificación para reforzar la seguridad de tu casa (PDF)."
            link="https://arapahoeco.gov/Sheriffs%20Office/Community%20Resources/Home%20Security%20and%20Burglary%20prevention%20Check%20list.%20.pdf"
            buttonText="Descargar PDF"
          />

          <ResourceCard
            title="Campaña oficial Guardia Civil"
            description="Información concreta con consejos de prevención para evitarlos."
            link="https://web.guardiacivil.es/gl/colaboracion/consejos/robo_domicilio/"
            buttonText="Ver consejos"
          />

          <ResourceCard
            title="Medidas preventivas según gobierno"
            description="Recomendaciones prácticas paso a paso para reforzar tu seguridad."
            link="https://www.mendoza.gov.ar/prensa/medidas-de-prevencion-para-evitar-robos-en-el-hogar/"
            buttonText="Ver recomendaciones"
          />
        </div>
      </div>

      {/* Sección informativa con fotos */}
      <div className="grid md:grid-cols-3 gap-6 px-8">
        <ImageCard
          src="https://images.pexels.com/photos/957024/pexels-photo-957024.jpeg"
          caption="Cámaras de seguridad modernas reduzcan robos"
        />
        <ImageCard
          src="https://images.pexels.com/photos/4723328/pexels-photo-4723328.jpeg"
          caption="Iluminación con sensores disuade intentos de robo"
        />
        <ImageCard
          src="https://images.pexels.com/photos/5411/sign-home-insurance-protection.jpg"
          caption="Sistemas de alarma visibles incrementan la seguridad"
        />
      </div>

      {/* Sección con datos reales y explicación */}
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-4">
        <h2 className="text-3xl font-bold text-[#3A7CA5]">
          Datos reales sobre la seguridad del hogar
        </h2>
        <p className="text-[#2C3A47]">
          Estudios recientes muestran que tener un sistema de seguridad (alarmas, cámaras,
          sensores) reduce de forma significativa la probabilidad de sufrir un robo.
        </p>
        <ul className="list-disc list-inside text-[#2C3A47]">
          <li>Más del 85% de hogares ya usan sistemas de seguridad modernos.</li>
          <li>Puertas blindadas y videoporteros con cámara son algunas de las medidas más comunes.</li>
          <li>La ausencia prolongada sin señales de vida en la casa aumenta el riesgo de intrusión.</li>
        </ul>
      </div>

    </section>
  );
};

// Tarjeta para recursos externos
const ResourceCard = ({
  title,
  description,
  link,
  buttonText,
}: {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition">
    <h3 className="font-bold text-xl text-[#065A82]">{title}</h3>
    <p className="text-sm text-[#2C3A47] my-2">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block text-center bg-[#3A7CA5] hover:bg-[#2C5A83] text-white py-2 rounded-lg mt-3"
    >
      {buttonText}
    </a>
  </motion.div>
);

// Tarjeta simple con imagen
const ImageCard = ({ src, caption }: { src: string; caption: string }) => (
  <motion.div
    className="rounded-lg overflow-hidden shadow-lg"
    whileHover={{ scale: 1.04 }}
  >
    <img src={src} alt={caption} className="w-full h-40 object-cover" />
    <p className="p-2 text-center text-[#2C3A47] font-medium">{caption}</p>
  </motion.div>
);