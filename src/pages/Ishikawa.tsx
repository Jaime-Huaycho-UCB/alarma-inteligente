import { motion } from "framer-motion";
import { Cpu, ShieldAlert, Network, MonitorSmartphone } from "lucide-react";

export const Ishikawa = () => {
    const diagramaIshikawa = "src/assets/ishikawa.jpeg";

    const categorias = [
        {
            titulo: "Arquitectura de Software",
            icon: Cpu,
            puntos: [
                "Errores de código críticos (bugs)",
                "Latencia en red y notificaciones",
                "Debilidades en algoritmos de detección",
            ],
        },

        {
            titulo: "Infraestructura Ambiental",
            icon: Network,
            puntos: [
                "Atenuación de señal por clima",
                "Cortes de energía eléctrica",
                "Obstáculos físicos para WiFi o RF",
            ],
        },

        {
            titulo: "Subsistemas de Hardware",
            icon: ShieldAlert,
            puntos: [
                "Sensores de baja precisión",
                "Problemas de batería de respaldo",
                "Cámaras con baja calidad nocturna",
            ],
        },

        {
            titulo: "Interfaz de Usuario",
            icon: MonitorSmartphone,
            puntos: [
                "Mala instalación de dispositivos",
                "Olvido de activación del sistema",
                "Mantenimiento inadecuado",
            ],
        },
    ];

    return (
        <div className="bg-[#020617] text-gray-200">
            {/* HERO */}

            <section className="py-28 text-center bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900">
                <h1 className="text-6xl font-bold text-cyan-400 mb-6">
                    Análisis de Causa Raíz
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                    Para comprender el problema de seguridad en los hogares se
                    aplicó el
                    <strong className="text-cyan-400">
                        {" "}
                        Diagrama de Ishikawa
                    </strong>
                    , una herramienta de análisis que permite identificar las
                    diferentes causas que originan un problema y organizarlas de
                    forma visual.
                </p>
            </section>

            {/* VIDEO */}

            <section className="py-20 px-6">
                <h2 className="text-3xl text-center text-cyan-400 mb-10">
                    Explicación del método Ishikawa
                </h2>

                <div className="flex justify-center">
                    <iframe
                        width="900"
                        height="500"
                        src="https://www.youtube.com/embed/VM8Tz3xHwsM"
                        className="rounded-xl shadow-2xl border border-cyan-700"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* DIAGRAMA */}

            <section className="py-24 px-6">
                <h2 className="text-3xl text-center text-cyan-400 mb-12">
                    Diagrama Ishikawa del Sistema de Seguridad
                </h2>

                <div className="max-w-6xl mx-auto">
                    <img
                        src={diagramaIshikawa}
                        alt="Diagrama Ishikawa"
                        className="rounded-xl shadow-2xl border border-cyan-700 w-full h-auto object-contain"
                    />
                </div>

                <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
                    El diagrama permite visualizar cómo diferentes factores
                    tecnológicos, ambientales y humanos influyen en la
                    eficiencia de un sistema de alarma inteligente para la
                    prevención de robos.
                </p>
            </section>

            {/* CATEGORIAS */}

            <section className="py-24 px-6">
                <h2 className="text-3xl text-center text-cyan-400 mb-16">
                    Principales causas identificadas
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    {categorias.map((c, i) => {
                        const Icon = c.icon;

                        return (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate-900 border border-cyan-700 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/20 transition"
                            >
                                <Icon
                                    className="text-cyan-400 mb-4"
                                    size={40}
                                />

                                <h3 className="text-xl text-cyan-400 font-semibold mb-4">
                                    {c.titulo}
                                </h3>

                                <ul className="text-gray-300 space-y-2 text-sm">
                                    {c.puntos.map((p, i) => (
                                        <li key={i}>• {p}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* IMPACTO */}

            <section className="py-24 bg-slate-900 px-6">
                <h2 className="text-3xl text-center text-cyan-400 mb-10">
                    Importancia del análisis de causas
                </h2>

                <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
                    El análisis mediante el diagrama de Ishikawa permite
                    identificar las causas tecnológicas, ambientales y humanas
                    que influyen en la seguridad de una vivienda. Al comprender
                    estas causas es posible diseñar un sistema de alarma
                    inteligente más robusto, capaz de detectar intrusos, reducir
                    falsas alarmas y enviar alertas en tiempo real.
                </p>
            </section>
        </div>
    );
};
