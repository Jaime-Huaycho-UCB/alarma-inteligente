import { motion } from "framer-motion";

export const DefinicionProblema = () => {
    const causas = [
        {
            titulo: "Falta de sistemas de seguridad",
            texto: "Muchas viviendas no cuentan con alarmas, sensores o cámaras que permitan detectar intrusos.",
        },
        {
            titulo: "Accesos vulnerables",
            texto: "Puertas o ventanas sin seguro permiten que los intrusos ingresen fácilmente a la vivienda.",
        },
        {
            titulo: "Falta de iluminación exterior",
            texto: "Las zonas oscuras alrededor de una casa facilitan que los delincuentes actúen sin ser vistos.",
        },
        {
            titulo: "Casas aparentemente vacías",
            texto: "Los intrusos suelen atacar viviendas cuando los propietarios no se encuentran presentes.",
        },
    ];

    return (
        <div className="bg-[#020617] text-gray-200">
            {/* HERO */}

            <section className="py-28 text-center bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900">
                <h1 className="text-6xl font-bold text-cyan-400 mb-6">
                    Definición del Problema
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    El aumento de robos a viviendas representa un problema de
                    seguridad que afecta a muchas familias. La falta de sistemas
                    de vigilancia y detección temprana permite que intrusos
                    accedan a propiedades privadas con facilidad.
                </p>
            </section>

            {/* VIDEO */}

            <section className="py-20 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-10">
                    Problemática de los robos a viviendas
                </h2>

                <div className="flex justify-center">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/9hR7hYFzHVE"
                        className="rounded-xl shadow-2xl border border-teal-700"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* EXPLICACION */}

            <section className="py-24 max-w-6xl mx-auto px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Contexto del problema
                </h2>

                <p className="text-lg leading-relaxed text-gray-300 text-center max-w-4xl mx-auto">
                    Los robos a domicilio se han convertido en una preocupación
                    creciente para muchas personas. Los delincuentes suelen
                    buscar viviendas que no cuentan con sistemas de seguridad
                    visibles como cámaras, alarmas o sensores de movimiento.
                    Esta situación genera riesgos tanto para la seguridad de los
                    bienes como para la tranquilidad de los propietarios.
                </p>
            </section>

            {/* CAUSAS */}

            <section className="py-24 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-16">
                    Principales causas del problema
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    {causas.map((c, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.06 }}
                            className="bg-slate-900 border border-teal-700 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition"
                        >
                            <h3 className="text-xl text-teal-400 font-semibold mb-3">
                                {c.titulo}
                            </h3>

                            <p className="text-gray-300">{c.texto}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* IMAGENES */}

            <section className="py-20 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-12">
                    Situaciones relacionadas con el problema
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1558002038-1055907df827"
                        className="rounded-xl shadow-xl"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1595231712314-5c0b8d0d5f3e"
                        className="rounded-xl shadow-xl"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1581091012184-5c4c3c48f4f7"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </section>

            {/* IMPORTANCIA */}

            <section className="py-24 bg-slate-900 px-6">
                <h2 className="text-3xl text-center text-teal-400 mb-12">
                    Importancia de encontrar una solución
                </h2>

                <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
                    Desarrollar tecnologías de seguridad inteligentes permite
                    detectar intrusos en tiempo real y enviar alertas inmediatas
                    al propietario. Los sistemas basados en sensores de
                    movimiento, cámaras y comunicación móvil ayudan a prevenir
                    robos y aumentar la protección de las viviendas.
                </p>
            </section>
        </div>
    );
};
