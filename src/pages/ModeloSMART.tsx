import { motion, AnimatePresence } from "framer-motion";
import {
    Target,
    BarChart3,
    Cpu,
    Shield,
    Clock,
    CheckCircle2,
    ArrowRight,
    X,
    ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDITA AQUÍ — Las 6 preguntas del "S" (Specific)
// ─────────────────────────────────────────────────────────────────────────────
interface PreguntaSpecific {
    pregunta: string;
    respuesta: string;
    color: string;
    icon: string;
}

const PREGUNTAS_SPECIFIC: PreguntaSpecific[] = [
    {
        pregunta: "¿Qué?",
        respuesta:
            "Desarrollar un sistema de alarma antirrobo inteligente basado en Arduino con sensores PIR y ultrasónico capaz de detectar intrusos y enviar alertas automáticas.",
        color: "#22d3ee",
        icon: "🎯",
    },
    {
        pregunta: "¿Quién?",
        respuesta:
            "El equipo de estudiantes de Ingeniería Electrónica que diseñará, programará y validará el sistema. El beneficiario final es el propietario del hogar que necesita seguridad asequible.",
        color: "#34d399",
        icon: "👥",
    },
    {
        pregunta: "¿Dónde?",
        respuesta:
            "En una vivienda residencial. Los sensores se instalarán en puntos de acceso clave: puertas principales, ventanas y pasillos interiores de mayor circulación.",
        color: "#f59e0b",
        icon: "📍",
    },
    {
        pregunta: "¿Cuándo?",
        respuesta:
            "El prototipo funcional será desarrollado en un plazo máximo de 4 semanas, con entregas parciales al final de cada semana para validar el avance del proyecto.",
        color: "#a78bfa",
        icon: "📅",
    },
    {
        pregunta: "¿Cuál?",
        respuesta:
            "El resultado esperado es un prototipo funcional con detección de movimiento en < 500 ms, envío de alerta en < 5 segundos y costo total de componentes menor a $50 USD.",
        color: "#fb7185",
        icon: "✅",
    },
    {
        pregunta: "¿Por qué?",
        respuesta:
            "Porque los índices de inseguridad domiciliaria son altos y los sistemas comerciales son costosos. Arduino permite construir una solución efectiva, económica y personalizable.",
        color: "#38bdf8",
        icon: "💡",
    },
];
// ─────────────────────────────────────────────────────────────────────────────

const IMGS = {
    hero: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80",
    circuit:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    lab: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
    security:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    phone: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    team: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
};

const smart = [
    {
        letter: "S",
        title: "Specific",
        label: "Específico",
        icon: Target,
        color: "#22d3ee",
        img: IMGS.security,
        text: "Desarrollar un sistema de alarma inteligente para detectar intrusos dentro de una vivienda usando sensores PIR y Arduino.",
        kpi: "1 sistema — 1 hogar — 1 problema",
        hasModal: true,
    },
    {
        letter: "M",
        title: "Measurable",
        label: "Medible",
        icon: BarChart3,
        color: "#34d399",
        img: IMGS.data,
        text: "El sistema debe detectar movimiento y enviar una alerta en menos de 5 segundos con una tasa de falsos positivos menor al 5%.",
        kpi: "< 5 seg — < 5% error",
        hasModal: false,
    },
    {
        letter: "A",
        title: "Attainable",
        label: "Alcanzable",
        icon: Cpu,
        color: "#f59e0b",
        img: IMGS.circuit,
        text: "El sistema se desarrollará con Arduino Uno, sensor PIR HC-SR501, módulo ESP8266 y componentes electrónicos accesibles.",
        kpi: "< $50 USD — Componentes estándar",
        hasModal: false,
    },
    {
        letter: "R",
        title: "Realistic",
        label: "Relevante",
        icon: Shield,
        color: "#a78bfa",
        img: IMGS.lab,
        text: "El proyecto es viable porque utiliza tecnología económica, ampliamente documentada y disponible en el mercado local.",
        kpi: "Hardware open source — Comunidad activa",
        hasModal: false,
    },
    {
        letter: "T",
        title: "Timely",
        label: "Temporal",
        icon: Clock,
        color: "#fb7185",
        img: IMGS.team,
        text: "El prototipo funcional del sistema será desarrollado e implementado en un plazo máximo de 4 semanas.",
        kpi: "4 semanas — Entrega definida",
        hasModal: false,
    },
];

const objetivos = [
    {
        n: "01",
        text: "Diseñar un sistema de alarma inteligente basado en sensores de movimiento conectados a un microcontrolador Arduino.",
        color: "#22d3ee",
    },
    {
        n: "02",
        text: "Programar el microcontrolador para detectar movimiento sospechoso y activar automáticamente el sistema de alerta.",
        color: "#34d399",
    },
    {
        n: "03",
        text: "Integrar un módulo de comunicación que permita enviar una notificación al teléfono del propietario en tiempo real.",
        color: "#f59e0b",
    },
    {
        n: "04",
        text: "Realizar pruebas de funcionamiento para validar la detección de intrusos y el envío de alertas al celular.",
        color: "#a78bfa",
    },
    {
        n: "05",
        text: "Construir y validar un prototipo funcional del sistema de alarma inteligente para viviendas en 4 semanas.",
        color: "#fb7185",
    },
];

const techImgs = [
    {
        src: IMGS.circuit,
        title: "Hardware electrónico",
        desc: "Circuitos integrados y sensores que forman el núcleo físico del sistema de alarma.",
    },
    {
        src: IMGS.lab,
        title: "Prototipado y pruebas",
        desc: "Validación en entorno real del sistema, ajustando parámetros de sensibilidad y respuesta.",
    },
    {
        src: IMGS.phone,
        title: "Alertas en tiempo real",
        desc: "Notificaciones push enviadas al celular del propietario en menos de 5 segundos.",
    },
];

// ─── Modal ────────────────────────────────────────────────────────────────────
function SpecificModal({ onClose }: { onClose: () => void }) {
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    const active = PREGUNTAS_SPECIFIC[activeIdx];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(2,6,23,0.9)",
                backdropFilter: "blur(16px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "#080f1f",
                    border: "1px solid rgba(34,211,238,0.22)",
                    borderRadius: "1.5rem",
                    width: "100%",
                    maxWidth: 780,
                    overflow: "hidden",
                    boxShadow:
                        "0 50px 120px rgba(6,182,212,0.18), 0 0 0 1px rgba(34,211,238,0.06)",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        position: "relative",
                        padding: "1.6rem 2rem 1.4rem",
                        borderBottom: "1px solid rgba(34,211,238,0.1)",
                        background:
                            "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(2,6,23,0.6))",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: -60,
                            right: -40,
                            width: 240,
                            height: 240,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(34,211,238,0.1), transparent 65%)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.62rem",
                                    color: "#22d3ee",
                                    letterSpacing: "0.2em",
                                    marginBottom: "0.3rem",
                                }}
                            >
                                S — SPECIFIC / ESPECÍFICO
                            </div>
                            <h3
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "1.3rem",
                                    color: "#e2e8f0",
                                    margin: 0,
                                }}
                            >
                                Las 6 preguntas del{" "}
                                <span style={{ color: "#22d3ee" }}>
                                    objetivo específico
                                </span>
                            </h3>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.12, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose}
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: "rgba(34,211,238,0.08)",
                                border: "1px solid rgba(34,211,238,0.22)",
                                color: "#22d3ee",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <X size={15} />
                        </motion.button>
                    </div>
                </div>

                {/* Body: sidebar + content */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "200px 1fr",
                        minHeight: 370,
                    }}
                >
                    {/* Sidebar */}
                    <div
                        style={{
                            borderRight: "1px solid rgba(34,211,238,0.08)",
                            padding: "0.75rem 0",
                            background: "rgba(2,6,23,0.5)",
                        }}
                    >
                        {PREGUNTAS_SPECIFIC.map((p, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setActiveIdx(i)}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.15 }}
                                style={{
                                    width: "100%",
                                    padding: "0.7rem 1rem",
                                    background:
                                        activeIdx === i
                                            ? `${p.color}12`
                                            : "transparent",
                                    border: "none",
                                    borderLeft: `3px solid ${activeIdx === i ? p.color : "transparent"}`,
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    transition:
                                        "background 0.2s, border-color 0.2s",
                                    textAlign: "left",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "1rem",
                                        flexShrink: 0,
                                        filter:
                                            activeIdx === i
                                                ? "none"
                                                : "grayscale(0.7) opacity(0.5)",
                                    }}
                                >
                                    {p.icon}
                                </span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontWeight: 700,
                                            fontSize: "0.73rem",
                                            color:
                                                activeIdx === i
                                                    ? p.color
                                                    : "#334155",
                                            transition: "color 0.2s",
                                        }}
                                    >
                                        {p.pregunta}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {activeIdx === i && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -4 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <ChevronRight
                                                size={13}
                                                style={{ color: p.color }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        ))}
                    </div>

                    {/* Content */}
                    <div
                        style={{
                            padding: "2rem 2.25rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Ambient glow */}
                        <AnimatePresence>
                            <motion.div
                                key={activeIdx + "glow"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: `radial-gradient(ellipse at 80% 20%, ${active.color}08, transparent 60%)`,
                                    pointerEvents: "none",
                                }}
                            />
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{
                                    opacity: 0,
                                    x: 24,
                                    filter: "blur(4px)",
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -24,
                                    filter: "blur(4px)",
                                }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                style={{ position: "relative", zIndex: 1 }}
                            >
                                {/* Question badge */}
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0.06,
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.4rem 1.1rem",
                                        borderRadius: "9999px",
                                        background: `${active.color}14`,
                                        border: `1px solid ${active.color}35`,
                                        marginBottom: "1.35rem",
                                    }}
                                >
                                    <span style={{ fontSize: "1.1rem" }}>
                                        {active.icon}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontWeight: 700,
                                            color: active.color,
                                            fontSize: "0.82rem",
                                        }}
                                    >
                                        {active.pregunta}
                                    </span>
                                </motion.div>

                                {/* Answer text */}
                                <p
                                    style={{
                                        color: "#c4d4e8",
                                        lineHeight: 1.9,
                                        fontSize: "0.95rem",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    {active.respuesta}
                                </p>

                                {/* Progress dots */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "0.35rem",
                                        alignItems: "center",
                                    }}
                                >
                                    {PREGUNTAS_SPECIFIC.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                width: i === activeIdx ? 26 : 8,
                                                background:
                                                    i === activeIdx
                                                        ? p.color
                                                        : "#1e293b",
                                            }}
                                            transition={{ duration: 0.28 }}
                                            onClick={() => setActiveIdx(i)}
                                            style={{
                                                height: 7,
                                                borderRadius: 4,
                                                cursor: "pointer",
                                            }}
                                        />
                                    ))}
                                    <span
                                        style={{
                                            marginLeft: "0.6rem",
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.6rem",
                                            color: "#334155",
                                        }}
                                    >
                                        {activeIdx + 1}/
                                        {PREGUNTAS_SPECIFIC.length}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer nav */}
                <div
                    style={{
                        padding: "1rem 2rem",
                        borderTop: "1px solid rgba(34,211,238,0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "rgba(2,6,23,0.4)",
                    }}
                >
                    <motion.button
                        whileHover={{ x: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
                        disabled={activeIdx === 0}
                        style={{
                            padding: "0.45rem 1rem",
                            borderRadius: "0.4rem",
                            border: "1px solid rgba(34,211,238,0.15)",
                            background: "transparent",
                            color: activeIdx === 0 ? "#1e293b" : "#64748b",
                            cursor: activeIdx === 0 ? "not-allowed" : "pointer",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.7rem",
                            transition: "color 0.2s",
                        }}
                    >
                        ← Anterior
                    </motion.button>

                    <span
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.62rem",
                            color: active.color,
                        }}
                    >
                        {active.pregunta}
                    </span>

                    {activeIdx < PREGUNTAS_SPECIFIC.length - 1 ? (
                        <motion.button
                            whileHover={{ x: 3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveIdx((i) => i + 1)}
                            style={{
                                padding: "0.45rem 1rem",
                                borderRadius: "0.4rem",
                                background: `${PREGUNTAS_SPECIFIC[activeIdx + 1].color}14`,
                                border: `1px solid ${PREGUNTAS_SPECIFIC[activeIdx + 1].color}30`,
                                color: PREGUNTAS_SPECIFIC[activeIdx + 1].color,
                                cursor: "pointer",
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.7rem",
                            }}
                        >
                            Siguiente →
                        </motion.button>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose}
                            style={{
                                padding: "0.45rem 1.1rem",
                                borderRadius: "0.4rem",
                                background:
                                    "linear-gradient(135deg,#06b6d4,#0891b2)",
                                border: "none",
                                color: "#fff",
                                cursor: "pointer",
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.7rem",
                                boxShadow: "0 0 18px rgba(6,182,212,0.25)",
                            }}
                        >
                            ✓ Cerrar
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── SmartCard ────────────────────────────────────────────────────────────────
function SmartCard({
    s,
    i,
    onOpenModal,
}: {
    s: (typeof smart)[0];
    i: number;
    onOpenModal: () => void;
}) {
    const Icon = s.icon;
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={s.hasModal ? onOpenModal : undefined}
            style={{
                background: "#0f172a",
                border: `1px solid ${hovered ? s.color + "55" : s.color + "22"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "box-shadow 0.3s, border-color 0.3s",
                display: "flex",
                flexDirection: "column",
                cursor: s.hasModal ? "pointer" : "default",
                boxShadow: hovered ? `0 20px 50px ${s.color}18` : "none",
                position: "relative",
            }}
        >
            {/* "Ver detalle" badge only on S */}
            {s.hasModal && (
                <motion.div
                    animate={{
                        opacity: hovered ? 1 : 0.55,
                        scale: hovered ? 1.04 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "absolute",
                        top: "0.55rem",
                        right: "0.55rem",
                        zIndex: 10,
                        padding: "0.18rem 0.55rem",
                        borderRadius: "9999px",
                        background: `${s.color}20`,
                        border: `1px solid ${s.color}40`,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.56rem",
                        color: s.color,
                        letterSpacing: "0.06em",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        pointerEvents: "none",
                    }}
                >
                    <motion.span
                        animate={{ rotate: hovered ? 180 : 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "inline-block" }}
                    >
                        ✦
                    </motion.span>
                    Ver detalle
                </motion.div>
            )}

            {/* Image */}
            <div
                style={{
                    height: 140,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <motion.img
                    animate={{ scale: hovered ? 1.07 : 1 }}
                    transition={{ duration: 0.4 }}
                    src={s.img}
                    alt={s.title}
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
                        background: `linear-gradient(to top, #0f172a 10%, transparent 65%)`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "0.25rem",
                        left: "0.75rem",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "4.5rem",
                        fontWeight: 700,
                        color: `${s.color}22`,
                        lineHeight: 1,
                        userSelect: "none",
                    }}
                >
                    {s.letter}
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "0.75rem",
                        right: "0.75rem",
                        width: 36,
                        height: 36,
                        borderRadius: "0.4rem",
                        background: `${s.color}20`,
                        border: `1px solid ${s.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: s.color,
                    }}
                >
                    <Icon size={16} />
                </div>
            </div>

            {/* Body */}
            <div
                style={{
                    padding: "1.25rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.5rem",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: s.color,
                            lineHeight: 1,
                        }}
                    >
                        {s.letter}
                    </span>
                    <div>
                        <div
                            style={{
                                color: "#e2e8f0",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                fontFamily: "'Syne', sans-serif",
                            }}
                        >
                            {s.title}
                        </div>
                        <div
                            style={{
                                color: "#475569",
                                fontSize: "0.7rem",
                                fontFamily: "'Space Mono', monospace",
                            }}
                        >
                            {s.label}
                        </div>
                    </div>
                </div>

                <p
                    style={{
                        color: "#64748b",
                        fontSize: "0.82rem",
                        lineHeight: 1.7,
                        flex: 1,
                    }}
                >
                    {s.text}
                </p>

                <div
                    style={{
                        padding: "0.35rem 0.75rem",
                        borderRadius: "0.4rem",
                        background: `${s.color}10`,
                        border: `1px solid ${s.color}25`,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: s.color,
                        alignSelf: "flex-start",
                    }}
                >
                    {s.kpi}
                </div>

                {/* CTA only on S card */}
                {s.hasModal && (
                    <motion.div
                        animate={{
                            opacity: hovered ? 1 : 0,
                            y: hovered ? 0 : 5,
                        }}
                        transition={{ duration: 0.2 }}
                        style={{
                            marginTop: "0.1rem",
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.4rem",
                            background: `${s.color}14`,
                            border: `1px solid ${s.color}30`,
                            color: s.color,
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.66rem",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.35rem",
                        }}
                    >
                        Ver las 6 preguntas específicas →
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export const ModeloSMART = () => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [modalOpen]);

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

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <SpecificModal onClose={() => setModalOpen(false)} />
                )}
            </AnimatePresence>

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
                    alt="hero"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.18) saturate(0.4) hue-rotate(160deg)",
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
                            "linear-gradient(rgba(34,211,238,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.04) 1px,transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: "3%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        gap: "0.15rem",
                        opacity: 0.04,
                        userSelect: "none",
                    }}
                >
                    {smart.map((s) => (
                        <div
                            key={s.letter}
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "7rem",
                                fontWeight: 700,
                                color: s.color,
                                lineHeight: 1,
                            }}
                        >
                            {s.letter}
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
                        ETAPA 07 — MODELO SMART
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
                                    "linear-gradient(90deg,#22d3ee,#34d399,#f59e0b,#a78bfa,#fb7185)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            SMART
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
                        Herramienta que permite definir objetivos claros,
                        medibles y alcanzables para el desarrollo del sistema de
                        alarma inteligente para viviendas.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "0.6rem",
                            marginTop: "2rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {smart.map((s) => (
                            <div
                                key={s.letter}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.35rem",
                                    padding: "0.3rem 0.8rem",
                                    borderRadius: "9999px",
                                    border: `1px solid ${s.color}40`,
                                    background: `${s.color}10`,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontWeight: 700,
                                        color: s.color,
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    {s.letter}
                                </span>
                                <span
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.72rem",
                                    }}
                                >
                                    {s.label}
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
                            Explicación del Modelo SMART
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
                            src="https://www.youtube.com/embed/1-SvuFIQjK8"
                            title="Modelo SMART"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>

            {/* ── SMART CARDS ──────────────────────────────────────────────────── */}
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
                        // ESTRUCTURA
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Componentes del Modelo SMART
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cada letra define una dimensión del objetivo.{" "}
                        <span
                            style={{
                                color: "#22d3ee",
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.78rem",
                            }}
                        >
                            ✦ Presiona la tarjeta <strong>S</strong> para ver
                            las 6 preguntas específicas
                        </span>
                    </p>
                </motion.div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "1.1rem",
                    }}
                >
                    {smart.map((s, i) => (
                        <SmartCard
                            key={i}
                            s={s}
                            i={i}
                            onOpenModal={() => setModalOpen(true)}
                        />
                    ))}
                </div>
            </section>

            {/* ── OBJETIVO SMART ───────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
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
                            // OBJETIVO INTEGRADO
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Objetivo SMART del proyecto
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
                            padding: "2.75rem",
                            border: "1px solid rgba(34,211,238,0.15)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 2,
                                background:
                                    "linear-gradient(90deg,transparent,#22d3ee 20%,#34d399 40%,#f59e0b 60%,#a78bfa 80%,transparent)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "1rem",
                                left: "2rem",
                                fontSize: "6rem",
                                color: "rgba(34,211,238,0.04)",
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
                                lineHeight: 2,
                                fontSize: "1.05rem",
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            Desarrollar un{" "}
                            <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                                sistema de alarma antirrobo inteligente
                            </span>{" "}
                            basado en sensores de movimiento y tecnología
                            Arduino capaz de{" "}
                            <span style={{ color: "#34d399", fontWeight: 600 }}>
                                detectar intrusos
                            </span>{" "}
                            dentro de una vivienda y enviar una{" "}
                            <span style={{ color: "#f59e0b", fontWeight: 600 }}>
                                alerta automática al teléfono del propietario en
                                menos de 5 segundos
                            </span>
                            , utilizando{" "}
                            <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                                componentes Arduino accesibles y de bajo costo
                            </span>
                            , implementando un prototipo funcional en un periodo
                            máximo de{" "}
                            <span style={{ color: "#fb7185", fontWeight: 600 }}>
                                4 semanas
                            </span>
                            .
                        </p>
                        <div
                            style={{
                                marginTop: "2rem",
                                paddingTop: "1.5rem",
                                borderTop: "1px solid rgba(34,211,238,0.1)",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.75rem",
                            }}
                        >
                            {smart.map((s) => (
                                <div
                                    key={s.letter}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: s.color,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.65rem",
                                            color: "#475569",
                                        }}
                                    >
                                        {s.letter}: {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
                        // METAS CONCRETAS
                    </div>
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            marginBottom: "0.75rem",
                        }}
                    >
                        Objetivos específicos del proyecto
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                        Cada objetivo representa un entregable concreto del
                        sistema.
                    </p>
                </motion.div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    {objetivos.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1.5rem",
                                background: "#0f172a",
                                border: `1px solid ${o.color}18`,
                                borderRadius: "0.85rem",
                                padding: "1.25rem 1.5rem",
                                transition:
                                    "border-color 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${o.color}40`;
                                e.currentTarget.style.boxShadow = `0 8px 30px ${o.color}10`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${o.color}18`;
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                style={{
                                    minWidth: 44,
                                    height: 44,
                                    borderRadius: "0.5rem",
                                    background: `${o.color}15`,
                                    border: `1px solid ${o.color}35`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "'Space Mono', monospace",
                                    fontWeight: 700,
                                    color: o.color,
                                    fontSize: "0.75rem",
                                    flexShrink: 0,
                                }}
                            >
                                {o.n}
                            </div>
                            <CheckCircle2
                                size={18}
                                style={{ color: o.color, flexShrink: 0 }}
                            />
                            <p
                                style={{
                                    color: "#94a3b8",
                                    fontSize: "0.88rem",
                                    lineHeight: 1.6,
                                }}
                            >
                                {o.text}
                            </p>
                            <ArrowRight
                                size={16}
                                style={{
                                    color: o.color,
                                    flexShrink: 0,
                                    opacity: 0.4,
                                    marginLeft: "auto",
                                }}
                            />
                        </motion.div>
                    ))}
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
                            // IMPLEMENTACIÓN
                        </div>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                            Tecnología utilizada en el sistema
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
                        // PROYECTO COMPLETADO
                    </div>
                    <h2
                        style={{
                            fontSize: "1.75rem",
                            fontWeight: 800,
                            marginBottom: "1rem",
                        }}
                    >
                        Explorar desde el inicio
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Has completado todas las etapas del proyecto. Vuelve al
                        inicio para explorar el sistema completo.
                    </p>
                    <a
                        href="/"
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
                        Volver al inicio →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
