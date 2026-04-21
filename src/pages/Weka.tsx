import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wekaTree from "../assets/weka_tree.png";
import wekaCluster from "../assets/weka_cluster.png";
import wekaRed from "../assets/weka_red.png";
import {
    GitBranch,
    Layers,
    Brain,
    Database,
    BarChart2,
    Users,
    Search,
    TrendingUp,
    CheckCircle2,
    AlertCircle,
    Cpu,
    Activity,
    Zap,
} from "lucide-react";

// ── DATOS ────────────────────────────────────────────────────────────────────

const PREGUNTAS = [
    "¿Considera que su hogar es seguro?",
    "¿Ha sufrido algún robo o intento de robo en su hogar?",
    "¿Cuenta actualmente con algún sistema de seguridad?",
    "¿Qué tipo de sistema de seguridad utiliza o conoce?",
    "¿Estaría dispuesto a adquirir un sistema de alarma?",
    "¿Qué importancia le da al precio del dispositivo?",
    "¿Qué importancia le da al tamaño y diseño del dispositivo?",
    "¿Preferiría un sistema con alertas en su celular?",
    "¿Qué característica valora más en un sistema de seguridad?",
];

const STATS = [
    { label: "Encuestados", value: "51", icon: Users, color: "#22d3ee" },
    { label: "Modelos aplicados", value: "3", icon: BarChart2, color: "#a78bfa" },
    { label: "Preguntas del dataset", value: "9", icon: Database, color: "#34d399" },
    { label: "Clusters detectados", value: "3", icon: Layers, color: "#f59e0b" },
];

const PROCESO = [
    { paso: "01", titulo: "Recolección", desc: "Encuesta digital a 51 participantes sobre hábitos y percepción de seguridad del hogar en Bolivia.", icon: Users, color: "#22d3ee" },
    { paso: "02", titulo: "Preparación", desc: "Exportación a Excel (.xlsx) y conversión a formato ARFF para compatibilidad con Weka Explorer.", icon: Database, color: "#a78bfa" },
    { paso: "03", titulo: "Exploración", desc: "Carga del dataset en Weka Explorer, preprocesamiento de atributos y configuración de algoritmos.", icon: Search, color: "#34d399" },
    { paso: "04", titulo: "Modelado", desc: "Ejecución de J48, SimpleKMeans y MultilayerPerceptron sobre el mismo dataset para comparar resultados.", icon: TrendingUp, color: "#f59e0b" },
];

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────

export const Weka = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
      `}</style>

            {/* ══ HERO ══════════════════════════════════════════════════════════ */}
            <section
                ref={heroRef}
                style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0f172a" }}
            >
                <motion.div style={{ position: "absolute", inset: 0, y: heroY }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(34,211,238,0.07) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(167,139,250,0.06) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 50% 80%, rgba(52,211,153,0.04) 0%, transparent 60%)" }} />
                </motion.div>

                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
                <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)", animation: "scan 6s linear infinite", pointerEvents: "none" }} />

                {[{ top: 32, left: 32, borderTop: "2px solid rgba(34,211,238,0.35)", borderLeft: "2px solid rgba(34,211,238,0.35)" } as React.CSSProperties, { top: 32, right: 32, borderTop: "2px solid rgba(167,139,250,0.25)", borderRight: "2px solid rgba(167,139,250,0.25)" } as React.CSSProperties, { bottom: 32, left: 32, borderBottom: "2px solid rgba(52,211,153,0.2)", borderLeft: "2px solid rgba(52,211,153,0.2)" } as React.CSSProperties, { bottom: 32, right: 32, borderBottom: "2px solid rgba(34,211,238,0.2)", borderRight: "2px solid rgba(34,211,238,0.2)" } as React.CSSProperties].map((style, i) => (
                    <div key={i} style={{ position: "absolute", width: 56, height: 56, ...style }} />
                ))}

                <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", opacity: 0.035, pointerEvents: "none" }}>
                    <Brain size={480} color="#a78bfa" />
                </motion.div>

                {[{ top: "18%", left: "8%", color: "#22d3ee", size: 8, delay: 0 }, { top: "70%", left: "12%", color: "#a78bfa", size: 5, delay: 1 }, { top: "35%", right: "18%", color: "#34d399", size: 6, delay: 2 }, { top: "80%", right: "22%", color: "#f59e0b", size: 4, delay: 0.5 }].map((n, i) => (
                    <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, delay: n.delay, repeat: Infinity }} style={{ position: "absolute", top: n.top, left: (n as { left?: string }).left, right: (n as { right?: string }).right, width: n.size, height: n.size, borderRadius: "50%", background: n.color, boxShadow: `0 0 12px ${n.color}` }} />
                ))}

                <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                    {/* Texto */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.4rem 1.1rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.25)", background: "rgba(6,182,212,0.07)", marginBottom: "1.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#67e8f9", letterSpacing: "0.12em" }}>
                            <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", animation: "blink 1.5s infinite" }} />
                            ETAPA 21 — MINERÍA DE DATOS
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.06, marginBottom: "1.25rem" }}>
                            Minería de <br />
                            <span style={{ background: "linear-gradient(135deg,#22d3ee,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Datos Weka</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                            Aplicamos tres algoritmos de machine learning sobre nuestra encuesta de 51 respondentes para descubrir patrones ocultos en el comportamiento de seguridad del hogar en Bolivia.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {[{ label: "M1 — Árbol de Decisión J48", color: "#22d3ee", icon: GitBranch }, { label: "M2 — Clustering K-Means", color: "#a78bfa", icon: Layers }, { label: "M3 — Red Neuronal MLP", color: "#34d399", icon: Brain }].map((p) => {
                                const Icon = p.icon;
                                return (
                                    <div key={p.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: `1px solid ${p.color}25`, background: `${p.color}08`, width: "fit-content" }}>
                                        <Icon size={14} color={p.color} />
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: p.color, letterSpacing: "0.06em" }}>{p.label}</span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Terminal */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }} style={{ background: "#080f1f", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "1.25rem", overflow: "hidden", boxShadow: "0 0 60px rgba(34,211,238,0.05)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 1.25rem", borderBottom: "1px solid rgba(34,211,238,0.1)", background: "#0a1628" }}>
                            {["#ef4444", "#f59e0b", "#22d3ee"].map((c) => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />)}
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#334155", marginLeft: "0.5rem" }}>weka_explorer — dataset.arff</span>
                        </div>
                        <div style={{ padding: "1.5rem", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", lineHeight: 2 }}>
                            {[
                                { text: "$ weka.Run weka.core.Instances dataset.arff", color: "#22d3ee" },
                                { text: "→ Instancias cargadas: 51", color: "#34d399" },
                                { text: "→ Atributos detectados: 9", color: "#34d399" },
                                { text: "$ weka.classifiers.trees.J48 -C 0.25 -M 2", color: "#22d3ee" },
                                { text: "→ Árbol construido. Profundidad: 3", color: "#34d399" },
                                { text: "$ weka.clusterers.SimpleKMeans -N 3", color: "#22d3ee" },
                                { text: "→ 3 clusters encontrados", color: "#34d399" },
                                { text: "$ weka.classifiers.functions.MLP", color: "#22d3ee" },
                                { text: "→ Épocas: 500 | LR: 0.3 | Mom: 0.2", color: "#34d399" },
                                { text: "→ Convergencia alcanzada en época 8 ✓", color: "#a78bfa" },
                            ].map((l, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }} style={{ color: l.color }}>{l.text}</motion.div>
                            ))}
                            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ color: "#22d3ee" }}>█</motion.span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══ STATS ════════════════════════════════════════════════════════ */}
            <section style={{ background: "#080f1f", borderTop: "1px solid rgba(34,211,238,0.08)", borderBottom: "1px solid rgba(34,211,238,0.08)", padding: "2.5rem 2rem" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
                    {STATS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }} viewport={{ once: true }} style={{ textAlign: "center", padding: "1.5rem 1rem", background: `${s.color}06`, border: `1px solid ${s.color}18`, borderRadius: "0.875rem" }}>
                                <Icon size={20} color={s.color} style={{ marginBottom: "0.6rem" }} />
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2.2rem", fontWeight: 700, color: s.color, lineHeight: 1, marginBottom: "0.35rem" }}>{s.value}</div>
                                <div style={{ fontSize: "0.78rem", color: "#475569" }}>{s.label}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ══ WEKA + DATASET ═══════════════════════════════════════════════ */}
            <section style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#22d3ee", letterSpacing: "0.15em", marginBottom: "1rem" }}>// HERRAMIENTA</div>
                        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.25rem" }}>¿Qué es <span style={{ color: "#22d3ee" }}>Weka</span>?</h2>
                        <p style={{ color: "#64748b", lineHeight: 1.85, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                            <strong style={{ color: "#94a3b8" }}>Weka</strong> (<em>Waikato Environment for Knowledge Analysis</em>) es una suite de código abierto desarrollada por la Universidad de Waikato, Nueva Zelanda. Concentra algoritmos de machine learning, herramientas de preprocesamiento y visualización en una interfaz gráfica accesible para análisis académico y profesional.
                        </p>
                        <p style={{ color: "#64748b", lineHeight: 1.85, fontSize: "0.9rem", marginBottom: "2rem" }}>
                            Su módulo <strong style={{ color: "#94a3b8" }}>Explorer</strong> permite cargar datasets en formato ARFF, configurar algoritmos y obtener métricas de evaluación con pocos clics, siendo la herramienta ideal para proyectos de minería de datos en entornos académicos.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                            {[{ titulo: "Classify", color: "#22d3ee", desc: "Clasificación supervisada con J48, SVM, Naive Bayes" }, { titulo: "Cluster", color: "#a78bfa", desc: "Agrupamiento K-Means y EM no supervisado" }, { titulo: "Visualize", color: "#34d399", desc: "Scatter plots 2D, árboles y redes visuales" }, { titulo: "Explorer", color: "#f59e0b", desc: "Interfaz gráfica todo-en-uno para datasets" }].map((c, i) => (
                                <motion.div key={c.titulo} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: i * 0.07 }} viewport={{ once: true }} style={{ padding: "1rem", background: `${c.color}08`, border: `1px solid ${c.color}20`, borderRadius: "0.75rem" }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: c.color, fontWeight: 700, marginBottom: "0.35rem" }}>{c.titulo}</div>
                                    <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.55 }}>{c.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#a78bfa", letterSpacing: "0.15em", marginBottom: "1rem" }}>// DATASET · 9 PREGUNTAS</div>
                        <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>Encuesta de <span style={{ color: "#a78bfa" }}>seguridad del hogar</span></h2>
                        <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "0.88rem", marginBottom: "1.5rem" }}>
                            Dataset de <strong style={{ color: "#94a3b8" }}>51 respondentes</strong> con 9 preguntas sobre percepción de seguridad, tenencia de sistemas de alarma y disposición a nuevas tecnologías. Recopilado en Excel y convertido a ARFF.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {PREGUNTAS.map((q, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }} viewport={{ once: true }} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.6rem 0.85rem", background: "#080f1f", borderRadius: "0.5rem", border: "1px solid rgba(167,139,250,0.1)" }}>
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#a78bfa", minWidth: 20, marginTop: "0.1rem" }}>Q{i + 1}</span>
                                    <span style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.55 }}>{q}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div style={{ marginTop: "1rem", display: "flex", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem 1rem", background: "rgba(167,139,250,0.05)", borderRadius: "0.6rem", border: "1px solid rgba(167,139,250,0.12)" }}>
                            <AlertCircle size={14} color="#64748b" style={{ marginTop: "0.1rem", flexShrink: 0 }} />
                            <p style={{ color: "#64748b", fontSize: "0.75rem", margin: 0, lineHeight: 1.6 }}>Fuente: <em>Encuesta de sistema de alarma inteligente.xlsx</em> — procesada con Weka 3.8 Explorer.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══ PROCESO ══════════════════════════════════════════════════════ */}
            <section style={{ background: "#080f1f", borderTop: "1px solid rgba(34,211,238,0.06)", padding: "5rem 2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#22d3ee", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// METODOLOGÍA</div>
                        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#e2e8f0" }}>Proceso de análisis</h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
                        {PROCESO.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div key={p.paso} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.1 }} viewport={{ once: true }} style={{ padding: "1.75rem 1.25rem", background: "#0f172a", border: `1px solid ${p.color}18`, borderRadius: "1rem", position: "relative", overflow: "hidden" }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "3rem", fontWeight: 700, color: `${p.color}12`, lineHeight: 1, position: "absolute", top: "0.5rem", right: "0.75rem" }}>{p.paso}</div>
                                    <div style={{ width: 40, height: 40, borderRadius: "0.6rem", background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                                        <Icon size={18} color={p.color} />
                                    </div>
                                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.5rem" }}>{p.titulo}</h3>
                                    <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══ MODELO 1 — ÁRBOL DE DECISIÓN ════════════════════════════════ */}
            <section style={{ padding: "7rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                        <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <GitBranch size={22} color="#22d3ee" />
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#22d3ee", letterSpacing: "0.12em" }}>M1 · J48 (C4.5)</div>
                            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#e2e8f0", margin: 0 }}>Árbol de Decisión</h2>
                        </div>
                    </div>
                    <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 750 }}>
                        El algoritmo J48 (implementación de C4.5 en Weka) construye un árbol de decisión que clasifica a los encuestados según sus respuestas. El nodo raíz representa la variable más discriminante y cada rama un camino de clasificación hacia una categoría de salida.
                    </p>
                </motion.div>

                {/* Imagen GRANDE */}
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ position: "relative", background: "#020817", border: "1px solid rgba(34,211,238,0.15)", borderRadius: "1.25rem", overflow: "hidden", marginBottom: "2.5rem", boxShadow: "0 0 80px rgba(34,211,238,0.06)" }}>
                    <div style={{ position: "absolute", top: 16, left: 16, zIndex: 2, display: "flex", alignItems: "center", gap: "0.45rem", padding: "0.3rem 0.8rem", borderRadius: "9999px", background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.25)", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee" }}>
                        <Activity size={10} />
                        WEKA CLASSIFIER TREE VISUALIZER — J48
                    </div>
                    <img src={wekaTree} alt="Árbol de Decisión J48" style={{ width: "100%", display: "block", maxHeight: 620, objectFit: "contain", padding: "2rem" }} />
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ background: "#080f1f", border: "1px solid rgba(34,211,238,0.1)", borderRadius: "1rem", padding: "2rem" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#22d3ee", letterSpacing: "0.12em", marginBottom: "1.25rem" }}>// INTERPRETACIÓN DEL ÁRBOL</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {[
                                { punto: "Nodo raíz: percepción de importancia del diseño y tamaño del dispositivo de seguridad.", highlight: true },
                                { punto: "Rama 'Mucha importancia': clasifica directamente como Masculino (mayoría).", highlight: false },
                                { punto: "Rama 'Poca importancia': segunda división por tenencia actual de sistema.", highlight: false },
                                { punto: "Con sistema → Femenino (9/3 correctos). Sin sistema → Masculino (11/2 correctos).", highlight: false },
                                { punto: "Rama 'Importancia moderada': clasifica como Femenino con 16/4 instancias.", highlight: false },
                            ].map((h, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: h.highlight ? "0.65rem 0.85rem" : "0.2rem 0", background: h.highlight ? "rgba(34,211,238,0.06)" : "transparent", borderRadius: h.highlight ? "0.5rem" : 0, border: h.highlight ? "1px solid rgba(34,211,238,0.14)" : "none" }}>
                                    <CheckCircle2 size={14} color="#22d3ee" style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                                    <span style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.65 }}>{h.punto}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[{ label: "Algoritmo", value: "J48 (C4.5)", color: "#22d3ee" }, { label: "Instancias evaluadas", value: "51 respondentes", color: "#22d3ee" }, { label: "Variable objetivo", value: "Género del respondente", color: "#22d3ee" }, { label: "Profundidad del árbol", value: "3 niveles", color: "#22d3ee" }, { label: "Nodo raíz (atributo clave)", value: "Importancia del diseño del dispositivo", color: "#22d3ee" }].map((p) => (
                            <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "#080f1f", border: `1px solid ${p.color}12`, borderRadius: "0.75rem" }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, boxShadow: `0 0 6px ${p.color}`, flexShrink: 0 }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#475569", marginBottom: "0.2rem" }}>{p.label}</div>
                                    <div style={{ fontSize: "0.87rem", fontWeight: 600, color: "#e2e8f0" }}>{p.value}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══ MODELO 2 — CLUSTERING K-MEANS ════════════════════════════════ */}
            <section style={{ background: "#080f1f", borderTop: "1px solid rgba(167,139,250,0.06)", padding: "7rem 2rem" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Layers size={22} color="#a78bfa" />
                            </div>
                            <div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#a78bfa", letterSpacing: "0.12em" }}>M2 · SimpleKMeans</div>
                                <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#e2e8f0", margin: 0 }}>Clustering K-Means</h2>
                            </div>
                        </div>
                        <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 750 }}>
                            El algoritmo SimpleKMeans agrupa a los 51 respondentes en <strong style={{ color: "#94a3b8" }}>3 clusters</strong> basándose en la similitud de sus respuestas, sin categorías predefinidas. La visualización 2D de Weka muestra la distribución de los grupos en el espacio de atributos.
                        </p>
                    </motion.div>

                    {/* Imagen GRANDE */}
                    <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ position: "relative", background: "#020817", border: "1px solid rgba(167,139,250,0.15)", borderRadius: "1.25rem", overflow: "hidden", marginBottom: "2.5rem", boxShadow: "0 0 80px rgba(167,139,250,0.06)" }}>
                        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 2, display: "flex", alignItems: "center", gap: "0.45rem", padding: "0.3rem 0.8rem", borderRadius: "9999px", background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a78bfa" }}>
                            <Activity size={10} />
                            WEKA CLUSTER VISUALIZER — K=3
                        </div>
                        <img src={wekaCluster} alt="Clustering K-Means" style={{ width: "100%", display: "block", maxHeight: 620, objectFit: "contain", padding: "2rem" }} />
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#a78bfa", letterSpacing: "0.12em", marginBottom: "1.25rem" }}>// PERFILES DE CLUSTER</div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {[{ id: "0", titulo: "Alta preocupación — sin sistema", desc: "Usuarios con alta percepción de riesgo pero que aún no cuentan con sistema de seguridad. Mercado objetivo principal.", color: "#22d3ee" }, { id: "1", titulo: "Usuarios con sistema existente", desc: "Ya poseen algún sistema de seguridad. Disposición moderada al cambio o actualización tecnológica.", color: "#a78bfa" }, { id: "2", titulo: "Baja percepción de riesgo", desc: "No perciben necesidad de un sistema de alarma. Menor prioridad para estrategia de captación.", color: "#34d399" }].map((c) => (
                                    <div key={c.id} style={{ padding: "1rem 1.25rem", background: "#0f172a", border: `1px solid ${c.color}20`, borderRadius: "0.75rem", display: "flex", gap: "1rem" }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", fontWeight: 700, color: `${c.color}50`, minWidth: 28 }}>C{c.id}</div>
                                        <div>
                                            <div style={{ fontSize: "0.87rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.3rem" }}>{c.titulo}</div>
                                            <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.6 }}>{c.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#a78bfa", letterSpacing: "0.12em", marginBottom: "0.25rem" }}>// PARÁMETROS</div>
                            {[{ label: "Algoritmo", value: "SimpleKMeans", color: "#a78bfa" }, { label: "Número de clusters (k)", value: "3", color: "#a78bfa" }, { label: "Instancias", value: "51 respondentes", color: "#a78bfa" }, { label: "Visualización", value: "2D Scatter Plot", color: "#a78bfa" }, { label: "Método de distancia", value: "Euclidiana", color: "#a78bfa" }].map((p) => (
                                <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "#0f172a", border: `1px solid ${p.color}12`, borderRadius: "0.75rem" }}>
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, boxShadow: `0 0 6px ${p.color}`, flexShrink: 0 }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#475569", marginBottom: "0.2rem" }}>{p.label}</div>
                                        <div style={{ fontSize: "0.87rem", fontWeight: 600, color: "#e2e8f0" }}>{p.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══ MODELO 3 — RED NEURONAL ══════════════════════════════════════ */}
            <section style={{ padding: "7rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                        <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Brain size={22} color="#34d399" />
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#34d399", letterSpacing: "0.12em" }}>M3 · MultilayerPerceptron</div>
                            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#e2e8f0", margin: 0 }}>Red Neuronal Artificial</h2>
                        </div>
                    </div>
                    <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: 750 }}>
                        El <strong style={{ color: "#94a3b8" }}>MultilayerPerceptron</strong> procesa las 9 preguntas como nodos de entrada, los propaga por capas ocultas de neuronas y genera clasificaciones en la capa de salida. Entrenado durante 500 épocas con backpropagation.
                    </p>
                </motion.div>

                {/* Imagen GRANDE */}
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ position: "relative", background: "#020817", border: "1px solid rgba(52,211,153,0.15)", borderRadius: "1.25rem", overflow: "hidden", marginBottom: "2.5rem", boxShadow: "0 0 80px rgba(52,211,153,0.06)" }}>
                    <div style={{ position: "absolute", top: 16, left: 16, zIndex: 2, display: "flex", alignItems: "center", gap: "0.45rem", padding: "0.3rem 0.8rem", borderRadius: "9999px", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.25)", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#34d399" }}>
                        <Cpu size={10} />
                        NEURAL NETWORK — MULTILAYER PERCEPTRON · 500 ÉPOCAS
                    </div>
                    <img src={wekaRed} alt="Red Neuronal MLP" style={{ width: "100%", display: "block", objectFit: "contain", padding: "2rem" }} />
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                    {/* Arquitectura */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ background: "#080f1f", border: "1px solid rgba(52,211,153,0.1)", borderRadius: "1rem", padding: "2rem" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#34d399", letterSpacing: "0.12em", marginBottom: "1.25rem" }}>// ARQUITECTURA DE LA RED</div>
                        {[{ capa: "Entrada", desc: "9 nodos — una neurona por pregunta de la encuesta. Representadas en verde en la visualización de Weka.", color: "#34d399", nodos: "9" }, { capa: "Oculta", desc: "Capa intermedia que detecta patrones no lineales entre las respuestas mediante función de activación sigmoide.", color: "#22d3ee", nodos: "N" }, { capa: "Salida", desc: "3 nodos de salida correspondientes a las categorías clasificadas. Convergencia en época 8.", color: "#a78bfa", nodos: "3" }].map((c, i) => (
                            <div key={c.capa} style={{ display: "flex", gap: "1.25rem", marginBottom: i < 2 ? "1.5rem" : 0 }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: `${c.color}15`, border: `2px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: c.color, fontWeight: 700 }}>{c.nodos}</div>
                                    {i < 2 && <div style={{ width: 2, height: 20, background: `linear-gradient(${c.color}40, transparent)`, marginTop: 4 }} />}
                                </div>
                                <div style={{ paddingTop: "0.25rem" }}>
                                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#e2e8f0", marginBottom: "0.3rem" }}>Capa {c.capa}</div>
                                    <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.6 }}>{c.desc}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Parámetros + gráfica */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#34d399", letterSpacing: "0.12em", marginBottom: "0.25rem" }}>// HIPERPARÁMETROS</div>
                        {[{ label: "Algoritmo", value: "MultilayerPerceptron", color: "#34d399" }, { label: "Épocas de entrenamiento", value: "500", color: "#34d399" }, { label: "Learning Rate", value: "0.3", color: "#34d399" }, { label: "Momentum", value: "0.2", color: "#34d399" }, { label: "Convergencia", value: "Época 8 — Error estabilizado", color: "#34d399" }].map((p) => (
                            <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "#080f1f", border: `1px solid ${p.color}12`, borderRadius: "0.75rem" }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, boxShadow: `0 0 6px ${p.color}`, flexShrink: 0 }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#475569", marginBottom: "0.2rem" }}>{p.label}</div>
                                    <div style={{ fontSize: "0.87rem", fontWeight: 600, color: "#e2e8f0" }}>{p.value}</div>
                                </div>
                            </div>
                        ))}
                        {/* Mini grafica épocas */}
                        <div style={{ padding: "1.25rem", background: "#080f1f", border: "1px solid rgba(52,211,153,0.12)", borderRadius: "0.75rem" }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#475569", marginBottom: "0.75rem" }}>ERROR POR ÉPOCA (curva de convergencia)</div>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: 52 }}>
                                {[100, 72, 45, 28, 18, 12, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7].map((v, i) => (
                                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${v}%` }} transition={{ duration: 0.4, delay: i * 0.04 }} viewport={{ once: true }} style={{ flex: 1, background: i < 8 ? "linear-gradient(#34d399, #22d3ee)" : "rgba(52,211,153,0.18)", borderRadius: "2px 2px 0 0", minWidth: 6 }} />
                                ))}
                            </div>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#334155", marginTop: "0.4rem" }}>Épocas 1 → 500 · convergencia en época 8</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══ CONCLUSIONES ═════════════════════════════════════════════════ */}
            <section style={{ background: "#080f1f", borderTop: "1px solid rgba(34,211,238,0.06)", padding: "6rem 2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#22d3ee", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// SÍNTESIS</div>
                        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.75rem" }}>Conclusiones de la minería</h2>
                        <p style={{ color: "#64748b", maxWidth: 540, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
                            Los tres modelos aplicados sobre el mismo dataset ofrecen perspectivas complementarias sobre el comportamiento y perfil de los potenciales usuarios del sistema de alarma.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                        {[{ titulo: "El diseño es el factor decisivo", texto: "El árbol J48 reveló que la importancia dada al diseño y tamaño del dispositivo es el atributo más discriminante, superando al precio y a la marca.", color: "#22d3ee", icon: GitBranch }, { titulo: "Tres perfiles de usuario claros", texto: "El clustering K-Means segmentó a los encuestados en tres grupos nítidos: preocupados sin sistema, usuarios actuales y desinteresados. Permite orientar la estrategia de producto.", color: "#a78bfa", icon: Layers }, { titulo: "Patrones complejos no lineales", texto: "La red neuronal confirmó que las decisiones de seguridad emergen de combinaciones no triviales de atributos que no pueden modelarse con reglas simples.", color: "#34d399", icon: Brain }, { titulo: "Género como variable correlacionada", texto: "Ambos modelos supervisados identificaron el género como variable correlacionada con la tenencia de sistemas, revelando diferencias en la percepción de riesgo.", color: "#f59e0b", icon: Zap }].map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <motion.div key={c.titulo} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }} viewport={{ once: true }} whileHover={{ y: -4 }} style={{ padding: "1.75rem", background: "#0f172a", border: `1px solid ${c.color}18`, borderRadius: "1rem", display: "flex", flexDirection: "column", gap: "0.85rem", cursor: "default" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <div style={{ width: 38, height: 38, borderRadius: "0.55rem", background: `${c.color}15`, border: `1px solid ${c.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Icon size={17} color={c.color} />
                                        </div>
                                        <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: "#e2e8f0", margin: 0 }}>{c.titulo}</h3>
                                    </div>
                                    <p style={{ fontSize: "0.83rem", color: "#64748b", lineHeight: 1.72, margin: 0 }}>{c.texto}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "5rem 2rem", textAlign: "center" }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "#e2e8f0" }}>Pitch Elevator</h2>
                    <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
                        Mirá la presentación de 60 segundos que resume la propuesta de valor de la Alarma Inteligente.
                    </p>
                    <a href="/pitch-elevator" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "linear-gradient(135deg,#06b6d4,#0891b2)", color: "#fff", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}>
                        Ver Pitch Elevator →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
