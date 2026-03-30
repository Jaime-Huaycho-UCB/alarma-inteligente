import { motion } from "framer-motion";
import {
    Users,
    DollarSign,
    Cpu,
    Database,
    Package,
    Network,
    Zap,
} from "lucide-react";
import { useState } from "react";
import recursosImg from "../assets/diagrama-recursos.png";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80", // recursos / equipo
    human: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // equipo
    financial:
        "https://images.unsplash.com/photo-1579621970563-430f63602022?w=800&q=80", // dinero
    tech: "https://images.unsplash.com/photo-1318080502867-48ba8586f735?w=800&q=80", // tecnología
    data: "https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=800&q=80", // datos
    materials:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80", // materiales
    network: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // network
};

// ─── Tipos de recursos ────────────────────────────────────────────────────────
const tiposRecursos = [
    {
        icon: Users,
        title: "Recursos Humanos",
        color: "#22d3ee",
        desc: "Las habilidades, talentos y conocimientos de las personas",
        details:
            "Incluye expertos, ingenieros, diseñadores, creativos y otros profesionales que participan en el proceso de innovación.",
        img: IMGS.human,
        examples: [
            "Ingenieros en electrónica",
            "Programadores",
            "Técnicos de instalación",
            "Diseñadores UX/UI",
        ],
    },
    {
        icon: DollarSign,
        title: "Recursos Financieros",
        color: "#34d399",
        desc: "Fondos disponibles para invertir en proyectos innovadores",
        details:
            "Incluye capital de inversión, subvenciones, préstamos y otros tipos de financiamiento necesarios para el desarrollo.",
        img: IMGS.financial,
        examples: [
            "Capital de inversión",
            "Subvenciones tecnológicas",
            "Presupuesto operativo",
            "Financiamiento externo",
        ],
    },
    {
        icon: Cpu,
        title: "Recursos Tecnológicos",
        color: "#f59e0b",
        desc: "Herramientas y tecnologías que facilitan el desarrollo",
        details:
            "Incluye software avanzado, máquinas, laboratorios de investigación o plataformas digitales necesarias para crear soluciones innovadoras.",
        img: IMGS.tech,
        examples: [
            "Arduino y microcontroladores",
            "Software de diseño CAD",
            "Plataformas en la nube",
            "Laboratorios de hardware",
        ],
    },
    {
        icon: Database,
        title: "Recursos de Información",
        color: "#a78bfa",
        desc: "Acceso a datos y conocimientos estratégicos",
        details:
            "Incluye datos, investigaciones, estudios de mercado y conocimientos que permiten identificar tendencias, oportunidades y problemas a resolver.",
        img: IMGS.data,
        examples: [
            "Estudios de mercado",
            "Base de datos técnicas",
            "Publicaciones académicas",
            "Análisis de tendencias",
        ],
    },
    {
        icon: Package,
        title: "Recursos Materiales",
        color: "#fb7185",
        desc: "Materias primas y componentes físicos necesarios",
        details:
            "Incluye materias primas, componentes y otros bienes físicos necesarios para el desarrollo de nuevos productos y soluciones.",
        img: IMGS.materials,
        examples: [
            "Sensores PIR HC-SR501",
            "Arduino Uno",
            "Módulo ESP8266",
            "Cables y conectores",
        ],
    },
    {
        icon: Network,
        title: "Recursos de Redes",
        color: "#38bdf8",
        desc: "Conexiones y colaboraciones estratégicas",
        details:
            "Incluye conexiones y colaboraciones con otras empresas, universidades, centros de investigación, etc., que pueden proporcionar apoyo y oportunidades de sinergia.",
        img: IMGS.network,
        examples: [
            "Alianzas con universidades",
            "Contactos industriales",
            "Comunidades de innovación",
            "Centros de investigación",
        ],
    },
];

// ─── Resource card component ──────────────────────────────────────────────────
function RecursoCard({ recurso, i }: { recurso: (typeof tiposRecursos)[0]; i: number }) {
    const [expanded, setExpanded] = useState(false);
    const Icon = recurso.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: "#0f172a",
                border: `1px solid ${expanded ? recurso.color : "rgba(34,211,238,0.12)"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: expanded ? `0 0 30px ${recurso.color}22` : "none",
            }}
            whileHover={{ y: -4 }}
        >
            {/* Image */}
            <div
                style={{
                    height: 160,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <img
                    src={recurso.img}
                    alt={recurso.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                        transform: expanded ? "scale(1.06)" : "scale(1)",
                    }}
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, #0f172a 20%, transparent 60%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "9999px",
                        background: `${recurso.color}22`,
                        border: `1px solid ${recurso.color}`,
                        color: recurso.color,
                        fontSize: "0.68rem",
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 600,
                    }}
                >
                    RECURSO
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.25rem" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "0.6rem",
                    }}
                >
                    <div style={{ color: recurso.color }}>
                        <Icon size={20} />
                    </div>
                    <h3
                        style={{
                            color: "#e2e8f0",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {recurso.title}
                    </h3>
                </div>
                <p
                    style={{
                        color: "#64748b",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        margin: 0,
                        marginBottom: "0.75rem",
                    }}
                >
                    {recurso.desc}
                </p>

                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            paddingTop: "0.75rem",
                            borderTop: `1px solid ${recurso.color}22`,
                        }}
                    >
                        <p
                            style={{
                                color: "#cbd5e1",
                                fontSize: "0.8rem",
                                lineHeight: 1.6,
                                marginBottom: "0.75rem",
                            }}
                        >
                            {recurso.details}
                        </p>
                        <p
                            style={{
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                color: recurso.color,
                                margin: "0 0 0.5rem 0",
                            }}
                        >
                            Ejemplos:
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.3rem",
                            }}
                        >
                            {recurso.examples.map((example, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        gap: "0.5rem",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <Zap
                                        size={12}
                                        color={recurso.color}
                                        style={{ marginTop: "3px", flexShrink: 0 }}
                                    />
                                    <span
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.75rem",
                                        }}
                                    >
                                        {example}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                <div
                    style={{
                        marginTop: "0.75rem",
                        color: recurso.color,
                        fontSize: "0.72rem",
                        fontFamily: "'Space Mono', monospace",
                    }}
                >
                    {expanded ? "▲ menos detalles" : "▼ más detalles"}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const Recursos = () => {
    return (
        <div
            style={{
                background: "#020617",
                color: "#e2e8f0",
                fontFamily: "'Syne', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

            {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
            <section
                style={{
                    position: "relative",
                    minHeight: 440,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <img
                    src={IMGS.hero}
                    alt="recursos"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.2) saturate(0.5)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(2,6,23,0.3), rgba(2,6,23,0.97))",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Floating decorative elements */}
                {[
                    { top: "20%", left: "10%", icon: Users, color: "#22d3ee" },
                    { top: "30%", right: "15%", icon: Cpu, color: "#f59e0b" },
                    { bottom: "20%", left: "15%", icon: Database, color: "#34d399" },
                ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                opacity: 0.05,
                                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                            }}
                        >
                            <Icon size={120} color={item.color} />
                        </div>
                    );
                })}

                {/* Corner decorations */}
                {[
                    {
                        top: 32,
                        left: 32,
                        borderTop: "2px solid #22d3ee",
                        borderLeft: "2px solid #22d3ee",
                    },
                    {
                        top: 32,
                        right: 32,
                        borderTop: "2px solid #34d399",
                        borderRight: "2px solid #34d399",
                    },
                    {
                        bottom: 32,
                        left: 32,
                        borderBottom: "2px solid #f59e0b",
                        borderLeft: "2px solid #f59e0b",
                    },
                    {
                        bottom: 32,
                        right: 32,
                        borderBottom: "2px solid #a78bfa",
                        borderRight: "2px solid #a78bfa",
                    },
                ].map((s, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: 48,
                            height: 48,
                            opacity: 0.4,
                            ...s,
                        }}
                    />
                ))}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        padding: "5rem 2rem 4rem",
                        maxWidth: 820,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.3rem 1rem",
                            border: "1px solid rgba(34,211,238,0.3)",
                            borderRadius: "9999px",
                            marginBottom: "1.5rem",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#67e8f9",
                            background: "rgba(6,182,212,0.08)",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#22d3ee",
                                animation: "blink 1.5s infinite",
                            }}
                        />
                        ETAPA 13 — ANÁLISIS DE RECURSOS
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: "1.25rem",
                        }}
                    >
                        Recursos del{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#34d399,#f59e0b,#a78bfa)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Proyecto
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{
                            maxWidth: 620,
                            margin: "0 auto",
                            color: "#94a3b8",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Identifica y gestiona los elementos humanos, financieros,
                        tecnológicos e informativos necesarios para la innovación
                    </motion.p>
                </div>
            </section>

            {/* ── DEFINICIÓN SECCIÓN ────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(167,139,250,0.05))",
                        border: "1px solid rgba(34,211,238,0.2)",
                        borderRadius: "1.5rem",
                        padding: "2.5rem",
                        marginBottom: "3rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            color: "#e2e8f0",
                        }}
                    >
                        ¿Qué son los Recursos?
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#cbd5e1",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                        }}
                    >
                        Los recursos son todos los <strong>elementos que se utilizan para alcanzar un objetivo</strong> o llevar a cabo una actividad. Estos pueden ser tangibles e intangibles y se dividen en varias categorías según su naturaleza. Una gestión eficiente de los recursos es fundamental para el éxito de cualquier proyecto innovador.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {[
                            "✓ Elementos tangibles e intangibles",
                            "✓ Clasificación por naturaleza",
                            "✓ Esenciales para la innovación",
                            "✓ Requieren planificación",
                            "✓ Optimizables y medibles",
                            "✓ Interdependientes",
                        ].map((char, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    {char.split(" ")[0]}
                                </span>
                                <span
                                    style={{
                                        color: "#cbd5e1",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    {char.slice(2)}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── RECURSOS CARDS ───────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "3rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Tipos de Recursos por Categoría
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {tiposRecursos.map((recurso, i) => (
                        <RecursoCard key={recurso.title} recurso={recurso} i={i} />
                    ))}
                </div>
            </section>

            {/* ── DIAGRAMA DE RECURSOS ─────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "2rem",
                            textAlign: "center",
                            color: "#e2e8f0",
                        }}
                    >
                        Modelo de Recursos — Diagrama Integral
                    </h2>
                    <div
                        style={{
                            background: "#0f172a",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "1.5rem",
                            padding: "2rem",
                            overflow: "auto",
                            marginBottom: "2.5rem",
                        }}
                    >
                        <img
                            src={recursosImg}
                            alt="Diagrama de Recursos - Alarma Inteligente"
                            style={{
                                width: "100%",
                                maxWidth: "100%",
                                height: "auto",
                                objectFit: "contain",
                                borderRadius: "1rem",
                            }}
                        />
                    </div>

                    {/* Análisis detallado del diagrama */}
                    <h3
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                            color: "#e2e8f0",
                        }}
                    >
                        📊 Desglose Detallado del Diagrama
                    </h3>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "3rem",
                        }}
                    >
                        {/* Mano de Obra */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(34,211,238,0.05))",
                                border: "1px solid #22d3ee",
                                borderRadius: "1rem",
                                padding: "2rem",
                            }}
                        >
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: "#22d3ee",
                                    marginBottom: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <Users size={24} />
                                1. Mano de Obra (Recursos Humanos)
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Programador Arduino:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Encargado del código (C++) y la lógica de
                                        detección. Su trabajo es fundamental para
                                        que el sistema reconozca intrusiones.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Técnico en Electrónica:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Responsable del ensamblado de circuitos y
                                        soldadura de componentes electrónicos.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Instalador/Montador:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Coloca los sensores en puntos estratégicos
                                        de la casa para máxima cobertura.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Diseñador de Prototipos:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Crea la carcasa o caja protectora del
                                        sistema.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Equipo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(52,211,153,0.1), rgba(52,211,153,0.05))",
                                border: "1px solid #34d399",
                                borderRadius: "1rem",
                                padding: "2rem",
                            }}
                        >
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: "#34d399",
                                    marginBottom: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <Cpu size={24} />
                                2. Equipo (Hardware y Herramientas)
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Placa Arduino (Uno, Nano o Mega):
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        El cerebro del sistema. Procesa todas las
                                        señales y controla los actuadores.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sensores de Movimiento (PIR):
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Detectan presencia mediante radiación
                                        infrarroja. Modelo HC-SR501.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sensores Magnéticos:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Detectan apertura de puertas y ventanas
                                        inmediatamente.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Actuadores (Buzzer/Sirena):
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Emite alerta sonora de 85 dB al detectar
                                        intrusión.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Módulo de Comunicación (GSM o Wi-Fi):
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        ESP8266 o SIM800L para notificaciones
                                        remotas.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Computadora/IDE Arduino:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Para escribir y cargar el código en la
                                        placa.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Materiales */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.05))",
                                border: "1px solid #f59e0b",
                                borderRadius: "1rem",
                                padding: "2rem",
                            }}
                        >
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: "#f59e0b",
                                    marginBottom: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <Package size={24} />
                                3. Materiales
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Cables Jumper:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Conectan los componentes en la protoboard.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Protoboard:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Placa de prueba para circuitos iniciales.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Resistencias y LEDs:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Para indicadores visuales de estado.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Fuente de Alimentación:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Batería de 9V o adaptador de corriente.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Carcasa PCB 3D Impreso:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Protege los componentes internos.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Material de Montaje:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Cinta doble contacto o tornillos para fijar
                                        sensores.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Servicios y Otros */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(167,139,250,0.05))",
                                border: "1px solid #a78bfa",
                                borderRadius: "1rem",
                                padding: "2rem",
                            }}
                        >
                            <h4
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: "#a78bfa",
                                    marginBottom: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <Zap size={24} />
                                4. Servicios y Otros Recursos
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.75rem",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Luz/Electricidad:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Necesaria para el funcionamiento continuo
                                        y carga de baterías.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Internet (Opcional):
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Si la alarma envía datos a la nube o usa
                                        servicios de mensajería.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Recursos de Información:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Manuales, esquemas de conexión y tutoriales
                                        de la comunidad Arduino.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.9rem",
                                            marginBottom: "0.5rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Software:
                                    </p>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        IDE de Arduino y librerías específicas para
                                        sensores.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* ── VIDEO EDUCATIVO ─────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                    backgroundColor: "rgba(34, 211, 238, 0.03)",
                    borderRadius: "1.5rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            textAlign: "center",
                            color: "#e2e8f0",
                        }}
                    >
                        🎥 Aprende Más — Video Educativo
                    </h2>
                    <p
                        style={{
                            textAlign: "center",
                            color: "#94a3b8",
                            fontSize: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        Mira este video para entender mejor cómo gestionar recursos
                        efectivamente en proyectos de innovación
                    </p>

                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            paddingBottom: "56.25%", // 16:9 aspect ratio
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "1rem",
                            border: "1px solid rgba(34,211,238,0.3)",
                            boxShadow: "0 0 30px rgba(34,211,238,0.15)",
                        }}
                    >
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "1rem",
                            }}
                            src="https://www.youtube.com/embed/mUeGnTMjCp0?si=NAZl4iNdfQ4Xchy4"
                            title="LOS RECURSOS DE UNA ORGANIZACIÓN explicados con EJEMPLOS"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    <p
                        style={{
                            textAlign: "center",
                            color: "#64748b",
                            fontSize: "0.9rem",
                            marginTop: "1rem",
                        }}
                    >
                        Video: "Resource Management in Project Management" - Conceptos
                        fundamentales sobre cómo identificar, asignar y optimizar recursos en
                        cualquier proyecto
                    </p>
                </motion.div>
            </section>

            {/* ── CONSEJO IMPORTANTE ──────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(251,113,133,0.1), rgba(251,113,133,0.05))",
                        border: "2px solid #fb7185",
                        borderRadius: "1.5rem",
                        padding: "2.5rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "flex-start",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "2rem",
                                flexShrink: 0,
                            }}
                        >
                            💡
                        </div>
                        <div>
                            <h3
                                style={{
                                    fontSize: "1.3rem",
                                    fontWeight: 700,
                                    color: "#e2e8f0",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                Consejo Clave: Optimización de Recursos
                            </h3>
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.8,
                                    marginBottom: "1rem",
                                }}
                            >
                                En nuestro proyecto de alarma inteligente, la optimización de
                                recursos fue crítica. Logramos mantener el costo total por
                                debajo de <strong>$50 USD</strong> eligiendo componentes de
                                bajo costo pero de alta calidad, reutilizando prototipos y
                                aprovechando recursos educativos de la comunidad Arduino.
                            </p>
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.8,
                                }}
                            >
                                La clave está en: <strong>planificación detallada</strong>,
                                <strong> presupuesto ajustado</strong> y{" "}
                                <strong>maximización de recursos ya disponibles</strong>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "2.5rem",
                            textAlign: "center",
                            color: "#e2e8f0",
                        }}
                    >
                        Recursos en Nuestro Proyecto
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {[
                            {
                                title: "Humanos",
                                items: [
                                    "Equipo de ingenieros",
                                    "Técnicos Arduino",
                                    "Diseñadores de UI/UX",
                                ],
                                color: "#22d3ee",
                            },
                            {
                                title: "Financieros",
                                items: [
                                    "Presupuesto de componentes",
                                    "Inversión en desarrollo",
                                    "Gastos operacionales",
                                ],
                                color: "#34d399",
                            },
                            {
                                title: "Tecnológicos",
                                items: [
                                    "Arduino Uno",
                                    "ESP8266 WiFi",
                                    "Sensores PIR y ultrasónicos",
                                ],
                                color: "#f59e0b",
                            },
                            {
                                title: "Informativos",
                                items: [
                                    "Documentación técnica",
                                    "Manuales de usuario",
                                    "Análisis de mercado",
                                ],
                                color: "#a78bfa",
                            },
                            {
                                title: "Materiales",
                                items: [
                                    "Componentes electrónicos",
                                    "PCB personalizada",
                                    "Carcasa del dispositivo",
                                ],
                                color: "#fb7185",
                            },
                            {
                                title: "De Redes",
                                items: [
                                    "Universidades asociadas",
                                    "Proveedores de componentes",
                                    "Comunidades Arduino",
                                ],
                                color: "#38bdf8",
                            },
                        ].map((categoria, i) => (
                            <motion.div
                                key={categoria.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0f172a",
                                    border: `2px solid ${categoria.color}`,
                                    borderRadius: "1rem",
                                    padding: "1.75rem",
                                    transition: "all 0.3s",
                                    cursor: "pointer",
                                }}
                                whileHover={{
                                    boxShadow: `0 0 30px ${categoria.color}33`,
                                    y: -4,
                                }}
                            >
                                <h3
                                    style={{
                                        color: categoria.color,
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        marginBottom: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "4px",
                                            height: "24px",
                                            backgroundColor: categoria.color,
                                            borderRadius: "2px",
                                        }}
                                    />
                                    {categoria.title}
                                </h3>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.6rem",
                                    }}
                                >
                                    {categoria.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay: idx * 0.05,
                                            }}
                                            viewport={{ once: true }}
                                            style={{
                                                display: "flex",
                                                gap: "0.75rem",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    backgroundColor:
                                                    categoria.color,
                                                }}
                                            />
                                            <span
                                                style={{
                                                    color: "#cbd5e1",
                                                    fontSize: "0.9rem",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── ORGANIZACIÓN Y PRESUPUESTO ──────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "3rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Organizando los Recursos del Proyecto
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "1.5rem",
                        marginBottom: "3rem",
                    }}
                >
                    {[
                        {
                            icon: "📋",
                            title: "Inventario",
                            desc: "Mantener un registro actualizado de todos los componentes, herramientas y materiales disponibles",
                            items: [
                                "Lista de componentes",
                                "Cantidad disponible",
                                "Proveedores",
                                "Costos unitarios",
                            ],
                        },
                        {
                            icon: "💰",
                            title: "Presupuesto",
                            desc: "Asignación de fondos por categoría de recursos para control financiero",
                            items: [
                                "Costo de componentes",
                                "Mano de obra",
                                "Herramientas",
                                "Imprevistos (10-15%)",
                            ],
                        },
                        {
                            icon: "⏰",
                            title: "Cronograma",
                            desc: "Distribución de recursos humanos y materiales en las diferentes etapas",
                            items: [
                                "Diseño: 3 semanas",
                                "Prototipado: 2 semanas",
                                "Pruebas: 2 semanas",
                                "Documentación: 1 semana",
                            ],
                        },
                        {
                            icon: "🎯",
                            title: "Asignación",
                            desc: "Designación clara de responsabilidades y recursos a cada miembro del equipo",
                            items: [
                                "Roles definidos",
                                "Recursos asignados",
                                "Hitos esperados",
                                "Métricas de éxito",
                            ],
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: "1px solid rgba(34,211,238,0.2)",
                                borderRadius: "1rem",
                                padding: "1.75rem",
                                transition: "all 0.3s",
                                cursor: "pointer",
                            }}
                            whileHover={{
                                boxShadow: "0 0 30px rgba(34,211,238,0.25)",
                                y: -4,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "2.5rem",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                {item.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: "#e2e8f0",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.6,
                                    marginBottom: "1rem",
                                }}
                            >
                                {item.desc}
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                }}
                            >
                                {item.items.map((i, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            gap: "0.75rem",
                                            alignItems: "center",
                                            fontSize: "0.85rem",
                                            color: "#cbd5e1",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "6px",
                                                height: "6px",
                                                borderRadius: "50%",
                                                backgroundColor: "#22d3ee",
                                            }}
                                        />
                                        {i}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── COMPARATIVA DE RECURSOS ─────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "2rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Comparativa: Nuestro Proyecto vs Alternativas
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        overflowX: "auto",
                    }}
                >
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            backgroundColor: "#0f172a",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "1rem",
                        }}
                    >
                        <thead>
                            <tr
                                style={{
                                    borderBottom: "2px solid #22d3ee",
                                    backgroundColor: "rgba(34,211,238,0.05)",
                                }}
                            >
                                <th
                                    style={{
                                        padding: "1rem",
                                        textAlign: "left",
                                        color: "#22d3ee",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Recurso
                                </th>
                                <th
                                    style={{
                                        padding: "1rem",
                                        textAlign: "center",
                                        color: "#22d3ee",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Nuestro Proyecto
                                </th>
                                <th
                                    style={{
                                        padding: "1rem",
                                        textAlign: "center",
                                        color: "#34d399",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Alarma Comercial
                                </th>
                                <th
                                    style={{
                                        padding: "1rem",
                                        textAlign: "center",
                                        color: "#f59e0b",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Ventaja
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    recurso: "Costo Total",
                                    nuestro: "$45-50 USD",
                                    comercial: "$200-500 USD",
                                    ventaja: "Accesibilidad",
                                },
                                {
                                    recurso: "Componentes",
                                    nuestro: "7-9 piezas",
                                    comercial: "Integrados",
                                    ventaja: "Modular",
                                },
                                {
                                    recurso: "Tiempo de Desarrollo",
                                    nuestro: "6-8 semanas",
                                    comercial: "Comercial",
                                    ventaja: "Flexible",
                                },
                                {
                                    recurso: "Customización",
                                    nuestro: "Completa",
                                    comercial: "Limitada",
                                    ventaja: "Educativa",
                                },
                                {
                                    recurso: "Mantenibilidad",
                                    nuestro: "Alta",
                                    comercial: "Professional",
                                    ventaja: "Aprendizaje",
                                },
                            ].map((row, i) => (
                                <tr
                                    key={i}
                                    style={{
                                        borderBottom:
                                            "1px solid rgba(34,211,238,0.1)",
                                        backgroundColor:
                                            i % 2 === 0
                                                ? "transparent"
                                                : "rgba(34,211,238,0.02)",
                                    }}
                                >
                                    <td
                                        style={{
                                            padding: "1rem",
                                            color: "#e2e8f0",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {row.recurso}
                                    </td>
                                    <td
                                        style={{
                                            padding: "1rem",
                                            textAlign: "center",
                                            color: "#22d3ee",
                                        }}
                                    >
                                        {row.nuestro}
                                    </td>
                                    <td
                                        style={{
                                            padding: "1rem",
                                            textAlign: "center",
                                            color: "#94a3b8",
                                        }}
                                    >
                                        {row.comercial}
                                    </td>
                                    <td
                                        style={{
                                            padding: "1rem",
                                            textAlign: "center",
                                            color: "#34d399",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {row.ventaja}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </section>
            <section
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(52,211,153,0.1))",
                        border: "1px solid rgba(34,211,238,0.3)",
                        borderRadius: "1.5rem",
                        padding: "3rem",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            color: "#e2e8f0",
                        }}
                    >
                        Importancia de la Gestión de Recursos
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#cbd5e1",
                            lineHeight: 1.8,
                            marginBottom: "0",
                        }}
                    >
                        Una identificación clara y una gestión eficiente de los recursos permite optimizar costos, mejorar la calidad del proyecto, reducir riesgos y asegurar que contamos con todo lo necesario para alcanzar nuestros objetivos de innovación.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};
