import { motion } from "framer-motion";
import {
    Target,
    Cpu,
    Wifi,
    Bell,
    Shield,
    Smartphone,
    Zap,
    CheckCircle,
} from "lucide-react";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80", // sala de control / tecnología
    smart: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", // casa inteligente
    sensor: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80", // laboratorio / sensor
    alarm: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // seguridad / candado
    app: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", // celular / app
    circuit:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito electrónico
    team: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // dashboard
};

const objetivosEspecificos = [
    {
        icon: Cpu,
        num: "01",
        title: "Implementar los sensores",
        desc: "Integrar sensores PIR HC-SR501 y ultrasónico HC-SR04 al Arduino Uno para detectar movimiento y presencia en el área vigilada con alta precisión.",
        color: "#22d3ee",
    },
    {
        icon: Bell,
        num: "02",
        title: "Activar alerta sonora",
        desc: "Programar el buzzer activo de 85 dB para que emita señal acústica intermitente al momento de detectar una intrusión, disuadiendo al intruso.",
        color: "#f59e0b",
    },
    {
        icon: Wifi,
        num: "03",
        title: "Conectividad WiFi",
        desc: "Integrar el módulo ESP8266 para transmitir datos por red WiFi doméstica y enviar notificaciones push al celular del propietario en segundos.",
        color: "#34d399",
    },
    {
        icon: Smartphone,
        num: "04",
        title: "Notificación remota",
        desc: "Garantizar que el usuario reciba alertas en tiempo real desde cualquier lugar, permitiéndole tomar acción inmediata ante una posible intrusión.",
        color: "#a78bfa",
    },
    {
        icon: Shield,
        num: "05",
        title: "Reducir falsas alarmas",
        desc: "Implementar lógica de validación cruzada entre sensores para minimizar activaciones erróneas y aumentar la confiabilidad del sistema.",
        color: "#fb7185",
    },
    {
        icon: Zap,
        num: "06",
        title: "Bajo costo y consumo",
        desc: "Mantener el costo total del sistema por debajo de $50 USD usando componentes Arduino estándar y optimizar el consumo energético del dispositivo.",
        color: "#fbbf24",
    },
];

const tecnologias = [
    {
        img: IMGS.sensor,
        title: "Sensores inteligentes",
        desc: "Detectan movimiento o apertura de puertas y ventanas para identificar posibles intrusiones con alta precisión y bajo consumo.",
        tag: "Hardware",
        color: "#22d3ee",
    },
    {
        img: IMGS.alarm,
        title: "Sistema de alarma",
        desc: "Activa señal sonora de 85 dB y LED de alerta cuando detecta actividad sospechosa, disuadiendo al intruso en el acto.",
        tag: "Actuadores",
        color: "#f59e0b",
    },
    {
        img: IMGS.app,
        title: "Control desde el celular",
        desc: "El módulo WiFi envía notificaciones push en tiempo real al celular, permitiendo monitorear el hogar desde cualquier lugar.",
        tag: "Conectividad",
        color: "#34d399",
    },
];

const logros = [
    "Detección en menos de 500 ms",
    "Cobertura de hasta 7 metros",
    "Notificación remota vía WiFi",
    "Costo menor a $50 USD",
    "Instalación sin herramientas",
    "Operación 24/7 autónoma",
];

export const Objetivo = () => {
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
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
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

                {/* Pulsing target icon */}
                <div
                    style={{
                        position: "absolute",
                        top: "35%",
                        right: "12%",
                        opacity: 0.08,
                    }}
                >
                    <Target size={180} color="#22d3ee" />
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
                        ETAPA 05 — OBJETIVO DEL PROYECTO
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
                        Objetivo del{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#0ea5e9)",
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
                        Desarrollar una solución tecnológica de bajo costo que
                        mejore la seguridad del hogar mediante sensores
                        inteligentes y alertas en tiempo real.
                    </motion.p>
                </div>
            </section>

            {/* ── OBJETIVO GENERAL ─────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: 1000,
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
                        // OBJETIVO GENERAL
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Meta principal del sistema
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{
                        background: "#0f172a",
                        borderRadius: "1.25rem",
                        padding: "3rem",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid rgba(34,211,238,0.15)",
                    }}
                >
                    {/* Top gradient line */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            background:
                                "linear-gradient(90deg, transparent, #22d3ee 30%, #0ea5e9 70%, transparent)",
                        }}
                    />

                    {/* Pulsing target */}
                    <div
                        style={{
                            position: "absolute",
                            right: "2rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            opacity: 0.04,
                        }}
                    >
                        <Target size={200} color="#22d3ee" />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "2rem",
                            alignItems: "flex-start",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        {/* Animated icon */}
                        <div style={{ position: "relative", flexShrink: 0 }}>
                            <div
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    background: "rgba(6,182,212,0.12)",
                                    border: "2px solid rgba(34,211,238,0.4)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#22d3ee",
                                }}
                            >
                                <Target size={28} />
                            </div>
                            {/* Pulse rings */}
                            {[1, 2].map((n) => (
                                <div
                                    key={n}
                                    style={{
                                        position: "absolute",
                                        inset: -n * 10,
                                        borderRadius: "50%",
                                        border: "1px solid rgba(34,211,238,0.2)",
                                        animation: `pulse-ring 2s ease-out infinite ${n * 0.4}s`,
                                    }}
                                />
                            ))}
                        </div>

                        <div>
                            <h3
                                style={{
                                    color: "#22d3ee",
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.8rem",
                                    letterSpacing: "0.1em",
                                    marginBottom: "1rem",
                                }}
                            >
                                OBJETIVO GENERAL
                            </h3>
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    lineHeight: 1.95,
                                    fontSize: "1.05rem",
                                }}
                            >
                                Diseñar e implementar un{" "}
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    sistema de alarma doméstico
                                </span>{" "}
                                basado en sensores inteligentes que permita
                                detectar accesos no autorizados y enviar
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    {" "}
                                    notificaciones en tiempo real
                                </span>{" "}
                                al usuario, con el propósito de mejorar la
                                seguridad del hogar mediante el uso de
                                tecnología accesible y de bajo costo.
                            </p>

                            {/* Checklist */}
                            <div
                                style={{
                                    marginTop: "1.5rem",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.6rem",
                                }}
                            >
                                {logros.map((l) => (
                                    <div
                                        key={l}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.4rem",
                                            padding: "0.3rem 0.8rem",
                                            background: "rgba(6,182,212,0.08)",
                                            border: "1px solid rgba(34,211,238,0.2)",
                                            borderRadius: "9999px",
                                        }}
                                    >
                                        <CheckCircle
                                            size={12}
                                            color="#22d3ee"
                                        />
                                        <span
                                            style={{
                                                color: "#67e8f9",
                                                fontSize: "0.75rem",
                                                fontFamily:
                                                    "'Space Mono', monospace",
                                            }}
                                        >
                                            {l}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── CONTEXTO VISUAL ──────────────────────────────────────────────── */}
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
                            // CONTEXTO
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Seguridad inteligente para el hogar
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "3.5rem",
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
                                src={IMGS.smart}
                                alt="casa inteligente"
                                style={{
                                    width: "100%",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                Los sistemas de seguridad inteligentes permiten
                                monitorear el hogar mediante
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    {" "}
                                    sensores, microcontroladores y aplicaciones
                                    móviles
                                </span>
                                . Estas tecnologías detectan movimientos,
                                aperturas de puertas o ventanas y envían alertas
                                inmediatas al usuario.
                            </p>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                Gracias a la integración con WiFi, el usuario
                                puede recibir notificaciones en tiempo real,
                                verificar el estado del sistema y monitorear su
                                vivienda desde cualquier lugar del mundo.
                            </p>

                            {/* Mini stats */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "0.75rem",
                                }}
                            >
                                {[
                                    { v: "< 500 ms", l: "tiempo de detección" },
                                    { v: "7 m", l: "rango sensor PIR" },
                                    { v: "24/7", l: "monitoreo continuo" },
                                    {
                                        v: "< $50",
                                        l: "costo total del sistema",
                                    },
                                ].map(({ v, l }) => (
                                    <div
                                        key={l}
                                        style={{
                                            padding: "0.9rem",
                                            background: "#0f172a",
                                            border: "1px solid rgba(34,211,238,0.1)",
                                            borderRadius: "0.75rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "#22d3ee",
                                                fontFamily:
                                                    "'Space Mono', monospace",
                                                fontWeight: 700,
                                                fontSize: "1rem",
                                                marginBottom: "0.2rem",
                                            }}
                                        >
                                            {v}
                                        </div>
                                        <div
                                            style={{
                                                color: "#475569",
                                                fontSize: "0.72rem",
                                            }}
                                        >
                                            {l}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── OBJETIVOS ESPECÍFICOS ────────────────────────────────────────── */}
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
                        // OBJETIVOS ESPECÍFICOS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Metas técnicas del sistema
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cada objetivo representa un componente funcional del
                        sistema de alarma.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {objetivosEspecificos.map((o, i) => {
                        const Icon = o.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: "#0f172a",
                                    border: `1px solid ${o.color}20`,
                                    borderRadius: "1rem",
                                    padding: "1.75rem",
                                    transition: "box-shadow 0.3s",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.boxShadow = `0 16px 40px ${o.color}15`)
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.boxShadow = "none")
                                }
                            >
                                {/* Number watermark */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "-0.5rem",
                                        right: "1rem",
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "4rem",
                                        fontWeight: 700,
                                        color: `${o.color}08`,
                                        lineHeight: 1,
                                        userSelect: "none",
                                    }}
                                >
                                    {o.num}
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: "0.5rem",
                                            background: `${o.color}15`,
                                            border: `1px solid ${o.color}30`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: o.color,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.65rem",
                                            color: o.color,
                                            opacity: 0.7,
                                        }}
                                    >
                                        OBJ. {o.num}
                                    </span>
                                </div>

                                <h3
                                    style={{
                                        color: "#e2e8f0",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        marginBottom: "0.6rem",
                                        fontFamily: "'Syne', sans-serif",
                                    }}
                                >
                                    {o.title}
                                </h3>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.82rem",
                                        lineHeight: 1.7,
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    {o.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── TECNOLOGÍAS ──────────────────────────────────────────────────── */}
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
                            // COMPONENTES
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Tecnologías para alcanzar el objetivo
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1.5rem",
                        }}
                    >
                        {tecnologias.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                    border: `1px solid ${t.color}18`,
                                    background: "#0f172a",
                                }}
                            >
                                <div
                                    style={{
                                        height: 200,
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ duration: 0.4 }}
                                        src={t.img}
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
                                                "linear-gradient(to top, #0f172a 15%, transparent 55%)",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "0.75rem",
                                            right: "0.75rem",
                                            padding: "0.2rem 0.6rem",
                                            borderRadius: "9999px",
                                            background: `${t.color}22`,
                                            border: `1px solid ${t.color}55`,
                                            color: t.color,
                                            fontSize: "0.68rem",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                        }}
                                    >
                                        {t.tag}
                                    </div>
                                </div>
                                <div style={{ padding: "1.25rem" }}>
                                    <h4
                                        style={{
                                            color: t.color,
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

            {/* ── IMPORTANCIA ──────────────────────────────────────────────────── */}
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
                        // JUSTIFICACIÓN
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Importancia del proyecto
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "3.5rem",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "1.25rem",
                            }}
                        >
                            La seguridad doméstica es una necesidad cada vez más
                            importante. Los sistemas modernos combinan{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                sensores, microcontroladores y comunicación
                                inalámbrica
                            </span>{" "}
                            para ofrecer monitoreo continuo y alertas en tiempo
                            real.
                        </p>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "2rem",
                            }}
                        >
                            Este proyecto demuestra que es posible construir un
                            sistema de seguridad efectivo con tecnología
                            accesible, abriendo la puerta a la protección del
                            hogar para cualquier familia sin importar su
                            presupuesto.
                        </p>

                        {/* Impact bullets */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                            }}
                        >
                            {[
                                {
                                    text: "Accesible: solución de menos de $50 USD",
                                    color: "#22d3ee",
                                },
                                {
                                    text: "Educativo: aplicación real de ingeniería electrónica",
                                    color: "#34d399",
                                },
                                {
                                    text: "Escalable: puede ampliarse con más sensores o zonas",
                                    color: "#f59e0b",
                                },
                                {
                                    text: "Replicable: código y diseño abierto para la comunidad",
                                    color: "#a78bfa",
                                },
                            ].map(({ text, color }, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: color,
                                            flexShrink: 0,
                                            boxShadow: `0 0 8px ${color}`,
                                        }}
                                    />
                                    <span
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.88rem",
                                        }}
                                    >
                                        {text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={IMGS.circuit}
                            alt="circuito electrónico"
                            style={{
                                width: "100%",
                                borderRadius: "1rem",
                                border: "1px solid rgba(34,211,238,0.15)",
                            }}
                        />
                    </motion.div>
                </div>
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
                        Con los objetivos definidos, el siguiente paso es
                        aplicar el modelo SMART para hacerlos medibles y
                        alcanzables.
                    </p>
                    <a
                        href="/smart"
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
                        Ver Modelo SMART →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
