import { motion, useScroll, useTransform } from "framer-motion";
import {
    Cpu,
    ShieldAlert,
    Network,
    MonitorSmartphone,
    AlertTriangle,
    ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";
import diagramaIshikawa from "../assets/ishikawa.jpeg";

// ─── Reliable Unsplash images ────────────────────────────────────────────────
const IMGS = {
    analysis:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", // dashboard / análisis
    teamboard:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80", // persona analizando
    wires: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito
    weather:
        "https://images.unsplash.com/photo-1504608524841-42584120d693?w=800&q=80", // clima / tormenta
    sensor: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80", // laboratorio
    phone: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", // celular / app
};

const categorias = [
    {
        titulo: "Arquitectura de Software",
        icon: Cpu,
        color: "#22d3ee",
        img: IMGS.wires,
        puntos: [
            "Errores de código críticos (bugs)",
            "Latencia en red y notificaciones",
            "Debilidades en algoritmos de detección",
        ],
        desc: "Los fallos en el firmware del Arduino o en la lógica de detección pueden generar falsas alarmas o dejar intrusiones sin detectar.",
    },
    {
        titulo: "Infraestructura Ambiental",
        icon: Network,
        color: "#34d399",
        img: IMGS.weather,
        puntos: [
            "Atenuación de señal por clima",
            "Cortes de energía eléctrica",
            "Obstáculos físicos para WiFi o RF",
        ],
        desc: "El entorno físico puede comprometer la señal de los sensores y la comunicación inalámbrica del sistema.",
    },
    {
        titulo: "Subsistemas de Hardware",
        icon: ShieldAlert,
        color: "#f59e0b",
        img: IMGS.sensor,
        puntos: [
            "Sensores de baja precisión",
            "Problemas de batería de respaldo",
            "Cámaras con baja calidad nocturna",
        ],
        desc: "Componentes de baja calidad o mal dimensionados reducen la fiabilidad general del sistema de alarma.",
    },
    {
        titulo: "Interfaz de Usuario",
        icon: MonitorSmartphone,
        color: "#a78bfa",
        img: IMGS.phone,
        puntos: [
            "Mala instalación de dispositivos",
            "Olvido de activación del sistema",
            "Mantenimiento inadecuado",
        ],
        desc: "El factor humano es determinante: una interfaz confusa o un sistema difícil de usar incrementa los errores operativos.",
    },
];

// ─── Expandable cause card ───────────────────────────────────────────────────
function CausaCard({ c, i }: { c: (typeof categorias)[0]; i: number }) {
    const [open, setOpen] = useState(false);
    const Icon = c.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setOpen(!open)}
            style={{
                background: "#0f172a",
                border: `1px solid ${open ? c.color : "rgba(34,211,238,0.12)"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: open ? `0 0 30px ${c.color}22` : "none",
            }}
        >
            {/* Image */}
            <div
                style={{
                    height: 150,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <img
                    src={c.img}
                    alt={c.titulo}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                        transform: open ? "scale(1.07)" : "scale(1)",
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
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: `${c.color}22`,
                        border: `1px solid ${c.color}55`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: c.color,
                    }}
                >
                    <Icon size={16} />
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "1.25rem" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                    }}
                >
                    <h3
                        style={{
                            color: c.color,
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {c.titulo}
                    </h3>
                    <motion.div
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: c.color, opacity: 0.6 }}
                    >
                        <ChevronRight size={16} />
                    </motion.div>
                </div>

                <p
                    style={{
                        color: "#475569",
                        fontSize: "0.8rem",
                        lineHeight: 1.6,
                        marginBottom: open ? "1rem" : 0,
                    }}
                >
                    {c.desc}
                </p>

                {open && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        style={{
                            marginTop: "0.75rem",
                            borderTop: `1px solid ${c.color}22`,
                            paddingTop: "0.75rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        {c.puntos.map((p, j) => (
                            <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.07 }}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "0.5rem",
                                    color: "#94a3b8",
                                    fontSize: "0.82rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                <span
                                    style={{
                                        color: c.color,
                                        marginTop: "0.15rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    ▸
                                </span>
                                {p}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}

                <div
                    style={{
                        marginTop: "0.75rem",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: open ? c.color : "#334155",
                        transition: "color 0.3s",
                    }}
                >
                    {open ? "▲ colapsar" : "▼ ver causas"}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const Ishikawa = () => {
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
                    src={IMGS.analysis}
                    alt="análisis"
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
                            "linear-gradient(to bottom, rgba(15,23,42,0.2), rgba(15,23,42,0.9))",
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
                        ETAPA 02 — ANÁLISIS DE CAUSAS
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
                        Análisis de{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#0ea5e9)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Causa Raíz
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
                        Se aplicó el{" "}
                        <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                            Diagrama de Ishikawa
                        </span>{" "}
                        para identificar y organizar visualmente las causas que
                        originan el problema de inseguridad en los hogares y los
                        fallos potenciales del sistema.
                    </motion.p>
                </div>
            </section>

            {/* ── QUÉ ES ISHIKAWA ──────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "5rem 1.5rem",
                }}
            >
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
                        <div
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: "#22d3ee",
                                fontSize: "0.75rem",
                                letterSpacing: "0.18em",
                                marginBottom: "1rem",
                            }}
                        >
                            // HERRAMIENTA DE ANÁLISIS
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "1.25rem",
                            }}
                        >
                            ¿Qué es el Diagrama de Ishikawa?
                        </h2>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                marginBottom: "1rem",
                                fontSize: "0.95rem",
                            }}
                        >
                            También conocido como{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                diagrama de espina de pescado
                            </span>{" "}
                            o diagrama de causa-efecto, fue desarrollado por el
                            ingeniero japonés Kaoru Ishikawa en 1943.
                        </p>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Su estructura permite organizar las causas de un
                            problema en categorías, facilitando la
                            identificación de la causa raíz y el diseño de
                            soluciones efectivas.
                        </p>

                        {/* Mini fact cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "0.75rem",
                            }}
                        >
                            {[
                                { label: "Creado en", value: "1943" },
                                { label: "Autor", value: "K. Ishikawa" },
                                {
                                    label: "También llamado",
                                    value: "Espina de pez",
                                },
                                {
                                    label: "Categorías usadas",
                                    value: "4 causas",
                                },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    style={{
                                        padding: "0.75rem",
                                        background: "#0f172a",
                                        border: "1px solid rgba(34,211,238,0.1)",
                                        borderRadius: "0.6rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "#475569",
                                            fontSize: "0.7rem",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            marginBottom: "0.2rem",
                                        }}
                                    >
                                        {label}
                                    </div>
                                    <div
                                        style={{
                                            color: "#22d3ee",
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

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={IMGS.teamboard}
                            alt="Análisis de datos"
                            style={{
                                width: "100%",
                                borderRadius: "1rem",
                                border: "1px solid rgba(34,211,238,0.15)",
                            }}
                        />
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
                            Explicación del método Ishikawa
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
                            src="https://www.youtube.com/embed/VM8Tz3xHwsM"
                            title="Método Ishikawa"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── DIAGRAMA (imagen propia) ─────────────────────────────────────── */}
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
                        // DIAGRAMA PROPIO
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Diagrama Ishikawa del Sistema de Seguridad
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 560,
                            margin: "0 auto",
                            fontSize: "0.9rem",
                        }}
                    >
                        El diagrama visualiza cómo factores tecnológicos,
                        ambientales y humanos afectan la eficiencia del sistema
                        de alarma.
                    </p>
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
                        boxShadow: "0 0 50px rgba(6,182,212,0.08)",
                    }}
                >
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        src={diagramaIshikawa}
                        alt="Diagrama Ishikawa"
                        style={{ width: "100%", display: "block" }}
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
                        Elaboración propia del equipo
                    </div>
                </motion.div>
            </section>

            {/* ── CATEGORÍAS / CAUSAS ──────────────────────────────────────────── */}
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
                            // CAUSA RAÍZ
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "0.75rem",
                            }}
                        >
                            Principales causas identificadas
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                            Haz clic en cada categoría para expandir sus causas
                            específicas.
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "1.25rem",
                        }}
                    >
                        {categorias.map((c, i) => (
                            <CausaCard key={i} c={c} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EFECTO CENTRAL (el problema) ─────────────────────────────────── */}
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
                        // EFECTO CENTRAL
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        El problema que se busca resolver
                    </h2>
                </motion.div>

                {/* Fishbone visual summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{
                        background: "#0f172a",
                        border: "1px solid rgba(34,211,238,0.2)",
                        borderRadius: "1.25rem",
                        padding: "2.5rem",
                        display: "grid",
                        gridTemplateColumns: "1fr auto 1fr",
                        gap: "1.5rem",
                        alignItems: "center",
                    }}
                >
                    {/* Left causes */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                            alignItems: "flex-end",
                        }}
                    >
                        {[
                            { label: "Software", color: "#22d3ee" },
                            { label: "Ambiente", color: "#34d399" },
                        ].map(({ label, color }) => (
                            <div
                                key={label}
                                style={{
                                    padding: "0.5rem 1rem",
                                    border: `1px solid ${color}44`,
                                    borderRadius: "0.5rem",
                                    background: `${color}0d`,
                                    color,
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.78rem",
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Central effect */}
                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                padding: "1.5rem 1.25rem",
                                background:
                                    "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(14,116,144,0.1))",
                                border: "2px solid rgba(34,211,238,0.4)",
                                borderRadius: "1rem",
                                maxWidth: 200,
                                margin: "0 auto",
                                boxShadow: "0 0 30px rgba(6,182,212,0.15)",
                            }}
                        >
                            <AlertTriangle
                                size={28}
                                style={{
                                    color: "#f59e0b",
                                    margin: "0 auto 0.5rem",
                                }}
                            />
                            <div
                                style={{
                                    color: "#e2e8f0",
                                    fontWeight: 700,
                                    fontSize: "0.85rem",
                                    lineHeight: 1.4,
                                }}
                            >
                                Vulnerabilidad del sistema de seguridad
                            </div>
                        </div>
                    </div>

                    {/* Right causes */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                        }}
                    >
                        {[
                            { label: "Hardware", color: "#f59e0b" },
                            { label: "Usuario", color: "#a78bfa" },
                        ].map(({ label, color }) => (
                            <div
                                key={label}
                                style={{
                                    padding: "0.5rem 1rem",
                                    border: `1px solid ${color}44`,
                                    borderRadius: "0.5rem",
                                    background: `${color}0d`,
                                    color,
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.78rem",
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── IMPORTANCIA ──────────────────────────────────────────────────── */}
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
                            // CONCLUSIONES
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Importancia del análisis de causas
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
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={IMGS.analysis}
                                alt="Análisis de sistema"
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
                                    marginBottom: "1.5rem",
                                }}
                            >
                                El análisis mediante el diagrama de Ishikawa
                                permite identificar las causas
                                <span
                                    style={{
                                        color: "#22d3ee",
                                        fontWeight: 600,
                                    }}
                                >
                                    {" "}
                                    tecnológicas, ambientales y humanas
                                </span>{" "}
                                que influyen en la seguridad de una vivienda.
                            </p>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                Al comprender estas causas es posible diseñar un
                                sistema de alarma inteligente más robusto, capaz
                                de detectar intrusos, reducir falsas alarmas y
                                enviar alertas en tiempo real.
                            </p>

                            {/* Outcome tags */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.6rem",
                                }}
                            >
                                {[
                                    {
                                        text: "Identificar la causa raíz del problema",
                                        color: "#22d3ee",
                                    },
                                    {
                                        text: "Diseñar soluciones más precisas y enfocadas",
                                        color: "#34d399",
                                    },
                                    {
                                        text: "Reducir errores en el sistema final",
                                        color: "#f59e0b",
                                    },
                                    {
                                        text: "Priorizar recursos del proyecto",
                                        color: "#a78bfa",
                                    },
                                ].map(({ text, color }, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
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
                        Continuar con la definición del problema
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con las causas identificadas, el siguiente paso es
                        formalizar el enunciado del problema a resolver.
                    </p>
                    <a
                        href="/definicion-problema"
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
                        Ver Definición del Problema →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
