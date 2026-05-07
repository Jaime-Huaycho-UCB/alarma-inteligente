import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    BarChart2,
    Users,
    ShieldCheck,
    CreditCard,
    TrendingUp,
    AlertCircle,
    Lightbulb,
    FileSpreadsheet,
    PieChart,
    Layers,
    ChevronRight,
    CheckCircle,
} from "lucide-react";

import tableau1 from "../assets/tableau_grafico1.png";
import tableau2 from "../assets/tableau_grafico2.png";
import tableau3 from "../assets/tableau_grafico3.png";

// ─── Metadatos de la encuesta ─────────────────────────────────────────────────
const encuestaMeta = [
    { label: "Herramienta de recopilación", valor: "Google Forms" },
    { label: "Total de respuestas", valor: "51 respuestas" },
    { label: "Herramienta de visualización", valor: "Tableau Public" },
    { label: "Nombre del archivo", valor: "Encuesta de sistema de alarma inteligente" },
    { label: "Variables analizadas", valor: "Género, edad, tipo de ingreso, método de pago, confianza" },
    { label: "Tipo de encuesta", valor: "Cuantitativa · Formulario estructurado" },
];

// ─── Preguntas inferidas de la encuesta ──────────────────────────────────────
const preguntasEncuesta = [
    {
        num: "01",
        pregunta: "¿Cuál es tu género?",
        tipo: "Opción múltiple",
        color: "#22d3ee",
        opciones: ["Masculino", "Femenino"],
    },
    {
        num: "02",
        pregunta: "¿Cuál es tu rango de edad?",
        tipo: "Opción múltiple",
        color: "#f59e0b",
        opciones: ["Menor a 20 años", "De 21 a 23 años", "Mayor a 23 años"],
    },
    {
        num: "03",
        pregunta: "¿Cuál es tu tipo de ingreso?",
        tipo: "Opción múltiple",
        color: "#34d399",
        opciones: ["Dependiente", "Independiente", "Sin ingreso propio"],
    },
    {
        num: "04",
        pregunta: "¿Confiarías en un sistema de alarma desarrollado localmente?",
        tipo: "Opción múltiple",
        color: "#a78bfa",
        opciones: [
            "Sí, confío en el desarrollo local y soporte técnico cercano",
            "Solo si cuenta con una certificación de garantía",
            "Quizás, si el precio es significativamente menor",
        ],
    },
    {
        num: "05",
        pregunta: "¿Qué método de pago usarías para adquirir el sistema?",
        tipo: "Opción múltiple",
        color: "#fb7185",
        opciones: ["Efectivo", "Tarjeta de crédito/débito", "Transferencia bancaria", "Cuotas / financiamiento"],
    },
];

// ─── Hallazgos gráfico 1 ──────────────────────────────────────────────────────
const hallazgos1 = [
    {
        color: "#22d3ee",
        titulo: "Hombres: mayoría confía en desarrollo local",
        texto:
            "El bloque más grande del sector masculino corresponde a 'Sí, confío en el desarrollo local y soporte técnico cercano'. Esto indica que el público masculino valora la cercanía del soporte más que la certificación formal.",
    },
    {
        color: "#1d4ed8",
        titulo: "Mujeres: priorizan certificación",
        texto:
            "En el sector femenino, el bloque dominante es 'Solo si cuenta con una certificación de garantía'. Las mujeres demuestran mayor exigencia en validación técnica antes de confiar en un producto nuevo.",
    },
    {
        color: "#34d399",
        titulo: "El precio como barrera secundaria",
        texto:
            "'Quizás, si el precio es significativamente menor' aparece como el bloque más pequeño en ambos géneros. La sensibilidad al precio existe pero no es la objeción principal para ningún segmento.",
    },
    {
        color: "#f59e0b",
        titulo: "Implicación para el proyecto",
        texto:
            "La estrategia de mercado debe diferenciar el mensaje: para hombres, enfatizar soporte técnico local. Para mujeres, priorizar certificación y garantías. Ambos segmentos son receptivos al producto.",
    },
];

// ─── Hallazgos gráfico 2 ──────────────────────────────────────────────────────
const hallazgos2 = [
    {
        color: "#a78bfa",
        titulo: "Efectivo domina en jóvenes menores de 20",
        texto:
            "Los respondentes menores de 20 años, que mayormente no tienen ingreso propio, muestran preferencia por efectivo. Esto sugiere que el pago lo haría un familiar, por lo que la presentación del producto debe dirigirse también a padres.",
    },
    {
        color: "#22d3ee",
        titulo: "Segmentos con ingreso prefieren transferencia",
        texto:
            "Los grupos con ingreso dependiente o independiente y edades entre 21 y 23+ muestran mayor afinidad por transferencia bancaria y cuotas, reflejando mayor acceso a servicios financieros.",
    },
    {
        color: "#34d399",
        titulo: "Cuotas: opción relevante para adultos",
        texto:
            "El financiamiento en cuotas aparece con mayor frecuencia en respondentes mayores de 23 con ingreso. Ofrecer esta modalidad de pago podría ampliar el alcance del producto a segmentos con mayor poder adquisitivo.",
    },
    {
        color: "#fb7185",
        titulo: "Distribución equilibrada por género",
        texto:
            "No se observan diferencias marcadas en preferencia de pago entre hombres y mujeres. El método de pago parece estar determinado principalmente por la edad y el tipo de ingreso, no por el género.",
    },
];

// ─── Hallazgos gráfico 3 ──────────────────────────────────────────────────────
const hallazgos3 = [
    {
        color: "#22d3ee",
        titulo: "Menor a 20: grupo mayoritario",
        texto:
            "Con 10 respuestas en ambos géneros, el grupo de menores de 20 años es el más representado. Esto indica que la muestra tiene una composición principalmente joven, probablemente estudiantes de secundaria o primer año universitario.",
    },
    {
        color: "#f59e0b",
        titulo: "Mayor a 23: segunda mayoría",
        texto:
            "Con 9 respuestas masculinas y 8 femeninas, el grupo mayor de 23 tiene buena representación. Este segmento es el más relevante para decisiones de compra, al tener más probabilidad de tener ingreso propio.",
    },
    {
        color: "#a78bfa",
        titulo: "De 21 a 23: menor representación",
        texto:
            "Con 7 respuestas por género, este grupo etario está menos representado en la muestra. Es un segmento universitario activo que podría estar subrepresentado en el análisis.",
    },
    {
        color: "#34d399",
        titulo: "Paridad de género en la muestra",
        texto:
            "La distribución entre hombres y mujeres es muy equilibrada en todos los rangos de edad. Esto da validez estadística a los cruces de género realizados en los otros gráficos.",
    },
];

// ─── Conclusiones del análisis ────────────────────────────────────────────────
const conclusiones = [
    {
        icon: ShieldCheck,
        color: "#22d3ee",
        titulo: "Alta receptividad al producto",
        texto:
            "La mayoría de respondentes expresó algún nivel de disposición a adquirir el sistema. Ninguna de las opciones de confianza fue completamente negativa, lo que valida la demanda del producto en el mercado objetivo.",
    },
    {
        icon: Users,
        color: "#a78bfa",
        titulo: "Mercado joven y sensible al soporte",
        texto:
            "El perfil dominante es joven (< 20 años) y valora el soporte técnico local. Esto es una ventaja competitiva directa para el proyecto, ya que el equipo puede ofrecer atención personalizada a diferencia de marcas importadas.",
    },
    {
        icon: CreditCard,
        color: "#34d399",
        titulo: "Efectivo como método principal",
        texto:
            "La preferencia por efectivo en el segmento joven indica que el precio accesible (< $50 USD) es una decisión estratégica correcta. Barreras de acceso financiero refuerzan la necesidad de mantener bajo costo.",
    },
    {
        icon: TrendingUp,
        color: "#f59e0b",
        titulo: "Certificación como palanca de conversión",
        texto:
            "Un porcentaje significativo condicionaría su compra a la existencia de certificación. Incluir una garantía documentada en el producto podría convertir a los indecisos en compradores confirmados.",
    },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const Tableau = () => {
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
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 70%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(167,139,250,0.06) 0%, transparent 60%)" }} />
                </motion.div>
                {/* Grid bg */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none", zIndex: 1 }} />
                {/* Scan line */}
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)", animation: "scan 6s linear infinite", pointerEvents: "none", zIndex: 1 }} />
                {/* Corner decorations */}
                <div style={{ position: "absolute", top: 32, left: 32, width: 56, height: 56, borderTop: "2px solid rgba(245,158,11,0.35)", borderLeft: "2px solid rgba(245,158,11,0.35)", zIndex: 1 }} />
                <div style={{ position: "absolute", top: 32, right: 32, width: 56, height: 56, borderTop: "2px solid rgba(34,211,238,0.25)", borderRight: "2px solid rgba(34,211,238,0.25)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 32, left: 32, width: 56, height: 56, borderBottom: "2px solid rgba(52,211,153,0.2)", borderLeft: "2px solid rgba(52,211,153,0.2)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 32, right: 32, width: 56, height: 56, borderBottom: "2px solid rgba(245,158,11,0.2)", borderRight: "2px solid rgba(245,158,11,0.2)", zIndex: 1 }} />
                <div style={{ position: "absolute", top: "28%", right: "9%", opacity: 0.04, zIndex: 1 }}>
                    <BarChart2 size={220} color="#f59e0b" />
                </div>

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
                            borderRadius: "2rem",
                            border: "1px solid rgba(245,158,11,0.35)",
                            background: "rgba(245,158,11,0.08)",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <PieChart size={13} color="#f59e0b" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.7rem",
                                color: "#f59e0b",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                            }}
                        >
                            Tableau · Encuesta · 51 respuestas · Sección 22
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1.2rem" }}
                    >
                        Análisis de encuesta con{" "}
                        <span style={{ color: "#f59e0b" }}>Tableau</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 660, margin: "0 auto" }}
                    >
                        Visualización de{" "}
                        <strong style={{ color: "#e2e8f0" }}>51 respuestas</strong> recopiladas mediante Google Forms
                        sobre el sistema de alarma inteligente, procesadas y graficadas en Tableau Public para
                        identificar patrones de mercado.
                    </motion.p>
                </div>
            </section>

            {/* ── ¿QUÉ ES TABLEAU? ─────────────────────────────────────────────── */}
            <section style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2rem",
                        alignItems: "start",
                    }}
                >
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                            <div style={{ width: 3, height: 22, background: "#f59e0b", borderRadius: 2 }} />
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                                ¿Qué es Tableau?
                            </h2>
                        </div>
                        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1rem" }}>
                            Tableau es una plataforma de{" "}
                            <strong style={{ color: "#e2e8f0" }}>inteligencia de negocios y visualización de datos</strong>{" "}
                            desarrollada por Salesforce. Permite conectar datos de múltiples fuentes (Excel, Google
                            Sheets, bases de datos, APIs) y construir dashboards interactivos sin necesidad de
                            programar.
                        </p>
                        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1rem" }}>
                            Su motor de visualización permite crear gráficos complejos (treemaps, scatter plots,
                            mapas geográficos, gráficos de barras apiladas) con arrastrar y soltar. Es ampliamente
                            usado en análisis de mercado, investigación académica y toma de decisiones empresariales.
                        </p>
                        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.93rem" }}>
                            En este proyecto, se utilizó{" "}
                            <strong style={{ color: "#f59e0b" }}>Tableau Public</strong> (versión gratuita) para
                            importar el Excel exportado de Google Forms y generar las visualizaciones que se
                            presentan a continuación.
                        </p>
                    </div>

                    {/* Tabla de metadatos */}
                    <div
                        style={{
                            background: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "1rem",
                            overflow: "hidden",
                        }}
                    >
                        {encuestaMeta.map((m, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.2rem",
                                    padding: "0.9rem 1.2rem",
                                    borderBottom: i < encuestaMeta.length - 1 ? "1px solid #1e293b" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.72rem",
                                        fontFamily: "'Space Mono', monospace",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.07em",
                                    }}
                                >
                                    {m.label}
                                </span>
                                <span style={{ color: "#e2e8f0", fontSize: "0.87rem", fontWeight: 600 }}>
                                    {m.valor}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── DETALLE DE LA ENCUESTA ────────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    borderTop: "1px solid #1e293b",
                    borderBottom: "1px solid #1e293b",
                    padding: "3rem 2rem",
                }}
            >
                <div style={{ maxWidth: 960, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: "2rem" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                            <FileSpreadsheet size={18} color="#f59e0b" />
                            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, margin: 0 }}>
                                Estructura de la encuesta
                            </h2>
                        </div>
                        <p style={{ color: "#64748b", fontSize: "0.88rem" }}>
                            Preguntas del formulario Google Forms · Excel exportado con 51 filas de respuestas
                        </p>
                    </motion.div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        {preguntasEncuesta.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0f172a",
                                    border: `1px solid ${p.color}22`,
                                    borderRadius: "0.9rem",
                                    padding: "1.1rem 1.3rem",
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.75rem",
                                        color: p.color,
                                        fontWeight: 700,
                                        minWidth: 28,
                                        marginTop: "0.15rem",
                                    }}
                                >
                                    {p.num}
                                </span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                                        <p style={{ fontWeight: 700, color: "#e2e8f0", margin: 0, fontSize: "0.92rem" }}>
                                            {p.pregunta}
                                        </p>
                                        <span
                                            style={{
                                                background: `${p.color}14`,
                                                border: `1px solid ${p.color}30`,
                                                color: p.color,
                                                borderRadius: "1rem",
                                                padding: "0.1rem 0.6rem",
                                                fontSize: "0.68rem",
                                                fontFamily: "'Space Mono', monospace",
                                            }}
                                        >
                                            {p.tipo}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                        {p.opciones.map((o) => (
                                            <div
                                                key={o}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.35rem",
                                                    color: "#64748b",
                                                    fontSize: "0.78rem",
                                                }}
                                            >
                                                <ChevronRight size={11} color={p.color} />
                                                {o}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Nota del Excel */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: "flex",
                            gap: "0.8rem",
                            alignItems: "flex-start",
                            background: "rgba(245,158,11,0.06)",
                            border: "1px solid rgba(245,158,11,0.2)",
                            borderRadius: "0.8rem",
                            padding: "1rem 1.2rem",
                            marginTop: "1.2rem",
                        }}
                    >
                        <AlertCircle size={15} color="#f59e0b" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                        <p style={{ color: "#f59e0b", fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}>
                            <strong>Sobre el archivo Excel:</strong> El archivo{" "}
                            <em>"Encuesta de sistema de alarma inteligente (Respuestas).xlsx"</em> es la exportación
                            directa de Google Forms con las 51 respuestas. Cada fila representa un respondente y
                            cada columna una pregunta del formulario. Este archivo fue importado directamente a
                            Tableau para generar los gráficos de esta sección.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* ── GRÁFICO 1: TREEMAP CONFIANZA ─────────────────────────────────── */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section style={{ maxWidth: 960, margin: "0 auto", padding: "3.5rem 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: "2rem" }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(34,211,238,0.08)",
                            border: "1px solid rgba(34,211,238,0.25)",
                            borderRadius: "2rem",
                            padding: "0.25rem 0.9rem",
                            marginBottom: "0.8rem",
                        }}
                    >
                        <Layers size={12} color="#22d3ee" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.68rem",
                                color: "#22d3ee",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Gráfico 1 · Treemap · Confianza en el producto por género
                        </span>
                    </div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.4rem" }}>
                        ¿Confiarías en un sistema desarrollado localmente?
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>
                        Área de cada bloque proporcional al número de respuestas · Segmentado por Género
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        borderRadius: "1.2rem",
                        overflow: "hidden",
                        border: "1px solid #1e293b",
                        marginBottom: "2rem",
                        boxShadow: "0 0 40px rgba(34,211,238,0.06)",
                        background: "#0f172a",
                    }}
                >
                    <img
                        src={tableau1}
                        alt="Tableau Treemap - Confianza en sistema de alarma local por género"
                        style={{ width: "100%", display: "block" }}
                    />
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {hallazgos1.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${h.color}22`,
                                borderRadius: "0.9rem",
                                padding: "1.2rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: h.color,
                                    marginBottom: "0.6rem",
                                    boxShadow: `0 0 8px ${h.color}`,
                                }}
                            />
                            <p style={{ fontWeight: 700, color: h.color, fontSize: "0.85rem", margin: "0 0 0.5rem" }}>
                                {h.titulo}
                            </p>
                            <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
                                {h.texto}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* ── GRÁFICO 2: BARRAS HORIZONTALES MÉTODO DE PAGO ────────────────── */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section
                style={{
                    background: "#080f1f",
                    borderTop: "1px solid #1e293b",
                    borderBottom: "1px solid #1e293b",
                    padding: "3.5rem 2rem",
                }}
            >
                <div style={{ maxWidth: 960, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: "2rem" }}
                    >
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "rgba(167,139,250,0.08)",
                                border: "1px solid rgba(167,139,250,0.25)",
                                borderRadius: "2rem",
                                padding: "0.25rem 0.9rem",
                                marginBottom: "0.8rem",
                            }}
                        >
                            <BarChart2 size={12} color="#a78bfa" />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.68rem",
                                    color: "#a78bfa",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Gráfico 2 · Barras horizontales · Método de pago × Edad × Género × Ingreso
                            </span>
                        </div>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.4rem" }}>
                            ¿Qué método de pago usarías?
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>
                            Cruce de variables: Edad · Tipo de ingreso · Género · Preferencia de método de pago
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            borderRadius: "1.2rem",
                            overflow: "hidden",
                            border: "1px solid #1e293b",
                            marginBottom: "2rem",
                            boxShadow: "0 0 40px rgba(167,139,250,0.05)",
                            background: "#ffffff",
                        }}
                    >
                        <img
                            src={tableau2}
                            alt="Tableau barras horizontales - Método de pago por edad, ingreso y género"
                            style={{ width: "100%", display: "block" }}
                        />
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {hallazgos2.map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0f172a",
                                    border: `1px solid ${h.color}22`,
                                    borderRadius: "0.9rem",
                                    padding: "1.2rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: h.color,
                                        marginBottom: "0.6rem",
                                        boxShadow: `0 0 8px ${h.color}`,
                                    }}
                                />
                                <p style={{ fontWeight: 700, color: h.color, fontSize: "0.85rem", margin: "0 0 0.5rem" }}>
                                    {h.titulo}
                                </p>
                                <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
                                    {h.texto}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* ── GRÁFICO 3: BARRAS AGRUPADAS GÉNERO / EDAD ────────────────────── */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section style={{ maxWidth: 960, margin: "0 auto", padding: "3.5rem 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: "2rem" }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(52,211,153,0.08)",
                            border: "1px solid rgba(52,211,153,0.25)",
                            borderRadius: "2rem",
                            padding: "0.25rem 0.9rem",
                            marginBottom: "0.8rem",
                        }}
                    >
                        <Users size={12} color="#34d399" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.68rem",
                                color: "#34d399",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Gráfico 3 · Barras agrupadas · Distribución demográfica de la muestra
                        </span>
                    </div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.4rem" }}>
                        Distribución por género y edad
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>
                        Número de respondentes por rango etario · Segmentado por género (Femenino / Masculino)
                    </p>
                </motion.div>

                {/* Resumen numérico */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: "0.8rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    {[
                        { edad: "< 20 años", f: 10, m: 10, color: "#22d3ee" },
                        { edad: "21 – 23 años", f: 7, m: 7, color: "#f59e0b" },
                        { edad: "> 23 años", f: 8, m: 9, color: "#a78bfa" },
                    ].map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${r.color}22`,
                                borderRadius: "0.8rem",
                                padding: "1rem",
                                textAlign: "center",
                            }}
                        >
                            <p style={{ fontFamily: "'Space Mono', monospace", color: r.color, fontSize: "0.7rem", margin: "0 0 0.5rem" }}>
                                {r.edad}
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                                <div>
                                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#e2e8f0", lineHeight: 1 }}>{r.f}</div>
                                    <div style={{ fontSize: "0.65rem", color: "#64748b" }}>Fem.</div>
                                </div>
                                <div style={{ width: 1, background: "#1e293b" }} />
                                <div>
                                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#e2e8f0", lineHeight: 1 }}>{r.m}</div>
                                    <div style={{ fontSize: "0.65rem", color: "#64748b" }}>Masc.</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        borderRadius: "1.2rem",
                        overflow: "hidden",
                        border: "1px solid #1e293b",
                        marginBottom: "2rem",
                        boxShadow: "0 0 40px rgba(52,211,153,0.05)",
                        background: "#ffffff",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={tableau3}
                        alt="Tableau barras agrupadas - Distribución por género y edad"
                        style={{ maxWidth: 500, width: "100%", display: "block" }}
                    />
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {hallazgos3.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${h.color}22`,
                                borderRadius: "0.9rem",
                                padding: "1.2rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: h.color,
                                    marginBottom: "0.6rem",
                                    boxShadow: `0 0 8px ${h.color}`,
                                }}
                            />
                            <p style={{ fontWeight: 700, color: h.color, fontSize: "0.85rem", margin: "0 0 0.5rem" }}>
                                {h.titulo}
                            </p>
                            <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
                                {h.texto}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CONCLUSIONES GENERALES ────────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    borderTop: "1px solid #1e293b",
                    padding: "3.5rem 2rem",
                }}
            >
                <div style={{ maxWidth: 960, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: "2rem" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                            <div style={{ width: 3, height: 22, background: "#f59e0b", borderRadius: 2 }} />
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                                Conclusiones del análisis
                            </h2>
                        </div>
                        <p style={{ color: "#64748b", fontSize: "0.88rem" }}>
                            Lo que los datos de la encuesta dicen sobre la viabilidad del proyecto
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: "1.2rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {conclusiones.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    style={{
                                        background: "#0f172a",
                                        border: `1px solid ${c.color}22`,
                                        borderRadius: "1rem",
                                        padding: "1.5rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "0.7rem",
                                            background: `${c.color}15`,
                                            border: `1px solid ${c.color}33`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <Icon size={20} color={c.color} />
                                    </div>
                                    <p style={{ fontWeight: 700, color: "#e2e8f0", margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
                                        {c.titulo}
                                    </p>
                                    <p style={{ color: "#94a3b8", fontSize: "0.83rem", lineHeight: 1.7, margin: 0 }}>
                                        {c.texto}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Resumen final */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: "linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(34,211,238,0.04) 100%)",
                            border: "1px solid rgba(245,158,11,0.2)",
                            borderRadius: "1.2rem",
                            padding: "2rem",
                        }}
                    >
                        <div style={{ display: "flex", gap: "0.7rem", alignItems: "center", marginBottom: "1.1rem" }}>
                            <Lightbulb size={18} color="#fbbf24" />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.72rem",
                                    color: "#fbbf24",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Veredicto de los datos
                            </span>
                        </div>
                        <p style={{ color: "#cbd5e1", lineHeight: 1.85, margin: "0 0 1rem", fontSize: "0.95rem" }}>
                            Con <strong style={{ color: "#f59e0b" }}>51 respuestas</strong>, la encuesta muestra una
                            receptividad alta hacia el sistema de alarma inteligente. Ningún respondente rechazó
                            categóricamente el producto: las tres opciones de respuesta a la pregunta de confianza
                            representan distintos grados de disposición, no rechazo.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {[
                                "El soporte técnico local es el principal factor de confianza para el público masculino.",
                                "La certificación de garantía es el factor decisivo para el público femenino.",
                                "El efectivo domina como método de pago preferido, lo que valida el precio de < $50 USD.",
                                "El segmento joven (< 20 años) es el más numeroso, ideal para difusión en redes.",
                                "La paridad de género en la muestra garantiza representatividad en los cruces de datos.",
                            ].map((punto, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                    <CheckCircle size={14} color="#34d399" style={{ marginTop: "0.25rem", flexShrink: 0 }} />
                                    <p style={{ color: "#94a3b8", fontSize: "0.87rem", margin: 0, lineHeight: 1.6 }}>
                                        {punto}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5rem 2rem", textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "#e2e8f0" }}>Competencia del Mercado</h2>
                    <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
                        Conocé las especificaciones técnicas de los sistemas de alarma competidores en Bolivia.
                    </p>
                    <a href="/especificaciones" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", color: "#fff", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                        Ver Especificaciones →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
