import { motion } from "framer-motion";
import {
    Globe,
    TrendingUp,
    BarChart2,
    ShieldAlert,
    Lightbulb,
    AlertCircle,
    ExternalLink,
    Activity,
    MapPin,
    Users,
} from "lucide-react";

import gapminder1 from "../assets/gapminder_grafico1.png";
import gapminder2 from "../assets/gapminder_grafico2.png";

// ─── Datos de interpretación ──────────────────────────────────────────────────
const hallazgosGrafico1 = [
    {
        color: "#22d3ee",
        titulo: "Bolivia en 2018",
        texto:
            "Bolivia se ubica con una esperanza de vida de ~70 años y un Índice de Seguridad IDEA cercano al 55%, posicionándose por encima del promedio de la región latinoamericana en este indicador.",
    },
    {
        color: "#f59e0b",
        titulo: "Correlación positiva",
        texto:
            "El gráfico muestra una tendencia clara: países con mayor esperanza de vida tienden a tener índices de seguridad más altos. Esto sugiere que la seguridad personal es un factor que incide en la calidad y duración de vida.",
    },
    {
        color: "#34d399",
        titulo: "Brecha entre regiones",
        texto:
            "Los países de África Subsahariana (burbujas rojas) concentran los valores más bajos en ambos ejes, mientras que Europa y Norteamérica lideran. América Latina ocupa una posición intermedia, con alta dispersión.",
    },
    {
        color: "#a78bfa",
        titulo: "Tamaño poblacional",
        texto:
            "Las burbujas más grandes (China, India, EE.UU.) no necesariamente lideran en seguridad. Esto evidencia que el tamaño de un país no garantiza mejores condiciones de seguridad ciudadana.",
    },
];

const hallazgosGrafico2 = [
    {
        color: "#22d3ee",
        titulo: "Bolivia en ascenso",
        texto:
            "Bolivia muestra una tendencia positiva sostenida desde ~1990, pasando de valores cercanos al 35% hasta alcanzar ~60% en 2018. Es uno de los países con mayor mejora relativa en el período analizado.",
    },
    {
        color: "#34d399",
        titulo: "EE.UU. como referente",
        texto:
            "Estados Unidos mantiene consistentemente los índices más altos del grupo comparado (~60–65%), con una estabilidad notable. Representa el estándar hacia el que Bolivia tiende a converger en el largo plazo.",
    },
    {
        color: "#fb7185",
        titulo: "Nigeria y China estancados",
        texto:
            "Nigeria y China permanecen en rangos bajos (25–35%) a lo largo de toda la serie temporal, con poca variación. Esto contrasta con el dinamismo mostrado por Bolivia en el mismo período.",
    },
    {
        color: "#fbbf24",
        titulo: "Rusia: volatilidad extrema",
        texto:
            "Rusia muestra la mayor volatilidad del grupo: picos durante la Guerra Fría y caídas abruptas post-1991. Esto refleja cómo la inestabilidad política impacta directamente los índices de seguridad personal.",
    },
];

const relacionProyecto = [
    {
        icon: ShieldAlert,
        color: "#fb7185",
        titulo: "Brecha de seguridad real",
        texto:
            "Aunque Bolivia mejora, un índice del 55–60% significa que el 40–45% de la población aún percibe deficiencias en seguridad personal. Ahí radica la demanda del mercado para soluciones como la alarma inteligente.",
    },
    {
        icon: Users,
        color: "#22d3ee",
        titulo: "Segmento objetivo validado por datos",
        texto:
            "La posición de Bolivia en el gráfico de burbujas —países en desarrollo con ingreso medio— es exactamente el segmento al que apunta el proyecto: hogares que necesitan seguridad asequible (< $50 USD).",
    },
    {
        icon: TrendingUp,
        color: "#34d399",
        titulo: "Tendencia positiva = mercado en crecimiento",
        texto:
            "La mejora sostenida del índice boliviano indica una sociedad que valora progresivamente la seguridad. Este contexto es favorable para la adopción de tecnología de seguridad doméstica accesible.",
    },
    {
        icon: MapPin,
        color: "#a78bfa",
        titulo: "Contexto latinoamericano",
        texto:
            "La dispersión observada en Latinoamérica en el gráfico 1 muestra que Bolivia comparte contexto con países que enfrentan desafíos similares. Una solución desarrollada aquí puede ser replicable en la región.",
    },
];

const caracteristicasGapminder = [
    { label: "Fundador", valor: "Hans Rosling (1948–2017)" },
    { label: "Tipo de herramienta", valor: "Visualización de datos globales" },
    { label: "Fuente de datos", valor: "ONU, Banco Mundial, IDEA, OMS" },
    { label: "Variables disponibles", valor: "+ 600 indicadores mundiales" },
    { label: "Índice analizado", valor: "Personal Integrity & Security Index (IDEA)" },
    { label: "Período del gráfico", valor: "1975 – 2018" },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const GapminderData = () => {
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
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.14) 0%, rgba(2,6,23,1) 70%)",
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
                <div style={{ position: "absolute", top: "28%", right: "9%", opacity: 0.05 }}>
                    <Globe size={220} color="#22d3ee" />
                </div>

                {[
                    { top: 32, left: 32, borderTop: "2px solid #22d3ee", borderLeft: "2px solid #22d3ee" },
                    { top: 32, right: 32, borderTop: "2px solid #22d3ee", borderRight: "2px solid #22d3ee" },
                    { bottom: 32, left: 32, borderBottom: "2px solid #22d3ee", borderLeft: "2px solid #22d3ee" },
                    { bottom: 32, right: 32, borderBottom: "2px solid #22d3ee", borderRight: "2px solid #22d3ee" },
                ].map((s, i) => (
                    <div key={i} style={{ position: "absolute", width: 48, height: 48, opacity: 0.35, ...s }} />
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
                            borderRadius: "2rem",
                            border: "1px solid rgba(34,211,238,0.35)",
                            background: "rgba(34,211,238,0.08)",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <BarChart2 size={13} color="#22d3ee" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.7rem",
                                color: "#22d3ee",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                            }}
                        >
                            Gapminder · Datos · Sección 21
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
                        <span style={{ color: "#22d3ee" }}>Gapminder</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 640, margin: "0 auto" }}
                    >
                        Visualización del{" "}
                        <strong style={{ color: "#e2e8f0" }}>Índice de Integridad Personal y Seguridad (IDEA)</strong>{" "}
                        a nivel global y su interpretación en el contexto del proyecto de alarma inteligente en Bolivia.
                    </motion.p>
                </div>
            </section>

            {/* ── ¿QUÉ ES GAPMINDER? ───────────────────────────────────────────── */}
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
                    {/* Texto */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                            <div style={{ width: 3, height: 22, background: "#22d3ee", borderRadius: 2 }} />
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                                ¿Qué es Gapminder?
                            </h2>
                        </div>
                        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1rem" }}>
                            Gapminder es una fundación sueca sin fines de lucro creada por el estadístico y médico{" "}
                            <strong style={{ color: "#e2e8f0" }}>Hans Rosling</strong> en 2005. Su misión es combatir
                            la ignorancia global sobre desarrollo humano mediante visualizaciones interactivas de datos
                            reales provenientes de organismos internacionales.
                        </p>
                        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1.5rem" }}>
                            La herramienta permite explorar la evolución de más de{" "}
                            <strong style={{ color: "#22d3ee" }}>600 indicadores</strong> —salud, economía, educación,
                            seguridad— en todos los países del mundo a lo largo del tiempo, combinando gráficos de
                            burbujas animadas, líneas de tendencia y mapas coropléticos.
                        </p>
                        <a
                            href="https://www.gapminder.org/tools/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                color: "#22d3ee",
                                fontSize: "0.82rem",
                                fontFamily: "'Space Mono', monospace",
                                textDecoration: "none",
                                border: "1px solid rgba(34,211,238,0.3)",
                                borderRadius: "0.5rem",
                                padding: "0.4rem 0.9rem",
                            }}
                        >
                            <ExternalLink size={12} />
                            gapminder.org/tools
                        </a>
                    </div>

                    {/* Tabla de características */}
                    <div
                        style={{
                            background: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "1rem",
                            overflow: "hidden",
                        }}
                    >
                        {caracteristicasGapminder.map((c, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "1rem",
                                    padding: "0.85rem 1.2rem",
                                    borderBottom: i < caracteristicasGapminder.length - 1 ? "1px solid #1e293b" : "none",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.8rem",
                                        fontFamily: "'Space Mono', monospace",
                                        flexShrink: 0,
                                    }}
                                >
                                    {c.label}
                                </span>
                                <span style={{ color: "#e2e8f0", fontSize: "0.83rem", textAlign: "right" }}>
                                    {c.valor}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── SEPARADOR ────────────────────────────────────────────────────── */}
            <div style={{ borderTop: "1px solid #0f172a", margin: "0 2rem" }} />

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* ── GRÁFICO 1: BUBBLE CHART ──────────────────────────────────────── */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section style={{ maxWidth: 960, margin: "0 auto", padding: "3.5rem 2rem" }}>
                {/* Título */}
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
                        <Activity size={12} color="#22d3ee" />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.68rem",
                                color: "#22d3ee",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Gráfico 1 · Bubble Chart · Año 2018
                        </span>
                    </div>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 0.5rem" }}>
                        Esperanza de vida vs. Índice de Seguridad
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>
                        Eje X: Esperanza de vida (años) · Eje Y: Índice de Integridad Personal y Seguridad IDEA (%) · Tamaño: Población
                    </p>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        borderRadius: "1.2rem",
                        overflow: "hidden",
                        border: "1px solid #1e293b",
                        marginBottom: "2.5rem",
                        boxShadow: "0 0 40px rgba(34,211,238,0.06)",
                    }}
                >
                    <img
                        src={gapminder1}
                        alt="Gapminder Bubble Chart - Esperanza de vida vs Índice de Seguridad 2018"
                        style={{ width: "100%", display: "block" }}
                    />
                </motion.div>

                {/* Hallazgos */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {hallazgosGrafico1.map((h, i) => (
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
                            <p
                                style={{
                                    fontWeight: 700,
                                    color: h.color,
                                    fontSize: "0.85rem",
                                    marginBottom: "0.5rem",
                                    margin: "0 0 0.5rem",
                                }}
                            >
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
            {/* ── GRÁFICO 2: LINE CHART ────────────────────────────────────────── */}
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
                    {/* Título */}
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
                            <TrendingUp size={12} color="#34d399" />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.68rem",
                                    color: "#34d399",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Gráfico 2 · Line Chart · 1975 – 2018
                            </span>
                        </div>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 0.5rem" }}>
                            Evolución histórica del Índice de Seguridad
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>
                            Comparativa entre Bolivia, Estados Unidos, Rusia, China y Nigeria · 1975–2018
                        </p>
                    </motion.div>

                    {/* Leyenda de países */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.8rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        {[
                            { pais: "Bolivia", color: "#34d399" },
                            { pais: "Estados Unidos", color: "#86efac" },
                            { pais: "Rusia", color: "#f59e0b" },
                            { pais: "China", color: "#fb7185" },
                            { pais: "Nigeria", color: "#60a5fa" },
                        ].map((p) => (
                            <div
                                key={p.pais}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    background: "#0f172a",
                                    border: "1px solid #1e293b",
                                    borderRadius: "2rem",
                                    padding: "0.25rem 0.75rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 10,
                                        height: 3,
                                        borderRadius: 2,
                                        background: p.color,
                                    }}
                                />
                                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{p.pais}</span>
                            </div>
                        ))}
                    </div>

                    {/* Imagen */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            borderRadius: "1.2rem",
                            overflow: "hidden",
                            border: "1px solid #1e293b",
                            marginBottom: "2.5rem",
                            boxShadow: "0 0 40px rgba(52,211,153,0.05)",
                        }}
                    >
                        <img
                            src={gapminder2}
                            alt="Gapminder Line Chart - Evolución del Índice de Seguridad IDEA 1975-2018"
                            style={{ width: "100%", display: "block" }}
                        />
                    </motion.div>

                    {/* Hallazgos */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {hallazgosGrafico2.map((h, i) => (
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
                                <p
                                    style={{
                                        fontWeight: 700,
                                        color: h.color,
                                        fontSize: "0.85rem",
                                        margin: "0 0 0.5rem",
                                    }}
                                >
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

            {/* ── RELACIÓN CON EL PROYECTO ──────────────────────────────────────── */}
            <section style={{ maxWidth: 960, margin: "0 auto", padding: "3.5rem 2rem" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: "2rem" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                        <div style={{ width: 3, height: 22, background: "#fb7185", borderRadius: 2 }} />
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                            Relación con el proyecto
                        </h2>
                    </div>
                    <p style={{ color: "#64748b", fontSize: "0.88rem" }}>
                        ¿Qué dicen los datos de Gapminder sobre la necesidad de la alarma inteligente en Bolivia?
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1.2rem",
                        marginBottom: "3rem",
                    }}
                >
                    {relacionProyecto.map((r, i) => {
                        const Icon = r.icon;
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
                                    border: `1px solid ${r.color}22`,
                                    borderRadius: "1rem",
                                    padding: "1.5rem",
                                    transition: "box-shadow 0.3s",
                                }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "0.7rem",
                                        background: `${r.color}15`,
                                        border: `1px solid ${r.color}33`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <Icon size={20} color={r.color} />
                                </div>
                                <p style={{ fontWeight: 700, color: "#e2e8f0", margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
                                    {r.titulo}
                                </p>
                                <p style={{ color: "#94a3b8", fontSize: "0.83rem", lineHeight: 1.7, margin: 0 }}>
                                    {r.texto}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── CONCLUSIÓN FINAL ──────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: "linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(52,211,153,0.04) 100%)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        borderRadius: "1.2rem",
                        padding: "2rem",
                        marginBottom: "1.5rem",
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
                            Conclusión del análisis
                        </span>
                    </div>
                    <p style={{ color: "#cbd5e1", lineHeight: 1.85, margin: "0 0 1rem", fontSize: "0.95rem" }}>
                        Los datos de Gapminder confirman que Bolivia se encuentra en un punto de inflexión en
                        términos de seguridad: ha mejorado significativamente en las últimas décadas, pero aún
                        existe una brecha real respecto a países desarrollados. Esa brecha representa{" "}
                        <strong style={{ color: "#22d3ee" }}>millones de hogares que carecen de sistemas
                        de seguridad accesibles</strong>.
                    </p>
                    <p style={{ color: "#cbd5e1", lineHeight: 1.85, margin: 0, fontSize: "0.95rem" }}>
                        El proyecto de alarma inteligente responde directamente a este contexto: ofrece una
                        solución de seguridad doméstica a menos de $50 USD, diseñada específicamente para el
                        perfil socioeconómico boliviano que los gráficos describen. Los datos globales de
                        Gapminder no solo justifican el proyecto —lo posicionan como una intervención relevante
                        a escala regional.
                    </p>
                </motion.div>

                {/* ── NOTA METODOLÓGICA ─────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        display: "flex",
                        gap: "0.8rem",
                        alignItems: "flex-start",
                        background: "rgba(100,116,139,0.08)",
                        border: "1px solid rgba(100,116,139,0.2)",
                        borderRadius: "0.8rem",
                        padding: "1rem 1.2rem",
                    }}
                >
                    <AlertCircle size={15} color="#64748b" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                    <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0, lineHeight: 1.6 }}>
                        <strong style={{ color: "#94a3b8" }}>Fuente:</strong> Gráficos generados con la herramienta interactiva de Gapminder (gapminder.org/tools).
                        Indicador: <em>Personal Integrity and Security Index</em> del Instituto Internacional para la
                        Democracia y la Asistencia Electoral (IDEA). Los datos corresponden al período 1975–2018.
                    </p>
                </motion.div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5rem 2rem", textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "#e2e8f0" }}>Encuesta y Análisis</h2>
                    <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
                        Revisá los resultados de la encuesta realizada al público objetivo, visualizados con Tableau.
                    </p>
                    <a href="/tableau" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", color: "#fff", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                        Ver Tableau →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
