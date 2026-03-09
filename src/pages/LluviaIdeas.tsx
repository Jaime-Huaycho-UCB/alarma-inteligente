import { motion, AnimatePresence } from "framer-motion";
import {
    Lightbulb,
    Cpu,
    Shield,
    Smartphone,
    Wifi,
    Eye
} from "lucide-react";
import { useState } from "react";
import imagenLluviaIdeas from "../assets/lluvia-ideas.jpg";

// ─── Reliable image URLs (Unsplash CDN — siempre disponibles) ────────────────
const IMGS = {
    brainstorm:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80", // equipo en pizarrón con ideas
    security:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // candado / seguridad
    smartphone:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", // alerta en celular
    circuit:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito / electrónica
    sensor: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80", // ingeniería / sensor
    home: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80", // casa / hogar seguro
    coding: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80", // código en pantalla
    team: "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=1200&q=80", // equipo trabajando
};

const ideasRapidas = [
    { word: "Celular", emoji: "📱", color: "#fde68a", textColor: "#78350f" },
    { word: "Casa", emoji: "🏠", color: "#bbf7d0", textColor: "#14532d" },
    { word: "Seguridad", emoji: "🔒", color: "#bfdbfe", textColor: "#1e3a8a" },
    { word: "Sensores", emoji: "📡", color: "#fecaca", textColor: "#7f1d1d" },
    { word: "Cámaras", emoji: "📷", color: "#e9d5ff", textColor: "#4c1d95" },
    { word: "Altavoz", emoji: "🔊", color: "#fed7aa", textColor: "#7c2d12" },
    { word: "Batería", emoji: "🔋", color: "#a7f3d0", textColor: "#064e3b" },
    { word: "Código", emoji: "💻", color: "#cffafe", textColor: "#164e63" },
    { word: "Compacto", emoji: "📦", color: "#fef9c3", textColor: "#713f12" },
    { word: "Fácil", emoji: "✅", color: "#d1fae5", textColor: "#065f46" },
];

const ideasTecnologicas = [
    {
        icon: Shield,
        title: "Seguridad Inteligente",
        text: "Sistema capaz de detectar intrusos mediante sensores de movimiento PIR de alta sensibilidad, monitoreando el área de cobertura en tiempo real.",
        img: IMGS.security,
        tag: "Core",
        tagColor: "#22d3ee",
    },
    {
        icon: Smartphone,
        title: "Alertas al celular",
        text: "El usuario recibe notificaciones push en tiempo real cuando el sistema detecta movimiento sospechoso, sin importar dónde se encuentre.",
        img: IMGS.smartphone,
        tag: "Conectividad",
        tagColor: "#34d399",
    },
    {
        icon: Cpu,
        title: "Microcontrolador",
        text: "El Arduino Uno R3 actúa como cerebro del sistema: recibe señales de los sensores, ejecuta la lógica de detección y activa los actuadores.",
        img: IMGS.circuit,
        tag: "Hardware",
        tagColor: "#f59e0b",
    },
    {
        icon: Lightbulb,
        title: "Innovación integrada",
        text: "Integración de sensores PIR, ultrasónico, módulo WiFi y buzzer en un solo dispositivo compacto, de bajo costo y fácil instalación.",
        img: IMGS.coding,
        tag: "Diseño",
        tagColor: "#a78bfa",
    },
    {
        icon: Wifi,
        title: "Comunicación WiFi",
        text: "Módulo ESP8266 integrado para transmitir alertas a través de la red doméstica, permitiendo monitoreo remoto desde cualquier lugar.",
        img: IMGS.sensor,
        tag: "IoT",
        tagColor: "#fb7185",
    },
    {
        icon: Eye,
        title: "Monitoreo continuo",
        text: "El sistema opera 24/7 en modo de vigilancia activa, con bajo consumo energético gracias al modo sleep del microcontrolador.",
        img: IMGS.home,
        tag: "Operación",
        tagColor: "#22d3ee",
    },
];

// ─── Idea card expandible ────────────────────────────────────────────────────
function TechCard({
    idea,
    i,
}: {
    idea: (typeof ideasTecnologicas)[0];
    i: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const Icon = idea.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: "#0f172a",
                border: `1px solid ${expanded ? idea.tagColor : "rgba(34,211,238,0.12)"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: expanded ? `0 0 30px ${idea.tagColor}22` : "none",
            }}
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
                    src={idea.img}
                    alt={idea.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
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
                            "linear-gradient(to top, #0f172a 15%, transparent 60%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        background: `${idea.tagColor}22`,
                        border: `1px solid ${idea.tagColor}55`,
                        color: idea.tagColor,
                        fontSize: "0.68rem",
                        fontFamily: "'Space Mono', monospace",
                    }}
                >
                    {idea.tag}
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
                    <div style={{ color: idea.tagColor }}>
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
                        {idea.title}
                    </h3>
                </div>
                <AnimatePresence initial={false}>
                    <motion.p
                        key={expanded ? "open" : "closed"}
                        initial={{ height: 40, opacity: 0.7 }}
                        animate={{ height: "auto", opacity: 1 }}
                        style={{
                            color: "#64748b",
                            fontSize: "0.82rem",
                            lineHeight: 1.6,
                            overflow: "hidden",
                        }}
                    >
                        {expanded ? idea.text : idea.text.slice(0, 65) + "…"}
                    </motion.p>
                </AnimatePresence>
                <div
                    style={{
                        marginTop: "0.75rem",
                        color: idea.tagColor,
                        fontSize: "0.72rem",
                        fontFamily: "'Space Mono', monospace",
                    }}
                >
                    {expanded ? "▲ leer menos" : "▼ leer más"}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const LluviaIdeas = () => {
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
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-8px) } }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section
                style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 420,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Background image con overlay */}
                <img
                    src={IMGS.brainstorm}
                    alt="brainstorm"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.25) saturate(0.6)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(2,6,23,0.3) 0%, rgba(2,6,23,0.9) 100%)",
                    }}
                />

                {/* Grid overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        padding: "5rem 2rem 4rem",
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
                        ETAPA 01 — IDEACIÓN
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
                        Lluvia de{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#0ea5e9)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Ideas
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
                        Primera etapa del proceso de diseño: generación libre y
                        sin restricciones de ideas para encontrar una solución
                        tecnológica al problema de seguridad en viviendas.
                    </motion.p>
                </div>
            </section>

            {/* ── VIDEO ────────────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "5rem 1.5rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "2.5rem" }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "#22d3ee",
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        // VIDEO DE PRESENTACIÓN
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Proceso de ideación
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        borderRadius: "1rem",
                        overflow: "hidden",
                        border: "1px solid rgba(34,211,238,0.2)",
                        boxShadow: "0 0 60px rgba(6,182,212,0.1)",
                        aspectRatio: "16/9",
                    }}
                >
                    <iframe
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                            display: "block",
                        }}
                        src="https://www.youtube.com/embed/BTpDhIaGf04"
                        title="Lluvia de ideas"
                        allowFullScreen
                    />
                </motion.div>
            </section>

            {/* ── IDEAS RÁPIDAS (sticky notes) ─────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "3.5rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "#22d3ee",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                marginBottom: "0.75rem",
                            }}
                        >
                            // BRAINSTORM INICIAL
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "0.75rem",
                            }}
                        >
                            Ideas iniciales generadas
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                            Conceptos clave surgidos en la sesión de
                            brainstorming sin filtros.
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: "1.25rem",
                        }}
                    >
                        {ideasRapidas.map((idea, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, rotate: -3 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: i % 2 === 0 ? 1 : -1,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 10,
                                }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                viewport={{ once: true }}
                                style={{
                                    background: idea.color,
                                    color: idea.textColor,
                                    borderRadius: "0.5rem",
                                    padding: "1.25rem 0.75rem",
                                    textAlign: "center",
                                    cursor: "default",
                                    boxShadow: "3px 4px 12px rgba(0,0,0,0.4)",
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 700,
                                    fontSize: "0.8rem",
                                    position: "relative",
                                }}
                            >
                                {/* Tape strip top */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: -8,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: 40,
                                        height: 16,
                                        background: "rgba(255,255,255,0.5)",
                                        borderRadius: "2px",
                                    }}
                                />
                                <div
                                    style={{
                                        fontSize: "1.6rem",
                                        marginBottom: "0.4rem",
                                    }}
                                >
                                    {idea.emoji}
                                </div>
                                {idea.word}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IMAGEN DIAGRAMA ──────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "5rem 1.5rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "#22d3ee",
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        // MAPA VISUAL
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Diagrama de la lluvia de ideas
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{
                        position: "relative",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        border: "1px solid rgba(34,211,238,0.2)",
                    }}
                >
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        src={imagenLluviaIdeas}
                        alt="Diagrama lluvia de ideas"
                        style={{
                            width: "100%",
                            display: "block",
                            borderRadius: "1rem",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "1rem",
                            right: "1rem",
                            padding: "0.35rem 0.8rem",
                            borderRadius: "9999px",
                            background: "rgba(2,6,23,0.85)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(34,211,238,0.25)",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.7rem",
                            color: "#67e8f9",
                        }}
                    >
                        Diagrama propio del equipo
                    </div>
                </motion.div>
            </section>

            {/* ── IDEA PRINCIPAL ───────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "3rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "#22d3ee",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                marginBottom: "0.75rem",
                            }}
                        >
                            // CONCEPTO CENTRAL
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            La idea principal
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "2rem",
                            alignItems: "center",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={IMGS.home}
                                alt="Hogar seguro"
                                style={{
                                    width: "100%",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        IMGS.security;
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: "1px solid rgba(34,211,238,0.2)",
                                borderRadius: "1rem",
                                padding: "2rem",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Decorative quote mark */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-0.5rem",
                                    left: "1.5rem",
                                    fontSize: "5rem",
                                    color: "rgba(34,211,238,0.08)",
                                    fontFamily: "serif",
                                    lineHeight: 1,
                                    userSelect: "none",
                                }}
                            >
                                "
                            </div>

                            <p
                                style={{
                                    color: "#cbd5e1",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                Imagina un sistema de seguridad diseñado para el
                                hogar,{" "}
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    compacto y fácil de instalar
                                </span>
                                , que protege la vivienda mediante una red
                                inteligente de sensores. Cuando el sistema
                                detecta movimiento sospechoso,{" "}
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    envía una alerta automática al celular
                                </span>{" "}
                                del propietario, permitiéndole reaccionar en
                                tiempo real desde cualquier lugar. Además, el
                                sistema puede activar una alarma o altavoz para
                                disuadir al intruso, proporcionando una capa
                                adicional de seguridad.
                            </p>

                            <div
                                style={{
                                    marginTop: "1.5rem",
                                    paddingTop: "1rem",
                                    borderTop: "1px solid rgba(34,211,238,0.1)",
                                    display: "flex",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                {[
                                    "Compacto",
                                    "Tiempo real",
                                    "Autónomo",
                                    "IoT",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "0.2rem 0.7rem",
                                            borderRadius: "9999px",
                                            border: "1px solid rgba(34,211,238,0.25)",
                                            color: "#67e8f9",
                                            fontSize: "0.72rem",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            background: "rgba(6,182,212,0.06)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── IDEAS TECNOLÓGICAS ───────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "5rem 1.5rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "3.5rem" }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "#22d3ee",
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        // IDEAS TÉCNICAS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Ideas tecnológicas del proyecto
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Haz clic en cada tarjeta para leer más.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.5rem",
                    }}
                >
                    {ideasTecnologicas.map((idea, i) => (
                        <TechCard key={i} idea={idea} i={i} />
                    ))}
                </div>
            </section>

            {/* ── PROCESO EN PASOS ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "3.5rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "#22d3ee",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                marginBottom: "0.75rem",
                            }}
                        >
                            // METODOLOGÍA
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            ¿Cómo se realizó la lluvia de ideas?
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "3rem",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            {[
                                {
                                    n: "01",
                                    t: "Reunión del equipo",
                                    d: "El grupo se reunió para discutir el problema de inseguridad en hogares y explorar posibles enfoques tecnológicos.",
                                },
                                {
                                    n: "02",
                                    t: "Generación libre de ideas",
                                    d: "Sin censura ni juicio, cada integrante propuso conceptos: sensores, cámaras, apps, alarmas, circuitos y más.",
                                },
                                {
                                    n: "03",
                                    t: "Agrupación por categorías",
                                    d: "Las ideas se organizaron en categorías: hardware, software, comunicación y experiencia de usuario.",
                                },
                                {
                                    n: "04",
                                    t: "Selección del concepto",
                                    d: "Se evaluaron criterios de viabilidad, costo y complejidad para elegir el sistema de alarma con Arduino como solución principal.",
                                },
                            ].map((s, i) => (
                                <motion.div
                                    key={s.n}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <div
                                        style={{
                                            minWidth: 42,
                                            height: 42,
                                            borderRadius: "50%",
                                            background:
                                                "linear-gradient(135deg,#06b6d4,#0e7490)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontWeight: 700,
                                            color: "#fff",
                                            fontSize: "0.75rem",
                                            boxShadow:
                                                "0 0 15px rgba(6,182,212,0.35)",
                                        }}
                                    >
                                        {s.n}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                color: "#e2e8f0",
                                                fontWeight: 700,
                                                marginBottom: "0.3rem",
                                            }}
                                        >
                                            {s.t}
                                        </div>
                                        <div
                                            style={{
                                                color: "#64748b",
                                                fontSize: "0.85rem",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {s.d}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={IMGS.team}
                                alt="Equipo trabajando"
                                style={{
                                    width: "100%",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        IMGS.brainstorm;
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA / SIGUIENTE SECCIÓN ──────────────────────────────────────── */}
            <section
                style={{
                    padding: "5rem 1.5rem",
                    textAlign: "center",
                    borderTop: "1px solid rgba(34,211,238,0.08)",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "#475569",
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            marginBottom: "1rem",
                        }}
                    >
                        // SIGUIENTE ETAPA
                    </div>
                    <h2
                        style={{
                            fontSize: "1.75rem",
                            fontWeight: 800,
                            marginBottom: "1rem",
                        }}
                    >
                        Continuar con el análisis
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            marginBottom: "2rem",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                        }}
                    >
                        Con las ideas definidas, el siguiente paso es analizar
                        las causas del problema mediante el diagrama de
                        Ishikawa.
                    </p>
                    <a
                        href="/ishikawa"
                        style={{
                            display: "inline-block",
                            padding: "0.85rem 2rem",
                            background:
                                "linear-gradient(135deg,#06b6d4,#0891b2)",
                            color: "#fff",
                            borderRadius: "0.5rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            boxShadow: "0 0 30px rgba(6,182,212,0.3)",
                        }}
                    >
                        Ver Diagrama Ishikawa →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
