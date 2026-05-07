import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Shield, Bell, Smartphone, Cpu, Wifi, Zap,
    Lock, AlertTriangle, DollarSign, Radio,
    Package, Code, CheckCircle, Globe, ArrowRight,
    MapPin, ChevronRight,
} from "lucide-react";

// ─── Datos ───────────────────────────────────────────────────────────────────
const PROBLEMS = [
    {
        icon: DollarSign,
        color: "#fb7185",
        label: "01",
        title: "Costos de Instalación Elevados",
        desc: "Los sistemas de seguridad tradicionales en Bolivia tienen presupuestos de instalación inaccesibles para la mayoría de las familias.",
    },
    {
        icon: Radio,
        color: "#f59e0b",
        label: "02",
        title: "Modelo de Suscripción",
        desc: "Muchas alarmas requieren pagos mensuales obligatorios que se convierten en una carga económica constante e inesperada.",
    },
    {
        icon: AlertTriangle,
        color: "#fb7185",
        label: "03",
        title: "Solo Alerta Localmente",
        desc: "Las alarmas convencionales solo emiten sonido local cuando el intruso ya ingresó — completamente inútil si no estás en casa.",
    },
];

const PROPUESTA = [
    {
        icon: Package,
        color: "#22d3ee",
        number: "01",
        title: "Accesibilidad Total",
        desc: "Producto de bajo costo para que cualquier persona, sin importar su presupuesto, pueda proteger su vivienda.",
        keyword: "Bajo costo",
    },
    {
        icon: Smartphone,
        color: "#34d399",
        number: "02",
        title: "Alertas Instantáneas",
        desc: "El sistema envía un SMS directamente a tu celular en el momento exacto en que se detecta una anomalía.",
        keyword: "SMS en tiempo real",
    },
    {
        icon: Shield,
        color: "#a78bfa",
        number: "03",
        title: "Tranquilidad Real",
        desc: "Elimina el miedo de dejar tu casa sola. Sal sin preocupaciones — el sistema cuida tu hogar por ti.",
        keyword: "Paz mental",
    },
];

const COMO_FUNCIONA = [
    {
        icon: Cpu,
        color: "#22d3ee",
        title: "Corazón: Arduino",
        desc: "Placas Arduino como base: versátiles, potentes y accesibles para cualquier desarrollador.",
    },
    {
        icon: Zap,
        color: "#f59e0b",
        title: "Detección Precisa",
        desc: "Sensores especializados para monitorear accesos, movimientos y anomalías en tiempo real.",
    },
    {
        icon: Wifi,
        color: "#34d399",
        title: "Módulos Shield GSM",
        desc: "Para comunicación y conectividad celular directa a tu smartphone, sin internet de hogar.",
    },
    {
        icon: Bell,
        color: "#a78bfa",
        title: "Alimentación Estable",
        desc: "Módulos transformadores garantizan operación continua incluso con variaciones de voltaje.",
    },
];

const OPEN_SOURCE = [
    {
        icon: Zap,
        color: "#22d3ee",
        title: "Rapidez y Eficiencia",
        desc: "El código abierto nos permite desarrollar y mejorar el sistema mucho más ágil que empresas tradicionales.",
    },
    {
        icon: Code,
        color: "#34d399",
        title: "Personalización Total",
        desc: "No es un sistema cerrado: se adapta a las necesidades específicas de cada hogar boliviano.",
    },
    {
        icon: Lock,
        color: "#a78bfa",
        title: "Sin Ataduras",
        desc: "Eres dueño de tu propia seguridad, sin depender de contratos ni servicios externos.",
    },
];

const FLOW_STEPS = [
    { step: "1", label: "Detección", sub: "Sensor activa la alarma", color: "#22d3ee" },
    { step: "2", label: "Procesamiento", sub: "Arduino analiza la señal", color: "#34d399" },
    { step: "3", label: "Comunicación", sub: "Módulo GSM envía SMS", color: "#a78bfa" },
    { step: "4", label: "Notificación", sub: "Recibes la alerta al instante", color: "#f59e0b" },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const MaterialDifusion = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
                @keyframes scanline { 0%{top:-2px} 100%{top:calc(100% + 2px)} }
                @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
                @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(2);opacity:0} }
                @keyframes rotate-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section ref={heroRef} style={{ position: "relative", overflow: "hidden", minHeight: "92vh", display: "flex", alignItems: "center" }}>
                {/* Grid bg */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.035) 1px,transparent 1px)", backgroundSize: "56px 56px", zIndex: 0 }} />
                {/* Glows */}
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 75% 50%, rgba(34,211,238,0.07) 0%,transparent 65%)", zIndex: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 45% 45% at 15% 85%, rgba(167,139,250,0.06) 0%,transparent 60%)", zIndex: 0 }} />
                {/* Ghost text */}
                <div style={{ position: "absolute", right: "-3rem", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(10rem, 25vw, 20rem)", fontWeight: 800, color: "rgba(34,211,238,0.025)", lineHeight: 1, userSelect: "none", zIndex: 0 }}>
                    INFO
                </div>
                {/* Corner decorations */}
                <div style={{ position: "absolute", top: 32, left: 32, width: 56, height: 56, borderTop: "2px solid rgba(34,211,238,0.35)", borderLeft: "2px solid rgba(34,211,238,0.35)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 32, right: 32, width: 56, height: 56, borderBottom: "2px solid rgba(167,139,250,0.25)", borderRight: "2px solid rgba(167,139,250,0.25)", zIndex: 1 }} />

                <motion.div style={{ y: heroY, position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 400px", gap: "4rem", alignItems: "center" }}>

                    {/* ── Izquierda ── */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "flex", gap: "0.6rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.35rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(6,182,212,0.07)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#67e8f9", letterSpacing: "0.1em" }}>
                                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", display: "inline-block", animation: "blink 1.5s infinite" }} />
                                ETAPA 23 — MATERIAL DE DIFUSIÓN
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(52,211,153,0.2)", background: "rgba(52,211,153,0.06)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#6ee7b7", letterSpacing: "0.08em" }}>
                                <MapPin size={10} color="#34d399" />
                                BOLIVIA · 2025
                            </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.07, marginBottom: "1.25rem" }}>
                            Seguridad Inteligente
                            <br />
                            <span style={{ background: "linear-gradient(135deg, #22d3ee, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "shimmer 5s linear infinite" }}>
                                al Alcance de Todos
                            </span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.8, maxWidth: 520, marginBottom: "2rem" }}>
                            Protege tu hogar en Bolivia con tecnología de código abierto, sin cuotas mensuales y con alertas en tiempo real a tu celular.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", padding: "0.85rem 1.5rem", background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.18)", borderRadius: "0.875rem", marginBottom: "2.5rem" }}>
                            <span style={{ color: "#22d3ee", fontSize: "0.95rem" }}>💬</span>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.82rem", color: "#e2e8f0", fontStyle: "italic" }}>"No solo suena, te avisa donde estés."</span>
                        </motion.div>

                        {/* Stats */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                            {[
                                { val: "$0", unit: "cuotas mensuales", color: "#34d399" },
                                { val: "100%", unit: "código abierto", color: "#22d3ee" },
                                { val: "SMS", unit: "alertas al instante", color: "#a78bfa" },
                            ].map((s) => (
                                <div key={s.val}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.75rem", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}</div>
                                    <div style={{ fontSize: "0.7rem", color: "#475569", letterSpacing: "0.06em", marginTop: "0.3rem" }}>{s.unit}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Derecha: card infográfica ── */}
                    <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
                        <div style={{ background: "linear-gradient(145deg, rgba(34,211,238,0.05), rgba(167,139,250,0.05))", border: "1px solid rgba(34,211,238,0.14)", borderRadius: "1.25rem", padding: "2.25rem 2rem", position: "relative", overflow: "hidden" }}>
                            {/* Scan line */}
                            <div style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.25),transparent)", animation: "scanline 5s linear infinite", zIndex: 1 }} />

                            {/* Header */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                                <div style={{ width: 44, height: 44, borderRadius: "0.65rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 22px rgba(34,211,238,0.3)" }}>
                                    <Shield size={22} color="#fff" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>Alarma Inteligente</div>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee", letterSpacing: "0.08em" }}>INFOGRAFÍA · DIFUSIÓN</div>
                                </div>
                            </div>

                            {/* Progress bars */}
                            {[
                                { label: "Problema actual", pct: 100, color: "#fb7185" },
                                { label: "Propuesta de valor", pct: 88, color: "#22d3ee" },
                                { label: "Solución técnica", pct: 75, color: "#34d399" },
                                { label: "Ventaja Open Source", pct: 62, color: "#a78bfa" },
                                { label: "Llamado a la acción", pct: 50, color: "#f59e0b" },
                            ].map((item, i) => (
                                <motion.div key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} style={{ marginBottom: "1.1rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                                        <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{item.label}</span>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: item.color }}>{item.pct}%</span>
                                    </div>
                                    <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 9999 }}>
                                        <motion.div initial={{ width: 0 }} animate={{ width: `${item.pct}%` }} transition={{ duration: 1.1, delay: 0.7 + i * 0.12 }} style={{ height: "100%", background: item.color, borderRadius: 9999, boxShadow: `0 0 8px ${item.color}55` }} />
                                    </div>
                                </motion.div>
                            ))}

                            <div style={{ marginTop: "1.5rem", padding: "0.7rem 1rem", background: "rgba(34,211,238,0.06)", borderRadius: "0.6rem", border: "1px solid rgba(34,211,238,0.1)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ fontSize: "0.65rem" }}>📍</span>
                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee" }}>Bolivia · Arduino · GSM · Open Source</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── PROBLEMA ─────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(251,113,133,0.22)", background: "rgba(251,113,133,0.06)", marginBottom: "1.25rem" }}>
                            <AlertTriangle size={11} color="#fb7185" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#fb7185", letterSpacing: "0.1em" }}>SECCIÓN 1 — EL PROBLEMA</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            La Seguridad Actual{" "}
                            <span style={{ color: "#fb7185" }}>Falla Cuando Más Importa</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.9rem", lineHeight: 1.75 }}>
                            En Bolivia, los métodos de protección del hogar presentan tres barreras críticas que el mercado ignora.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {PROBLEMS.map((p, i) => (
                            <motion.div key={p.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }} whileHover={{ y: -6, boxShadow: `0 0 24px ${p.color}18` }} style={{ background: "#0f172a", border: `1px solid ${p.color}18`, borderRadius: "1rem", padding: "2rem", position: "relative", overflow: "hidden", cursor: "default", transition: "box-shadow 0.3s" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, opacity: 0.55 }} />
                                <div style={{ position: "absolute", top: "1rem", right: "1.25rem", fontFamily: "'Space Mono', monospace", fontSize: "2.5rem", fontWeight: 700, color: `${p.color}10`, lineHeight: 1 }}>{p.label}</div>
                                <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: `${p.color}10`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", border: `1px solid ${p.color}22` }}>
                                    <p.icon size={22} color={p.color} />
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>{p.title}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.87rem", lineHeight: 1.75 }}>{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROPUESTA DE VALOR ───────────────────────────────────────── */}
            <section style={{ padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(34,211,238,0.06)", marginBottom: "1.25rem" }}>
                            <CheckCircle size={11} color="#22d3ee" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee", letterSpacing: "0.1em" }}>SECCIÓN 2 — NUESTRA PROPUESTA</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            El Objetivo:{" "}
                            <span style={{ color: "#22d3ee" }}>Democratizar la Seguridad</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.9rem", lineHeight: 1.75 }}>
                            Tres pilares fundamentales que guían nuestro sistema de alarma inteligente.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {PROPUESTA.map((p, i) => (
                            <motion.div key={p.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }} whileHover={{ y: -6 }} style={{ background: "#080f1f", border: `1px solid ${p.color}18`, borderRadius: "1rem", padding: "2rem", position: "relative", overflow: "hidden" }}>
                                {/* Number ghost */}
                                <div style={{ position: "absolute", bottom: "-1rem", right: "1rem", fontFamily: "'Space Mono', monospace", fontSize: "5rem", fontWeight: 700, color: `${p.color}08`, lineHeight: 1, userSelect: "none" }}>{p.number}</div>
                                {/* Left accent line */}
                                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: p.color, opacity: 0.55, borderRadius: "1rem 0 0 1rem" }} />

                                <div style={{ marginLeft: "0.5rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                        <div style={{ width: 44, height: 44, borderRadius: "0.7rem", background: `${p.color}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${p.color}22`, boxShadow: `0 0 14px ${p.color}18` }}>
                                            <p.icon size={20} color={p.color} />
                                        </div>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: p.color, letterSpacing: "0.08em" }}>PILAR {p.number}</span>
                                    </div>
                                    <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.75rem" }}>{p.title}</h3>
                                    <p style={{ color: "#64748b", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>{p.desc}</p>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.3rem 0.75rem", borderRadius: "9999px", background: `${p.color}10`, border: `1px solid ${p.color}22` }}>
                                        <CheckCircle size={10} color={p.color} />
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: p.color }}>{p.keyword}</span>
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CÓMO FUNCIONA ────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(52,211,153,0.22)", background: "rgba(52,211,153,0.06)", marginBottom: "1.25rem" }}>
                            <Cpu size={11} color="#34d399" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#34d399", letterSpacing: "0.1em" }}>SECCIÓN 3 — SOLUCIÓN TÉCNICA</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            ¿Cómo Funciona{" "}
                            <span style={{ color: "#34d399" }}>el Sistema?</span>
                        </h2>
                    </motion.div>

                    {/* Flow de pasos */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0", marginBottom: "3.5rem", flexWrap: "wrap" }}>
                        {FLOW_STEPS.map((step, i) => (
                            <div key={step.step} style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ textAlign: "center", padding: "0 0.75rem" }}>
                                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${step.color}12`, border: `2px solid ${step.color}40`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.6rem", boxShadow: `0 0 16px ${step.color}22`, fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "1rem", color: step.color }}>
                                        {step.step}
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: "0.78rem", marginBottom: "0.2rem" }}>{step.label}</div>
                                    <div style={{ fontSize: "0.67rem", color: "#475569", maxWidth: 100 }}>{step.sub}</div>
                                </div>
                                {i < FLOW_STEPS.length - 1 && (
                                    <ChevronRight size={18} color="#334155" style={{ flexShrink: 0 }} />
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Grid de componentes */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem" }}>
                        {COMO_FUNCIONA.map((item, i) => (
                            <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} style={{ background: "#0f172a", border: `1px solid ${item.color}18`, borderRadius: "0.875rem", padding: "1.5rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${item.color}, transparent)`, opacity: 0.7 }} />
                                <div style={{ width: 40, height: 40, borderRadius: "0.6rem", background: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", border: `1px solid ${item.color}20` }}>
                                    <item.icon size={18} color={item.color} />
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.6rem" }}>{item.title}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.7 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OPEN SOURCE ──────────────────────────────────────────────── */}
            <section style={{ padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

                    {/* Left: texto */}
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.22)", background: "rgba(167,139,250,0.06)", marginBottom: "1.5rem" }}>
                            <Code size={11} color="#a78bfa" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a78bfa", letterSpacing: "0.1em" }}>SECCIÓN 4 — OPEN SOURCE</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                            ¿Por qué Elegir{" "}
                            <span style={{ color: "#a78bfa" }}>Código Abierto</span>?
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                            No somos un sistema cerrado ni dependemos de una empresa central. La tecnología open source nos da una ventaja estratégica que beneficia directamente a cada usuario boliviano.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {OPEN_SOURCE.map((item, i) => (
                                <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{ width: 38, height: 38, flexShrink: 0, borderRadius: "0.6rem", background: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${item.color}20`, marginTop: 2 }}>
                                        <item.icon size={16} color={item.color} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{item.title}</div>
                                        <div style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.65 }}>{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: visual card */}
                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
                        <div style={{ position: "relative" }}>
                            {/* Rotating ring */}
                            <div style={{ position: "absolute", inset: -24, borderRadius: "50%", border: "1px dashed rgba(167,139,250,0.12)", animation: "rotate-slow 30s linear infinite" }} />

                            <div style={{ background: "linear-gradient(145deg, rgba(167,139,250,0.06), rgba(34,211,238,0.04))", border: "1px solid rgba(167,139,250,0.15)", borderRadius: "1.25rem", padding: "2.5rem 2rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #a78bfa, #22d3ee)" }} />

                                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(34,211,238,0.1))", border: "2px solid rgba(167,139,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", boxShadow: "0 0 30px rgba(167,139,250,0.2)" }}>
                                        <Globe size={32} color="#a78bfa" />
                                    </div>
                                    <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Sistema Sin Fronteras</div>
                                    <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.65 }}>Desarrollado con tecnología disponible globalmente, adaptada a las realidades bolivianas.</div>
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                    {[
                                        { label: "Arduino IDE", color: "#22d3ee", icon: "⚡" },
                                        { label: "Módulo SIM800", color: "#34d399", icon: "📡" },
                                        { label: "Sensor PIR", color: "#a78bfa", icon: "👁" },
                                        { label: "Buzzer activo", color: "#f59e0b", icon: "🔔" },
                                    ].map((tech) => (
                                        <div key={tech.label} style={{ padding: "0.75rem", background: `${tech.color}08`, border: `1px solid ${tech.color}18`, borderRadius: "0.6rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <span style={{ fontSize: "0.9rem" }}>{tech.icon}</span>
                                            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: tech.color }}>{tech.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: "1.5rem", padding: "0.85rem 1rem", background: "rgba(34,211,238,0.05)", borderRadius: "0.75rem", border: "1px solid rgba(34,211,238,0.12)", textAlign: "center" }}>
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#94a3b8" }}>
                                        "Somos un equipo dedicado a democratizar
                                        <br />
                                        la seguridad con Arduino."
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA FINAL ────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div style={{ position: "relative", background: "linear-gradient(145deg, rgba(34,211,238,0.06), rgba(167,139,250,0.06))", border: "1px solid rgba(34,211,238,0.18)", borderRadius: "1.5rem", padding: "3.5rem 2.5rem", textAlign: "center", overflow: "hidden" }}>
                            {/* Top gradient line */}
                            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, transparent, #22d3ee, #a78bfa, transparent)" }} />

                            {/* Pulse rings */}
                            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(34,211,238,0.06)", pointerEvents: "none" }} />
                            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 450, height: 450, borderRadius: "50%", border: "1px solid rgba(34,211,238,0.04)", pointerEvents: "none" }} />

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(34,211,238,0.06)", marginBottom: "1.5rem" }}>
                                    <Globe size={11} color="#22d3ee" />
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee", letterSpacing: "0.1em" }}>SECCIÓN 5 — LLAMADO A LA ACCIÓN</span>
                                </div>

                                <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.25rem" }}>
                                    ¿Listo para proteger
                                    <br />
                                    <span style={{ background: "linear-gradient(135deg,#22d3ee,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>tu hogar hoy?</span>
                                </h2>

                                <p style={{ color: "#64748b", maxWidth: 460, margin: "0 auto 2.5rem", fontSize: "0.9rem", lineHeight: 1.75 }}>
                                    Conocé más detalles y adquirí tu kit en nuestra página web. La seguridad de tu hogar no puede esperar.
                                </p>

                                <motion.div whileHover={{ scale: 1.04 }} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.28)", borderRadius: "1rem", marginBottom: "2rem", cursor: "pointer" }}>
                                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee", animation: "blink 2s infinite", flexShrink: 0 }} />
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1rem", color: "#22d3ee", fontWeight: 700 }}>alarma-inteligente.vercel.app</span>
                                    <ArrowRight size={16} color="#22d3ee" />
                                </motion.div>

                                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                                    {[
                                        { label: "Arduino open source", color: "#22d3ee" },
                                        { label: "Sin suscripción mensual", color: "#34d399" },
                                        { label: "Alertas SMS en tiempo real", color: "#a78bfa" },
                                        { label: "Hecho en Bolivia", color: "#f59e0b" },
                                    ].map((tag) => (
                                        <span key={tag.label} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: tag.color, padding: "0.3rem 0.8rem", borderRadius: "9999px", border: `1px solid ${tag.color}22`, background: `${tag.color}08` }}>
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
