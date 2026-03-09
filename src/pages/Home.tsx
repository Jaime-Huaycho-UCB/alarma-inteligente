import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

// ─── Animated counter hook ───────────────────────────────────────────────────
function useCounter(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);
    return [count, setStarted];
}

// ─── Stat card with counter ───────────────────────────────────────────────────
function StatCard({ value, label, suffix = "" }) {
    const ref = useRef(null);
    const [count, setStarted] = useCounter(value);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setStarted(true);
            },
            { threshold: 0.5 },
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} className="text-center">
            <div
                style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "#22d3ee",
                    lineHeight: 1,
                }}
            >
                {count}
                {suffix}
            </div>
            <div
                style={{
                    color: "#94a3b8",
                    marginTop: "0.5rem",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </div>
        </div>
    );
}

// ─── Timeline step ────────────────────────────────────────────────────────────
function TimelineStep({ num, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
        >
            <div
                style={{
                    minWidth: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#06b6d4,#0e7490)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Space Mono',monospace",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "1rem",
                    boxShadow: "0 0 20px #06b6d440",
                }}
            >
                {num}
            </div>
            <div>
                <div
                    style={{
                        color: "#e2e8f0",
                        fontWeight: 600,
                        marginBottom: "0.3rem",
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        color: "#64748b",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                    }}
                >
                    {desc}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Sensor card ─────────────────────────────────────────────────────────────
function SensorCard({ img, title, desc, specs, delay }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "#0f172a",
                border: `1px solid ${hovered ? "#22d3ee" : "rgba(34,211,238,0.15)"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transform: hovered ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hovered
                    ? "0 20px 40px rgba(6,182,212,0.15)"
                    : "none",
                cursor: "default",
            }}
        >
            <div
                style={{
                    position: "relative",
                    height: 200,
                    overflow: "hidden",
                }}
            >
                <img
                    src={img}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        transform: hovered ? "scale(1.08)" : "scale(1)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, #0f172a 20%, transparent 70%)",
                    }}
                />
            </div>
            <div style={{ padding: "1.5rem" }}>
                <h3
                    style={{
                        color: "#22d3ee",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        marginBottom: "0.5rem",
                        fontFamily: "'Space Mono',monospace",
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        color: "#94a3b8",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                    }}
                >
                    {desc}
                </p>
                <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                    {specs.map((s) => (
                        <span
                            key={s}
                            style={{
                                padding: "0.2rem 0.6rem",
                                background: "rgba(6,182,212,0.1)",
                                border: "1px solid rgba(6,182,212,0.3)",
                                borderRadius: "9999px",
                                color: "#67e8f9",
                                fontSize: "0.75rem",
                                fontFamily: "'Space Mono',monospace",
                            }}
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Section link card ────────────────────────────────────────────────────────
function SectionCard({ name, link, icon, desc, delay }) {
    const [h, setH] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            <Link
                to={link}
                onMouseEnter={() => setH(true)}
                onMouseLeave={() => setH(false)}
                style={{
                    display: "block",
                    padding: "1.5rem",
                    background: h
                        ? "linear-gradient(135deg,rgba(6,182,212,0.12),rgba(14,116,144,0.08))"
                        : "#0f172a",
                    border: `1px solid ${h ? "#22d3ee" : "rgba(34,211,238,0.15)"}`,
                    borderRadius: "1rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    transform: h ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: h ? "0 12px 30px rgba(6,182,212,0.12)" : "none",
                }}
            >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                    {icon}
                </div>
                <div
                    style={{
                        color: h ? "#22d3ee" : "#e2e8f0",
                        fontWeight: 600,
                        marginBottom: "0.3rem",
                        transition: "color 0.3s",
                    }}
                >
                    {name}
                </div>
                <div
                    style={{
                        color: "#64748b",
                        fontSize: "0.82rem",
                        lineHeight: 1.5,
                    }}
                >
                    {desc}
                </div>
                <div
                    style={{
                        marginTop: "1rem",
                        color: "#22d3ee",
                        fontSize: "0.82rem",
                        fontFamily: "'Space Mono',monospace",
                        opacity: h ? 1 : 0,
                        transition: "opacity 0.3s",
                    }}
                >
                    Ver sección →
                </div>
            </Link>
        </motion.div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
export const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const sensors = [
        {
            img: "https://images.unsplash.com/photo-1581091012184-7c4c3c48f4f7?w=600&q=80",
            title: "Sensor PIR (HC-SR501)",
            desc: "Detecta movimiento mediante cambios en la radiación infrarroja emitida por cuerpos en movimiento. Ideal para detectar presencia humana en un rango de hasta 7 metros.",
            specs: [
                "Rango: 3–7 m",
                "Ángulo: 120°",
                "5V DC",
                "Retardo ajustable",
            ],
        },
        {
            img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
            title: "Sensor Ultrasónico (HC-SR04)",
            desc: "Emite pulsos de sonido de alta frecuencia y mide el tiempo de retorno para calcular la distancia con precisión milimétrica.",
            specs: [
                "Rango: 2–400 cm",
                "Precisión: ±3 mm",
                "5V DC",
                "Frecuencia: 40 kHz",
            ],
        },
        {
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
            title: "Buzzer Activo (5V)",
            desc: "Transductor electroacústico que convierte señales eléctricas en sonido. Activa la alarma cuando el sistema detecta una amenaza.",
            specs: ["85 dB", "5V DC", "2300 Hz", "Respuesta inmediata"],
        },
        {
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
            title: "Sensor Magnético de Puerta",
            desc: "Detecta la apertura de puertas y ventanas mediante el efecto magnético. Complementa el sistema PIR para una cobertura total.",
            specs: ["12V / 24V", "NC / NO", "IP65", "Fácil instalación"],
        },
        {
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
            title: "Módulo LCD 16x2",
            desc: "Pantalla de cristal líquido que muestra el estado del sistema en tiempo real: activo, desactivado, alerta o configuración.",
            specs: ["16 columnas", "2 filas", "I2C", "Retroiluminación azul"],
        },
        {
            img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
            title: "Módulo WiFi (ESP8266)",
            desc: "Permite enviar notificaciones en tiempo real al teléfono del usuario cuando se detecta una intrusión mediante WiFi.",
            specs: ["802.11 b/g/n", "3.3V", "AT Commands", "2.4 GHz"],
        },
    ];

    const sections = [
        {
            name: "Lluvia de ideas",
            link: "/lluvia-ideas",
            icon: "💡",
            desc: "Brainstorming inicial y exploración de soluciones posibles para el sistema.",
        },
        {
            name: "Diagrama Ishikawa",
            link: "/ishikawa",
            icon: "🐟",
            desc: "Análisis de causa-raíz de los problemas de seguridad identificados.",
        },
        {
            name: "Definición del Problema",
            link: "/definicion-problema",
            icon: "🎯",
            desc: "Formulación precisa del problema que el sistema busca resolver.",
        },
        {
            name: "Preguntas del Problema",
            link: "/la-pregunta",
            icon: "❓",
            desc: "Preguntas clave que guían el desarrollo e investigación del proyecto.",
        },
        {
            name: "Objetivo",
            link: "/objetivo",
            icon: "🏆",
            desc: "Metas y resultados esperados del sistema de alarma inteligente.",
        },
        {
            name: "Modelo SMART",
            link: "/smart",
            icon: "📊",
            desc: "Objetivos específicos, medibles, alcanzables, relevantes y temporales.",
        },
        {
            name: "Modelo PART",
            link: "/modelo-part",
            icon: "🔩",
            desc: "Planificación, acción, revisión y transformación del proyecto.",
        },
    ];

    const flowSteps = [
        {
            num: "01",
            title: "Detección",
            desc: "Los sensores PIR y ultrasónico monitorean el área constantemente. Cualquier movimiento o proximidad anómala activa el procesamiento.",
        },
        {
            num: "02",
            title: "Procesamiento",
            desc: "El Arduino recibe las señales analógicas y digitales, las interpreta mediante el firmware programado en C++ y toma decisiones en milisegundos.",
        },
        {
            num: "03",
            title: "Validación",
            desc: "El sistema verifica si la alarma está activada o si está en modo silencio. Solo activa alertas cuando el sistema está en estado armado.",
        },
        {
            num: "04",
            title: "Alerta Sonora",
            desc: "El buzzer emite una señal acústica intermitente de alta intensidad para alertar a los ocupantes del espacio vigilado.",
        },
        {
            num: "05",
            title: "Notificación Remota",
            desc: "A través del módulo WiFi ESP8266 se envía una notificación push al dispositivo móvil del propietario en tiempo real.",
        },
        {
            num: "06",
            title: "Registro de Eventos",
            desc: "Cada evento queda registrado con timestamp. El LCD muestra el estado actual y el historial puede consultarse posteriormente.",
        },
    ];

    return (
        <div
            style={{
                background: "#020617",
                color: "#e2e8f0",
                fontFamily: "'Syne', sans-serif",
                overflowX: "hidden",
            }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 3px; }

        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }

        @media (max-width: 900px) {
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
        }

        .scanline {
          background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px);
          pointer-events: none;
        }

        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 20px rgba(6,182,212,0.3); }
          50% { box-shadow: 0 0 40px rgba(6,182,212,0.6); }
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .blink { animation: blink 1s infinite; }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Grid background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `
            linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
          `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Radial glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: 800,
                        height: 800,
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
                        borderRadius: "50%",
                    }}
                />

                {/* Corner decorations */}
                <div
                    style={{
                        position: "absolute",
                        top: 40,
                        left: 40,
                        width: 60,
                        height: 60,
                        borderTop: "2px solid #22d3ee",
                        borderLeft: "2px solid #22d3ee",
                        opacity: 0.5,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 40,
                        right: 40,
                        width: 60,
                        height: 60,
                        borderTop: "2px solid #22d3ee",
                        borderRight: "2px solid #22d3ee",
                        opacity: 0.5,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        left: 40,
                        width: 60,
                        height: 60,
                        borderBottom: "2px solid #22d3ee",
                        borderLeft: "2px solid #22d3ee",
                        opacity: 0.5,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        right: 40,
                        width: 60,
                        height: 60,
                        borderBottom: "2px solid #22d3ee",
                        borderRight: "2px solid #22d3ee",
                        opacity: 0.5,
                    }}
                />

                {/* Floating orbs */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "8%",
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.2), transparent)",
                        animation: "float 6s ease-in-out infinite",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "25%",
                        right: "10%",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.15), transparent)",
                        animation: "float 8s ease-in-out infinite 2s",
                    }}
                />

                <motion.div
                    style={{
                        y: heroY,
                        opacity: heroOpacity,
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        padding: "2rem",
                        maxWidth: "900px",
                    }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.4rem 1.2rem",
                            border: "1px solid rgba(34,211,238,0.4)",
                            borderRadius: "9999px",
                            marginBottom: "2rem",
                            fontFamily: "'Space Mono',monospace",
                            fontSize: "0.8rem",
                            color: "#67e8f9",
                            background: "rgba(6,182,212,0.08)",
                        }}
                    >
                        <span
                            className="blink"
                            style={{
                                display: "inline-block",
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#22d3ee",
                            }}
                        />
                        SISTEMA ACTIVO — Proyecto Desarrollo, innovacion y tecnologia - 1-2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        Sistema Inteligente
                        <br />
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#0891b2,#22d3ee)",
                                backgroundSize: "200%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            de Alarma
                        </span>{" "}
                        <span style={{ color: "#e2e8f0" }}>con Arduino</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{
                            maxWidth: "640px",
                            margin: "0 auto 2.5rem",
                            color: "#94a3b8",
                            fontSize: "1.1rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Plataforma de seguridad inteligente basada en
                        microcontroladores Arduino, sensores de movimiento y
                        distancia, capaz de detectar intrusiones y alertar al
                        usuario en tiempo real mediante señales sonoras y
                        notificaciones móviles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <Link
                            to="/lluvia-ideas"
                            style={{
                                padding: "0.85rem 2rem",
                                borderRadius: "0.5rem",
                                fontWeight: 700,
                                background:
                                    "linear-gradient(135deg, #06b6d4, #0891b2)",
                                color: "#fff",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                boxShadow: "0 0 30px rgba(6,182,212,0.35)",
                                transition: "all 0.3s ease",
                                animation: "pulse-glow 3s infinite",
                            }}
                        >
                            Ver desarrollo del proyecto
                        </Link>
                        <Link
                            to="/definicion-problema"
                            style={{
                                padding: "0.85rem 2rem",
                                borderRadius: "0.5rem",
                                fontWeight: 600,
                                border: "1px solid rgba(34,211,238,0.5)",
                                color: "#22d3ee",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                background: "rgba(6,182,212,0.05)",
                                transition: "all 0.3s ease",
                            }}
                        >
                            Definición del problema →
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                        position: "absolute",
                        bottom: 40,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "#475569",
                        fontSize: "0.75rem",
                        fontFamily: "'Space Mono',monospace",
                    }}
                >
                    <span>SCROLL</span>
                    <div
                        style={{
                            width: 1,
                            height: 40,
                            background:
                                "linear-gradient(to bottom, #22d3ee, transparent)",
                        }}
                    />
                </motion.div>
            </section>

            {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
            <section
                style={{
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                    borderBottom: "1px solid rgba(34,211,238,0.1)",
                    background: "#0a1628",
                    padding: "3rem 2rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "2rem",
                    }}
                >
                    <StatCard value={6} label="Sensores" suffix="+" />
                    <StatCard value={200} label="Líneas de código" suffix="+" />
                    <StatCard value={7} label="Metros de cobertura" />
                    <StatCard
                        value={99}
                        label="Uptime del sistema"
                        suffix="%"
                    />
                </div>
            </section>

            {/* ── INTRODUCCIÓN ─────────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "7rem 2rem",
                }}
            >
                <div
                    className="grid-2"
                    style={{ alignItems: "center", gap: "4rem" }}
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div
                                style={{
                                    fontFamily: "'Space Mono',monospace",
                                    color: "#22d3ee",
                                    fontSize: "0.8rem",
                                    letterSpacing: "0.2em",
                                    marginBottom: "1rem",
                                }}
                            >
                                // INTRODUCCIÓN
                            </div>
                            <h2
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: 800,
                                    marginBottom: "1.5rem",
                                    lineHeight: 1.2,
                                }}
                            >
                                ¿Por qué un sistema de alarma inteligente?
                            </h2>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: 1.9,
                                    marginBottom: "1rem",
                                }}
                            >
                                La inseguridad es una problemática creciente en
                                hogares, oficinas y espacios académicos. Los
                                sistemas de alarma tradicionales son costosos,
                                difíciles de instalar y poco personalizables.
                                Arduino ofrece una solución accesible, de código
                                abierto y completamente adaptable.
                            </p>
                            <p style={{ color: "#94a3b8", lineHeight: 1.9 }}>
                                Este proyecto demuestra cómo la electrónica de
                                bajo costo puede proporcionar niveles de
                                seguridad equivalentes a sistemas comerciales de
                                alto precio, con la ventaja adicional de ser
                                programable y extensible según las necesidades
                                específicas del usuario.
                            </p>
                            <div
                                style={{
                                    marginTop: "2rem",
                                    display: "flex",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                {[
                                    "Código abierto",
                                    "Bajo costo",
                                    "Personalizable",
                                    "Escalable",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "0.3rem 0.8rem",
                                            border: "1px solid rgba(34,211,238,0.3)",
                                            borderRadius: "9999px",
                                            color: "#67e8f9",
                                            fontSize: "0.8rem",
                                            fontFamily:
                                                "'Space Mono',monospace",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ position: "relative" }}>
                            <img
                                src="https://images.unsplash.com/photo-1553406830-ef2513450d76?w=900&q=85"
                                alt="Arduino Uno"
                                style={{
                                    width: "100%",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(34,211,238,0.2)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, #020617 0%, transparent 40%)",
                                    borderRadius: "1rem",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "1.5rem",
                                    left: "1.5rem",
                                    right: "1.5rem",
                                    padding: "1rem",
                                    background: "rgba(2,6,23,0.85)",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(34,211,238,0.2)",
                                    borderRadius: "0.75rem",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Space Mono',monospace",
                                        color: "#22d3ee",
                                        fontSize: "0.8rem",
                                        marginBottom: "0.3rem",
                                    }}
                                >
                                    Arduino Uno Rev3
                                </div>
                                <div
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.75rem",
                                    }}
                                >
                                    ATmega328P — 16 MHz — 14 pines digitales
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── ARDUINO DETALLE ──────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "7rem 2rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "4rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono',monospace",
                                color: "#22d3ee",
                                fontSize: "0.8rem",
                                letterSpacing: "0.2em",
                                marginBottom: "1rem",
                            }}
                        >
                            // HARDWARE PRINCIPAL
                        </div>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
                            Arduino como núcleo del sistema
                        </h2>
                    </motion.div>

                    <div
                        className="grid-2"
                        style={{ gap: "4rem", alignItems: "center" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85"
                                alt="Arduino front"
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
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: 1.9,
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Arduino es una plataforma de prototipado
                                electrónico de código abierto basada en hardware
                                y software flexibles y fáciles de usar. Está
                                diseñado para que artistas, diseñadores,
                                ingenieros y cualquier persona interesada en
                                crear objetos o entornos interactivos pueda
                                hacerlo.
                            </p>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: 1.9,
                                    marginBottom: "2rem",
                                }}
                            >
                                En este proyecto, el{" "}
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    Arduino Uno R3
                                </span>{" "}
                                actúa como el cerebro central del sistema,
                                recibiendo señales de los sensores, procesando
                                la información mediante algoritmos de detección
                                y emitiendo comandos hacia los actuadores
                                (buzzer, LED, WiFi).
                            </p>

                            {/* Specs table */}
                            <div
                                style={{
                                    border: "1px solid rgba(34,211,238,0.15)",
                                    borderRadius: "0.75rem",
                                    overflow: "hidden",
                                }}
                            >
                                {[
                                    ["Microcontrolador", "ATmega328P"],
                                    ["Voltaje operativo", "5V"],
                                    ["Velocidad de reloj", "16 MHz"],
                                    ["Pines digitales I/O", "14 (6 PWM)"],
                                    ["Pines analógicos", "6"],
                                    ["Memoria Flash", "32 KB"],
                                ].map(([k, v], i) => (
                                    <div
                                        key={k}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "0.75rem 1rem",
                                            background:
                                                i % 2 === 0
                                                    ? "rgba(6,182,212,0.04)"
                                                    : "transparent",
                                            borderBottom:
                                                i < 5
                                                    ? "1px solid rgba(34,211,238,0.08)"
                                                    : "none",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "#64748b",
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {k}
                                        </span>
                                        <span
                                            style={{
                                                color: "#e2e8f0",
                                                fontFamily:
                                                    "'Space Mono',monospace",
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {v}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── SENSORES ─────────────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "7rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono',monospace",
                            color: "#22d3ee",
                            fontSize: "0.8rem",
                            letterSpacing: "0.2em",
                            marginBottom: "1rem",
                        }}
                    >
                        // HARDWARE PERIFÉRICO
                    </div>
                    <h2
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 800,
                            marginBottom: "1rem",
                        }}
                    >
                        Componentes del sistema
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: "500px",
                            margin: "0 auto",
                        }}
                    >
                        Cada componente fue seleccionado por su precisión, costo
                        accesible y compatibilidad con Arduino.
                    </p>
                </motion.div>

                <div className="grid-3">
                    {sensors.map((s, i) => (
                        <SensorCard key={s.title} {...s} delay={i * 0.08} />
                    ))}
                </div>
            </section>

            {/* ── CÓMO FUNCIONA ────────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "7rem 2rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "4rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono',monospace",
                                color: "#22d3ee",
                                fontSize: "0.8rem",
                                letterSpacing: "0.2em",
                                marginBottom: "1rem",
                            }}
                        >
                            // FLUJO DE OPERACIÓN
                        </div>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
                            ¿Cómo funciona el sistema?
                        </h2>
                    </motion.div>

                    <div
                        className="grid-2"
                        style={{ gap: "4rem", alignItems: "start" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                            }}
                        >
                            {flowSteps.map((s, i) => (
                                <TimelineStep
                                    key={s.num}
                                    {...s}
                                    delay={i * 0.1}
                                />
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{ position: "sticky", top: "6rem" }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&q=85"
                                alt="Arduino sistema"
                                style={{
                                    width: "100%",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                    marginBottom: "1.5rem",
                                }}
                            />
                            <div
                                style={{
                                    padding: "1.5rem",
                                    background: "#0f172a",
                                    borderRadius: "1rem",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                    fontFamily: "'Space Mono',monospace",
                                    fontSize: "0.8rem",
                                    lineHeight: 2,
                                }}
                            >
                                <div
                                    style={{
                                        color: "#475569",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    // loop() principal
                                </div>
                                <div>
                                    <span style={{ color: "#7c3aed" }}>
                                        void
                                    </span>{" "}
                                    <span style={{ color: "#22d3ee" }}>
                                        loop
                                    </span>
                                    () {"{"}
                                </div>
                                <div style={{ paddingLeft: "1rem" }}>
                                    <span style={{ color: "#64748b" }}>
                                        int
                                    </span>{" "}
                                    dist ={" "}
                                    <span style={{ color: "#f59e0b" }}>
                                        getDistance
                                    </span>
                                    ();
                                </div>
                                <div style={{ paddingLeft: "1rem" }}>
                                    <span style={{ color: "#64748b" }}>
                                        bool
                                    </span>{" "}
                                    pir ={" "}
                                    <span style={{ color: "#f59e0b" }}>
                                        digitalRead
                                    </span>
                                    (PIR_PIN);
                                </div>
                                <div style={{ paddingLeft: "1rem" }}>
                                    <span style={{ color: "#7c3aed" }}>if</span>{" "}
                                    (dist {"< 100 || "} pir) {"{"}
                                </div>
                                <div style={{ paddingLeft: "2rem" }}>
                                    <span style={{ color: "#f59e0b" }}>
                                        activarAlarma
                                    </span>
                                    ();
                                </div>
                                <div style={{ paddingLeft: "1rem" }}>{"}"}</div>
                                <div>{"}"}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── ARQUITECTURA ─────────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "7rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono',monospace",
                            color: "#22d3ee",
                            fontSize: "0.8rem",
                            letterSpacing: "0.2em",
                            marginBottom: "1rem",
                        }}
                    >
                        // ARQUITECTURA
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
                        Diagrama de arquitectura
                    </h2>
                </motion.div>

                {/* Architecture flow */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "0",
                    }}
                >
                    {[
                        {
                            label: "Sensores",
                            sub: "PIR + Ultrasónico",
                            icon: "📡",
                        },
                        {
                            label: "Arduino Uno",
                            sub: "Procesamiento central",
                            icon: "🔧",
                        },
                        {
                            label: "Firmware C++",
                            sub: "Lógica de detección",
                            icon: "💻",
                        },
                        {
                            label: "Actuadores",
                            sub: "Buzzer + LED + WiFi",
                            icon: "🔔",
                        },
                    ].map((item, i) => (
                        <div
                            key={item.label}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                style={{
                                    textAlign: "center",
                                    padding: "1.5rem 1.2rem",
                                    background: "#0f172a",
                                    border: "1px solid rgba(34,211,238,0.3)",
                                    borderRadius: "1rem",
                                    minWidth: 140,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "2rem",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div
                                    style={{
                                        color: "#e2e8f0",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {item.label}
                                </div>
                                <div
                                    style={{
                                        color: "#475569",
                                        fontSize: "0.75rem",
                                        marginTop: "0.3rem",
                                    }}
                                >
                                    {item.sub}
                                </div>
                            </motion.div>
                            {i < 3 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.15 + 0.3,
                                    }}
                                    viewport={{ once: true }}
                                    style={{
                                        padding: "0 0.5rem",
                                        color: "#22d3ee",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    →
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Additional architecture image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ marginTop: "4rem" }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                        alt="Diagrama de conexión Arduino"
                        style={{
                            width: "100%",
                            maxWidth: 700,
                            margin: "0 auto",
                            display: "block",
                            borderRadius: "1rem",
                            border: "1px solid rgba(34,211,238,0.15)",
                            background: "#fff",
                            padding: "1rem",
                        }}
                    />
                    <p
                        style={{
                            textAlign: "center",
                            color: "#475569",
                            fontSize: "0.8rem",
                            marginTop: "1rem",
                            fontFamily: "'Space Mono',monospace",
                        }}
                    >
                        Diagrama de conexión: Arduino Uno + Sensor Ultrasónico
                        HC-SR04
                    </p>
                </motion.div>
            </section>

            {/* ── HERRAMIENTAS ─────────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "7rem 2rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "4rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono',monospace",
                                color: "#22d3ee",
                                fontSize: "0.8rem",
                                letterSpacing: "0.2em",
                                marginBottom: "1rem",
                            }}
                        >
                            // STACK TECNOLÓGICO
                        </div>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
                            Herramientas y tecnologías
                        </h2>
                    </motion.div>

                    <div className="grid-4">
                        {[
                            {
                                name: "Arduino IDE",
                                desc: "Entorno de programación oficial para microcontroladores Arduino.",
                                icon: "⚡",
                                color: "#00979c",
                            },
                            {
                                name: "C++ / C",
                                desc: "Lenguaje de programación usado para el firmware del microcontrolador.",
                                icon: "🔤",
                                color: "#004482",
                            },
                            {
                                name: "React",
                                desc: "Librería JavaScript para construir la interfaz web del proyecto.",
                                icon: "⚛️",
                                color: "#61dafb",
                            },
                            {
                                name: "TailwindCSS",
                                desc: "Framework de CSS utilitario para el diseño de la interfaz.",
                                icon: "🎨",
                                color: "#38bdf8",
                            },
                            {
                                name: "Framer Motion",
                                desc: "Librería de animaciones para React con fluidez y rendimiento.",
                                icon: "🎬",
                                color: "#ff4154",
                            },
                            {
                                name: "GitHub",
                                desc: "Plataforma de control de versiones y colaboración del proyecto.",
                                icon: "🐙",
                                color: "#e2e8f0",
                            },
                            {
                                name: "Tinkercad",
                                desc: "Herramienta de simulación de circuitos Arduino online.",
                                icon: "🔌",
                                color: "#f97316",
                            },
                            {
                                name: "VS Code",
                                desc: "Editor de código principal utilizado para el desarrollo web.",
                                icon: "💙",
                                color: "#007acc",
                            },
                        ].map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: "1.5rem",
                                    background: "#0f172a",
                                    borderRadius: "0.75rem",
                                    border: "1px solid rgba(34,211,238,0.1)",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "2rem",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    {tool.icon}
                                </div>
                                <div
                                    style={{
                                        color: tool.color,
                                        fontWeight: 700,
                                        marginBottom: "0.4rem",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {tool.name}
                                </div>
                                <div
                                    style={{
                                        color: "#475569",
                                        fontSize: "0.78rem",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {tool.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GALERÍA ──────────────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "7rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono',monospace",
                            color: "#22d3ee",
                            fontSize: "0.8rem",
                            letterSpacing: "0.2em",
                            marginBottom: "1rem",
                        }}
                    >
                        // GALERÍA
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 800 }}>
                        Imágenes del proyecto
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "auto auto",
                        gap: "1rem",
                    }}
                >
                    {[
                        {
                            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85",
                            span: "1 / 3",
                            label: "Arduino Uno R3 — Vista frontal",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1581091012184-7c4c3c48f4f7?w=600&q=80",
                            span: "auto",
                            label: "Sensor PIR HC-SR501",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=600&q=80",
                            span: "auto",
                            label: "Conexión HC-SR04",
                            bg: "#fff",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
                            span: "auto",
                            label: "Arduino genuino",
                        },
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: i === 0 ? img.span : "auto",
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "0.75rem",
                                border: "1px solid rgba(34,211,238,0.15)",
                                background: img.bg || "#0f172a",
                                minHeight: 200,
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.label}
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
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "0.75rem 1rem",
                                    background:
                                        "linear-gradient(to top, rgba(2,6,23,0.9), transparent)",
                                    color: "#94a3b8",
                                    fontSize: "0.78rem",
                                    fontFamily: "'Space Mono',monospace",
                                }}
                            >
                                {img.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── SECCIONES DEL PROYECTO ───────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "7rem 2rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "4rem" }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono',monospace",
                                color: "#22d3ee",
                                fontSize: "0.8rem",
                                letterSpacing: "0.2em",
                                marginBottom: "1rem",
                            }}
                        >
                            // CONTENIDO
                        </div>
                        <h2
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: 800,
                                marginBottom: "1rem",
                            }}
                        >
                            Desarrollo del proyecto
                        </h2>
                        <p
                            style={{
                                color: "#64748b",
                                maxWidth: "500px",
                                margin: "0 auto",
                            }}
                        >
                            Explora cada etapa del proceso de diseño, análisis y
                            desarrollo del sistema.
                        </p>
                    </motion.div>

                    <div className="grid-3">
                        {sections.map((s, i) => (
                            <SectionCard key={s.name} {...s} delay={i * 0.07} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "7rem 2rem",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: 600,
                        height: 600,
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
                        borderRadius: "50%",
                        pointerEvents: "none",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ position: "relative", zIndex: 1 }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono',monospace",
                            color: "#22d3ee",
                            fontSize: "0.8rem",
                            letterSpacing: "0.2em",
                            marginBottom: "1.5rem",
                        }}
                    >
                        // EXPLORA EL PROYECTO
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(2rem,4vw,3.5rem)",
                            fontWeight: 800,
                            marginBottom: "1.5rem",
                            maxWidth: 600,
                            margin: "0 auto 1.5rem",
                        }}
                    >
                        Conoce cada detalle del sistema de seguridad
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            marginBottom: "2.5rem",
                            maxWidth: 480,
                            margin: "0 auto 2.5rem",
                        }}
                    >
                        Desde la lluvia de ideas hasta el modelo SMART, cada
                        sección documenta el proceso completo de ingeniería.
                    </p>
                    <Link
                        to="/lluvia-ideas"
                        style={{
                            padding: "1rem 2.5rem",
                            borderRadius: "0.5rem",
                            fontWeight: 700,
                            background:
                                "linear-gradient(135deg,#06b6d4,#0891b2)",
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "1rem",
                            boxShadow: "0 0 40px rgba(6,182,212,0.3)",
                        }}
                    >
                        Comenzar a explorar →
                    </Link>
                </motion.div>
            </section>

            {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
            <footer
                style={{
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                    padding: "3rem 2rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'Space Mono',monospace",
                            color: "#22d3ee",
                            fontSize: "0.85rem",
                        }}
                    >
                        Sistema de Alarma con Arduino
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {[
                            ["Inicio", "/"],
                            ["Lluvia de ideas", "/lluvia-ideas"],
                            ["Objetivo", "/objetivo"],
                        ].map(([name, href]) => (
                            <Link
                                key={name}
                                to={href}
                                style={{
                                    color: "#475569",
                                    textDecoration: "none",
                                    fontSize: "0.82rem",
                                    transition: "color 0.2s",
                                }}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
