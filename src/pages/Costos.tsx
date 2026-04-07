import { motion } from "framer-motion";
import {
    DollarSign,
    TrendingDown,
    Package,
    Calendar,
    CheckCircle,
    AlertTriangle,
    Cpu,
    Wifi,
    Bell,
    Eye,
    Zap,
    BarChart2,
    ShieldCheck,
    Clock,
} from "lucide-react";

// ─── Tipo de cambio referencial ──────────────────────────────────────────────
// 1 USD ≈ Bs. 6.9 (Banco Central de Bolivia, 2025)
const USD_A_BS = 6.9;

// ─── Costos de la competencia ──────────────────────────────────────────────────
// ✏️  EDITA AQUÍ — datos verificados de cada empresa
const COMPETIDORES_COSTO = [
    {
        code: "01",
        nombre: "Ondas AT",
        color: "#f59e0b",
        tipo: "Pago único",
        tipoBadge: "ONE-TIME",
        costoMinBs: 1140,
        costoMaxBs: 2860,
        mensualidadUsd: 0,
        descripcion: "Kits inteligentes de compra directa. Alertas al celular sin mensualidad.",
        marcas: ["Dahua", "Hikvision", "JFL"],
        incluye: [
            "Kit de sensores y panel",
            "App de notificaciones incluida",
            "Sin pago mensual recurrente",
            "Autogestión del sistema",
        ],
        noIncluye: [
            "Instalación técnica profesional",
            "Monitoreo 24/7 por central",
            "Respuesta ante emergencias",
        ],
        ideal: "Si querés comprar el equipo una sola vez y no pagar mensualidades.",
    },
    {
        code: "02",
        nombre: "Inova Bolivia",
        color: "#22d3ee",
        tipo: "Pago único",
        tipoBadge: "ONE-TIME",
        costoMinBs: 1500,
        costoMaxBs: 2500,
        mensualidadUsd: 0,
        descripcion: "Equipos robustos y duraderos con instalación técnica profesional.",
        marcas: ["DSC", "Paradox"],
        incluye: [
            "Hardware de alta durabilidad",
            "Instalación por técnico certificado",
            "Sensores magnéticos y PIR",
            "Panel con teclado LCD",
        ],
        noIncluye: [
            "Conectividad IoT o app remota",
            "Monitoreo por central",
            "Notificaciones push al propietario",
        ],
        ideal: "Si buscás equipos robustos para casa o negocio con instalación profesional.",
    },
    {
        code: "03",
        nombre: "Protel Bolivia",
        color: "#34d399",
        tipo: "Instalación + mensualidad",
        tipoBadge: "SUSCRIPCIÓN",
        costoMinBs: Math.round(30 * USD_A_BS),
        costoMaxBs: Math.round(50 * USD_A_BS),
        costoInstalacionRef: "A cotizar",
        mensualidadUsd: 40,
        descripcion: "Central de seguridad con monitoreo 24/7 y patrullaje en caso de alerta.",
        marcas: ["Equipos propios"],
        incluye: [
            "Monitoreo central 24/7",
            "Despacho de patrulla ante alarma",
            "Botón de pánico en celular",
            "Respuesta coordinada con emergencias",
        ],
        noIncluye: [
            "Equipamiento sin mensualidad",
            "Acceso libre sin contrato",
        ],
        ideal: "Si querés que una central vigile tu casa 24/7 y envíe patrullas en caso de alarma.",
    },
    {
        code: "04",
        nombre: "Ubicar Bolivia",
        color: "#a78bfa",
        tipo: "Mensualidad por cotización",
        tipoBadge: "SUSCRIPCIÓN",
        costoMinBs: null,
        costoMaxBs: null,
        mensualidadUsd: 40,
        descripcion: "Monitoreo de propiedades con infraestructura anti-corte de señal.",
        marcas: ["Plataforma propia"],
        incluye: [
            "Monitoreo de propiedades",
            "Infraestructura anti-corte de señal",
            "Plan mensual configurable",
            "App de visualización remota",
        ],
        noIncluye: [
            "Precio fijo sin cotización",
            "Patrullaje propio",
        ],
        ideal: "Para máxima seguridad y respuesta inmediata con infraestructura robusta.",
    },
];

// ─── Costo de nuestro sistema ──────────────────────────────────────────────────
// ✏️  EDITA AQUÍ — componentes del prototipo con precios referenciales en Bolivia
const COMPONENTES = [
    { nombre: "Arduino Uno R3", cantidad: 1, precioBs: 120, icon: Cpu, color: "#22d3ee" },
    { nombre: "Módulo WiFi ESP8266", cantidad: 1, precioBs: 65, icon: Wifi, color: "#34d399" },
    { nombre: "Sensor PIR HC-SR501", cantidad: 1, precioBs: 35, icon: Eye, color: "#f59e0b" },
    { nombre: "Sensor ultrasónico HC-SR04", cantidad: 1, precioBs: 25, icon: Eye, color: "#f59e0b" },
    { nombre: "Buzzer activo 85 dB", cantidad: 1, precioBs: 15, icon: Bell, color: "#a78bfa" },
    { nombre: "LED de alerta", cantidad: 2, precioBs: 4, icon: Zap, color: "#fb7185" },
    { nombre: "Cables, protoboard y resistencias", cantidad: 1, precioBs: 25, icon: Package, color: "#38bdf8" },
    { nombre: "Carcasa / caja protectora", cantidad: 1, precioBs: 20, icon: Package, color: "#94a3b8" },
];
const TOTAL_NUESTRO_BS = COMPONENTES.reduce((acc, c) => acc + c.precioBs * c.cantidad, 0);
const TOTAL_NUESTRO_USD = (TOTAL_NUESTRO_BS / USD_A_BS).toFixed(0);

// ─── Proyección a largo plazo (años) ─────────────────────────────────────────
const ANOS = [1, 2, 3];
const MENSUALIDAD_PROTEL_BS = Math.round(40 * USD_A_BS);

// ─── Componente ───────────────────────────────────────────────────────────────
export const Costos = () => {
    const maxBarBs = 3000; // escala de la barra visual

    return (
        <div style={{ background: "#020617", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

            {/* ── HERO ──────────────────────────────────────────────────────────── */}
            <section style={{ position: "relative", minHeight: 440, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(52,211,153,0.12) 0%, rgba(2,6,23,1) 70%)" }} />
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(52,211,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
                <div style={{ position: "absolute", top: "20%", right: "8%", opacity: 0.05 }}>
                    <DollarSign size={280} color="#34d399" />
                </div>
                {[
                    { top: 32, left: 32, borderTop: "2px solid #34d399", borderLeft: "2px solid #34d399" },
                    { top: 32, right: 32, borderTop: "2px solid #34d399", borderRight: "2px solid #34d399" },
                    { bottom: 32, left: 32, borderBottom: "2px solid #34d399", borderLeft: "2px solid #34d399" },
                    { bottom: 32, right: 32, borderBottom: "2px solid #34d399", borderRight: "2px solid #34d399" },
                ].map((s, i) => (
                    <div key={i} style={{ position: "absolute", width: 48, height: 48, opacity: 0.35, ...s }} />
                ))}

                <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "5rem 2rem 4rem", maxWidth: 860 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.3rem 1rem", borderRadius: "2rem", border: "1px solid rgba(52,211,153,0.35)", background: "rgba(52,211,153,0.08)", marginBottom: "1.5rem" }}
                    >
                        <BarChart2 size={13} color="#34d399" />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#34d399", letterSpacing: "0.12em" }}>
                            ANÁLISIS DE COSTOS · SECCIÓN 24 · GRUPO DATOS
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1.2rem" }}
                    >
                        Análisis de{" "}
                        <span style={{ color: "#34d399" }}>Costos</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 660, margin: "0 auto" }}
                    >
                        Comparativa económica entre las <strong style={{ color: "#e2e8f0" }}>4 empresas bolivianas</strong> del
                        sector y el costo real de construir nuestro sistema de alarma inteligente con hardware abierto.
                        Tipo de cambio referencial: <strong style={{ color: "#34d399" }}>1 USD = Bs. {USD_A_BS}</strong>.
                    </motion.p>
                </div>
            </section>

            {/* ── RESUMEN RÁPIDO ────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "40px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
                    {[
                        { val: `Bs. ${TOTAL_NUESTRO_BS}`, label: "costo total nuestro sistema", sub: `≈ $${TOTAL_NUESTRO_USD} USD`, color: "#34d399" },
                        { val: "Bs. 1.140", label: "sistema comercial más barato", sub: "Ondas AT · kit básico", color: "#f59e0b" },
                        { val: `${Math.round((1 - TOTAL_NUESTRO_BS / 1140) * 100)}%`, label: "ahorro vs el más económico", sub: "pago único, sin mensualidades", color: "#22d3ee" },
                        { val: `Bs. ${MENSUALIDAD_PROTEL_BS * 12}`, label: "costo anual Protel/Ubicar", sub: "solo en mensualidades ($40/mes)", color: "#a78bfa" },
                    ].map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{ textAlign: "center", padding: "16px 8px" }}
                        >
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.7rem", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}</div>
                            <div style={{ fontSize: "0.65rem", color: s.color, fontWeight: 700, letterSpacing: "0.1em", margin: "6px 0 4px", opacity: 0.7 }}>{s.sub.toUpperCase()}</div>
                            <div style={{ fontSize: "0.78rem", color: "#64748b" }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CARDS DE COSTO POR EMPRESA ────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 48px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#34d399", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>COSTO POR EMPRESA</p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>Desglose de inversión por proveedor</h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>Datos referenciales recopilados de los sitios oficiales de cada empresa.</p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
                    {COMPETIDORES_COSTO.map((c, i) => (
                        <motion.div
                            key={c.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            style={{ background: "#0b1629", border: `1px solid ${c.color}22`, borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 18, transition: "box-shadow 0.3s" }}
                        >
                            {/* Header */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: c.color, fontWeight: 700, letterSpacing: "0.1em" }}>{c.code} · {c.tipoBadge}</span>
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#e2e8f0", margin: "4px 0 4px" }}>{c.nombre}</h3>
                                    <p style={{ fontSize: "0.78rem", color: "#64748b" }}>{c.descripcion}</p>
                                </div>
                                <div style={{ flexShrink: 0, marginLeft: 12 }}>
                                    <div style={{ background: `${c.color}18`, border: `1px solid ${c.color}33`, borderRadius: 10, padding: "8px 12px", textAlign: "center" }}>
                                        <DollarSign size={16} color={c.color} style={{ display: "block", margin: "0 auto 4px" }} />
                                        <span style={{ fontSize: "0.65rem", color: c.color, fontWeight: 700 }}>{c.tipo.toUpperCase().split(" ").join("\n")}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Precio */}
                            <div style={{ background: "#0f172a", border: `1px solid ${c.color}18`, borderRadius: 12, padding: "16px 20px" }}>
                                {c.costoMinBs !== null ? (
                                    <>
                                        <p style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>
                                            {c.mensualidadUsd > 0 ? "MENSUALIDAD REFERENCIAL" : "COSTO DE EQUIPO (PAGO ÚNICO)"}
                                        </p>
                                        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem", fontWeight: 700, color: c.color }}>
                                                Bs. {c.costoMinBs.toLocaleString()}
                                            </span>
                                            {c.costoMinBs !== c.costoMaxBs && (
                                                <>
                                                    <span style={{ color: "#334155", fontSize: "1rem" }}>—</span>
                                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem", fontWeight: 700, color: c.color }}>
                                                        Bs. {c.costoMaxBs!.toLocaleString()}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <p style={{ fontSize: "0.75rem", color: "#475569", marginTop: 4 }}>
                                            ≈ ${(c.costoMinBs / USD_A_BS).toFixed(0)}
                                            {c.costoMinBs !== c.costoMaxBs ? ` – $${(c.costoMaxBs! / USD_A_BS).toFixed(0)} USD` : " USD"}
                                            {c.mensualidadUsd > 0 ? " / mes" : " · pago único"}
                                        </p>
                                        {c.mensualidadUsd > 0 && (
                                            <p style={{ fontSize: "0.72rem", color: "#f59e0b", marginTop: 4 }}>
                                                + costo de instalación inicial: a cotizar
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <div>
                                        <p style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>PRECIO</p>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", fontWeight: 700, color: c.color }}>A cotizar</span>
                                        <p style={{ fontSize: "0.75rem", color: "#475569", marginTop: 4 }}>Plan mensual según requerimientos · Similar a Protel</p>
                                    </div>
                                )}
                            </div>

                            {/* Barra visual de costo */}
                            {c.costoMinBs !== null && (
                                <div>
                                    <p style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>COSTO RELATIVO (vs Bs. {maxBarBs} referencia)</p>
                                    <div style={{ background: "#1e293b", borderRadius: 6, height: 8, overflow: "hidden" }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${Math.min((c.costoMinBs / maxBarBs) * 100, 100)}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            style={{ height: "100%", background: `linear-gradient(90deg, ${c.color}88, ${c.color})`, borderRadius: 6 }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Marcas */}
                            {c.marcas.length > 0 && c.marcas[0] !== "Plataforma propia" && (
                                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                    <span style={{ fontSize: "0.65rem", color: "#475569", alignSelf: "center" }}>MARCAS:</span>
                                    {c.marcas.map((m) => (
                                        <span key={m} style={{ fontSize: "0.72rem", background: "#0f172a", border: "1px solid #1e293b", borderRadius: 6, padding: "2px 8px", color: "#94a3b8" }}>{m}</span>
                                    ))}
                                </div>
                            )}

                            {/* Incluye / No incluye */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                <div>
                                    <p style={{ fontSize: "0.65rem", color: "#34d399", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>INCLUYE</p>
                                    {c.incluye.map((f) => (
                                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
                                            <CheckCircle size={11} color="#34d399" style={{ marginTop: 2, flexShrink: 0 }} />
                                            <span style={{ fontSize: "0.73rem", color: "#cbd5e1", lineHeight: 1.4 }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p style={{ fontSize: "0.65rem", color: "#fb7185", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>NO INCLUYE</p>
                                    {c.noIncluye.map((f) => (
                                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
                                            <AlertTriangle size={11} color="#fb7185" style={{ marginTop: 2, flexShrink: 0 }} />
                                            <span style={{ fontSize: "0.73rem", color: "#94a3b8", lineHeight: 1.4 }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Ideal para */}
                            <div style={{ borderTop: `1px solid ${c.color}18`, paddingTop: 14 }}>
                                <p style={{ fontSize: "0.65rem", color: c.color, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 4 }}>IDEAL PARA</p>
                                <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.5 }}>{c.ideal}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── NUESTRO COSTO DESGLOSADO ──────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "72px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ color: "#22d3ee", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12 }}>NUESTRO SISTEMA</p>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#e2e8f0", marginBottom: 16 }}>
                            Costo real del prototipo
                        </h2>
                        <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}>
                            El sistema de alarma inteligente está construido con componentes electrónicos estándar
                            disponibles en el mercado boliviano. Sin licencias de software, sin contratos de mantenimiento
                            obligatorio y sin hardware propietario.
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 24 }}>
                            El costo total del prototipo funcional es de{" "}
                            <strong style={{ color: "#34d399", fontFamily: "'Space Mono', monospace" }}>
                                Bs. {TOTAL_NUESTRO_BS}
                            </strong>{" "}
                            (≈ <strong style={{ color: "#34d399" }}>${TOTAL_NUESTRO_USD} USD</strong>), lo que
                            representa una fracción del costo de cualquier alternativa comercial boliviana.
                        </p>

                        {/* Total destacado */}
                        <div style={{ background: "#0b1629", border: "1px solid #34d39933", borderRadius: 14, padding: "20px 24px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 700, letterSpacing: "0.08em" }}>COSTO TOTAL DEL PROTOTIPO</span>
                                <ShieldCheck size={18} color="#34d399" />
                            </div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2.2rem", fontWeight: 700, color: "#34d399" }}>
                                Bs. {TOTAL_NUESTRO_BS}
                            </div>
                            <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: 4 }}>
                                ≈ ${TOTAL_NUESTRO_USD} USD · Pago único · Sin mensualidades
                            </div>
                            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                {["Sin contrato", "Código abierto", "Sin licencias"].map((tag) => (
                                    <span key={tag} style={{ fontSize: "0.7rem", background: "#34d39918", border: "1px solid #34d39933", borderRadius: 6, padding: "3px 10px", color: "#34d399" }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Lista de componentes */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 12 }}>
                            COMPONENTES DEL SISTEMA
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {COMPONENTES.map((comp, i) => {
                                const Icon = comp.icon;
                                return (
                                    <motion.div
                                        key={comp.nombre}
                                        initial={{ opacity: 0, x: 16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.35, delay: i * 0.06 }}
                                        viewport={{ once: true }}
                                        style={{ display: "flex", alignItems: "center", gap: 12, background: "#0b1629", border: "1px solid #1e293b", borderRadius: 10, padding: "12px 16px" }}
                                    >
                                        <div style={{ width: 32, height: 32, borderRadius: 8, background: `${comp.color}18`, border: `1px solid ${comp.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <Icon size={14} color={comp.color} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: "0.82rem", color: "#e2e8f0", fontWeight: 600 }}>{comp.nombre}</div>
                                            {comp.cantidad > 1 && (
                                                <div style={{ fontSize: "0.68rem", color: "#475569" }}>×{comp.cantidad} unidades</div>
                                            )}
                                        </div>
                                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.88rem", color: comp.color, fontWeight: 700 }}>
                                                Bs. {(comp.precioBs * comp.cantidad).toLocaleString()}
                                            </div>
                                            {comp.cantidad > 1 && (
                                                <div style={{ fontSize: "0.65rem", color: "#334155" }}>Bs. {comp.precioBs} c/u</div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Total */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0f172a", border: "1px solid #34d39933", borderRadius: 10, padding: "14px 16px", marginTop: 4 }}>
                                <span style={{ fontSize: "0.85rem", color: "#e2e8f0", fontWeight: 700 }}>TOTAL</span>
                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", color: "#34d399", fontWeight: 700 }}>
                                    Bs. {TOTAL_NUESTRO_BS}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── COMPARATIVA DE BARRAS ─────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>COMPARATIVA VISUAL</p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>Costo de entrada por alternativa</h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                        Inversión inicial mínima en bolivianos. Los servicios de suscripción muestran el costo mensual × 12 (primer año).
                    </p>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {[
                        { label: "Nuestro sistema", sub: "Pago único · Hardware abierto", bs: TOTAL_NUESTRO_BS, color: "#34d399", highlight: true },
                        { label: "Ondas AT", sub: "Pago único · Kit básico", bs: 1140, color: "#f59e0b", highlight: false },
                        { label: "Inova Bolivia", sub: "Pago único · Sistema base", bs: 1500, color: "#22d3ee", highlight: false },
                        { label: "Protel / Ubicar", sub: "Suscripción · Mensualidad × 12 meses ($40/mes)", bs: MENSUALIDAD_PROTEL_BS * 12, color: "#a78bfa", highlight: false },
                    ].map((item, i) => {
                        const MAX_BS = MENSUALIDAD_PROTEL_BS * 12 + 200;
                        const pct = Math.min((item.bs / MAX_BS) * 100, 100);
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    background: item.highlight ? "#0b2218" : "#0b1629",
                                    border: `1px solid ${item.color}${item.highlight ? "44" : "22"}`,
                                    borderRadius: 12,
                                    padding: "20px 24px",
                                    boxShadow: item.highlight ? `0 0 24px ${item.color}18` : "none",
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            {item.highlight && <TrendingDown size={15} color={item.color} />}
                                            <span style={{ fontSize: "0.92rem", fontWeight: 700, color: item.highlight ? item.color : "#e2e8f0" }}>{item.label}</span>
                                            {item.highlight && (
                                                <span style={{ fontSize: "0.65rem", background: `${item.color}22`, border: `1px solid ${item.color}44`, borderRadius: 6, padding: "2px 8px", color: item.color, fontWeight: 700 }}>
                                                    MÁS ECONÓMICO
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ fontSize: "0.73rem", color: "#475569", marginTop: 2 }}>{item.sub}</div>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", fontWeight: 700, color: item.color }}>
                                            Bs. {item.bs.toLocaleString()}
                                        </div>
                                        <div style={{ fontSize: "0.7rem", color: "#475569" }}>≈ ${(item.bs / USD_A_BS).toFixed(0)} USD</div>
                                    </div>
                                </div>
                                <div style={{ background: "#1e293b", borderRadius: 6, height: 10, overflow: "hidden" }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${pct}%` }}
                                        transition={{ duration: 0.9, delay: i * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                        style={{ height: "100%", background: `linear-gradient(90deg, ${item.color}66, ${item.color})`, borderRadius: 6 }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── PROYECCIÓN A LARGO PLAZO ──────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "72px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: 48 }}
                    >
                        <p style={{ color: "#a78bfa", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>PROYECCIÓN TEMPORAL</p>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>Costo acumulado a 1, 2 y 3 años</h2>
                        <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                            Para los servicios de suscripción, el costo crece cada mes. Para los sistemas de pago único, el costo queda fijo desde el día 1.
                        </p>
                    </motion.div>

                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid #1e293b" }}>
                                    <th style={{ textAlign: "left", padding: "10px 16px", fontSize: "0.7rem", color: "#475569", fontWeight: 700, letterSpacing: "0.08em" }}>ALTERNATIVA</th>
                                    <th style={{ textAlign: "left", padding: "10px 16px", fontSize: "0.7rem", color: "#475569", fontWeight: 700, letterSpacing: "0.08em" }}>TIPO</th>
                                    {ANOS.map((a) => (
                                        <th key={a} style={{ textAlign: "right", padding: "10px 16px", fontSize: "0.7rem", color: "#475569", fontWeight: 700, letterSpacing: "0.08em" }}>
                                            AÑO {a}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Fila nuestro sistema */}
                                {[
                                    { nombre: "Nuestro sistema", color: "#34d399", tipo: "Pago único", costosPorAno: ANOS.map(() => TOTAL_NUESTRO_BS), highlight: true },
                                    { nombre: "Ondas AT", color: "#f59e0b", tipo: "Pago único", costosPorAno: ANOS.map(() => 1140), highlight: false },
                                    { nombre: "Inova Bolivia", color: "#22d3ee", tipo: "Pago único", costosPorAno: ANOS.map(() => 1500), highlight: false },
                                    { nombre: "Protel / Ubicar", color: "#a78bfa", tipo: "Suscripción", costosPorAno: ANOS.map((a) => MENSUALIDAD_PROTEL_BS * 12 * a), highlight: false },
                                ].map((row, ri) => (
                                    <motion.tr
                                        key={row.nombre}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: ri * 0.07 }}
                                        viewport={{ once: true }}
                                        style={{ background: row.highlight ? "#0b2218" : ri % 2 === 0 ? "#0b1629" : "transparent", borderBottom: "1px solid #1e293b10" }}
                                    >
                                        <td style={{ padding: "14px 16px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: row.color, flexShrink: 0 }} />
                                                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: row.highlight ? row.color : "#e2e8f0" }}>{row.nombre}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: "14px 16px" }}>
                                            <span style={{ fontSize: "0.72rem", background: `${row.color}14`, border: `1px solid ${row.color}33`, borderRadius: 6, padding: "3px 8px", color: row.color, fontWeight: 700 }}>
                                                {row.tipo.toUpperCase()}
                                            </span>
                                        </td>
                                        {row.costosPorAno.map((bs, ci) => (
                                            <td key={ci} style={{ padding: "14px 16px", textAlign: "right" }}>
                                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.9rem", fontWeight: 700, color: row.highlight ? row.color : "#e2e8f0" }}>
                                                    Bs. {bs.toLocaleString()}
                                                </div>
                                                <div style={{ fontSize: "0.65rem", color: "#475569" }}>${(bs / USD_A_BS).toFixed(0)} USD</div>
                                            </td>
                                        ))}
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Insight */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        style={{ marginTop: 32, background: "#0b1629", border: "1px solid #a78bfa22", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}
                    >
                        <Clock size={18} color="#a78bfa" style={{ flexShrink: 0, marginTop: 2 }} />
                        <div>
                            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#e2e8f0", marginBottom: 4 }}>
                                A los 3 años, Protel/Ubicar costará ~{Math.round(MENSUALIDAD_PROTEL_BS * 12 * 3 / TOTAL_NUESTRO_BS)}× más que nuestro sistema
                            </p>
                            <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.6 }}>
                                Con una mensualidad de $40 USD, en 3 años un servicio de suscripción acumula{" "}
                                <strong style={{ color: "#a78bfa" }}>Bs. {(MENSUALIDAD_PROTEL_BS * 36).toLocaleString()}</strong> en pagos recurrentes,
                                sin contar el costo de instalación inicial. Nuestro sistema se mantiene en{" "}
                                <strong style={{ color: "#34d399" }}>Bs. {TOTAL_NUESTRO_BS}</strong> desde el día uno.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CONCLUSIONES ──────────────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 96px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#fb7185", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>CONCLUSIONES</p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>¿Qué nos dice el análisis de costos?</h2>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
                    {[
                        {
                            icon: TrendingDown,
                            color: "#34d399",
                            titulo: "Brecha de precio de 3.6×",
                            texto: `El sistema más barato del mercado (Ondas AT, Bs. 1.140) cuesta 3.6 veces más que nuestro prototipo (Bs. ${TOTAL_NUESTRO_BS}). Esta diferencia es la principal ventaja competitiva para el segmento residencial de bajo ingreso en Bolivia.`,
                        },
                        {
                            icon: Calendar,
                            color: "#a78bfa",
                            titulo: "Suscripción vs pago único",
                            texto: `Los servicios de monitoreo (Protel, Ubicar) acumulan Bs. ${(MENSUALIDAD_PROTEL_BS * 12).toLocaleString()} en el primer año solo en mensualidades. Nuestro sistema elimina este costo recurrente porque funciona de forma autónoma sin central de monitoreo.`,
                        },
                        {
                            icon: ShieldCheck,
                            color: "#22d3ee",
                            titulo: "Si querés ahorrar: Ondas AT primero",
                            texto: "Para quien no quiera construir su propio sistema, Ondas AT es la opción más recomendable del mercado: pago único, sin mensualidades, con notificaciones al celular incluidas. Es la referencia comercial más cercana a lo que propone nuestro proyecto.",
                        },
                        {
                            icon: AlertTriangle,
                            color: "#f59e0b",
                            titulo: "Limitación honesta del prototipo",
                            texto: "Nuestro sistema no incluye monitoreo centralizado, patrullaje físico ni soporte técnico profesional. Para instituciones o negocios que requieran estos servicios, Protel sigue siendo la referencia líder en el mercado boliviano.",
                        },
                    ].map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <motion.div
                                key={d.titulo}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                style={{ background: "#0b1629", border: `1px solid ${d.color}22`, borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}
                            >
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${d.color}18`, border: `1px solid ${d.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Icon size={20} color={d.color} />
                                </div>
                                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0" }}>{d.titulo}</h3>
                                <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.65 }}>{d.texto}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
