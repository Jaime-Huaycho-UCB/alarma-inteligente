import { motion } from "framer-motion";
import {
    Box,
    ArrowRight,
    Layers,
    Cpu,
    FileCode2,
    GitBranch,
    Eye,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDITA AQUÍ — Ruta al archivo HTML principal de tu diagrama IDEF0
//     Pon la carpeta exportada de tu software en /public y apunta aquí
// ─────────────────────────────────────────────────────────────────────────────
const IDEF0_HTML_PATH = 'KUMBIAS/KUMBIAS.htm'; // ← cambia por tu ruta real
// ─────────────────────────────────────────────────────────────────────────────

const IMGS = {
    hero: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80", // redes / circuitos
    flow: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", // sala de control
    diagram:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // datos / dashboard
    arrows: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // circuito
};

// ─── Qué es IDEF0 — datos educativos ─────────────────────────────────────────
const ICOM = [
    {
        letter: "I",
        name: "Input",
        label: "Entrada",
        color: "#22d3ee",
        icon: "→",
        side: "izquierda",
        desc: "Los datos, materiales o información que son transformados o consumidos por la actividad para producir las salidas.",
        ejemplo: "Señal del sensor PIR, señal ultrasónica",
    },
    {
        letter: "C",
        name: "Control",
        label: "Control",
        color: "#34d399",
        icon: "↓",
        side: "arriba",
        desc: "Las condiciones, restricciones o reglas que gobiernan cómo la actividad transforma las entradas en salidas. Son obligatorias.",
        ejemplo: "Parámetros de sensibilidad, lógica de Arduino",
    },
    {
        letter: "O",
        name: "Output",
        label: "Salida",
        color: "#f59e0b",
        icon: "→",
        side: "derecha",
        desc: "Los resultados producidos por la actividad; pueden ser productos, servicios o información que fluye hacia otras actividades.",
        ejemplo: "Alerta sonora, notificación push al celular",
    },
    {
        letter: "M",
        name: "Mechanism",
        label: "Mecanismo",
        color: "#a78bfa",
        icon: "↑",
        side: "abajo",
        desc: "Los recursos físicos o conceptuales que ejecutan la actividad: personas, máquinas, herramientas o sistemas.",
        ejemplo: "Arduino Uno, ESP8266, sensor HC-SR501",
    },
];

const NIVELES = [
    {
        codigo: "A-0",
        nombre: "Diagrama de contexto",
        desc: "Vista global del sistema. Muestra el sistema completo como una sola caja con todas sus relaciones externas. Define el alcance.",
        color: "#22d3ee",
        icon: Box,
    },
    {
        codigo: "A0",
        nombre: "Diagrama padre",
        desc: "Descompone la función principal en 3–6 subfunciones de alto nivel que muestran el flujo interno del sistema.",
        color: "#34d399",
        icon: Layers,
    },
    {
        codigo: "A1–An",
        nombre: "Diagramas hijo",
        desc: "Cada subfunción se descompone recursivamente hasta el nivel de detalle necesario. Cada nivel hereda las interfaces del padre.",
        color: "#f59e0b",
        icon: GitBranch,
    },
];

const FEATURES = [
    {
        icon: FileCode2,
        title: "Notación estándar",
        desc: "IDEF0 es un estándar ANSI/FIPS aprobado internacionalmente para el modelado funcional de sistemas complejos.",
        color: "#22d3ee",
    },
    {
        icon: Layers,
        title: "Descomposición jerárquica",
        desc: "Permite ir desde una visión global (A-0) hasta el detalle de cada función sin perder la trazabilidad entre niveles.",
        color: "#34d399",
    },
    {
        icon: ArrowRight,
        title: "Flujo controlado",
        desc: "Cada flecha tiene un rol semántico preciso (ICOM), lo que elimina ambigüedades al describir el comportamiento del sistema.",
        color: "#f59e0b",
    },
    {
        icon: Eye,
        title: "Legibilidad",
        desc: "Al limitar cada diagrama a 3–6 cajas, IDEF0 garantiza que el modelo sea comprensible para técnicos y no técnicos por igual.",
        color: "#a78bfa",
    },
];

// ─── Caja ICOM visual ─────────────────────────────────────────────────────────
function IcomCard({ item, i }: { item: (typeof ICOM)[0]; i: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
                background: "#0f172a",
                border: `1px solid ${item.color}20`,
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={() => setOpen((o) => !o)}
            whileHover={{ y: -4 }}
        >
            {/* Header */}
            <div
                style={{
                    padding: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                {/* Big letter */}
                <div
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: "0.6rem",
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}35`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 700,
                            fontSize: "1.6rem",
                            color: item.color,
                        }}
                    >
                        {item.letter}
                    </span>
                </div>

                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.2rem",
                        }}
                    >
                        <span
                            style={{
                                color: "#e2e8f0",
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                fontFamily: "'Syne', sans-serif",
                            }}
                        >
                            {item.name}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.6rem",
                                color: `${item.color}80`,
                                padding: "0.1rem 0.4rem",
                                border: `1px solid ${item.color}25`,
                                borderRadius: 4,
                            }}
                        >
                            {item.label}
                        </span>
                    </div>
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.65rem",
                            color: "#334155",
                        }}
                    >
                        Flecha desde el lado:{" "}
                        <span style={{ color: item.color }}>{item.side}</span>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown
                        size={16}
                        style={{ color: item.color, opacity: 0.6 }}
                    />
                </motion.div>
            </div>

            {/* Expand */}
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                style={{ overflow: "hidden" }}
            >
                <div
                    style={{
                        padding: "0 1.25rem 1.25rem",
                        borderTop: `1px solid ${item.color}10`,
                        paddingTop: "1rem",
                    }}
                >
                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "0.84rem",
                            lineHeight: 1.75,
                            marginBottom: "0.85rem",
                        }}
                    >
                        {item.desc}
                    </p>
                    <div
                        style={{
                            padding: "0.6rem 0.85rem",
                            background: `${item.color}08`,
                            border: `1px solid ${item.color}20`,
                            borderRadius: "0.5rem",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.6rem",
                                color: item.color,
                                marginBottom: "0.25rem",
                                letterSpacing: "0.1em",
                            }}
                        >
                            EJEMPLO EN ESTE PROYECTO
                        </div>
                        <div style={{ color: "#cbd5e1", fontSize: "0.82rem" }}>
                            {item.ejemplo}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export const ModeloIDEF0 = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

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
        @keyframes blink   { 0%,100%{opacity:1}  50%{opacity:0}   }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.2);opacity:0} }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section
                style={{
                    position: "relative",
                    minHeight: 480,
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
                        filter: "brightness(0.14) saturate(0.5) hue-rotate(200deg)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(2,6,23,0.2), rgba(2,6,23,0.98))",
                    }}
                />
                {/* Grid overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(34,211,238,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.04) 1px,transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
                {/* Scanline effect */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        pointerEvents: "none",
                        zIndex: 1,
                        opacity: 0.03,
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: 2,
                            background: "#22d3ee",
                            animation: "scanline 6s linear infinite",
                        }}
                    />
                </div>

                {/* IDEF0 decorative text */}
                <div
                    style={{
                        position: "absolute",
                        left: "2%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "9rem",
                        fontWeight: 700,
                        color: "#22d3ee",
                        opacity: 0.025,
                        userSelect: "none",
                        lineHeight: 1,
                        letterSpacing: "-0.05em",
                    }}
                >
                    IDEF0
                </div>

                {/* Corners */}
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
                        maxWidth: 860,
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
                        ETAPA 09 — MODELADO FUNCIONAL
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        style={{
                            fontSize: "clamp(2.8rem, 7vw, 5rem)",
                            fontWeight: 800,
                            lineHeight: 1.05,
                            marginBottom: "1.25rem",
                        }}
                    >
                        Modelo{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#38bdf8,#22d3ee)",
                                backgroundSize: "200% auto",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            IDEF0
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{
                            maxWidth: 640,
                            margin: "0 auto 2rem",
                            color: "#94a3b8",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Representación funcional jerárquica del{" "}
                        <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                            sistema de alarma inteligente
                        </span>
                        , construida bajo el estándar IDEF0 (Integrated
                        DEFinition for Function Modeling) para modelar cada
                        proceso, entrada, control y mecanismo del sistema.
                    </motion.p>

                    {/* ICOM pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "0.6rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {ICOM.map((item) => (
                            <div
                                key={item.letter}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.35rem",
                                    padding: "0.3rem 0.85rem",
                                    borderRadius: "9999px",
                                    border: `1px solid ${item.color}40`,
                                    background: `${item.color}10`,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontWeight: 700,
                                        color: item.color,
                                        fontSize: "0.82rem",
                                    }}
                                >
                                    {item.letter}
                                </span>
                                <span
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.72rem",
                                    }}
                                >
                                    — {item.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── ¿QUÉ ES IDEF0? ───────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
                <div
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
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
                                marginBottom: "0.75rem",
                            }}
                        >
                            // DEFINICIÓN
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "1.25rem",
                                lineHeight: 1.2,
                            }}
                        >
                            ¿Qué es IDEF0?
                        </h2>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "1.25rem",
                            }}
                        >
                            <strong style={{ color: "#e2e8f0" }}>IDEF0</strong>{" "}
                            es un método de modelado funcional derivado del
                            lenguaje SADT (Structured Analysis and Design
                            Technique). Fue estandarizado por el gobierno de
                            EE.UU. como parte de la familia IDEF (Integrated
                            DEFinition Methods) y publicado como estándar FIPS
                            183.
                        </p>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "0.95rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Su objetivo es describir{" "}
                            <strong style={{ color: "#22d3ee" }}>
                                qué hace un sistema
                            </strong>
                            , no cómo está implementado. Cada función se
                            representa como una caja con flechas que entran y
                            salen siguiendo la notación{" "}
                            <strong style={{ color: "#34d399" }}>ICOM</strong>:
                            Input, Control, Output y Mechanism.
                        </p>
                        {/* Stat cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "0.85rem",
                            }}
                        >
                            {[
                                {
                                    label: "Estándar",
                                    value: "ANSI/FIPS 183",
                                    color: "#22d3ee",
                                },
                                {
                                    label: "Origen",
                                    value: "Fuerza Aérea EE.UU.",
                                    color: "#34d399",
                                },
                                {
                                    label: "Máx. cajas por nivel",
                                    value: "3 – 6 cajas",
                                    color: "#f59e0b",
                                },
                                {
                                    label: "Tipo",
                                    value: "Modelado funcional",
                                    color: "#a78bfa",
                                },
                            ].map((s) => (
                                <div
                                    key={s.label}
                                    style={{
                                        background: "#0f172a",
                                        border: `1px solid ${s.color}18`,
                                        borderRadius: "0.7rem",
                                        padding: "0.85rem 1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.6rem",
                                            color: s.color,
                                            marginBottom: "0.3rem",
                                            letterSpacing: "0.1em",
                                        }}
                                    >
                                        {s.label.toUpperCase()}
                                    </div>
                                    <div
                                        style={{
                                            color: "#e2e8f0",
                                            fontWeight: 700,
                                            fontSize: "0.85rem",
                                        }}
                                    >
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual box diagram */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div
                            style={{
                                background: "#0f172a",
                                border: "1px solid rgba(34,211,238,0.15)",
                                borderRadius: "1.25rem",
                                padding: "2rem",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.62rem",
                                    color: "#334155",
                                    marginBottom: "1.5rem",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                // ESTRUCTURA ICOM BÁSICA
                            </div>

                            {/* ICOM diagram */}
                            <div
                                style={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: 200,
                                }}
                            >
                                {/* Control arrow (top) */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.6rem",
                                            color: "#34d399",
                                        }}
                                    >
                                        Control
                                    </span>
                                    <div
                                        style={{
                                            width: 1,
                                            height: 32,
                                            background:
                                                "linear-gradient(to bottom, #34d399, #34d39960)",
                                        }}
                                    />
                                    <div
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: "4px solid transparent",
                                            borderRight:
                                                "4px solid transparent",
                                            borderTop: "6px solid #34d399",
                                        }}
                                    />
                                </div>

                                {/* Input arrow (left) */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.6rem",
                                            color: "#22d3ee",
                                        }}
                                    >
                                        Input
                                    </span>
                                    <div
                                        style={{
                                            height: 1,
                                            width: 28,
                                            background:
                                                "linear-gradient(to right, #22d3ee60, #22d3ee)",
                                        }}
                                    />
                                    <div
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderTop: "4px solid transparent",
                                            borderBottom:
                                                "4px solid transparent",
                                            borderLeft: "6px solid #22d3ee",
                                        }}
                                    />
                                </div>

                                {/* Activity box */}
                                <div
                                    style={{
                                        width: 140,
                                        height: 80,
                                        background: "rgba(34,211,238,0.06)",
                                        border: "2px solid rgba(34,211,238,0.35)",
                                        borderRadius: "0.5rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        position: "relative",
                                        boxShadow:
                                            "0 0 30px rgba(34,211,238,0.06)",
                                    }}
                                >
                                    <Cpu
                                        size={18}
                                        style={{
                                            color: "#22d3ee",
                                            marginBottom: 4,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.65rem",
                                            color: "#22d3ee",
                                            fontWeight: 700,
                                        }}
                                    >
                                        ACTIVIDAD
                                    </span>
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 4,
                                            right: 6,
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.5rem",
                                            color: "#334155",
                                        }}
                                    >
                                        A0
                                    </div>
                                </div>

                                {/* Output arrow (right) */}
                                <div
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderTop: "4px solid transparent",
                                            borderBottom:
                                                "4px solid transparent",
                                            borderLeft: "6px solid #f59e0b",
                                        }}
                                    />
                                    <div
                                        style={{
                                            height: 1,
                                            width: 28,
                                            background:
                                                "linear-gradient(to right, #f59e0b, #f59e0b60)",
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.6rem",
                                            color: "#f59e0b",
                                        }}
                                    >
                                        Output
                                    </span>
                                </div>

                                {/* Mechanism arrow (bottom) */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: "4px solid transparent",
                                            borderRight:
                                                "4px solid transparent",
                                            borderBottom: "6px solid #a78bfa",
                                        }}
                                    />
                                    <div
                                        style={{
                                            width: 1,
                                            height: 32,
                                            background:
                                                "linear-gradient(to top, #a78bfa, #a78bfa60)",
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.6rem",
                                            color: "#a78bfa",
                                        }}
                                    >
                                        Mechanism
                                    </span>
                                </div>
                            </div>

                            <div
                                style={{
                                    marginTop: "1.5rem",
                                    padding: "0.75rem",
                                    background: "rgba(34,211,238,0.04)",
                                    borderRadius: "0.5rem",
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.65rem",
                                    color: "#334155",
                                    textAlign: "center",
                                }}
                            >
                                Cada caja puede descomponerse en un diagrama
                                hijo →
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CARACTERÍSTICAS ──────────────────────────────────────────────── */}
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
                        // VENTAJAS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        ¿Por qué usar IDEF0?
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cuatro razones por las que elegimos este estándar para
                        modelar el sistema de alarma.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${color}18`,
                                borderRadius: "1rem",
                                padding: "1.5rem",
                                transition:
                                    "box-shadow 0.3s, border-color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${color}40`;
                                e.currentTarget.style.boxShadow = `0 16px 40px ${color}10`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${color}18`;
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                style={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: "0.6rem",
                                    background: `${color}12`,
                                    border: `1px solid ${color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1rem",
                                }}
                            >
                                <Icon size={18} style={{ color }} />
                            </div>
                            <h4
                                style={{
                                    color: "#e2e8f0",
                                    fontWeight: 700,
                                    fontSize: "0.88rem",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {title}
                            </h4>
                            <p
                                style={{
                                    color: "#64748b",
                                    fontSize: "0.8rem",
                                    lineHeight: 1.7,
                                }}
                            >
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── NOTACIÓN ICOM ────────────────────────────────────────────────── */}
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
                            // NOTACIÓN
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "0.75rem",
                            }}
                        >
                            La notación ICOM
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                            Haz clic en cada elemento para ver su descripción y
                            cómo se aplica al proyecto.{" "}
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1.1rem",
                        }}
                    >
                        {ICOM.map((item, i) => (
                            <IcomCard key={i} item={item} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NIVELES DE DESCOMPOSICIÓN ─────────────────────────────────────── */}
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
                        // JERARQUÍA
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Niveles del diagrama
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        IDEF0 organiza el sistema en niveles que van de lo
                        general a lo específico.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.1rem",
                    }}
                >
                    {NIVELES.map(
                        ({ codigo, nombre, desc, color, icon: Icon }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                viewport={{ once: true }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.5rem",
                                    background: "#0f172a",
                                    border: `1px solid ${color}18`,
                                    borderRadius: "0.85rem",
                                    padding: "1.25rem 1.5rem",
                                    transition:
                                        "border-color 0.3s, box-shadow 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${color}40`;
                                    e.currentTarget.style.boxShadow = `0 8px 30px ${color}10`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = `${color}18`;
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    style={{
                                        minWidth: 52,
                                        height: 52,
                                        borderRadius: "0.6rem",
                                        background: `${color}12`,
                                        border: `1px solid ${color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon size={20} style={{ color }} />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            color,
                                            background: `${color}12`,
                                            border: `1px solid ${color}30`,
                                            padding: "0.2rem 0.6rem",
                                            borderRadius: "0.3rem",
                                        }}
                                    >
                                        {codigo}
                                    </span>
                                </div>
                                <div>
                                    <div
                                        style={{
                                            color: "#e2e8f0",
                                            fontWeight: 700,
                                            fontSize: "0.92rem",
                                            marginBottom: "0.3rem",
                                        }}
                                    >
                                        {nombre}
                                    </div>
                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.83rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {desc}
                                    </p>
                                </div>
                                <ArrowRight
                                    size={16}
                                    style={{
                                        color,
                                        opacity: 0.35,
                                        marginLeft: "auto",
                                        flexShrink: 0,
                                    }}
                                />
                            </motion.div>
                        ),
                    )}
                </div>
            </section>

            {/* ── IFRAME — MI DIAGRAMA IDEF0 ────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    padding: "5rem 1.5rem",
                    borderTop: "1px solid rgba(34,211,238,0.08)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
                            // MI MODELO
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "0.75rem",
                            }}
                        >
                            Diagrama IDEF0 del{" "}
                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#22d3ee,#38bdf8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Sistema de Alarma
                            </span>
                        </h2>
                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "0.9rem",
                                maxWidth: 560,
                                margin: "0 auto",
                            }}
                        >
                            Modelo funcional completo del sistema, elaborado con
                            software especializado IDEF0. Navega por los niveles
                            de descomposición desde el diagrama de contexto
                            hasta las subfunciones.
                        </p>
                    </motion.div>

                    {/* iframe wrapper */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        style={{
                            position: "relative",
                            borderRadius: "1.25rem",
                            overflow: "hidden",
                            border: "1px solid rgba(34,211,238,0.2)",
                            boxShadow:
                                "0 0 80px rgba(6,182,212,0.08), 0 0 0 1px rgba(34,211,238,0.05)",
                        }}
                    >
                        {/* Top accent bar */}
                        <div
                            style={{
                                height: 3,
                                background:
                                    "linear-gradient(90deg, transparent, #22d3ee 30%, #38bdf8 70%, transparent)",
                            }}
                        />

                        {/* Toolbar decorativa */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "0.75rem 1.25rem",
                                background: "#060e1d",
                                borderBottom: "1px solid rgba(34,211,238,0.1)",
                            }}
                        >
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                                {["#ff5f57", "#febc2e", "#28c840"].map(
                                    (c, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: "50%",
                                                background: c,
                                                opacity: 0.7,
                                            }}
                                        />
                                    ),
                                )}
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    background: "rgba(34,211,238,0.05)",
                                    border: "1px solid rgba(34,211,238,0.1)",
                                    borderRadius: "0.35rem",
                                    padding: "0.2rem 0.75rem",
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.62rem",
                                    color: "#334155",
                                }}
                            >
                                {IDEF0_HTML_PATH}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.35rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "#22d3ee",
                                        animation: "blink 2s infinite",
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.6rem",
                                        color: "#22d3ee",
                                    }}
                                >
                                    IDEF0
                                </span>
                            </div>
                        </div>

                        {/* Loading state */}
                        {!iframeLoaded && (
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    top: 52,
                                    background: "#060e1d",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 1,
                                    gap: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: 50,
                                        height: 50,
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: "50%",
                                            border: "2px solid #22d3ee",
                                            animation:
                                                "pulse-ring 1.5s ease-out infinite",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 8,
                                            borderRadius: "50%",
                                            background: "rgba(34,211,238,0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Cpu
                                            size={16}
                                            style={{ color: "#22d3ee" }}
                                        />
                                    </div>
                                </div>
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.7rem",
                                        color: "#334155",
                                    }}
                                >
                                    Cargando diagrama IDEF0...
                                </span>
                            </div>
                        )}

                        <iframe
                            src={IDEF0_HTML_PATH}
                            title="Diagrama IDEF0 — Sistema de Alarma Inteligente"
                            onLoad={() => setIframeLoaded(true)}
                            style={{
                                width: "100%",
                                height: "700px",
                                border: "none",
                                display: "block",
                                background: "#060e1d",
                            }}
                            allow="fullscreen"
                        />
                    </motion.div>

                    {/* Nota sobre la ruta */}
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
                        Conoce al equipo
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con el modelo IDEF0 completo, el siguiente paso es
                        analizar el flujo del proceso con el diagrama BPMN.
                    </p>
                    <a
                        href="/bpmn"
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
                        Ver Modelo BPMN →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
