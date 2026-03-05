import { motion } from "framer-motion";
import { Target, BarChart3, Cpu, Shield, Clock } from "lucide-react";

export const ModeloSMART = () => {
    const smart = [
        {
            letter: "S",
            title: "Specific",
            icon: <Target size={40} />,
            text: "El proyecto busca desarrollar un sistema de alarma inteligente para detectar intrusos dentro de una vivienda.",
        },
        {
            letter: "M",
            title: "Measurable",
            icon: <BarChart3 size={40} />,
            text: "El sistema debe detectar movimiento y enviar una alerta en menos de 5 segundos.",
        },
        {
            letter: "A",
            title: "Attainable",
            icon: <Cpu size={40} />,
            text: "El sistema se desarrollará usando Arduino, sensores de movimiento y componentes electrónicos accesibles.",
        },
        {
            letter: "R",
            title: "Realistic",
            icon: <Shield size={40} />,
            text: "El proyecto es viable porque utiliza tecnología económica y disponible para prototipos.",
        },
        {
            letter: "T",
            title: "Timely",
            icon: <Clock size={40} />,
            text: "El prototipo funcional del sistema será desarrollado en un plazo máximo de 4 semanas.",
        },
    ];

    const objetivos = [
        "Diseñar un sistema de alarma inteligente basado en sensores de movimiento conectados a un microcontrolador Arduino.",
        "Programar el microcontrolador para detectar movimiento sospechoso y activar automáticamente el sistema de alerta.",
        "Integrar un módulo de comunicación que permita enviar una notificación al teléfono del propietario.",
        "Realizar pruebas de funcionamiento para validar la detección de intrusos y el envío de alertas.",
        "Construir y validar un prototipo funcional del sistema de alarma inteligente para viviendas.",
    ];

    return (
        <div className="bg-[#020617] text-gray-200">
            {/* HERO */}

            <section className="py-28 text-center bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900">
                <h1 className="text-6xl font-bold text-cyan-400 mb-6">
                    Modelo SMART
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    El modelo SMART permite definir objetivos claros y medibles
                    para el desarrollo del sistema de alarma inteligente para
                    viviendas.
                </p>
            </section>

            {/* VIDEO */}

            <section className="py-20 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-10">
                    Explicación del modelo SMART
                </h2>

                <div className="flex justify-center">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/1-SvuFIQjK8"
                        className="rounded-xl shadow-2xl border border-teal-700"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* SMART CARDS */}

            <section className="py-20 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Componentes del modelo SMART
                </h2>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
                    {smart.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.07 }}
                            className="bg-slate-900 border border-teal-700 rounded-xl p-8 text-center shadow-lg hover:shadow-teal-500/30 transition"
                        >
                            <div className="text-teal-400 flex justify-center mb-4">
                                {s.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2">
                                {s.letter} - {s.title}
                            </h3>

                            <p className="text-gray-400 text-sm">{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* OBJETIVO SMART */}

            <section className="py-24 bg-slate-900 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-12">
                    Objetivo SMART del proyecto
                </h2>

                <div className="max-w-4xl mx-auto bg-slate-800 p-10 rounded-xl border border-teal-700">
                    <p className="text-lg leading-relaxed text-gray-300">
                        Desarrollar un sistema de alarma antirrobo inteligente
                        basado en sensores de movimiento y tecnología Arduino
                        capaz de detectar intrusos dentro de una vivienda y
                        enviar una alerta automática al teléfono del propietario
                        en menos de 5 segundos, implementando un prototipo
                        funcional en un periodo máximo de 4 semanas.
                    </p>
                </div>
            </section>

            {/* OBJETIVOS ESPECIFICOS */}

            <section className="py-24 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Objetivos específicos del proyecto
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {objetivos.map((o, i) => (
                        <div
                            key={i}
                            className="bg-slate-900 border border-teal-700 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition"
                        >
                            <h3 className="text-teal-400 font-semibold mb-3">
                                Objetivo {i + 1}
                            </h3>

                            <p className="text-gray-300">{o}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* IMAGENES TECNOLOGICAS */}

            <section className="py-20 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-10">
                    Tecnología utilizada en el sistema
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                        className="rounded-xl shadow-xl"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1581093588401-22c1c5c9c7c8"
                        className="rounded-xl shadow-xl"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </section>
        </div>
    );
};
