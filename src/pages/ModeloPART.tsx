import { motion } from "framer-motion";
import { Cpu, Users, Boxes, Workflow } from "lucide-react";

export const ModeloPART = () => {
    return (
        <div className="bg-[#020617] text-gray-200">
            {/* HERO */}

            <section className="py-28 text-center bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900">
                <h1 className="text-6xl font-bold text-cyan-400 mb-6">
                    Modelo PART
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    El modelo PART permite estructurar proyectos de innovación
                    identificando los procesos que se realizan, los actores
                    involucrados, los recursos necesarios y la tecnología
                    utilizada para construir una solución.
                </p>
            </section>

            {/* VIDEO */}

            <section className="py-20 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-10">
                    Explicación del Modelo PART
                </h2>

                <div className="flex justify-center">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/Bk1nF0D2N9E"
                        className="rounded-xl shadow-2xl border border-teal-700"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* GRID PART */}

            <section className="py-24 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Componentes del Modelo PART
                </h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    <PartCard
                        icon={<Workflow size={32} />}
                        title="Procesos"
                        items={[
                            "Diseño del sistema de alarma basado en Arduino",
                            "Configuración del sensor de movimiento",
                            "Programación del microcontrolador",
                            "Integración del sistema de comunicación",
                            "Activación y desactivación del sistema",
                            "Pruebas de detección de intrusos",
                            "Verificación del envío de alertas",
                        ]}
                    />

                    <PartCard
                        icon={<Users size={32} />}
                        title="Actores"
                        items={[
                            "Propietario que activa o desactiva la alarma",
                            "Intruso detectado por el sensor",
                            "Desarrollador que construye el sistema",
                            "Usuario que recibe la alerta en su teléfono",
                        ]}
                    />

                    <PartCard
                        icon={<Boxes size={32} />}
                        title="Recursos"
                        items={[
                            "Placa Arduino",
                            "Sensor de movimiento",
                            "Módulo de comunicación",
                            "Cables y componentes electrónicos",
                            "Presupuesto para los componentes",
                            "Conocimiento en programación Arduino",
                            "Conocimiento básico en electrónica",
                        ]}
                    />

                    <PartCard
                        icon={<Cpu size={32} />}
                        title="Tecnología"
                        items={[
                            "Plataforma Arduino",
                            "Sensores de detección de movimiento",
                            "Programación embebida",
                            "Comunicación móvil para envío de alertas",
                        ]}
                    />
                </div>
            </section>

            {/* IMÁGENES TECNOLÓGICAS */}

            <section className="py-24 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Tecnologías utilizadas en el proyecto
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ImageCard
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                        title="Programación de sistemas electrónicos"
                    />

                    <ImageCard
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                        title="Prototipos con Arduino"
                    />

                    <ImageCard
                        src="https://images.unsplash.com/photo-1581092588429-2d4c9d6c9c80"
                        title="Tecnología aplicada a la seguridad"
                    />
                </div>
            </section>

            {/* FLUJO DEL SISTEMA */}

            <section className="py-24 bg-slate-900 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-12">
                    Flujo de funcionamiento del sistema
                </h2>

                <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
                    <Step text="Sensor detecta movimiento" />

                    <Step text="Arduino procesa la señal" />

                    <Step text="Sistema envía alerta" />

                    <Step text="Usuario recibe notificación" />
                </div>
            </section>
        </div>
    );
};

const PartCard = ({ icon, title, items }: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 border border-teal-700 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition"
        >
            <div className="flex items-center gap-3 mb-4 text-teal-400">
                {icon}
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>

            <ul className="space-y-2 text-gray-300">
                {items.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                ))}
            </ul>
        </motion.div>
    );
};

const ImageCard = ({ src, title }: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden border border-teal-700 shadow-lg"
        >
            <img src={src} className="h-52 w-full object-cover" />

            <div className="p-4 text-center text-gray-300">{title}</div>
        </motion.div>
    );
};

const Step = ({ text }: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 border border-teal-700 p-6 rounded-xl"
        >
            <p className="text-gray-300">{text}</p>
        </motion.div>
    );
};
