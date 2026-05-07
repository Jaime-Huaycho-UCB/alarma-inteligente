import { motion, useScroll, useTransform } from "framer-motion";
import {
    AlertTriangle,
    Home,
    Lightbulb,
    Eye,
    Lock,
    TrendingUp,
    ShieldOff,
    Moon,
} from "lucide-react";
import { useRef } from "react";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1400&q=80", // casa oscura / inseguridad
    context1:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // candado / seguridad
    context2:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", // puerta de casa
    context3:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", // construcción / acceso
    stats: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80", // dashboard datos
    solution:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito electrónico
    night: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // noche / oscuridad
    family: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80", // hogar / familia
};

const causas = [
    {
        icon: ShieldOff,
        titulo: "Falta de sistemas de seguridad",
        texto: "Muchas viviendas no cuentan con alarmas, sensores o cámaras que permitan detectar intrusos a tiempo.",
        color: "#22d3ee",
        stat: "68%",
        statLabel: "hogares sin alarma",
    },
    {
        icon: Lock,
        titulo: "Accesos vulnerables",
        texto: "Puertas o ventanas sin seguro permiten que los intrusos ingresen fácilmente a la vivienda.",
        color: "#f59e0b",
        stat: "45%",
        statLabel: "entradas sin refuerzo",
    },
    {
        icon: Moon,
        titulo: "Falta de iluminación exterior",
        texto: "Las zonas oscuras alrededor de una casa facilitan que los delincuentes actúen sin ser vistos.",
        color: "#a78bfa",
        stat: "3x",
        statLabel: "más riesgo en zonas oscuras",
    },
    {
        icon: Home,
        titulo: "Casas aparentemente vacías",
        texto: "Los intrusos suelen atacar viviendas cuando los propietarios no se encuentran presentes.",
        color: "#34d399",
        stat: "80%",
        statLabel: "robos en ausencia del dueño",
    },
];

const situaciones = [
    {
        img: IMGS.context2,
        label: "Accesos sin reforzar",
        desc: "Puertas y ventanas sin sistemas de seguridad son el punto de entrada más común.",
    },
    {
        img: IMGS.night,
        label: "Zonas sin iluminación",
        desc: "La oscuridad exterior facilita la acción de delincuentes sin ser detectados.",
    },
    {
        img: IMGS.family,
        label: "Hogares vulnerables",
        desc: "Familias sin sistemas de alerta no pueden reaccionar a tiempo ante una intrusión.",
    },
];

// ─── Causa card ──────────────────────────────────────────────────────────────
function CausaCard({ c, i }: { c: (typeof causas)[0]; i: number }) {
    const Icon = c.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            style={{
                background: "#0f172a",
                border: `1px solid ${c.color}22`,
                borderRadius: "1rem",
                padding: "1.75rem",
                transition: "box-shadow 0.3s",
                position: "relative",
                overflow: "hidden",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 20px 40px ${c.color}18`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
            {/* Background stat watermark */}
            <div
                style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "1rem",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: `${c.color}10`,
                    lineHeight: 1,
                    userSelect: "none",
                }}
            >
                {c.stat}
            </div>

            <div
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: "0.6rem",
                    background: `${c.color}15`,
                    border: `1px solid ${c.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: c.color,
                }}
            >
                <Icon size={22} />
            </div>

            <div
                style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.4rem",
                }}
            >
                <span
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: c.color,
                    }}
                >
                    {c.stat}
                </span>
                <span
                    style={{
                        color: "#475569",
                        fontSize: "0.72rem",
                        fontFamily: "'Space Mono', monospace",
                    }}
                >
                    {c.statLabel}
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
                {c.titulo}
            </h3>
            <p
                style={{
                    color: "#64748b",
                    fontSize: "0.83rem",
                    lineHeight: 1.7,
                }}
            >
                {c.texto}
            </p>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const DefinicionProblema = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div
            style={{
                background: "#0f172a",
                color: "#e2e8f0",
                fontFamily: "'Syne', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    background: "#0f172a",
                }}
            >
                {/* Parallax background */}
                <motion.div style={{ position: "absolute", inset: 0, y: heroY, zIndex: 0 }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(34,211,238,0.07) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(167,139,250,0.06) 0%, transparent 60%)" }} />
                </motion.div>
                <img
                    src={IMGS.hero}
                    alt="casa oscura"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.1) saturate(0.4)",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.9))",
                        zIndex: 0,
                    }}
                />
                {/* Grid bg */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none", zIndex: 1 }} />
                {/* Scan line */}
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)", animation: "scan 6s linear infinite", pointerEvents: "none", zIndex: 1 }} />
                {/* Corner decorations */}
                <div style={{ position: "absolute", top: 32, left: 32, width: 56, height: 56, borderTop: "2px solid rgba(34,211,238,0.35)", borderLeft: "2px solid rgba(34,211,238,0.35)", zIndex: 1 }} />
                <div style={{ position: "absolute", top: 32, right: 32, width: 56, height: 56, borderTop: "2px solid rgba(167,139,250,0.25)", borderRight: "2px solid rgba(167,139,250,0.25)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 32, left: 32, width: 56, height: 56, borderBottom: "2px solid rgba(52,211,153,0.2)", borderLeft: "2px solid rgba(52,211,153,0.2)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 32, right: 32, width: 56, height: 56, borderBottom: "2px solid rgba(34,211,238,0.2)", borderRight: "2px solid rgba(34,211,238,0.2)", zIndex: 1 }} />

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
                        ETAPA 03 — DEFINICIÓN DEL PROBLEMA
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
                        Definición del{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#0ea5e9)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Problema
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
                        El aumento de robos a viviendas representa un problema
                        de seguridad que afecta a muchas familias. La falta de
                        sistemas de vigilancia y detección temprana permite que
                        intrusos accedan a propiedades privadas con facilidad.
                    </motion.p>
                </div>
            </section>

            {/* ── ENUNCIADO FORMAL ─────────────────────────────────────────────── */}
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
                        // ENUNCIADO DEL PROBLEMA
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        El problema identificado
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{
                        background: "#0f172a",
                        border: "1px solid rgba(34,211,238,0.2)",
                        borderRadius: "1.25rem",
                        padding: "2.5rem 3rem",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Decorative glow */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            background:
                                "linear-gradient(90deg, transparent, #22d3ee, transparent)",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "1.5rem",
                            left: "2rem",
                            fontSize: "5rem",
                            color: "rgba(34,211,238,0.06)",
                            fontFamily: "serif",
                            lineHeight: 1,
                            userSelect: "none",
                        }}
                    >
                        "
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                            alignItems: "flex-start",
                        }}
                    >
                        <div
                            style={{
                                minWidth: 48,
                                height: 48,
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(135deg,rgba(239,68,68,0.2),rgba(239,68,68,0.05))",
                                border: "1px solid rgba(239,68,68,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                marginTop: "0.2rem",
                            }}
                        >
                            <AlertTriangle
                                size={22}
                                style={{ color: "#ef4444" }}
                            />
                        </div>
                        <div>
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    lineHeight: 1.9,
                                    fontSize: "1rem",
                                    marginBottom: "1.25rem",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                Los hogares carecen de sistemas de detección
                                temprana de intrusos accesibles y de bajo costo.
                                Los sistemas comerciales existentes son{" "}
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    costosos, difíciles de instalar
                                </span>{" "}
                                y no están al alcance de la mayoría de las
                                familias, dejando sus viviendas vulnerables ante
                                robos que podrían prevenirse con tecnología
                                adecuada.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                }}
                            >
                                {[
                                    "Bajo costo",
                                    "Detección temprana",
                                    "Fácil instalación",
                                    "Alertas en tiempo real",
                                ].map((t) => (
                                    <span
                                        key={t}
                                        style={{
                                            padding: "0.25rem 0.75rem",
                                            borderRadius: "9999px",
                                            border: "1px solid rgba(34,211,238,0.25)",
                                            color: "#67e8f9",
                                            fontSize: "0.72rem",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            background: "rgba(6,182,212,0.06)",
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
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
                            Problemática de los robos a viviendas
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
                            src="https://www.youtube.com/embed/9hR7hYFzHVE"
                            title="Problemática robos"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── CONTEXTO ─────────────────────────────────────────────────────── */}
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
                        // CONTEXTO
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Contexto del problema
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
                            Los robos a domicilio se han convertido en una
                            preocupación creciente para muchas personas. Los
                            delincuentes suelen buscar viviendas que no cuentan
                            con sistemas de seguridad visibles como{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                cámaras, alarmas o sensores de movimiento
                            </span>
                            .
                        </p>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "1.75rem",
                            }}
                        >
                            Esta situación genera riesgos tanto para la
                            seguridad de los bienes materiales como para la{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                tranquilidad y bienestar
                            </span>{" "}
                            de los propietarios y sus familias.
                        </p>

                        {/* Context stats */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "0.75rem",
                            }}
                        >
                            {[
                                {
                                    value: "1 de cada 5",
                                    label: "hogares sufre un robo al año",
                                },
                                {
                                    value: "< 10 min",
                                    label: "tarda en promedio un robo",
                                },
                                {
                                    value: "90%",
                                    label: "son evitables con prevención",
                                },
                                {
                                    value: "3x",
                                    label: "más disuasión con alarma visible",
                                },
                            ].map(({ value, label }) => (
                                <div
                                    key={label}
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
                                        {value}
                                    </div>
                                    <div
                                        style={{
                                            color: "#475569",
                                            fontSize: "0.72rem",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {label}
                                    </div>
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
                            src={IMGS.stats}
                            alt="Estadísticas seguridad"
                            style={{
                                width: "100%",
                                borderRadius: "1rem",
                                border: "1px solid rgba(34,211,238,0.15)",
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── CAUSAS ───────────────────────────────────────────────────────── */}
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
                            // ANÁLISIS
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "0.75rem",
                            }}
                        >
                            Principales causas del problema
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                            Factores identificados que hacen vulnerables a las
                            viviendas.
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "1.25rem",
                        }}
                    >
                        {causas.map((c, i) => (
                            <CausaCard key={i} c={c} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SITUACIONES (imágenes reales) ────────────────────────────────── */}
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
                        // SITUACIONES REALES
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        Situaciones relacionadas con el problema
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.5rem",
                    }}
                >
                    {situaciones.map((s, i) => (
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
                                    src={s.img}
                                    alt={s.label}
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
                                <h3
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 700,
                                        fontSize: "0.9rem",
                                        marginBottom: "0.4rem",
                                        fontFamily: "'Syne', sans-serif",
                                    }}
                                >
                                    {s.label}
                                </h3>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.82rem",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── IMPORTANCIA / SOLUCIÓN ───────────────────────────────────────── */}
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
                            // SOLUCIÓN PROPUESTA
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Importancia de encontrar una solución
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
                                src={IMGS.solution}
                                alt="Solución electrónica"
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
                                    marginBottom: "2rem",
                                }}
                            >
                                Desarrollar tecnologías de seguridad
                                inteligentes basadas en{" "}
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    Arduino y sensores de bajo costo
                                </span>{" "}
                                permite detectar intrusos en tiempo real y
                                enviar alertas inmediatas al propietario,
                                reduciendo drásticamente el riesgo de robo.
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
                                        icon: Eye,
                                        text: "Detección de movimiento en tiempo real mediante sensor PIR",
                                        color: "#22d3ee",
                                    },
                                    {
                                        icon: TrendingUp,
                                        text: "Reducción del riesgo de robo con disuasión activa por alarma",
                                        color: "#34d399",
                                    },
                                    {
                                        icon: Lightbulb,
                                        text: "Tecnología accesible: solución de bajo costo para cualquier hogar",
                                        color: "#f59e0b",
                                    },
                                    {
                                        icon: Home,
                                        text: "Tranquilidad y seguridad para la familia desde cualquier lugar",
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
                                            alignItems: "flex-start",
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
                                                marginTop: "0.05rem",
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
                        Continuar con las preguntas del problema
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con el problema definido, el siguiente paso es formular
                        las preguntas clave que guiarán la investigación.
                    </p>
                    <a
                        href="/la-pregunta"
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
                        Ver Preguntas del Problema →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
