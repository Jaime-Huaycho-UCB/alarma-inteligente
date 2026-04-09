import { motion } from "framer-motion";
import {
    Cpu,
    Users,
    Boxes,
    Workflow,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80", // sala de control
    circuit:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito electrónico
    arduino:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80", // laboratorio / prototipo
    security:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // seguridad
    phone: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", // celular / app
    team: "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=800&q=80", // equipo / personas
    data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // dashboard
};

const partData = [
    {
        icon: Workflow,
        letter: "P",
        title: "Procesos",
        color: "#22d3ee",
        img: IMGS.circuit,
        desc: "Conjunto de actividades y pasos que se ejecutan para construir, operar y mantener el sistema de alarma.",
        items: [
            "Diseño del sistema de alarma basado en Arduino",
            "Configuración del sensor de movimiento PIR",
            "Programación del microcontrolador en C++",
            "Integración del módulo WiFi ESP8266",
            "Activación y desactivación del sistema",
            "Pruebas de detección de intrusos",
            "Verificación del envío de alertas",
        ],
    },
    {
        icon: Users,
        letter: "A",
        title: "Actores",
        color: "#34d399",
        img: IMGS.team,
        desc: "Personas o entidades que interactúan con el sistema, ya sea directamente o como parte del entorno.",
        items: [
            "Propietario que activa o desactiva la alarma",
            "Intruso detectado por el sensor PIR",
            "Desarrollador que construye el sistema",
            "Usuario que recibe alertas en su teléfono",
        ],
    },
    {
        icon: Boxes,
        letter: "R",
        title: "Recursos",
        color: "#f59e0b",
        img: IMGS.arduino,
        desc: "Materiales, conocimientos y herramientas necesarios para implementar el sistema correctamente.",
        items: [
            "Placa Arduino Uno R3",
            "Sensor PIR HC-SR501 y HC-SR04",
            "Módulo WiFi ESP8266",
            "Buzzer activo 5V — 85 dB",
            "Cables, protoboard y componentes",
            "Presupuesto estimado < $50 USD",
            "Conocimiento en programación Arduino",
        ],
    },
    {
        icon: Cpu,
        letter: "T",
        title: "Tecnología",
        color: "#a78bfa",
        img: IMGS.data,
        desc: "Plataformas, lenguajes y herramientas tecnológicas que hacen posible el funcionamiento del sistema.",
        items: [
            "Plataforma Arduino IDE (C/C++)",
            "Sensores PIR de detección de movimiento",
            "Programación embebida en tiempo real",
            "Protocolo WiFi 802.11 b/g/n",
            "Notificaciones push vía ESP8266",
        ],
    },
];

const flujoSteps = [
    {
        num: "01",
        text: "Sensor detecta movimiento",
        sub: "PIR HC-SR501 activa la señal",
        color: "#22d3ee",
    },
    {
        num: "02",
        text: "Arduino procesa la señal",
        sub: "Firmware evalúa el umbral en ms",
        color: "#34d399",
    },
    {
        num: "03",
        text: "Sistema envía alerta",
        sub: "ESP8266 transmite vía WiFi",
        color: "#f59e0b",
    },
    {
        num: "04",
        text: "Usuario notificado",
        sub: "Push al celular en tiempo real",
        color: "#a78bfa",
    },
];

const techImgs = [
    {
        src: IMGS.circuit,
        title: "Programación embebida",
        desc: "Código C++ ejecutado directamente en el microcontrolador ATmega328P del Arduino.",
    },
    {
        src: IMGS.arduino,
        title: "Prototipado con Arduino",
        desc: "Conexión física de sensores, actuadores y módulos de comunicación en protoboard.",
    },
    {
        src: IMGS.security,
        title: "Tecnología aplicada a seguridad",
        desc: "Integración de hardware y software para crear un sistema de alarma funcional y confiable.",
    },
];

// ─── PART Card ───────────────────────────────────────────────────────────────
function PartCard({ d, i }: { d: (typeof partData)[0]; i: number }) {
    const Icon = d.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
                background: "#0f172a",
                border: `1px solid ${d.color}20`,
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 20px 50px ${d.color}14`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
            {/* Image header */}
            <div
                style={{
                    height: 160,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    src={d.img}
                    alt={d.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to top, #0f172a 10%, transparent 60%)`,
                    }}
                />

                {/* Big letter watermark */}
                <div
                    style={{
                        position: "absolute",
                        top: "0.5rem",
                        left: "1rem",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "5rem",
                        fontWeight: 700,
                        color: `${d.color}25`,
                        lineHeight: 1,
                        userSelect: "none",
                    }}
                >
                    {d.letter}
                </div>

                {/* Icon badge */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "1rem",
                        right: "1rem",
                        width: 40,
                        height: 40,
                        borderRadius: "0.5rem",
                        background: `${d.color}22`,
                        border: `1px solid ${d.color}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: d.color,
                    }}
                >
                    <Icon size={18} />
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: d.color,
                        }}
                    >
                        {d.letter}
                    </span>
                    <h3
                        style={{
                            color: "#e2e8f0",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {d.title}
                    </h3>
                </div>

                <p
                    style={{
                        color: "#475569",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                    }}
                >
                    {d.desc}
                </p>

                <div
                    style={{
                        height: 1,
                        background: `${d.color}18`,
                        marginBottom: "1.25rem",
                    }}
                />

                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    {d.items.map((item, j) => (
                        <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 + j * 0.05 }}
                            viewport={{ once: true }}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.5rem",
                            }}
                        >
                            <CheckCircle2
                                size={13}
                                style={{
                                    color: d.color,
                                    flexShrink: 0,
                                    marginTop: "0.25rem",
                                }}
                            />
                            <span
                                style={{
                                    color: "#94a3b8",
                                    fontSize: "0.83rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                {item}
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const ModeloPART = () => {
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
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
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
                    alt="sala de control"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.18) saturate(0.5)",
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

                {/* PART letters decoration */}
                <div
                    style={{
                        position: "absolute",
                        right: "5%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        gap: "0.25rem",
                        opacity: 0.04,
                    }}
                >
                    {["P", "A", "R", "T"].map((l, i) => (
                        <div
                            key={l}
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "8rem",
                                fontWeight: 700,
                                color: [
                                    "#22d3ee",
                                    "#34d399",
                                    "#f59e0b",
                                    "#a78bfa",
                                ][i],
                                lineHeight: 1,
                            }}
                        >
                            {l}
                        </div>
                    ))}
                </div>

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
                        borderTop: "2px solid #22d3ee",
                        borderRight: "2px solid #22d3ee",
                    },
                    {
                        bottom: 32,
                        left: 32,
                        borderBottom: "2px solid #22d3ee",
                        borderLeft: "2px solid #22d3ee",
                    },
                    {
                        bottom: 32,
                        right: 32,
                        borderBottom: "2px solid #22d3ee",
                        borderRight: "2px solid #22d3ee",
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
                        ETAPA 06 — MODELO PART
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
                        Modelo{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#34d399,#f59e0b,#a78bfa)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            PART
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{
                            maxWidth: 640,
                            margin: "0 auto",
                            color: "#94a3b8",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Herramienta de estructuración de proyectos de innovación
                        que identifica los
                        <span style={{ color: "#22d3ee" }}> Procesos</span>,
                        <span style={{ color: "#34d399" }}> Actores</span>,
                        <span style={{ color: "#f59e0b" }}> Recursos</span> y
                        <span style={{ color: "#a78bfa" }}> Tecnología</span>{" "}
                        necesarios para construir la solución.
                    </motion.p>

                    {/* PART pill indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "0.75rem",
                            marginTop: "2rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { l: "P", label: "Procesos", color: "#22d3ee" },
                            { l: "A", label: "Actores", color: "#34d399" },
                            { l: "R", label: "Recursos", color: "#f59e0b" },
                            { l: "T", label: "Tecnología", color: "#a78bfa" },
                        ].map(({ l, label, color }) => (
                            <div
                                key={l}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    padding: "0.35rem 0.9rem",
                                    borderRadius: "9999px",
                                    border: `1px solid ${color}40`,
                                    background: `${color}10`,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontWeight: 700,
                                        color,
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    {l}
                                </span>
                                <span
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.75rem",
                                    }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── VIDEO ────────────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
                <div style={{ maxWidth: 960, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
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
                            // VIDEO EXPLICATIVO
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Explicación del Modelo PART
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
                            boxShadow: "0 0 60px rgba(6,182,212,0.08)",
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
                            src="https://www.youtube.com/embed/Bk1nF0D2N9E"
                            title="Modelo PART"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── GRID PART ────────────────────────────────────────────────────── */}
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
                        // ESTRUCTURA
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Componentes del Modelo PART
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cada letra representa una dimensión clave del proyecto
                        de innovación.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.5rem",
                    }}
                >
                    {partData.map((d, i) => (
                        <PartCard key={i} d={d} i={i} />
                    ))}
                </div>
            </section>

            {/* ── TECNOLOGÍAS VISUALES ─────────────────────────────────────────── */}
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
                            // TECNOLOGÍAS
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Tecnologías utilizadas en el proyecto
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1.5rem",
                        }}
                    >
                        {techImgs.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                    border: "1px solid rgba(34,211,238,0.12)",
                                    background: "#0f172a",
                                }}
                            >
                                <div
                                    style={{
                                        height: 210,
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ duration: 0.4 }}
                                        src={t.src}
                                        alt={t.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, #0f172a 10%, transparent 55%)",
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "1.25rem" }}>
                                    <h4
                                        style={{
                                            color: "#22d3ee",
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                            marginBottom: "0.4rem",
                                        }}
                                    >
                                        {t.title}
                                    </h4>
                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.82rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {t.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FLUJO DEL SISTEMA ────────────────────────────────────────────── */}
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
                        // PROCESO OPERATIVO
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Flujo de funcionamiento del sistema
                    </h2>
                </motion.div>

                {/* Flow steps */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 0,
                    }}
                >
                    {flujoSteps.map((s, i) => (
                        <div
                            key={i}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0f172a",
                                    border: `1px solid ${s.color}30`,
                                    borderRadius: "1rem",
                                    padding: "1.5rem 1.25rem",
                                    textAlign: "center",
                                    minWidth: 180,
                                    transition: "box-shadow 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.boxShadow = `0 0 30px ${s.color}18`)
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.boxShadow = "none")
                                }
                            >
                                <div
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.65rem",
                                        color: s.color,
                                        marginBottom: "0.75rem",
                                        letterSpacing: "0.1em",
                                    }}
                                >
                                    PASO {s.num}
                                </div>
                                <div
                                    style={{
                                        fontWeight: 700,
                                        color: "#e2e8f0",
                                        fontSize: "0.88rem",
                                        marginBottom: "0.35rem",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {s.text}
                                </div>
                                <div
                                    style={{
                                        color: "#475569",
                                        fontSize: "0.75rem",
                                        fontFamily: "'Space Mono', monospace",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {s.sub}
                                </div>
                            </motion.div>

                            {i < flujoSteps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.15 + 0.3 }}
                                    viewport={{ once: true }}
                                    style={{
                                        padding: "0 0.5rem",
                                        color: "#22d3ee",
                                    }}
                                >
                                    <ArrowRight size={20} />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Flow image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: "4rem",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "3rem",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={IMGS.phone}
                        alt="Notificación móvil"
                        style={{
                            width: "100%",
                            borderRadius: "1rem",
                            border: "1px solid rgba(34,211,238,0.15)",
                        }}
                    />
                    <div>
                        <div
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "#22d3ee",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                marginBottom: "1rem",
                            }}
                        >
                            // RESULTADO FINAL
                        </div>
                        <h3
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: 800,
                                marginBottom: "1rem",
                            }}
                        >
                            El usuario siempre informado
                        </h3>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            El flujo completo del modelo PART culmina en el
                            actor más importante: el{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                propietario del hogar
                            </span>
                            . Gracias a la cadena Sensor → Arduino → WiFi →
                            Celular, la alerta llega en menos de 3 segundos
                            desde que se detecta el movimiento.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.6rem",
                            }}
                        >
                            {[
                                {
                                    t: "Detección en < 500 ms por el sensor PIR",
                                    c: "#22d3ee",
                                },
                                {
                                    t: "Procesamiento en < 100 ms por el Arduino",
                                    c: "#34d399",
                                },
                                {
                                    t: "Transmisión en < 2 s vía módulo WiFi",
                                    c: "#f59e0b",
                                },
                                {
                                    t: "Notificación push instantánea al celular",
                                    c: "#a78bfa",
                                },
                            ].map(({ t, c }, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: "0.6rem",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: c,
                                            marginTop: "0.25rem",
                                            flexShrink: 0,
                                        }}
                                    >
                                        ▸
                                    </span>
                                    <span
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.87rem",
                                        }}
                                    >
                                        {t}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
                        Continuar con el Modelo SMART
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con el modelo PART completo, el siguiente paso es
                        revisar el cronograma del proyecto en Smartsheet.
                    </p>
                    <a
                        href="/smartsheet"
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
                        Ver Smartsheet →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
