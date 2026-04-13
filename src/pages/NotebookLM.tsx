import { motion } from "framer-motion";
import { useState } from "react";
import {
    BookOpen,
    MessageSquare,
    Sparkles,
    ChevronRight,
    Brain,
    FileSearch,
    Lightbulb,
    Quote,
    HelpCircle,
    CheckCircle,
    AlertCircle,
    Cpu,
    Bell,
    Wifi,
    Smartphone,
    Shield,
    Zap,
} from "lucide-react";

// ─── Sección consultada: Objetivo ────────────────────────────────────────────
// Consulta realizada a NotebookLM sobre la sección de Objetivos del proyecto

const CONSULTA = {
    seccion: "Objetivos del Proyecto",
    codigo: "05",
    color: "#a78bfa",
    pregunta:
        "¿Cuáles son los objetivos específicos del sistema de alarma inteligente y cómo se complementan entre sí para lograr el objetivo general? ¿Qué tecnologías concretas utiliza cada objetivo?",
    fecha: "2026-04-03",
    fuente: "Sección 05 — Objetivo · Alarma Inteligente",
};

// ─── Respuesta de NotebookLM ──────────────────────────────────────────────────
const RESPUESTA_INTRO = `Basándome en los documentos del proyecto "Alarma Inteligente", el sistema está estructurado en torno a un objetivo general
claro y seis objetivos específicos interconectados que forman una cadena funcional completa. Cada objetivo aborda
una capa distinta del sistema: desde la captación física de datos (hardware) hasta la entrega de la alerta al
usuario final (conectividad), pasando por la inteligencia del sistema (validación cruzada). A continuación
desgloso cada objetivo y las tecnologías que utiliza.`;

const objetivosNotebook = [
    {
        icon: Cpu,
        num: "01",
        title: "Implementar los sensores",
        color: "#22d3ee",
        tecnologias: ["Sensor PIR HC-SR501", "Sensor ultrasónico HC-SR04", "Arduino Uno"],
        resumen:
            "Es el punto de entrada del sistema. Sin una detección confiable, el resto de la cadena no tiene sentido. Los sensores PIR detectan calor corporal en movimiento mientras que el HC-SR04 mide distancia, creando redundancia de detección.",
        cita: "Detectar movimiento y presencia en el área vigilada con alta precisión.",
        insight: "La combinación de dos tecnologías de detección distintas es clave para reducir falsos positivos desde el origen.",
    },
    {
        icon: Bell,
        num: "02",
        title: "Activar alerta sonora",
        color: "#f59e0b",
        tecnologias: ["Buzzer activo 85 dB", "LED de alerta", "Arduino Uno"],
        resumen:
            "Respuesta local e inmediata ante una intrusión. El buzzer de 85 dB actúa como disuasivo directo —sin depender de conectividad a internet— lo que garantiza la alerta incluso en caso de fallo de red.",
        cita: "Emitir señal acústica intermitente al momento de detectar una intrusión, disuadiendo al intruso.",
        insight: "La alarma local funciona de forma autónoma: no requiere internet ni servidor externo, lo que la hace resiliente.",
    },
    {
        icon: Wifi,
        num: "03",
        title: "Conectividad WiFi",
        color: "#34d399",
        tecnologias: ["Módulo ESP8266", "Red WiFi doméstica", "Protocolo TCP/IP"],
        resumen:
            "Puente entre el hardware físico y el mundo digital. El ESP8266 convierte el Arduino en un dispositivo IoT sin necesidad de hardware adicional costoso, aprovechando la infraestructura WiFi existente del hogar.",
        cita: "Transmitir datos por red WiFi doméstica y enviar notificaciones push en segundos.",
        insight: "El ESP8266 permite que un sistema Arduino pase de local a conectado con bajo costo, siendo este el componente de mayor impacto en la arquitectura IoT del proyecto.",
    },
    {
        icon: Smartphone,
        num: "04",
        title: "Notificación remota",
        color: "#a78bfa",
        tecnologias: ["Push notifications", "App móvil", "Servidor de mensajería"],
        resumen:
            "Cierra el ciclo de comunicación con el usuario. Permite que el propietario actúe a distancia sin depender de estar físicamente cerca. La latencia objetivo es menor a 5 segundos desde la detección.",
        cita: "Recibir alertas en tiempo real desde cualquier lugar, permitiendo tomar acción inmediata.",
        insight: "Este objetivo transforma una alarma local en un sistema de seguridad inteligente: el valor diferencial frente a sistemas tradicionales está precisamente aquí.",
    },
    {
        icon: Shield,
        num: "05",
        title: "Reducir falsas alarmas",
        color: "#fb7185",
        tecnologias: ["Lógica de validación cruzada", "Firmware Arduino", "Umbrales configurables"],
        resumen:
            "La inteligencia del sistema. Mientras los objetivos 01-04 son funcionales, este objetivo es el que da el atributo 'inteligente' al sistema. Sin esta capa, el sistema sería funcional pero poco confiable.",
        cita: "Implementar lógica de validación cruzada entre sensores para minimizar activaciones erróneas.",
        insight: "Un sistema que genera falsas alarmas frecuentes pierde la confianza del usuario y termina siendo desactivado. Este objetivo es el más crítico para la usabilidad real.",
    },
    {
        icon: Zap,
        num: "06",
        title: "Bajo costo y consumo",
        color: "#fbbf24",
        tecnologias: ["Componentes Arduino estándar", "Optimización firmware", "Presupuesto < $50 USD"],
        resumen:
            "Garantiza que la solución sea accesible para el segmento objetivo: hogares de clase media sin presupuesto para sistemas profesionales. El límite de $50 USD es una restricción de diseño, no una aspiración.",
        cita: "Mantener el costo total del sistema por debajo de $50 USD usando componentes Arduino estándar.",
        insight: "El costo no es solo una limitación: es la propuesta de valor. Sistemas similares en el mercado cuestan entre $200 y $500 USD.",
    },
];

const preguntasSeguimiento = [
    "¿Cuál es la secuencia de ejecución cuando el sensor PIR detecta movimiento por primera vez?",
    "¿Qué pasa si el ESP8266 pierde conexión WiFi durante una intrusión activa?",
    "¿Cómo implementa el sistema la validación cruzada entre el sensor PIR y el ultrasónico?",
    "¿Cuál es el consumo energético estimado del sistema operando las 24 horas?",
];

const estadisticasRespuesta = [
    { valor: "6", label: "Objetivos específicos identificados", color: "#22d3ee" },
    { valor: "3", label: "Capas del sistema (hardware / lógica / conectividad)", color: "#a78bfa" },
    { valor: "< 500ms", label: "Tiempo de detección objetivo", color: "#34d399" },
    { valor: "< $50", label: "Costo total del prototipo", color: "#f59e0b" },
];

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function ObjetivoCard({ obj, i }: { obj: (typeof objetivosNotebook)[0]; i: number }) {
    const [expanded, setExpanded] = useState(false);
    const Icon = obj.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: "#0f172a",
                border: `1px solid ${obj.color}28`,
                borderRadius: "1rem",
                padding: "1.5rem",
                cursor: "pointer",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: expanded ? `0 0 20px ${obj.color}22` : "none",
                borderColor: expanded ? `${obj.color}55` : `${obj.color}28`,
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: expanded ? "1rem" : 0 }}>
                <div
                    style={{
                        width: 42,
                        height: 42,
                        borderRadius: "0.6rem",
                        background: `${obj.color}18`,
                        border: `1px solid ${obj.color}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <Icon size={20} color={obj.color} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.7rem",
                                color: obj.color,
                                opacity: 0.7,
                            }}
                        >
                            OBJ-{obj.num}
                        </span>
                    </div>
                    <p style={{ fontWeight: 700, color: "#e2e8f0", margin: 0, fontSize: "0.95rem" }}>
                        {obj.title}
                    </p>
                </div>
                <ChevronRight
                    size={18}
                    color={obj.color}
                    style={{
                        transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                        opacity: 0.7,
                        flexShrink: 0,
                    }}
                />
            </div>

            {/* Expanded content */}
            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Tags de tecnología */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                        {obj.tecnologias.map((t) => (
                            <span
                                key={t}
                                style={{
                                    background: `${obj.color}14`,
                                    border: `1px solid ${obj.color}33`,
                                    color: obj.color,
                                    borderRadius: "2rem",
                                    padding: "0.2rem 0.7rem",
                                    fontSize: "0.72rem",
                                    fontFamily: "'Space Mono', monospace",
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Resumen NotebookLM */}
                    <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7, margin: "0 0 1rem" }}>
                        {obj.resumen}
                    </p>

                    {/* Cita textual */}
                    <div
                        style={{
                            borderLeft: `3px solid ${obj.color}`,
                            paddingLeft: "1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <Quote size={12} color={obj.color} style={{ marginBottom: "0.3rem", opacity: 0.6 }} />
                        <p style={{ color: "#cbd5e1", fontSize: "0.83rem", fontStyle: "italic", margin: 0 }}>
                            "{obj.cita}"
                        </p>
                    </div>

                    {/* Insight */}
                    <div
                        style={{
                            display: "flex",
                            gap: "0.6rem",
                            alignItems: "flex-start",
                            background: "#1e293b",
                            borderRadius: "0.6rem",
                            padding: "0.8rem 1rem",
                        }}
                    >
                        <Lightbulb size={15} color="#fbbf24" style={{ marginTop: "0.1rem", flexShrink: 0 }} />
                        <p style={{ color: "#fbbf24", fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}>
                            <strong>Insight NotebookLM:</strong> {obj.insight}
                        </p>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export const NotebookLM = () => {
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
        @keyframes typing-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
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
                {/* Fondo degradado animado */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,139,250,0.18) 0%, rgba(2,6,23,1) 70%)",
                    }}
                />
                {/* Grid */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
                {/* Ícono decorativo */}
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        right: "10%",
                        opacity: 0.06,
                    }}
                >
                    <Brain size={200} color="#a78bfa" />
                </div>

                {/* Esquinas */}
                {[
                    { top: 32, left: 32, borderTop: "2px solid #a78bfa", borderLeft: "2px solid #a78bfa" },
                    { top: 32, right: 32, borderTop: "2px solid #a78bfa", borderRight: "2px solid #a78bfa" },
                    { bottom: 32, left: 32, borderBottom: "2px solid #a78bfa", borderLeft: "2px solid #a78bfa" },
                    { bottom: 32, right: 32, borderBottom: "2px solid #a78bfa", borderRight: "2px solid #a78bfa" },
                ].map((s, i) => (
                    <div
                        key={i}
                        style={{ position: "absolute", width: 48, height: 48, opacity: 0.35, ...s }}
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
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.3rem 1rem",
                            borderRadius: "2rem",
                            border: "1px solid rgba(167,139,250,0.35)",
                            background: "rgba(167,139,250,0.1)",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <BookOpen size={13} color="#a78bfa" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.7rem",
                                color: "#a78bfa",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                            }}
                        >
                            NotebookLM · Consulta sobre sección 05
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.4rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            margin: "0 0 1.2rem",
                        }}
                    >
                        Análisis con{" "}
                        <span style={{ color: "#a78bfa" }}>NotebookLM</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 640, margin: "0 auto" }}
                    >
                        Consulta realizada a Google NotebookLM sobre los{" "}
                        <strong style={{ color: "#e2e8f0" }}>objetivos específicos</strong> del proyecto de alarma
                        inteligente y las tecnologías asociadas a cada uno.
                    </motion.p>
                </div>
            </section>

            {/* ── TARJETA DE CONSULTA ───────────────────────────────────────────── */}
            <section style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 2rem 1rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: "#0f172a",
                        border: "1px solid rgba(167,139,250,0.25)",
                        borderRadius: "1.2rem",
                        padding: "2rem",
                        marginBottom: "2rem",
                    }}
                >
                    {/* Meta */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1rem",
                            marginBottom: "1.5rem",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(167,139,250,0.1)",
                                border: "1px solid rgba(167,139,250,0.3)",
                                borderRadius: "0.5rem",
                                padding: "0.35rem 0.8rem",
                            }}
                        >
                            <FileSearch size={13} color="#a78bfa" />
                            <span style={{ fontSize: "0.75rem", color: "#a78bfa", fontFamily: "'Space Mono', monospace" }}>
                                {CONSULTA.fuente}
                            </span>
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "#475569", fontFamily: "'Space Mono', monospace" }}>
                            {CONSULTA.fecha}
                        </span>
                    </div>

                    {/* Pregunta */}
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                        <div
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: "rgba(167,139,250,0.15)",
                                border: "1px solid rgba(167,139,250,0.4)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                marginTop: "0.15rem",
                            }}
                        >
                            <MessageSquare size={16} color="#a78bfa" />
                        </div>
                        <div>
                            <p
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#64748b",
                                    fontFamily: "'Space Mono', monospace",
                                    marginBottom: "0.4rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Pregunta realizada
                            </p>
                            <p
                                style={{
                                    color: "#e2e8f0",
                                    fontSize: "1rem",
                                    lineHeight: 1.7,
                                    margin: 0,
                                    fontStyle: "italic",
                                }}
                            >
                                "{CONSULTA.pregunta}"
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ── RESPUESTA INTRO ───────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: "linear-gradient(135deg, rgba(167,139,250,0.07) 0%, rgba(34,211,238,0.04) 100%)",
                        border: "1px solid rgba(167,139,250,0.2)",
                        borderRadius: "1.2rem",
                        padding: "2rem",
                        marginBottom: "3rem",
                    }}
                >
                    <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "1.2rem" }}>
                        <Sparkles size={18} color="#a78bfa" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.72rem",
                                color: "#a78bfa",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            Respuesta de NotebookLM
                        </span>
                    </div>
                    <p style={{ color: "#cbd5e1", lineHeight: 1.85, margin: 0, fontSize: "0.95rem" }}>
                        {RESPUESTA_INTRO}
                    </p>
                </motion.div>
            </section>

            {/* ── ESTADÍSTICAS ─────────────────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    borderTop: "1px solid #1e293b",
                    borderBottom: "1px solid #1e293b",
                    padding: "2.5rem 2rem",
                    marginBottom: "3rem",
                }}
            >
                <div
                    style={{
                        maxWidth: 900,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {estadisticasRespuesta.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{ textAlign: "center" }}
                        >
                            <div
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "2.2rem",
                                    fontWeight: 700,
                                    color: s.color,
                                    lineHeight: 1,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {s.valor}
                            </div>
                            <div
                                style={{
                                    color: "#64748b",
                                    fontSize: "0.78rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {s.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── OBJETIVOS DESGLOSADOS ─────────────────────────────────────────── */}
            <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem 3rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: "2rem" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                        <div
                            style={{
                                width: 3,
                                height: 22,
                                background: "#a78bfa",
                                borderRadius: 2,
                            }}
                        />
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                            Desglose por objetivo
                        </h2>
                    </div>
                    <p style={{ color: "#64748b", fontSize: "0.88rem", margin: "0 0 0 1rem" }}>
                        Haz clic en cada tarjeta para ver el análisis completo de NotebookLM · tecnologías · citas · insights
                    </p>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {objetivosNotebook.map((obj, i) => (
                        <ObjetivoCard key={obj.num} obj={obj} i={i} />
                    ))}
                </div>
            </section>

            {/* ── CADENA FUNCIONAL ──────────────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    borderTop: "1px solid #1e293b",
                    borderBottom: "1px solid #1e293b",
                    padding: "3rem 2rem",
                    margin: "0 0 3rem",
                }}
            >
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: "2rem" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                            <div style={{ width: 3, height: 22, background: "#22d3ee", borderRadius: 2 }} />
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                                Análisis de cadena funcional
                            </h2>
                        </div>
                        <p style={{ color: "#64748b", fontSize: "0.88rem" }}>
                            Cómo se complementan los 6 objetivos según NotebookLM
                        </p>
                    </motion.div>

                    {[
                        {
                            layer: "Capa 1 · Captación",
                            color: "#22d3ee",
                            desc: "Los objetivos 01 (sensores PIR + ultrasónico) forman la base del sistema. La redundancia de dos tecnologías distintas es lo que permite a la capa de lógica tomar decisiones inteligentes.",
                            objs: ["OBJ-01"],
                        },
                        {
                            layer: "Capa 2 · Respuesta local",
                            color: "#f59e0b",
                            desc: "El objetivo 02 (buzzer + LED) garantiza que el sistema reaccione de forma autónoma sin depender de internet. Es la primera línea de disuasión, operativa incluso sin conexión.",
                            objs: ["OBJ-02"],
                        },
                        {
                            layer: "Capa 3 · Inteligencia",
                            color: "#fb7185",
                            desc: "El objetivo 05 (validación cruzada) es transversal: actúa sobre los datos de los sensores antes de activar cualquier respuesta. Sin esta capa, los objetivos 02 y 04 se dispararían con demasiada frecuencia.",
                            objs: ["OBJ-05"],
                        },
                        {
                            layer: "Capa 4 · Conectividad remota",
                            color: "#34d399",
                            desc: "Los objetivos 03 y 04 trabajan en conjunto para llevar la alerta al usuario en tiempo real. El ESP8266 (obj. 03) es el transporte; la notificación push (obj. 04) es la interfaz.",
                            objs: ["OBJ-03", "OBJ-04"],
                        },
                        {
                            layer: "Restricción transversal",
                            color: "#fbbf24",
                            desc: "El objetivo 06 (< $50 USD) no es una capa funcional sino una restricción de diseño que condiciona las decisiones tecnológicas de todas las demás capas.",
                            objs: ["OBJ-06"],
                        },
                    ].map((layer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                display: "flex",
                                gap: "1.2rem",
                                alignItems: "flex-start",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 4,
                                    minHeight: 60,
                                    borderRadius: 4,
                                    background: layer.color,
                                    flexShrink: 0,
                                    marginTop: "0.25rem",
                                }}
                            />
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.4rem",
                                        alignItems: "center",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            fontSize: "0.75rem",
                                            color: layer.color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {layer.layer}
                                    </span>
                                    {layer.objs.map((o) => (
                                        <span
                                            key={o}
                                            style={{
                                                background: `${layer.color}18`,
                                                border: `1px solid ${layer.color}33`,
                                                color: layer.color,
                                                borderRadius: "1rem",
                                                padding: "0.1rem 0.5rem",
                                                fontSize: "0.65rem",
                                                fontFamily: "'Space Mono', monospace",
                                            }}
                                        >
                                            {o}
                                        </span>
                                    ))}
                                </div>
                                <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
                                    {layer.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CONCLUSIÓN NOTEBOOKLM ─────────────────────────────────────────── */}
            <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem 3rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: "#0f172a",
                        border: "1px solid rgba(167,139,250,0.2)",
                        borderRadius: "1.2rem",
                        padding: "2rem",
                        marginBottom: "2.5rem",
                    }}
                >
                    <div style={{ display: "flex", gap: "0.7rem", alignItems: "center", marginBottom: "1.2rem" }}>
                        <CheckCircle size={18} color="#34d399" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.72rem",
                                color: "#34d399",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Conclusión de NotebookLM
                        </span>
                    </div>
                    <p style={{ color: "#cbd5e1", lineHeight: 1.85, margin: "0 0 1rem", fontSize: "0.95rem" }}>
                        Los seis objetivos del proyecto forman un sistema coherente con una estructura de capas bien definida.
                        Lo más destacable es que el equipo ha distinguido correctamente entre objetivos{" "}
                        <em style={{ color: "#e2e8f0" }}>funcionales</em> (01, 02, 03, 04) y objetivos{" "}
                        <em style={{ color: "#e2e8f0" }}>de calidad</em> (05 y 06), algo que no siempre aparece
                        explícitamente en proyectos de este nivel.
                    </p>
                    <p style={{ color: "#cbd5e1", lineHeight: 1.85, margin: 0, fontSize: "0.95rem" }}>
                        El objetivo 05 (reducir falsas alarmas mediante validación cruzada) es el más crítico para la
                        viabilidad real del sistema, ya que determina la confianza del usuario. Si un sistema genera
                        falsas alarmas de forma recurrente, el usuario lo desactivará —haciendo que todos los demás
                        objetivos dejen de importar.
                    </p>
                </motion.div>

                {/* ── ADVERTENCIA ───────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        display: "flex",
                        gap: "0.8rem",
                        alignItems: "flex-start",
                        background: "rgba(251,191,36,0.07)",
                        border: "1px solid rgba(251,191,36,0.2)",
                        borderRadius: "0.8rem",
                        padding: "1rem 1.2rem",
                        marginBottom: "2.5rem",
                    }}
                >
                    <AlertCircle size={16} color="#fbbf24" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                    <p style={{ color: "#fbbf24", fontSize: "0.83rem", margin: 0, lineHeight: 1.6 }}>
                        <strong>Nota metodológica:</strong> Esta sección presenta una consulta real realizada a Google
                        NotebookLM utilizando como fuente el documento del proyecto. Las respuestas han sido
                        estructuradas y complementadas para esta presentación.
                    </p>
                </motion.div>

                {/* ── PREGUNTAS DE SEGUIMIENTO ──────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
                        <div style={{ width: 3, height: 22, background: "#a78bfa", borderRadius: 2 }} />
                        <h2 style={{ fontSize: "1.3rem", fontWeight: 800, margin: 0 }}>
                            Preguntas de seguimiento sugeridas
                        </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                        {preguntasSeguimiento.map((q, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    display: "flex",
                                    gap: "0.8rem",
                                    alignItems: "flex-start",
                                    background: "#0f172a",
                                    border: "1px solid #1e293b",
                                    borderRadius: "0.7rem",
                                    padding: "0.9rem 1.1rem",
                                }}
                            >
                                <HelpCircle size={15} color="#a78bfa" style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                                <p style={{ color: "#94a3b8", fontSize: "0.88rem", margin: 0, lineHeight: 1.6 }}>
                                    {q}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5rem 2rem", textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "#e2e8f0" }}>Visualización de Datos</h2>
                    <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
                        Explorá los datos globales del proyecto con gráficas interactivas de Gapminder.
                    </p>
                    <a href="/gapminder" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", color: "#fff", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                        Ver Gapminder →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
