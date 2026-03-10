import { motion } from "framer-motion";
import {
    Calendar,
    GitBranch,
    CheckSquare,
    Users,
    BarChart2,
    Clock,
    ExternalLink,
    AlertTriangle,
} from "lucide-react";

// ─── Reemplaza estas dos variables con tus capturas reales ───────────────────
// Arrastra tus imágenes al proyecto y cambia las rutas:
import IMG_HOJA_SMARTSHEET from '../assets/sheet-cronograma.jpeg'
import IMG_GANTT_SMARTSHEET from '../assets/diagrama-cronograma.jpeg'
// ─────────────────────────────────────────────────────────────────────────────

// Imágenes de apoyo (siempre cargan)
const IMGS = {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    planning:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    teamwork:
        "https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=800&q=80",
    dashboard:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    calendar:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
};

const features = [
    {
        icon: BarChart2,
        color: "#22d3ee",
        title: "Vista Gantt",
        desc: "Visualiza tareas como barras horizontales en una línea de tiempo. Cada barra representa duración, inicio y fin de una actividad del proyecto.",
    },
    {
        icon: GitBranch,
        color: "#34d399",
        title: "Dependencias",
        desc: "Conecta tareas con flechas de dependencia. Si una tarea se retrasa, las siguientes se actualizan automáticamente en cascada.",
    },
    {
        icon: Clock,
        color: "#f59e0b",
        title: "Ruta Crítica",
        desc: "Identifica la secuencia de tareas más larga que determina la duración mínima del proyecto. Cualquier retraso aquí afecta la entrega final.",
    },
    {
        icon: CheckSquare,
        color: "#a78bfa",
        title: "% de Avance",
        desc: "Cada tarea puede llevar un indicador de porcentaje completado que se refleja visualmente dentro de la barra en el diagrama Gantt.",
    },
    {
        icon: Calendar,
        color: "#fb7185",
        title: "Hitos",
        desc: "Marca eventos clave con diamantes en la línea de tiempo: entregas parciales, revisiones o fechas límite críticas del cronograma.",
    },
    {
        icon: Users,
        color: "#38bdf8",
        title: "Colaboración",
        desc: "Comparte el cronograma en tiempo real con el equipo. Todos ven el estado actualizado sin necesidad de enviar archivos.",
    },
];

const cronogramaFases = [
    {
        fase: "Fase 1",
        nombre: "Investigación y análisis",
        color: "#22d3ee",
        semanas: "Sem 1–2",
        estado: "Completado",
    },
    {
        fase: "Fase 2",
        nombre: "Diseño del sistema",
        color: "#34d399",
        semanas: "Sem 3–4",
        estado: "Completado",
    },
    {
        fase: "Fase 3",
        nombre: "Desarrollo del hardware",
        color: "#f59e0b",
        semanas: "Sem 5–7",
        estado: "En progreso",
    },
    {
        fase: "Fase 4",
        nombre: "Programación del firmware",
        color: "#a78bfa",
        semanas: "Sem 6–8",
        estado: "En progreso",
    },
    {
        fase: "Fase 5",
        nombre: "Pruebas e integración",
        color: "#fb7185",
        semanas: "Sem 9–10",
        estado: "Pendiente",
    },
    {
        fase: "Fase 6",
        nombre: "Documentación y entrega",
        color: "#38bdf8",
        semanas: "Sem 11–12",
        estado: "Pendiente",
    },
];

const estadoColor: Record<string, string> = {
    Completado: "#34d399",
    "En progreso": "#f59e0b",
    Pendiente: "#475569",
};

export const SmartSheet = () => {
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
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
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
                        filter: "brightness(0.15) saturate(0.5)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(2,6,23,0.2), rgba(2,6,23,0.97))",
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

                {/* Decorative Gantt bars in background */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "25%",
                        left: "5%",
                        right: "5%",
                        opacity: 0.06,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        pointerEvents: "none",
                    }}
                >
                    {[0.7, 0.45, 0.85, 0.55, 0.65].map((w, i) => (
                        <div
                            key={i}
                            style={{
                                height: 12,
                                borderRadius: 4,
                                background: [
                                    "#22d3ee",
                                    "#34d399",
                                    "#f59e0b",
                                    "#a78bfa",
                                    "#fb7185",
                                ][i],
                                width: `${w * 100}%`,
                                marginLeft: `${i * 4}%`,
                            }}
                        />
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
                        maxWidth: 840,
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
                        ETAPA 08 — HERRAMIENTA DE GESTIÓN
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
                        Cronograma con{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#38bdf8)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Smartsheet
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
                        Herramienta profesional de gestión de proyectos
                        utilizada para planificar y visualizar el cronograma del
                        sistema de alarma Arduino mediante un{" "}
                        <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                            diagrama de Gantt
                        </span>{" "}
                        interactivo.
                    </motion.p>

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
                            "Gantt Chart",
                            "Dependencias",
                            "Ruta Crítica",
                            "Colaboración en tiempo real",
                        ].map((t, i) => (
                            <div
                                key={t}
                                style={{
                                    padding: "0.3rem 0.85rem",
                                    borderRadius: "9999px",
                                    border: `1px solid ${["#22d3ee", "#34d399", "#f59e0b", "#a78bfa"][i]}40`,
                                    background: `${["#22d3ee", "#34d399", "#f59e0b", "#a78bfa"][i]}10`,
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.68rem",
                                    color: [
                                        "#22d3ee",
                                        "#34d399",
                                        "#f59e0b",
                                        "#a78bfa",
                                    ][i],
                                }}
                            >
                                {t}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── ¿QUÉ ES SMARTSHEET? ──────────────────────────────────────────── */}
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
                                marginBottom: "1rem",
                            }}
                        >
                            // SOBRE LA HERRAMIENTA
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "1.25rem",
                                lineHeight: 1.2,
                            }}
                        >
                            ¿Qué es Smartsheet?
                        </h2>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                marginBottom: "1rem",
                            }}
                        >
                            Smartsheet es una plataforma colaborativa de gestión
                            de trabajo que combina la familiaridad de una hoja
                            de cálculo con funciones potentes de gestión de
                            proyectos. Más de{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                80,000 empresas
                            </span>{" "}
                            la utilizan para planificar, rastrear y automatizar
                            procesos.
                        </p>
                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                marginBottom: "1.5rem",
                            }}
                        >
                            En este proyecto la usamos para crear el{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                cronograma completo
                            </span>{" "}
                            del sistema de alarma Arduino, organizando cada fase
                            en una{" "}
                            <span style={{ color: "#34d399" }}>
                                hoja de tareas
                            </span>{" "}
                            y visualizándola como un{" "}
                            <span style={{ color: "#f59e0b" }}>
                                diagrama de Gantt
                            </span>{" "}
                            con dependencias y fechas.
                        </p>

                        <a
                            href="https://app.smartsheet.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                padding: "0.6rem 1.25rem",
                                borderRadius: "0.5rem",
                                border: "1px solid rgba(34,211,238,0.3)",
                                color: "#22d3ee",
                                textDecoration: "none",
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.72rem",
                                background: "rgba(6,182,212,0.06)",
                                transition: "all 0.2s",
                            }}
                        >
                            <ExternalLink size={13} />
                            Abrir Smartsheet
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div
                            style={{
                                position: "relative",
                                borderRadius: "1rem",
                                overflow: "hidden",
                                border: "1px solid rgba(34,211,238,0.2)",
                            }}
                        >
                            <img
                                src={IMGS.planning}
                                alt="Planificación"
                                style={{
                                    width: "100%",
                                    height: 320,
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, #080f1f 10%, transparent 55%)",
                                }}
                            />

                            {/* Stats overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "1.25rem",
                                    left: "1.25rem",
                                    right: "1.25rem",
                                    display: "flex",
                                    gap: "0.75rem",
                                }}
                            >
                                {[
                                    { n: "80K+", l: "Empresas", c: "#22d3ee" },
                                    { n: "4", l: "Vistas", c: "#34d399" },
                                    { n: "100%", l: "Online", c: "#f59e0b" },
                                ].map(({ n, l, c }) => (
                                    <div
                                        key={l}
                                        style={{
                                            flex: 1,
                                            textAlign: "center",
                                            padding: "0.6rem",
                                            background: "rgba(2,6,23,0.8)",
                                            backdropFilter: "blur(8px)",
                                            border: `1px solid ${c}25`,
                                            borderRadius: "0.5rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontFamily:
                                                    "'Space Mono', monospace",
                                                fontWeight: 700,
                                                color: c,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            {n}
                                        </div>
                                        <div
                                            style={{
                                                color: "#475569",
                                                fontSize: "0.68rem",
                                            }}
                                        >
                                            {l}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── FUNCIONES CLAVE ──────────────────────────────────────────────── */}
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
                        // CARACTERÍSTICAS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Funciones utilizadas en el cronograma
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Smartsheet ofrece herramientas específicas para
                        planificación de proyectos con Gantt.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                    }}
                >
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0f172a",
                                    border: `1px solid ${f.color}18`,
                                    borderRadius: "0.85rem",
                                    padding: "1.5rem",
                                    transition:
                                        "box-shadow 0.3s, border-color 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${f.color}40`;
                                    e.currentTarget.style.boxShadow = `0 12px 35px ${f.color}10`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = `${f.color}18`;
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "0.5rem",
                                        background: `${f.color}15`,
                                        border: `1px solid ${f.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: f.color,
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <Icon size={18} />
                                </div>
                                <h4
                                    style={{
                                        color: "#e2e8f0",
                                        fontWeight: 700,
                                        fontSize: "0.9rem",
                                        marginBottom: "0.4rem",
                                    }}
                                >
                                    {f.title}
                                </h4>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.82rem",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {f.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── CRONOGRAMA — FASES DEL PROYECTO ─────────────────────────────── */}
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
                            // PLANIFICACIÓN
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 800,
                                marginBottom: "0.75rem",
                            }}
                        >
                            Fases del cronograma del proyecto
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                            El cronograma fue organizado en 6 fases distribuidas
                            en 12 semanas de trabajo.
                        </p>
                    </motion.div>

                    {/* Mini Gantt visual */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.85rem",
                        }}
                    >
                        {cronogramaFases.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "110px 1fr 110px 110px",
                                    gap: "1rem",
                                    alignItems: "center",
                                    background: "#0f172a",
                                    border: `1px solid ${f.color}15`,
                                    borderRadius: "0.75rem",
                                    padding: "0.85rem 1.25rem",
                                }}
                            >
                                {/* Fase label */}
                                <div
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.68rem",
                                        color: f.color,
                                        fontWeight: 700,
                                    }}
                                >
                                    {f.fase}
                                </div>

                                {/* Task name + bar */}
                                <div>
                                    <div
                                        style={{
                                            color: "#e2e8f0",
                                            fontSize: "0.83rem",
                                            fontWeight: 600,
                                            marginBottom: "0.35rem",
                                        }}
                                    >
                                        {f.nombre}
                                    </div>
                                    {/* Gantt bar */}
                                    <div
                                        style={{
                                            height: 8,
                                            background:
                                                "rgba(255,255,255,0.05)",
                                            borderRadius: 4,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${[70, 70, 55, 55, 0, 0][i]}%`,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: i * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            style={{
                                                height: "100%",
                                                background: f.color,
                                                borderRadius: 4,
                                                opacity: 0.85,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Semanas */}
                                <div
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.67rem",
                                        color: "#475569",
                                        textAlign: "center",
                                    }}
                                >
                                    {f.semanas}
                                </div>

                                {/* Estado */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            padding: "0.2rem 0.65rem",
                                            borderRadius: "9999px",
                                            background: `${estadoColor[f.estado]}18`,
                                            border: `1px solid ${estadoColor[f.estado]}35`,
                                            color: estadoColor[f.estado],
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.62rem",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {f.estado}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MIS IMÁGENES: HOJA + GANTT ───────────────────────────────────── */}
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
                        // CRONOGRAMA REAL DEL PROYECTO
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Nuestro cronograma en Smartsheet
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Capturas reales del cronograma creado en Smartsheet para
                        el sistema de alarma Arduino.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2rem",
                    }}
                >
                    {/* ── HOJA ──────────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            background: "#0f172a",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "1rem",
                            overflow: "hidden",
                        }}
                    >
                        {/* Header badge */}
                        <div
                            style={{
                                padding: "1rem 1.25rem",
                                borderBottom: "1px solid rgba(34,211,238,0.1)",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                background: "rgba(6,182,212,0.04)",
                            }}
                        >
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#22d3ee",
                                    animation: "blink 2s infinite",
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.68rem",
                                    color: "#67e8f9",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                VISTA DE HOJA — Grid View
                            </span>
                        </div>

                        {/* Image */}
                        <div
                            style={{
                                position: "relative",
                                background: "#080f1f",
                            }}
                        >
                            <img
                                src={IMG_HOJA_SMARTSHEET}
                                alt="Hoja de cronograma en Smartsheet"
                                style={{
                                    width: "100%",
                                    display: "block",
                                    maxHeight: 420,
                                    objectFit: "contain",
                                }}
                                onError={(e) => {
                                    const t = e.currentTarget;
                                    t.style.display = "none";
                                    const next =
                                        t.nextElementSibling as HTMLElement;
                                    if (next) next.style.display = "flex";
                                }}
                            />
                            {/* Placeholder shown while image is missing */}
                            <div
                                style={{
                                    display: "none",
                                    height: 320,
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    padding: "2rem",
                                }}
                            >
                                <AlertTriangle
                                    size={32}
                                    style={{ color: "#f59e0b", opacity: 0.6 }}
                                />
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            color: "#e2e8f0",
                                            fontWeight: 600,
                                            marginBottom: "0.3rem",
                                        }}
                                    >
                                        Agrega tu captura de la hoja
                                    </div>
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.68rem",
                                            color: "#475569",
                                        }}
                                    >
                                        IMG_HOJA_SMARTSHEET en el código
                                    </div>
                                </div>
                            </div>
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
                                Hoja de tareas (Grid View)
                            </h4>
                            <p
                                style={{
                                    color: "#64748b",
                                    fontSize: "0.82rem",
                                    lineHeight: 1.7,
                                }}
                            >
                                Vista de hoja donde se definen las tareas del
                                proyecto con sus fechas de inicio, fin,
                                duración, responsables y porcentaje de avance.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── GANTT ─────────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        style={{
                            background: "#0f172a",
                            border: "1px solid rgba(52,211,153,0.2)",
                            borderRadius: "1rem",
                            overflow: "hidden",
                        }}
                    >
                        {/* Header badge */}
                        <div
                            style={{
                                padding: "1rem 1.25rem",
                                borderBottom: "1px solid rgba(52,211,153,0.1)",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                background: "rgba(52,211,153,0.04)",
                            }}
                        >
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#34d399",
                                    animation: "blink 2.5s infinite",
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.68rem",
                                    color: "#6ee7b7",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                DIAGRAMA DE GANTT — Gantt View
                            </span>
                        </div>

                        {/* Image */}
                        <div
                            style={{
                                position: "relative",
                                background: "#080f1f",
                            }}
                        >
                            <img
                                src={IMG_GANTT_SMARTSHEET}
                                alt="Diagrama Gantt del cronograma en Smartsheet"
                                style={{
                                    width: "100%",
                                    display: "block",
                                    maxHeight: 420,
                                    objectFit: "contain",
                                }}
                                onError={(e) => {
                                    const t = e.currentTarget;
                                    t.style.display = "none";
                                    const next =
                                        t.nextElementSibling as HTMLElement;
                                    if (next) next.style.display = "flex";
                                }}
                            />
                            {/* Placeholder */}
                            <div
                                style={{
                                    display: "none",
                                    height: 320,
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    padding: "2rem",
                                }}
                            >
                                <AlertTriangle
                                    size={32}
                                    style={{ color: "#34d399", opacity: 0.6 }}
                                />
                                <div style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            color: "#e2e8f0",
                                            fontWeight: 600,
                                            marginBottom: "0.3rem",
                                        }}
                                    >
                                        Agrega tu captura del diagrama Gantt
                                    </div>
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.68rem",
                                            color: "#475569",
                                        }}
                                    >
                                        IMG_GANTT_SMARTSHEET en el código
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "1.25rem" }}>
                            <h4
                                style={{
                                    color: "#34d399",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    marginBottom: "0.4rem",
                                }}
                            >
                                Diagrama de Gantt
                            </h4>
                            <p
                                style={{
                                    color: "#64748b",
                                    fontSize: "0.82rem",
                                    lineHeight: 1.7,
                                }}
                            >
                                Representación visual de la misma hoja como
                                diagrama de Gantt. Las barras muestran duración
                                de cada fase, dependencias y el progreso real
                                del proyecto.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Nota instructiva */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: "1.5rem",
                        padding: "1rem 1.25rem",
                        background: "rgba(245,158,11,0.06)",
                        border: "1px solid rgba(245,158,11,0.2)",
                        borderRadius: "0.75rem",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                    }}
                >
                    <AlertTriangle
                        size={16}
                        style={{
                            color: "#f59e0b",
                            flexShrink: 0,
                            marginTop: "0.1rem",
                        }}
                    />
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#92400e",
                            lineHeight: 1.7,
                        }}
                    >
                        <span style={{ color: "#f59e0b", fontWeight: 700 }}>
                            INSTRUCCIÓN:{" "}
                        </span>
                        Reemplaza{" "}
                        <code
                            style={{
                                background: "rgba(245,158,11,0.15)",
                                padding: "0.1rem 0.35rem",
                                borderRadius: "3px",
                                color: "#fbbf24",
                            }}
                        >
                            IMG_HOJA_SMARTSHEET
                        </code>{" "}
                        y{" "}
                        <code
                            style={{
                                background: "rgba(245,158,11,0.15)",
                                padding: "0.1rem 0.35rem",
                                borderRadius: "3px",
                                color: "#fbbf24",
                            }}
                        >
                            IMG_GANTT_SMARTSHEET
                        </code>{" "}
                        al inicio del archivo con las rutas de tus capturas.
                    </div>
                </motion.div>
            </section>

            {/* ── CÓMO LO USAMOS ───────────────────────────────────────────────── */}
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
                            // PROCESO
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            ¿Cómo usamos Smartsheet en el proyecto?
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "4rem",
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
                                    num: "01",
                                    t: "Creación de la hoja",
                                    d: "Se creó una nueva hoja en Smartsheet con columnas: Tarea, Responsable, Inicio, Fin, Duración y % Completado.",
                                    c: "#22d3ee",
                                },
                                {
                                    num: "02",
                                    t: "Ingreso de tareas",
                                    d: "Se ingresaron todas las fases y sub-tareas del proyecto con sus respectivas fechas y asignaciones de equipo.",
                                    c: "#34d399",
                                },
                                {
                                    num: "03",
                                    t: "Activar vista Gantt",
                                    d: "Se cambió a la vista Gantt para visualizar el cronograma como barras horizontales sobre la línea de tiempo.",
                                    c: "#f59e0b",
                                },
                                {
                                    num: "04",
                                    t: "Configurar dependencias",
                                    d: "Se conectaron las tareas con relaciones de dependencia (Fin-a-Inicio) para que el cronograma se actualice automáticamente.",
                                    c: "#a78bfa",
                                },
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <div
                                        style={{
                                            minWidth: 40,
                                            height: 40,
                                            borderRadius: "50%",
                                            background: `${s.c}18`,
                                            border: `1px solid ${s.c}40`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontWeight: 700,
                                            color: s.c,
                                            fontSize: "0.72rem",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {s.num}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                color: "#e2e8f0",
                                                fontWeight: 600,
                                                marginBottom: "0.25rem",
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {s.t}
                                        </div>
                                        <div
                                            style={{
                                                color: "#64748b",
                                                fontSize: "0.82rem",
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
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div
                                style={{
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                }}
                            >
                                <img
                                    src={IMGS.dashboard}
                                    alt="Dashboard de proyecto"
                                    style={{
                                        width: "100%",
                                        height: 280,
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    marginTop: "1.25rem",
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                    border: "1px solid rgba(52,211,153,0.15)",
                                }}
                            >
                                <img
                                    src={IMGS.teamwork}
                                    alt="Colaboración en equipo"
                                    style={{
                                        width: "100%",
                                        height: 200,
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── VENTAJAS SMARTSHEET vs EXCEL ────────────────────────────────── */}
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
                        // COMPARATIVA
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                        ¿Por qué Smartsheet y no Excel?
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1.5rem",
                    }}
                >
                    {[
                        {
                            label: "Smartsheet",
                            items: [
                                "Vista Gantt nativa integrada",
                                "Dependencias automáticas",
                                "Actualización en tiempo real",
                                "Colaboración simultánea del equipo",
                                "Ruta crítica automática",
                                "Exportación PDF / PNG directa",
                            ],
                            color: "#22d3ee",
                            highlight: true,
                        },
                        {
                            label: "Excel",
                            items: [
                                "Gantt manual con barras apiladas",
                                "Dependencias manuales",
                                "Archivos que hay que compartir",
                                "Un editor a la vez",
                                "Sin ruta crítica",
                                "Exportación básica",
                            ],
                            color: "#475569",
                            highlight: false,
                        },
                    ].map((col, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: col.highlight
                                    ? "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(14,116,144,0.03))"
                                    : "#0f172a",
                                border: `1px solid ${col.color}${col.highlight ? "30" : "15"}`,
                                borderRadius: "1rem",
                                padding: "1.75rem",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 700,
                                    color: col.color,
                                    fontSize: "0.85rem",
                                    marginBottom: "1.25rem",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {col.highlight ? "✓ " : ""}
                                {col.label}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.65rem",
                                }}
                            >
                                {col.items.map((item, j) => (
                                    <div
                                        key={j}
                                        style={{
                                            display: "flex",
                                            gap: "0.6rem",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: col.highlight
                                                    ? "#22d3ee"
                                                    : "#334155",
                                                fontSize: "0.75rem",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {col.highlight ? "▸" : "–"}
                                        </span>
                                        <span
                                            style={{
                                                color: col.highlight
                                                    ? "#94a3b8"
                                                    : "#334155",
                                                fontSize: "0.83rem",
                                            }}
                                        >
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
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
                        Ver el modelo PART
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con el cronograma definido en Smartsheet, el siguiente
                        paso es analizar el proyecto con el Modelo PART.
                    </p>
                    <a
                        href="/modelo-part"
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
                        Ver Modelo PART →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
