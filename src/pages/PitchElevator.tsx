import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Lightbulb,
    Users,
    AlertTriangle,
    Target,
    Shield,
    Zap,
    Wrench,
    PhoneCall,
    Clock,
    TrendingUp,
    CheckCircle2,
    Mic,
    ArrowRight,
    Play,
} from "lucide-react";

// ── DATOS ────────────────────────────────────────────────────────────────────

const SECCIONES = [
    { id: "idea",       numero: "01", titulo: "La Idea",              icon: Lightbulb,    color: "#22d3ee", cita: "Estamos desarrollando un sistema de seguridad residencial disruptivo que utiliza tecnología de microcontroladores para ofrecer protección de alta fidelidad a un costo accesible.", insight: "Disruptivo · Alta fidelidad · Costo accesible" },
    { id: "equipo",     numero: "02", titulo: "Quiénes Somos",        icon: Users,        color: "#a78bfa", cita: "Somos un equipo de emprendedores apasionados por la tecnología y la seguridad electrónica. Combinamos nuestra formación técnica con una visión práctica para resolver problemas cotidianos de seguridad.", insight: "Equipo técnico · Formación técnica · Visión práctica" },
    { id: "problema",   numero: "03", titulo: "El Problema",          icon: AlertTriangle,color: "#fb7185", cita: "Hoy en día, las familias se enfrentan a una inseguridad creciente. Los sistemas de alarma tradicionales son extremadamente costosos, requieren contratos mensuales forzosos o son tan complejos que terminan siendo ineficientes ante una intrusión real.", insight: "Costosos · Contratos forzosos · Ineficientes" },
    { id: "objetivo",   numero: "04", titulo: "Nuestro Objetivo",     icon: Target,       color: "#34d399", cita: "Nuestro objetivo es democratizar la seguridad inteligente, permitiendo que cualquier hogar o pequeño negocio cuente con un sistema de alerta inmediata, autónomo y fácil de gestionar.", insight: "Democratizar · Autónomo · Fácil de gestionar" },
    { id: "resolver",   numero: "05", titulo: "Qué Resolver",         icon: Shield,       color: "#f59e0b", cita: "Queremos eliminar el miedo al robo y la vulnerabilidad, brindando tranquilidad a los propietarios mediante un sistema que no solo suena, sino que actúa y comunica el peligro en tiempo real.", insight: "Eliminar el miedo · Actúa · Tiempo real" },
    { id: "diferencial",numero: "06", titulo: "Por Qué Nosotros",     icon: Zap,          color: "#38bdf8", cita: "A diferencia de las grandes empresas, nos enfocamos en la agilidad y la personalización. Utilizamos hardware como Arduino y módulos GSM que garantizan que el usuario reciba una alerta directa en su celular sin depender de intermediarios.", insight: "Arduino · GSM · Sin intermediarios" },
    { id: "como",       numero: "07", titulo: "Cómo Lo Resolvemos",   icon: Wrench,       color: "#22d3ee", cita: "Lo resolvemos mediante una Alarma Inteligente integrada con sensores de movimiento y apertura, programada para detectar intrusos y notificar al dueño al instante. Es un sistema robusto, escalable y diseñado para ser instalado sin complicaciones técnicas mayores.", insight: "Sensores · Robusta · Escalable" },
    { id: "cta",        numero: "08", titulo: "La Invitación",        icon: PhoneCall,    color: "#a78bfa", cita: "La seguridad de tu hogar no puede esperar. Te invito a conocer más sobre nuestra tecnología y cómo estamos cambiando el juego en la protección patrimonial visitando: alarma-inteligente.vercel.app.", insight: "alarma-inteligente.vercel.app" },
];

const PROPUESTA = [
    { punto: "Arduino Uno R3 + sensores PIR y HC-SR04 integrados", color: "#22d3ee" },
    { punto: "Notificación inmediata vía GSM directo al celular del propietario", color: "#22d3ee" },
    { punto: "Sin contratos mensuales — compra única, sin intermediarios", color: "#34d399" },
    { punto: "Instalación sin complicaciones técnicas mayores", color: "#34d399" },
    { punto: "Costo total del prototipo: Bs. 313 (~USD 45)", color: "#a78bfa" },
    { punto: "Escalable para hogares y pequeños negocios", color: "#a78bfa" },
];

const FASES = [
    { tiempo: "0–10s",  titulo: "Gancho",   desc: "Idea + equipo",             color: "#22d3ee", icon: Lightbulb,    pct: 17 },
    { tiempo: "10–25s", titulo: "Problema", desc: "Inseguridad + costos",       color: "#fb7185", icon: AlertTriangle, pct: 25 },
    { tiempo: "25–45s", titulo: "Solución", desc: "Arduino + GSM + sensores",   color: "#34d399", icon: Wrench,        pct: 33 },
    { tiempo: "45–60s", titulo: "Cierre",   desc: "CTA + demostración",         color: "#a78bfa", icon: PhoneCall,     pct: 25 },
];

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────

export const PitchElevator = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-r { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.2);opacity:0} }
        @keyframes scanline{ 0%{top:-2px} 100%{top:100%} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
      `}</style>

            {/* ══════════════════════════════════════════════════════════════════
                HERO — split layout
            ══════════════════════════════════════════════════════════════════ */}
            <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

                {/* Capas de fondo con parallax */}
                <motion.div style={{ position: "absolute", inset: 0, y: heroY, pointerEvents: "none" }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(34,211,238,0.09) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 100% 50%, rgba(167,139,250,0.07) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 50% 100%, rgba(251,113,133,0.04) 0%, transparent 60%)" }} />
                </motion.div>

                {/* Grid */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.03) 1px,transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

                {/* Scan line */}
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)", animation: "scanline 8s linear infinite", pointerEvents: "none" }} />

                {/* Corner decorations */}
                <div style={{ position: "absolute", top: 28, left: 28, width: 64, height: 64, borderTop: "2px solid rgba(34,211,238,0.4)", borderLeft: "2px solid rgba(34,211,238,0.4)" }} />
                <div style={{ position: "absolute", top: 28, right: 28, width: 64, height: 64, borderTop: "2px solid rgba(167,139,250,0.3)", borderRight: "2px solid rgba(167,139,250,0.3)" }} />
                <div style={{ position: "absolute", bottom: 28, left: 28, width: 64, height: 64, borderBottom: "2px solid rgba(52,211,153,0.2)", borderLeft: "2px solid rgba(52,211,153,0.2)" }} />
                <div style={{ position: "absolute", bottom: 28, right: 28, width: 64, height: 64, borderBottom: "2px solid rgba(34,211,238,0.25)", borderRight: "2px solid rgba(34,211,238,0.25)" }} />

                {/* Pulsos de fondo */}
                {[{ left: "12%", top: "30%", color: "34,211,238", delay: 0 }, { right: "14%", top: "60%", color: "167,139,250", delay: 1.5 }].map((p, i) => {
                    const { color, delay, ...posStyle } = p;
                    return (
                        <div key={i} style={{ position: "absolute", ...(posStyle as React.CSSProperties), pointerEvents: "none" }}>
                            <div style={{ width: 140, height: 140, borderRadius: "50%", border: `1px solid rgba(${color},0.12)`, animation: `pulse-r 3.5s ease-out ${delay}s infinite` }} />
                        </div>
                    );
                })}

                <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "7rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

                    {/* ── Izquierda: texto ── */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "flex", gap: "0.6rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.35rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(6,182,212,0.07)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#67e8f9", letterSpacing: "0.1em" }}>
                                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", display: "inline-block", animation: "blink 1.5s infinite" }} />
                                ETAPA 22 — PITCH ELEVATOR
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.35rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.22)", background: "rgba(167,139,250,0.07)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#c4b5fd", letterSpacing: "0.1em" }}>
                                <Mic size={10} />
                                ~60 SEGUNDOS
                            </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.04, marginBottom: "1.5rem" }}>
                            Pitch{" "}
                            <span style={{ background: "linear-gradient(135deg,#22d3ee 0%,#a78bfa 60%,#fb7185 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 4s linear infinite" }}>
                                Elevator
                            </span>
                            <br />
                            <span style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, color: "#475569" }}>
                                Alarma Inteligente
                            </span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }} style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: 480 }}>
                            Una presentación de <strong style={{ color: "#94a3b8" }}>60 segundos</strong> que condensa el problema, la solución, el diferencial y el llamado a la acción de nuestro sistema de alarma inteligente basado en Arduino.
                        </motion.p>

                        {/* Métricas inline */}
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
                            {[{ label: "Duración", value: "~1 min", color: "#22d3ee", icon: Clock }, { label: "Secciones", value: "8 bloques", color: "#a78bfa", icon: Mic }, { label: "Mercado", value: "Hogares Bolivia", color: "#34d399", icon: Shield }, { label: "Diferencial", value: "Sin contratos", color: "#f59e0b", icon: TrendingUp }].map((m) => {
                                const Icon = m.icon;
                                return (
                                    <div key={m.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1rem", background: `${m.color}07`, border: `1px solid ${m.color}18`, borderRadius: "0.75rem" }}>
                                        <div style={{ width: 32, height: 32, borderRadius: "0.5rem", background: `${m.color}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <Icon size={14} color={m.color} />
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#475569", marginBottom: "0.1rem" }}>{m.label}</div>
                                            <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#e2e8f0" }}>{m.value}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* ── Derecha: big "60s" visual ── */}
                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.15 }} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* Anillos de fondo */}
                        {[220, 300, 380].map((s, i) => (
                            <div key={i} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(34,211,238,${0.08 - i * 0.02})`, animation: `pulse-r ${3 + i * 0.7}s ease-out ${i * 0.9}s infinite` }} />
                        ))}
                        {/* Círculo central */}
                        <div style={{ position: "relative", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(6,182,212,0.04) 60%, transparent 100%)", border: "1px solid rgba(34,211,238,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 80px rgba(34,211,238,0.08), inset 0 0 40px rgba(34,211,238,0.04)" }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "5.5rem", fontWeight: 700, lineHeight: 1, color: "#22d3ee", textShadow: "0 0 40px rgba(34,211,238,0.6)" }}>60</div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#475569", letterSpacing: "0.2em", marginTop: "0.25rem" }}>SEGUNDOS</div>
                            {/* Punto pulsante */}
                            <div style={{ position: "absolute", top: 18, right: 18, width: 10, height: 10, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 12px #22d3ee", animation: "blink 1.8s infinite" }} />
                        </div>
                        {/* Etiquetas flotantes */}
                        {[{ label: "PROBLEMA", deg: -60, color: "#fb7185" }, { label: "SOLUCIÓN", deg: 60, color: "#34d399" }, { label: "EQUIPO", deg: 180, color: "#a78bfa" }].map((fl) => {
                            const rad = (fl.deg * Math.PI) / 180;
                            const r = 160;
                            const x = Math.cos(rad) * r;
                            const y = Math.sin(rad) * r;
                            return (
                                <motion.div key={fl.label} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }} style={{ position: "absolute", left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%,-50%)", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: fl.color, letterSpacing: "0.1em", padding: "0.2rem 0.55rem", borderRadius: "9999px", border: `1px solid ${fl.color}40`, background: `${fl.color}10`, whiteSpace: "nowrap" }}>
                                    {fl.label}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                BARRA DE TIEMPO — 60s
            ══════════════════════════════════════════════════════════════════ */}
            <section style={{ background: "#080f1f", borderTop: "1px solid rgba(34,211,238,0.08)", padding: "3.5rem 2rem" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#334155", letterSpacing: "0.12em", marginBottom: "1.25rem", textAlign: "center" }}>ESTRUCTURA DEL PITCH EN 60 SEGUNDOS</div>
                        {/* Barra segmentada */}
                        <div style={{ display: "flex", height: 10, borderRadius: "9999px", overflow: "hidden", gap: 2, marginBottom: "1.25rem" }}>
                            {FASES.map((f, i) => (
                                <motion.div key={f.titulo} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, delay: i * 0.12 }} viewport={{ once: true }} style={{ flex: f.pct, background: `linear-gradient(90deg,${f.color}cc,${f.color}88)`, transformOrigin: "left", borderRadius: "9999px", boxShadow: `0 0 10px ${f.color}40` }} />
                            ))}
                        </div>
                        {/* Labels */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
                            {FASES.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <motion.div key={f.titulo} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${f.color}14`, border: `1px solid ${f.color}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <Icon size={13} color={f.color} />
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: f.color }}>{f.tiempo}</div>
                                            <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "#e2e8f0" }}>{f.titulo}</div>
                                            <div style={{ fontSize: "0.7rem", color: "#475569" }}>{f.desc}</div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                VIDEO + PROPUESTA — side by side
            ══════════════════════════════════════════════════════════════════ */}
            <section style={{ padding: "7rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "5rem", alignItems: "start" }}>

                    {/* Video vertical con marco premium */}
                    <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ position: "relative" }}>
                        {/* Glow de fondo */}
                        <div style={{ position: "absolute", inset: -24, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,211,238,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
                        {/* Badge LIVE */}
                        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", background: "#0f172a", border: "1px solid rgba(34,211,238,0.3)", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", animation: "blink 1.2s infinite", display: "inline-block" }} />
                            PITCH · EN VIVO
                        </div>
                        {/* Contenedor video */}
                        <div style={{ position: "relative", width: 340, background: "#020817", border: "1px solid rgba(34,211,238,0.2)", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 0 60px rgba(34,211,238,0.1), 0 40px 80px rgba(0,0,0,0.4)", aspectRatio: "9/16", zIndex: 1 }}>
                            {/* Línea top */}
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#22d3ee,transparent)", zIndex: 2 }} />
                            <iframe
                                src="https://www.youtube.com/embed/L8nYa7nvfCI"
                                title="Pitch Elevator — Alarma Inteligente"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                            />
                        </div>
                        {/* Play icon decorativo */}
                        <div style={{ position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", background: "#0f172a", border: "1px solid rgba(167,139,250,0.25)", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a78bfa", letterSpacing: "0.08em" }}>
                            <Play size={9} />
                            youtube · alarma inteligente
                        </div>
                    </motion.div>

                    {/* Propuesta de valor */}
                    <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#22d3ee", letterSpacing: "0.15em", marginBottom: "1rem" }}>// PROPUESTA DE VALOR</div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
                            Lo que hace{" "}
                            <br />
                            <span style={{ color: "#22d3ee" }}>diferente</span>
                            {" "}a nuestra solución
                        </h2>
                        <p style={{ color: "#64748b", lineHeight: 1.85, fontSize: "0.9rem", marginBottom: "2rem" }}>
                            La Alarma Inteligente combina hardware accesible, software autónomo y comunicación directa para brindar seguridad real sin depender de terceros ni contratos.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2.5rem" }}>
                            {PROPUESTA.map((p, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.07 }} viewport={{ once: true }} style={{ display: "flex", gap: "0.85rem", alignItems: "center", padding: "0.85rem 1.1rem", background: "#080f1f", border: `1px solid ${p.color}14`, borderRadius: "0.65rem" }}>
                                    <CheckCircle2 size={15} color={p.color} style={{ flexShrink: 0 }} />
                                    <span style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.55 }}>{p.punto}</span>
                                </motion.div>
                            ))}
                        </div>
                        {/* Cita destacada */}
                        <div style={{ padding: "1.5rem 1.75rem", background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.14)", borderLeft: "4px solid #22d3ee", borderRadius: "0 1rem 1rem 0" }}>
                            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.75, fontStyle: "italic", margin: 0, fontWeight: 600 }}>
                                "La seguridad de tu hogar no puede esperar."
                            </p>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#334155", marginTop: "0.6rem" }}>— Alarma Inteligente · Elevator Pitch</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                GUIÓN — grid de cards
            ══════════════════════════════════════════════════════════════════ */}
            <section style={{ background: "#080f1f", borderTop: "1px solid rgba(34,211,238,0.06)", padding: "7rem 2rem" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#22d3ee", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// GUIÓN COMPLETO</div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.75rem" }}>Las 8 secciones del pitch</h2>
                        <p style={{ color: "#64748b", maxWidth: 480, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
                            Cada bloque está diseñado para captar, convencer y cerrar en menos de 60 segundos.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
                        {SECCIONES.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={s.id}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.07 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6, boxShadow: `0 24px 48px rgba(0,0,0,0.3), 0 0 30px ${s.color}15` }}
                                    style={{ background: "#0f172a", border: `1px solid ${s.color}18`, borderRadius: "1.25rem", padding: "1.75rem 1.5rem", position: "relative", overflow: "hidden", cursor: "default", transition: "box-shadow 0.3s" }}
                                >
                                    {/* Número fantasma */}
                                    <div style={{ position: "absolute", bottom: -12, right: 8, fontFamily: "'Space Mono', monospace", fontSize: "5.5rem", fontWeight: 700, color: `${s.color}08`, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{s.numero}</div>
                                    {/* Glow top */}
                                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${s.color}60,transparent)` }} />

                                    <div style={{ width: 40, height: 40, borderRadius: "0.65rem", background: `${s.color}14`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                                        <Icon size={18} color={s.color} />
                                    </div>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: s.color, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{s.numero}</div>
                                    <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.75rem" }}>{s.titulo}</h3>
                                    <p style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.72, margin: "0 0 1rem" }}>"{s.cita}"</p>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: `${s.color}80`, letterSpacing: "0.06em", borderTop: `1px solid ${s.color}14`, paddingTop: "0.65rem" }}>{s.insight}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════
                CTA FINAL
            ══════════════════════════════════════════════════════════════════ */}
            <section style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ position: "relative", background: "linear-gradient(135deg,rgba(6,182,212,0.07) 0%,rgba(167,139,250,0.05) 50%,rgba(251,113,133,0.04) 100%)", border: "1px solid rgba(34,211,238,0.18)", borderRadius: "1.75rem", padding: "4rem", overflow: "hidden", textAlign: "center" }}>
                    {/* Líneas top/bottom */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#22d3ee,#a78bfa,transparent)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.3),transparent)" }} />
                    {/* Glow central */}
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(6,182,212,0.07)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#67e8f9", letterSpacing: "0.1em", marginBottom: "2rem" }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", display: "inline-block", animation: "blink 1.5s infinite" }} />
                            LLAMADA A LA ACCIÓN
                        </div>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.25rem" }}>
                            ¿Agendamos una{" "}
                            <span style={{ background: "linear-gradient(135deg,#22d3ee,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                demostración
                            </span>
                            ?
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 2.5rem" }}>
                            Conocé más sobre nuestra tecnología y cómo estamos cambiando el juego en la protección patrimonial. La seguridad de tu hogar no puede esperar.
                        </p>

                        {/* URL prominente */}
                        <motion.div whileHover={{ scale: 1.03 }} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.25)", borderRadius: "0.875rem", marginBottom: "1.5rem", cursor: "pointer" }}>
                            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee", animation: "blink 2s infinite" }} />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.95rem", color: "#22d3ee", fontWeight: 700, letterSpacing: "0.04em" }}>alarma-inteligente.vercel.app</span>
                            <ArrowRight size={16} color="#22d3ee" />
                        </motion.div>

                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            {[{ label: "Sistema basado en Arduino", color: "#22d3ee" }, { label: "Notificación GSM al instante", color: "#34d399" }, { label: "Sin contratos ni intermediarios", color: "#a78bfa" }].map((t) => (
                                <span key={t.label} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: t.color, padding: "0.3rem 0.8rem", borderRadius: "9999px", border: `1px solid ${t.color}25`, background: `${t.color}08` }}>{t.label}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5rem 2rem", textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "#e2e8f0" }}>Material de Difusión</h2>
                    <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
                        Infografía completa del proyecto: el problema, la solución y la propuesta de valor para Bolivia.
                    </p>
                    <a href="/material-difusion" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", color: "#fff", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                        Ver Material →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
