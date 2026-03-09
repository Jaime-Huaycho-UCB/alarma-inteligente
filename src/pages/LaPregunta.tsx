import { motion } from "framer-motion";
import {
    ExternalLink,
    FileText,
    Shield,
    BookOpen,
    Camera,
    Lightbulb,
    Bell,
    TrendingDown,
    Users,
    Clock,
} from "lucide-react";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80", // matrix / código verde
    camera: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", // cámara de seguridad
    lighting:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", // iluminación / luz
    alarm: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // candado seguridad
    door: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", // puerta casa
    arduino:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito
    data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // dashboard datos
};

const recursos = [
    {
        icon: FileText,
        title: "Checklist de seguridad",
        description:
            "Lista de verificación descargable para reforzar la seguridad de tu casa paso a paso.",
        link: "https://arapahoeco.gov/Sheriffs%20Office/Community%20Resources/Home%20Security%20and%20Burglary%20prevention%20Check%20list.%20.pdf",
        buttonText: "Descargar PDF",
        color: "#22d3ee",
    },
    {
        icon: Shield,
        title: "Campaña Guardia Civil",
        description:
            "Información oficial con consejos de prevención de robos en domicilios.",
        link: "https://web.guardiacivil.es/gl/colaboracion/consejos/robo_domicilio/",
        buttonText: "Ver consejos",
        color: "#34d399",
    },
    {
        icon: BookOpen,
        title: "Medidas preventivas",
        description:
            "Recomendaciones prácticas del gobierno para reforzar la seguridad del hogar.",
        link: "https://www.mendoza.gov.ar/prensa/medidas-de-prevencion-para-evitar-robos-en-el-hogar/",
        buttonText: "Ver recomendaciones",
        color: "#a78bfa",
    },
];

const imagenes = [
    {
        src: IMGS.camera,
        caption: "Cámaras de seguridad modernas",
        desc: "Las cámaras visibles reducen hasta un 60% los intentos de robo en viviendas.",
    },
    {
        src: IMGS.lighting,
        caption: "Iluminación con sensores",
        desc: "La iluminación automática exterior disuade a los delincuentes durante la noche.",
    },
    {
        src: IMGS.alarm,
        caption: "Sistemas de alarma activos",
        desc: "Una alarma visible incrementa significativamente la seguridad percibida del hogar.",
    },
];

const datos = [
    {
        icon: TrendingDown,
        stat: "85%",
        label: "de robos ocurren en viviendas sin alarma",
        color: "#ef4444",
    },
    {
        icon: Clock,
        stat: "< 10 min",
        label: "tarda en promedio un robo en ejecutarse",
        color: "#f59e0b",
    },
    {
        icon: Shield,
        stat: "3x",
        label: "más seguro con sistema de alarma visible",
        color: "#22d3ee",
    },
    {
        icon: Users,
        stat: "60%",
        label: "de intrusiones se evitan con disuasión activa",
        color: "#34d399",
    },
];

const preguntas = [
    {
        q: "¿Cómo detectar intrusos en tiempo real?",
        a: "Mediante sensores PIR y ultrasónicos conectados a un Arduino que procesan las señales al instante.",
        color: "#22d3ee",
    },
    {
        q: "¿Cómo alertar al propietario de inmediato?",
        a: "A través de un módulo WiFi ESP8266 que envía notificaciones push al celular en segundos.",
        color: "#34d399",
    },
    {
        q: "¿Cómo hacer el sistema accesible económicamente?",
        a: "Usando componentes Arduino de bajo costo disponibles en el mercado local, reduciendo el costo a menos de $50 USD.",
        color: "#f59e0b",
    },
    {
        q: "¿Cómo reducir las falsas alarmas?",
        a: "Combinando múltiples sensores y validando la señal durante un tiempo mínimo antes de activar la alerta.",
        color: "#a78bfa",
    },
];

// ─── Resource card ────────────────────────────────────────────────────────────
function ResourceCard({ r, i }: { r: (typeof recursos)[0]; i: number }) {
    const Icon = r.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{
                background: "#0f172a",
                border: `1px solid ${r.color}22`,
                borderRadius: "1rem",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 20px 40px ${r.color}18`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
            <div
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: "0.6rem",
                    background: `${r.color}15`,
                    border: `1px solid ${r.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: r.color,
                }}
            >
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
                {r.title}
            </h3>
            <p
                style={{
                    color: "#64748b",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    flex: 1,
                }}
            >
                {r.description}
            </p>

            <a
                href={r.link}
                target="_blank"
                rel="noreferrer"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "0.5rem",
                    background: `${r.color}15`,
                    border: `1px solid ${r.color}40`,
                    color: r.color,
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "'Space Mono', monospace",
                    transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.background = `${r.color}25`)
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.background = `${r.color}15`)
                }
            >
                {r.buttonText}
                <ExternalLink size={13} />
            </a>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const LaPregunta = () => {
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
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section
                style={{
                    position: "relative",
                    minHeight: 460,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <img
                    src={IMGS.hero}
                    alt="hero"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.18) saturate(0.4) hue-rotate(180deg)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(2,6,23,0.4), rgba(2,6,23,0.97))",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Scan line animation */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        animation: "scan 4s linear infinite",
                        pointerEvents: "none",
                    }}
                />

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
                        ETAPA 04 — FORMULACIÓN DE LA PREGUNTA
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            marginBottom: "1.5rem",
                        }}
                    >
                        ¿Cómo solucionar el problema de{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#0ea5e9)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            robos a domicilios
                        </span>{" "}
                        mediante tecnología Arduino?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{
                            color: "#94a3b8",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            maxWidth: 620,
                            margin: "0 auto",
                        }}
                    >
                        La pregunta central que guía todo el desarrollo del
                        proyecto: diseñar un sistema de alarma inteligente,
                        accesible y eficaz para proteger hogares.
                    </motion.p>
                </div>
            </section>

            {/* ── PREGUNTAS DERIVADAS ───────────────────────────────────────────── */}
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
                        // PREGUNTAS DERIVADAS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Preguntas que guían la solución
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cada pregunta plantea un reto técnico que el sistema de
                        alarma debe resolver.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.25rem",
                    }}
                >
                    {preguntas.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${p.color}20`,
                                borderRadius: "1rem",
                                padding: "1.75rem",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Left accent bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    width: 3,
                                    background: p.color,
                                    borderRadius: "4px 0 0 4px",
                                }}
                            />

                            <div style={{ paddingLeft: "0.5rem" }}>
                                <div
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.65rem",
                                        color: p.color,
                                        marginBottom: "0.6rem",
                                        opacity: 0.7,
                                    }}
                                >
                                    PREGUNTA {String(i + 1).padStart(2, "0")}
                                </div>
                                <h3
                                    style={{
                                        color: "#e2e8f0",
                                        fontWeight: 700,
                                        fontSize: "0.95rem",
                                        marginBottom: "0.75rem",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {p.q}
                                </h3>
                                <div
                                    style={{
                                        height: 1,
                                        background: `${p.color}20`,
                                        marginBottom: "0.75rem",
                                    }}
                                />
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.83rem",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {p.a}
                                </p>
                            </div>
                        </motion.div>
                    ))}
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
                            // VIDEO REFERENCIAL
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Tips de prevención de robos
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
                            src="https://www.youtube.com/embed/QJc7LSnDt-Q"
                            title="Tips prevención robos"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── DATOS REALES ─────────────────────────────────────────────────── */}
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
                        // ESTADÍSTICAS
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Datos reales sobre seguridad del hogar
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1.25rem",
                        marginBottom: "4rem",
                    }}
                >
                    {datos.map(({ icon: Icon, stat, label, color }, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${color}20`,
                                borderRadius: "1rem",
                                padding: "1.5rem",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    color,
                                    marginBottom: "0.75rem",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon size={24} />
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "1.8rem",
                                    fontWeight: 700,
                                    color,
                                    lineHeight: 1,
                                    marginBottom: "0.4rem",
                                }}
                            >
                                {stat}
                            </div>
                            <div
                                style={{
                                    color: "#475569",
                                    fontSize: "0.78rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                {label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Context text + image */}
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
                            Estudios recientes muestran que tener un sistema de
                            seguridad con
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                {" "}
                                alarmas, cámaras y sensores
                            </span>{" "}
                            reduce de forma significativa la probabilidad de
                            sufrir un robo en el hogar.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.6rem",
                            }}
                        >
                            {[
                                "Puertas blindadas y videoporteros son medidas altamente efectivas.",
                                "La ausencia prolongada sin señales de vida aumenta el riesgo.",
                                "Los sistemas visibles disuaden al 60% de los delincuentes antes de actuar.",
                                "Arduino permite construir estos sistemas a una fracción del costo comercial.",
                            ].map((item, i) => (
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
                                            color: "#22d3ee",
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
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item}
                                    </span>
                                </div>
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
                            src={IMGS.data}
                            alt="Dashboard de datos"
                            style={{
                                width: "100%",
                                borderRadius: "1rem",
                                border: "1px solid rgba(34,211,238,0.15)",
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── IMÁGENES ─────────────────────────────────────────────────────── */}
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
                            // MEDIDAS DE SEGURIDAD
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Soluciones para proteger el hogar
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1.5rem",
                        }}
                    >
                        {imagenes.map((img, i) => (
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
                                        height: 220,
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ duration: 0.4 }}
                                        src={img.src}
                                        alt={img.caption}
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
                                                "linear-gradient(to top, #0f172a 5%, transparent 50%)",
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "1.25rem" }}>
                                    <h3
                                        style={{
                                            color: "#22d3ee",
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                            marginBottom: "0.4rem",
                                        }}
                                    >
                                        {img.caption}
                                    </h3>
                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.82rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {img.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RECURSOS EXTERNOS ────────────────────────────────────────────── */}
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
                        // RECURSOS EXTERNOS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Recursos útiles para reforzar la seguridad
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Documentos y fuentes oficiales de referencia para el
                        proyecto.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {recursos.map((r, i) => (
                        <ResourceCard key={i} r={r} i={i} />
                    ))}
                </div>
            </section>

            {/* ── SOLUCIÓN PROPUESTA ───────────────────────────────────────────── */}
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
                            // RESPUESTA
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            La respuesta: Sistema de Alarma con Arduino
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
                                src={IMGS.arduino}
                                alt="Circuito Arduino"
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
                                    marginBottom: "1.75rem",
                                }}
                            >
                                La respuesta a la pregunta central del proyecto
                                es un sistema de alarma basado en
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    {" "}
                                    Arduino Uno
                                </span>
                                , sensores PIR y ultrasónico, capaz de detectar
                                intrusos y enviar alertas al celular del
                                propietario en tiempo real a un costo accesible
                                para cualquier hogar.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.9rem",
                                }}
                            >
                                {[
                                    {
                                        icon: Camera,
                                        text: "Sensor PIR de movimiento con rango de 7 metros",
                                        color: "#22d3ee",
                                    },
                                    {
                                        icon: Bell,
                                        text: "Buzzer de 85 dB para alerta sonora inmediata",
                                        color: "#f59e0b",
                                    },
                                    {
                                        icon: Shield,
                                        text: "Módulo WiFi ESP8266 para notificación remota",
                                        color: "#34d399",
                                    },
                                    {
                                        icon: Lightbulb,
                                        text: "Costo total del sistema menor a $50 USD",
                                        color: "#a78bfa",
                                    },
                                ].map(({ icon: Icon, text, color }, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.09 }}
                                        viewport={{ once: true }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                minWidth: 34,
                                                height: 34,
                                                borderRadius: "0.4rem",
                                                background: `${color}15`,
                                                border: `1px solid ${color}30`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={16} />
                                        </div>
                                        <span
                                            style={{
                                                color: "#94a3b8",
                                                fontSize: "0.88rem",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
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
                        Continuar con los objetivos del proyecto
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con la pregunta definida, el siguiente paso es
                        establecer los objetivos concretos del sistema.
                    </p>
                    <a
                        href="/objetivo"
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
                        Ver Objetivo del Proyecto →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
