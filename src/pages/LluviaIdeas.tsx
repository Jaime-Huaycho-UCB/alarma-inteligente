import { motion } from "framer-motion";
import { Lightbulb, Cpu, Shield, Smartphone } from "lucide-react";
import imagenLluviaIdeas from '../assets/lluvia-ideas.jpg';

export const LluviaIdeas = () => {
    const ideasRapidas = [
        "Celular",
        "Casa",
        "Seguridad",
        "Sensores",
        "Cámaras",
        "Altavoz",
        "Batería",
        "Código",
        "Compacto",
        "Fácil",
    ];

    const ideasTecnologicas = [
        {
            icon: <Shield size={28} />,
            title: "Seguridad Inteligente",
            text: "Sistema capaz de detectar intrusos mediante sensores de movimiento.",
        },
        {
            icon: <Smartphone size={28} />,
            title: "Alertas al celular",
            text: "El usuario recibe notificaciones en tiempo real cuando ocurre una intrusión.",
        },
        {
            icon: <Cpu size={28} />,
            title: "Microcontrolador",
            text: "El sistema utiliza Arduino para controlar sensores y ejecutar la lógica.",
        },
        {
            icon: <Lightbulb size={28} />,
            title: "Innovación del sistema",
            text: "Integración de sensores, comunicación y alarma en un solo dispositivo.",
        },
    ];

    return (
        <section className="bg-[#020617] text-gray-200 space-y-28">
            {/* HERO */}

            <div className="py-24 text-center bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900">
                <h1 className="text-5xl font-bold text-cyan-400 mb-6">
                    Lluvia de Ideas
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    En esta etapa se generaron diferentes ideas para encontrar
                    una solución tecnológica al problema de seguridad en
                    viviendas.
                </p>
            </div>

            {/* VIDEO */}

            <div className="flex justify-center px-6">
                <iframe
                    className="w-full max-w-4xl h-[420px] rounded-xl border border-teal-700 shadow-xl"
                    src="https://www.youtube.com/embed/BTpDhIaGf04"
                    title="Lluvia de ideas"
                    allowFullScreen
                />
            </div>

            {/* IDEAS RAPIDAS */}

            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Ideas iniciales generadas
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {ideasRapidas.map((idea, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            className="bg-yellow-200 text-black font-semibold
              flex items-center justify-center h-28 rounded shadow-xl"
                        >
                            {idea}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* IMAGEN DE TU LLUVIA DE IDEAS */}

            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-12">
                    Diagrama de la lluvia de ideas
                </h2>

                <motion.img
                    src={imagenLluviaIdeas}
                    alt="Diagrama lluvia de ideas"
                    className="w-full rounded-xl shadow-2xl border border-teal-700"
                    whileHover={{ scale: 1.02 }}
                />
            </div>

            {/* IDEA PRINCIPAL */}

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-yellow-200 text-black p-10 rounded-xl shadow-xl text-lg leading-relaxed"
                >
                    Imagina un sistema de seguridad diseñado para el hogar,
                    compacto y fácil de instalar, que protege la vivienda
                    mediante una red inteligente de sensores. Cuando el sistema
                    detecta movimiento sospechoso, envía una alerta automática
                    al celular del propietario, permitiéndole reaccionar en
                    tiempo real desde cualquier lugar. Además, el sistema puede
                    activar una alarma o altavoz para disuadir al intruso,
                    proporcionando una capa adicional de seguridad para la
                    vivienda.
                </motion.div>
            </div>

            {/* IDEAS TECNOLOGICAS */}

            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Ideas tecnológicas del proyecto
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {ideasTecnologicas.map((idea, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-900 border border-teal-700
              rounded-xl p-8 shadow-lg"
                        >
                            <div className="text-teal-400 mb-4">
                                {idea.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-teal-400 mb-3">
                                {idea.title}
                            </h3>

                            <p className="text-gray-300">{idea.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
