import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Wifi,
    Eye,
    Bell,
    Zap,
    Layers,
    CircuitBoard,
    Wrench,
    ArrowRight,
} from "lucide-react";

import maquetadoImg from "../assets/maquetado_sistema.png";

// ─── Componentes del maquetado ────────────────────────────────────────────────
const COMPONENTES = [
    {
        code: "U1",
        nombre: "Arduino Uno R3",
        color: "#22d3ee",
        icon: CircuitBoard,
        posicion: "Centro izquierdo — base del sistema",
        descripcion:
            "Microcontrolador principal del sistema. Recibe las señales de los sensores, ejecuta la lógica de detección programada en C++ y coordina todas las salidas: buzzer, LED y comunicación WiFi. Se conecta al equipo de desarrollo mediante cable USB-B.",
        specs: ["ATmega328P", "14 pines digitales", "6 entradas analógicas", "Flash: 32KB"],
    },
    {
        code: "S1",
        nombre: "Sensor PIR HC-SR501",
        color: "#34d399",
        icon: Eye,
        posicion: "Centro de la protoboard — izquierda",
        descripcion:
            "Sensor pasivo infrarrojo que detecta cambios de temperatura causados por el movimiento de personas. Es el primer nivel de detección del sistema. Cuando registra movimiento dentro de su rango, envía una señal digital HIGH al Arduino para iniciar la verificación.",
        specs: ["Rango: 3–7 metros", "Ángulo: 120°", "Voltaje: 5–20V", "Respuesta: < 500 ms"],
    },
    {
        code: "S2",
        nombre: "Sensor Ultrasónico HC-SR04",
        color: "#f59e0b",
        icon: Eye,
        posicion: "Centro de la protoboard — derecha del PIR",
        descripcion:
            "Sensor de distancia por ultrasonido que complementa al PIR. Emite pulsos de sonido de 40 kHz y mide el tiempo de rebote para calcular la distancia al objeto. Actúa como segundo nivel de validación: confirma que el movimiento detectado por el PIR corresponde a una presencia real y no a una perturbación ambiental.",
        specs: ["Rango: 2–400 cm", "Frecuencia: 40 kHz", "Precisión: ±3 mm", "Voltaje: 5V"],
    },
    {
        code: "M1",
        nombre: "Módulo WiFi ESP8266 (ESP001)",
        color: "#a78bfa",
        icon: Wifi,
        posicion: "Extremo derecho de la protoboard",
        descripcion:
            "Módulo de conectividad inalámbrica que permite al Arduino comunicarse con la red WiFi doméstica. Recibe los comandos del Arduino mediante comunicación serial (UART) y transmite la alerta de intrusión al servidor, que a su vez envía la notificación push al celular del propietario. Opera a 3.3V, por lo que requiere el regulador de voltaje.",
        specs: ["802.11 b/g/n", "TCP/IP nativo", "UART 115200 bps", "Voltaje: 3.3V"],
    },
    {
        code: "R1",
        nombre: "Regulador 3.3V y Convertidor de Nivel",
        color: "#fb7185",
        icon: Zap,
        posicion: "Centro superior de la protoboard",
        descripcion:
            "El ESP8266 opera a 3.3V mientras que el Arduino trabaja a 5V. Este módulo cumple dos funciones: regula la alimentación de 5V a 3.3V para el ESP8266, y convierte los niveles lógicos de las señales de comunicación entre ambos dispositivos para evitar dañar el módulo WiFi.",
        specs: ["Entrada: 5V", "Salida: 3.3V", "Corriente máx: 800 mA", "Conversión bidireccional"],
    },
    {
        code: "L1",
        nombre: "LED de Alerta",
        color: "#38bdf8",
        icon: Bell,
        posicion: "Derecha de la protoboard, junto al ESP8266",
        descripcion:
            "Indicador visual de alerta. Se activa simultáneamente con el buzzer cuando se confirma una intrusión. Sirve como señal visual local del estado del sistema: parpadeo lento indica sistema armado en standby, parpadeo rápido indica alarma activa.",
        specs: ["2206 mcd", "Corriente: 20 mA", "Resistencia en serie: 220Ω", "Color: rojo"],
    },
];

// ─── Herramientas visibles en el maquetado ────────────────────────────────────
const HERRAMIENTAS = [
    { nombre: "Multímetro digital", uso: "Verificación de voltajes y continuidad de conexiones", color: "#f59e0b" },
    { nombre: "Destornillador de precisión", uso: "Ajuste de componentes y carcasa", color: "#34d399" },
    { nombre: "Carcasa protectora", uso: "Encapsulado final del prototipo para entorno real", color: "#a78bfa" },
    { nombre: "Fuente USB-B", uso: "Alimentación del Arduino desde PC o adaptador 5V", color: "#22d3ee" },
    { nombre: "Cable de protoboard (jumper wires)", uso: "Interconexión de todos los módulos sin soldadura", color: "#fb7185" },
];

// ─── Flujo de conexión ────────────────────────────────────────────────────────
const FLUJO_CONEXION = [
    { de: "Arduino (5V)", a: "Regulador 3.3V", desc: "Alimentación del ESP8266", color: "#fb7185" },
    { de: "Sensor PIR", a: "Arduino Pin D2", desc: "Señal digital de detección de movimiento", color: "#34d399" },
    { de: "Sensor HC-SR04", a: "Arduino Pins D3/D4", desc: "Trigger y Echo del sensor ultrasónico", color: "#f59e0b" },
    { de: "Arduino TX/RX", a: "Convertidor de nivel → ESP8266", desc: "Comunicación serial a 3.3V", color: "#a78bfa" },
    { de: "Arduino Pin D8", a: "LED + resistencia 220Ω", desc: "Control del indicador visual", color: "#38bdf8" },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const Maquetado = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div style={{ background: "#0f172a", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      `}</style>

            {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
                {/* Imagen de fondo */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${maquetadoImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center 40%",
                        filter: "brightness(0.1) saturate(0.4)",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.88))",
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
                <div style={{ position: "absolute", top: "28%", right: "8%", opacity: 0.04, zIndex: 1 }}>
                    <CircuitBoard size={240} color="#22d3ee" />
                </div>

                <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "5rem 2rem 4rem", maxWidth: 860 }}>
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
                        <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", animation: "blink 1.5s infinite" }} />
                        ETAPA 20 — MAQUETADO DEL SISTEMA
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.4rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: "1.2rem",
                        }}
                    >
                        Maquetado del{" "}
                        <span style={{ color: "#22d3ee" }}>Prototipo</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto" }}
                    >
                        Maqueta física del sistema de alarma inteligente sobre protoboard. Versión{" "}
                        <strong style={{ color: "#22d3ee", fontFamily: "'Space Mono', monospace" }}>V1.2 Validation Build</strong>{" "}
                        con todos los módulos electrónicos interconectados y etiquetados.
                    </motion.p>
                </div>
            </section>

            {/* ── IMAGEN PRINCIPAL ──────────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 48px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        position: "relative",
                        borderRadius: 20,
                        overflow: "hidden",
                        border: "1px solid #22d3ee22",
                        boxShadow: "0 0 60px rgba(34,211,238,0.08)",
                    }}
                >
                    <img
                        src={maquetadoImg}
                        alt="Maquetado del sistema de alarma inteligente — Prototipo V1.2"
                        style={{ width: "100%", display: "block", maxHeight: 600, objectFit: "cover", objectPosition: "center" }}
                    />
                    {/* Etiqueta inferior */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "linear-gradient(to top, rgba(2,6,23,0.95), transparent)",
                            padding: "32px 28px 20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            gap: 12,
                        }}
                    >
                        <div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#22d3ee", letterSpacing: "0.15em", marginBottom: 4 }}>
                                ALARM SYSTEM PROTOTYPE
                            </div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#e2e8f0", fontWeight: 700 }}>
                                V1.2 — VALIDATION BUILD
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {["Arduino Uno", "PIR HC-SR501", "HC-SR04", "ESP8266"].map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        fontSize: "0.68rem",
                                        background: "rgba(34,211,238,0.12)",
                                        border: "1px solid rgba(34,211,238,0.3)",
                                        borderRadius: 6,
                                        padding: "3px 10px",
                                        color: "#22d3ee",
                                        fontFamily: "'Space Mono', monospace",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── DESCRIPCIÓN GENERAL ───────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "64px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ color: "#22d3ee", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12 }}>DESCRIPCIÓN DEL MAQUETADO</p>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#e2e8f0", marginBottom: 16, lineHeight: 1.2 }}>
                            Prototipo funcional sobre protoboard
                        </h2>
                        <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 14 }}>
                            La maqueta muestra el sistema de alarma inteligente ensamblado sobre una
                            protoboard montada en una base acrílica transparente. Cada componente está
                            etiquetado con su referencia técnica y posición dentro del circuito, permitiendo
                            identificar visualmente el rol de cada módulo en el sistema.
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
                            La organización física sigue la lógica del flujo de datos: los sensores (PIR y
                            HC-SR04) están al frente, el cerebro del sistema (Arduino Uno) a la izquierda,
                            el módulo de comunicación (ESP8266) a la derecha, y el regulador de voltaje en
                            el centro superior como intermediario entre los diferentes niveles lógicos.
                        </p>
                        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                            {[
                                { label: "Versión", val: "V1.2" },
                                { label: "Estado", val: "Validation Build" },
                                { label: "Módulos", val: "6 componentes" },
                                { label: "Base", val: "Acrílico transparente" },
                            ].map((item) => (
                                <div key={item.label} style={{ background: "#0b1629", border: "1px solid #1e293b", borderRadius: 8, padding: "8px 14px" }}>
                                    <div style={{ fontSize: "0.62rem", color: "#475569", fontWeight: 700, letterSpacing: "0.08em" }}>{item.label.toUpperCase()}</div>
                                    <div style={{ fontSize: "0.82rem", color: "#e2e8f0", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>{item.val}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        style={{ display: "flex", flexDirection: "column", gap: 10 }}
                    >
                        <p style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 4 }}>COMPONENTES IDENTIFICADOS EN EL MAQUETADO</p>
                        {COMPONENTES.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <motion.div
                                    key={c.code}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.35, delay: i * 0.06 }}
                                    viewport={{ once: true }}
                                    style={{ display: "flex", alignItems: "center", gap: 12, background: "#0b1629", border: `1px solid ${c.color}18`, borderRadius: 10, padding: "10px 14px" }}
                                >
                                    <div style={{ width: 30, height: 30, borderRadius: 8, background: `${c.color}18`, border: `1px solid ${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <Icon size={14} color={c.color} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: "0.8rem", color: "#e2e8f0", fontWeight: 700 }}>{c.nombre}</div>
                                        <div style={{ fontSize: "0.68rem", color: "#475569", fontFamily: "'Space Mono', monospace" }}>{c.posicion}</div>
                                    </div>
                                    <span style={{ fontSize: "0.65rem", fontFamily: "'Space Mono', monospace", color: c.color, fontWeight: 700 }}>{c.code}</span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── FICHAS DE COMPONENTES ─────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 48px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#34d399", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>FICHA TÉCNICA</p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>Detalle de cada componente</h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                        Análisis técnico de cada módulo visible en el maquetado, su función dentro del sistema y sus especificaciones.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
                    {COMPONENTES.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <motion.div
                                key={c.code}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: "#0b1629",
                                    border: `1px solid ${c.color}22`,
                                    borderRadius: 14,
                                    padding: 24,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 14,
                                }}
                            >
                                {/* Header */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.color}18`, border: `1px solid ${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Icon size={18} color={c.color} />
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: c.color, fontWeight: 700 }}>{c.code}</div>
                                            <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#e2e8f0" }}>{c.nombre}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Descripción */}
                                <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.65 }}>{c.descripcion}</p>

                                {/* Specs */}
                                <div style={{ borderTop: `1px solid ${c.color}18`, paddingTop: 12 }}>
                                    <p style={{ fontSize: "0.62rem", color: c.color, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>ESPECIFICACIONES</p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                        {c.specs.map((s) => (
                                            <span key={s} style={{ fontSize: "0.7rem", background: `${c.color}0c`, border: `1px solid ${c.color}22`, borderRadius: 6, padding: "3px 8px", color: "#cbd5e1", fontFamily: "'Space Mono', monospace" }}>
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Posición */}
                                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                    <Layers size={11} color="#475569" />
                                    <span style={{ fontSize: "0.72rem", color: "#475569" }}>{c.posicion}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── FLUJO DE CONEXIONES ───────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "72px 24px" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: 48 }}
                    >
                        <p style={{ color: "#a78bfa", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>CONEXIONES</p>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>Flujo de conexiones del circuito</h2>
                        <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                            Cómo se interconectan los módulos mediante cables jumper en la protoboard.
                        </p>
                    </motion.div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {FLUJO_CONEXION.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{ display: "flex", alignItems: "center", gap: 16, background: "#0b1629", border: `1px solid ${f.color}18`, borderRadius: 12, padding: "16px 20px" }}
                            >
                                <div style={{ flexShrink: 0, width: 8, height: 8, borderRadius: "50%", background: f.color }} />
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: f.color, fontWeight: 700, minWidth: 160 }}>
                                    {f.de}
                                </div>
                                <ArrowRight size={14} color="#334155" style={{ flexShrink: 0 }} />
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: "#e2e8f0", fontWeight: 700, minWidth: 180 }}>
                                    {f.a}
                                </div>
                                <div style={{ fontSize: "0.78rem", color: "#64748b", flex: 1 }}>
                                    {f.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HERRAMIENTAS Y ENTORNO ────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>ENTORNO DE TRABAJO</p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>Herramientas visibles en el maquetado</h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                        El entorno del maquetado refleja un banco de trabajo electrónico completo para prototipado y validación.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                    {HERRAMIENTAS.map((h, i) => (
                        <motion.div
                            key={h.nombre}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            style={{ background: "#0b1629", border: `1px solid ${h.color}22`, borderRadius: 12, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}
                        >
                            <Wrench size={16} color={h.color} style={{ flexShrink: 0, marginTop: 2 }} />
                            <div>
                                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#e2e8f0", marginBottom: 4 }}>{h.nombre}</div>
                                <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.5 }}>{h.uso}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5rem 2rem", textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "#e2e8f0" }}>Minería de Datos Weka</h2>
                    <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
                        Descubrí los patrones de comportamiento de los encuestados aplicando árbol de decisión, K-Means y redes neuronales.
                    </p>
                    <a href="/weka" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", color: "#fff", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                        Ver Weka →
                    </a>
                </motion.div>
            </section>

        </div>
    );
};
