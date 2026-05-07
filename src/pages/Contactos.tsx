import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import { useRef } from "react";

import FOTO_FRANZ from '../assets/FOTO-FRANZ.jpeg';
import FOTO_JAIME from '../assets/FOTO_JAIME.jpeg';

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDITA AQUÍ los integrantes del proyecto
// ─────────────────────────────────────────────────────────────────────────────
interface Integrante {
    imagen: string; // ruta a la foto, ej: "/assets/foto-juan.jpg"
    nombre: string;
    correo: string;
    celular: string;
    rol: string; // rol dentro del proyecto
}

const INTEGRANTES: Integrante[] = [
    {
        imagen: FOTO_FRANZ,
        nombre: "FRANZ ELIOT RAMOS HUACARA",
        correo: "franz.ramos@ucb.edu.bo",
        celular: "+591 78827052",
        rol: "Integrante",
    },
    {
        imagen: FOTO_JAIME,
        nombre: "JAIME IGNACIO HUAYCHO CLAVEL",
        correo: "jaime.huaycho@ucb.edu.bo",
        celular: "+591 64177602",
        rol: "Integrante",
    },
];
// ─────────────────────────────────────────────────────────────────────────────

const CARD_ACCENT = [
    "#22d3ee",
    "#34d399",
    "#f59e0b",
    "#a78bfa",
    "#fb7185",
    "#38bdf8",
];

const HERO_IMG =
    "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=1400&q=80";

// ─── Tarjeta de integrante ────────────────────────────────────────────────────
function IntegranteCard({ p, i }: { p: Integrante; i: number }) {
    const accent = CARD_ACCENT[i % CARD_ACCENT.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
                background: "#0f172a",
                border: `1px solid ${accent}20`,
                borderRadius: "1.25rem",
                overflow: "hidden",
                transition: "box-shadow 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accent}50`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${accent}12`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${accent}20`;
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* ── Foto ────────────────────────────────────────────────────── */}
            <div
                style={{
                    position: "relative",
                    height: 320,
                    background: "#080f1f",
                    overflow: "hidden",
                }}
            >
                <img
                    src={p.imagen}
                    alt={p.nombre}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        display: "block",
                    }}
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                            "none";
                    }}
                />

                {/* Fallback avatar cuando no hay imagen */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `linear-gradient(135deg, ${accent}15, rgba(2,6,23,0.8))`,
                        zIndex: 0,
                    }}
                >
                    <User size={64} style={{ color: `${accent}40` }} />
                </div>

                {/* Número decorativo */}
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        left: "1rem",
                        zIndex: 2,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: `${accent}70`,
                        letterSpacing: "0.1em",
                    }}
                >
                    #{String(i + 1).padStart(2, "0")}
                </div>

                {/* Accent bar top */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                        zIndex: 2,
                    }}
                />
            </div>

            {/* ── Info ────────────────────────────────────────────────────── */}
            <div style={{ padding: "1.5rem" }}>
                {/* Rol */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        padding: "0.2rem 0.7rem",
                        borderRadius: "9999px",
                        background: `${accent}12`,
                        border: `1px solid ${accent}30`,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.62rem",
                        color: accent,
                        marginBottom: "0.85rem",
                        letterSpacing: "0.04em",
                    }}
                >
                    <span
                        style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: accent,
                            display: "inline-block",
                        }}
                    />
                    {p.rol}
                </div>

                {/* Nombre */}
                <h3
                    style={{
                        color: "#e2e8f0",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        fontFamily: "'Syne', sans-serif",
                        marginBottom: "1.1rem",
                        lineHeight: 1.2,
                    }}
                >
                    {p.nombre}
                </h3>

                {/* Separador */}
                <div
                    style={{
                        height: 1,
                        background: `${accent}15`,
                        marginBottom: "1.1rem",
                    }}
                />

                {/* Contacto */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem",
                    }}
                >
                    <a
                        href={`mailto:${p.correo}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            color: "#64748b",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = accent)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#64748b")
                        }
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "0.35rem",
                                background: `${accent}10`,
                                border: `1px solid ${accent}25`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <Mail size={12} style={{ color: accent }} />
                        </div>
                        <span
                            style={{
                                fontSize: "0.82rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {p.correo}
                        </span>
                    </a>

                    <a
                        href={`tel:${p.celular.replace(/\s/g, "")}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            color: "#64748b",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = accent)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#64748b")
                        }
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "0.35rem",
                                background: `${accent}10`,
                                border: `1px solid ${accent}25`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <Phone size={12} style={{ color: accent }} />
                        </div>
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.78rem",
                            }}
                        >
                            {p.celular}
                        </span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export const Contactos = () => {
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
                {/* Foto de fondo tenue */}
                <img
                    src={HERO_IMG}
                    alt="equipo"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.08) saturate(0.3)",
                        zIndex: 0,
                    }}
                />

                {/* Parallax glows */}
                <motion.div style={{ position: "absolute", inset: 0, y: heroY, zIndex: 1 }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(34,211,238,0.07) 0%, transparent 65%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 65% at 75% 40%, rgba(167,139,250,0.06) 0%, transparent 60%)" }} />
                </motion.div>

                {/* Grid */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", zIndex: 1 }} />

                {/* Scan line */}
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)", animation: "scan 6s linear infinite", pointerEvents: "none", zIndex: 2 }} />

                {/* Corners multicolor */}
                <div style={{ position: "absolute", top: 32, left: 32, width: 56, height: 56, borderTop: "2px solid rgba(34,211,238,0.35)", borderLeft: "2px solid rgba(34,211,238,0.35)", zIndex: 2 }} />
                <div style={{ position: "absolute", top: 32, right: 32, width: 56, height: 56, borderTop: "2px solid rgba(167,139,250,0.25)", borderRight: "2px solid rgba(167,139,250,0.25)", zIndex: 2 }} />
                <div style={{ position: "absolute", bottom: 32, left: 32, width: 56, height: 56, borderBottom: "2px solid rgba(52,211,153,0.2)", borderLeft: "2px solid rgba(52,211,153,0.2)", zIndex: 2 }} />
                <div style={{ position: "absolute", bottom: 32, right: 32, width: 56, height: 56, borderBottom: "2px solid rgba(34,211,238,0.2)", borderRight: "2px solid rgba(34,211,238,0.2)", zIndex: 2 }} />

                <div
                    style={{
                        position: "relative",
                        zIndex: 3,
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
                        EQUIPO DE TRABAJO
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
                        Integrantes del{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#38bdf8)",
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
                            maxWidth: 560,
                            margin: "0 auto",
                            color: "#94a3b8",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Equipo de{" "}
                        <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                            {INTEGRANTES.length} estudiantes
                        </span>{" "}
                        responsables del diseño, desarrollo y documentación del
                        sistema de alarma inteligente con Arduino.
                    </motion.p>
                </div>
            </section>

            {/* ── TARJETAS ─────────────────────────────────────────────────────── */}
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
                        // EQUIPO
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Conoce al equipo
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cada integrante aportó su conocimiento para construir el
                        sistema de seguridad inteligente.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${Math.min(INTEGRANTES.length, 4)}, 1fr)`,
                        gap: "1.5rem",
                    }}
                >
                    {INTEGRANTES.map((p, i) => (
                        <IntegranteCard key={i} p={p} i={i} />
                    ))}
                </div>
            </section>

            {/* ── INFO DEL PROYECTO ────────────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    padding: "5rem 1.5rem",
                    borderTop: "1px solid rgba(34,211,238,0.08)",
                }}
            >
                <div
                    style={{
                        maxWidth: 800,
                        margin: "0 auto",
                        textAlign: "center",
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
                                color: "#22d3ee",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                marginBottom: "1rem",
                            }}
                        >
                            // DATOS DEL PROYECTO
                        </div>
                        <h2
                            style={{
                                fontSize: "1.75rem",
                                fontWeight: 800,
                                marginBottom: "2.5rem",
                            }}
                        >
                            Información general
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "1.25rem",
                            }}
                        >
                            {[
                                {
                                    label: "Proyecto",
                                    value: "Sistema de Alarma antirobo",
                                    color: "#22d3ee",
                                },
                                {
                                    label: "Año",
                                    value: "2026",
                                    color: "#34d399",
                                },
                                {
                                    label: "Materia",
                                    value: "Innovacion desarrollo y tecnologia",
                                    color: "#f59e0b",
                                },
                            ].map(({ label, value, color }) => (
                                <div
                                    key={label}
                                    style={{
                                        background: "#0f172a",
                                        border: `1px solid ${color}20`,
                                        borderRadius: "0.85rem",
                                        padding: "1.25rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.65rem",
                                            color: color,
                                            marginBottom: "0.5rem",
                                            letterSpacing: "0.1em",
                                        }}
                                    >
                                        {label.toUpperCase()}
                                    </div>
                                    <div
                                        style={{
                                            color: "#e2e8f0",
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
