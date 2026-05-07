import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Users, User, Repeat, ClipboardList, Target,
    CheckCircle, Zap, RefreshCw, BookOpen,
    Layers, Flag, ChevronDown, ExternalLink,
    Calendar, ArrowRight, Shield, GraduationCap,
    Play, TrendingUp,
} from "lucide-react";
import FOTO_FRANZ from "../assets/FOTO-FRANZ.jpeg";
import FOTO_JAIME from "../assets/FOTO_JAIME.jpeg";

// ─── Roles ───────────────────────────────────────────────────────────────────
const ROLES = [
    {
        icon: Target,
        color: "#22d3ee",
        titulo: "Product Owner",
        nombre: "Ing. Yamil Cardenas",
        descripcion: "Define la visión del producto, prioriza el Product Backlog y asegura que el equipo entregue valor real en cada Sprint.",
        responsabilidades: [
            "Definir y priorizar el Product Backlog",
            "Representar al cliente y stakeholders",
            "Aceptar o rechazar el trabajo completado",
            "Comunicar la visión del proyecto al equipo",
        ],
        badge: "Docente · UCB",
    },
    {
        icon: Shield,
        color: "#a78bfa",
        titulo: "Scrum Master",
        nombre: "Franz Eliot Ramos Huacara",
        descripcion: "Facilita el proceso Scrum, elimina impedimentos y protege al equipo para que pueda trabajar de forma efectiva en cada Sprint.",
        responsabilidades: [
            "Facilitar ceremonias Scrum",
            "Eliminar bloqueos del equipo",
            "Promover prácticas ágiles",
            "Asegurar el cumplimiento del framework",
        ],
        badge: "Scrum Master · Equipo",
    },
    {
        icon: Users,
        color: "#34d399",
        titulo: "Development Team",
        nombre: "Jaime Ignacio Huaycho Clavel",
        descripcion: "Equipo autoorganizado que diseña, desarrolla y entrega los incrementos del producto al final de cada Sprint.",
        responsabilidades: [
            "Desarrollar las páginas del proyecto",
            "Estimar esfuerzo por Sprint",
            "Garantizar calidad del incremento",
            "Colaborar activamente en las ceremonias",
        ],
        badge: "Developer · Equipo",
    },
];

// ─── Ceremonias ──────────────────────────────────────────────────────────────
const CEREMONIAS = [
    {
        icon: Calendar,
        color: "#22d3ee",
        nombre: "Sprint Planning",
        duracion: "Inicio de Sprint",
        desc: "El equipo define qué trabajo se completará durante el Sprint, seleccionando ítems del Product Backlog y creando el Sprint Backlog.",
    },
    {
        icon: Repeat,
        color: "#34d399",
        nombre: "Daily Scrum",
        duracion: "Diariamente",
        desc: "Reunión corta para sincronizar al equipo: qué se hizo, qué se hará y qué impedimentos existen.",
    },
    {
        icon: CheckCircle,
        color: "#a78bfa",
        nombre: "Sprint Review",
        duracion: "Fin de Sprint",
        desc: "El equipo presenta el incremento completado al Product Owner para inspección y retroalimentación.",
    },
    {
        icon: RefreshCw,
        color: "#f59e0b",
        nombre: "Sprint Retrospective",
        duracion: "Post-Review",
        desc: "El equipo reflexiona sobre su proceso de trabajo para mejorar en el siguiente Sprint.",
    },
];

// ─── Artefactos ──────────────────────────────────────────────────────────────
const ARTEFACTOS = [
    {
        icon: BookOpen,
        color: "#22d3ee",
        nombre: "Product Backlog",
        desc: "Lista priorizada de todas las funcionalidades, páginas y mejoras del proyecto. Gestionado por el Product Owner.",
        items: ["Páginas del sitio web", "Diseño visual por sección", "Contenido académico", "Animaciones e interacciones"],
    },
    {
        icon: ClipboardList,
        color: "#a78bfa",
        nombre: "Sprint Backlog",
        desc: "Subconjunto del Product Backlog seleccionado para el Sprint actual, con el plan de cómo completarlo.",
        items: ["Objetivo del Sprint", "Tareas de desarrollo", "Criterios de aceptación", "Estimación de esfuerzo"],
    },
    {
        icon: Layers,
        color: "#34d399",
        nombre: "Incremento",
        desc: "Resultado concreto y funcional de cada Sprint: una nueva página completamente implementada y navegable.",
        items: ["Página publicada en Vercel", "Animaciones funcionando", "Responsive y accesible", "Integrada al flujo CTA"],
    },
];

// ─── Sprints del proyecto ─────────────────────────────────────────────────────
const SPRINTS: { sprint: number; nombre: string; ruta: string; grupo: string; color: string }[] = [
    // Grupo IDEA
    { sprint: 1, nombre: "Lluvia de Ideas", ruta: "/lluvia-ideas", grupo: "Idea", color: "#22d3ee" },
    { sprint: 2, nombre: "Ishikawa", ruta: "/ishikawa", grupo: "Idea", color: "#22d3ee" },
    { sprint: 3, nombre: "Definición del Problema", ruta: "/definicion-problema", grupo: "Idea", color: "#22d3ee" },
    { sprint: 4, nombre: "La Pregunta", ruta: "/la-pregunta", grupo: "Idea", color: "#22d3ee" },
    { sprint: 5, nombre: "Objetivo", ruta: "/objetivo", grupo: "Idea", color: "#22d3ee" },
    { sprint: 6, nombre: "Modelo SMART", ruta: "/smart", grupo: "Idea", color: "#22d3ee" },
    { sprint: 7, nombre: "Modelo PART", ruta: "/modelo-part", grupo: "Idea", color: "#22d3ee" },
    { sprint: 8, nombre: "SmartSheet", ruta: "/smartsheet", grupo: "Idea", color: "#22d3ee" },
    // Grupo ANÁLISIS
    { sprint: 9, nombre: "Modelo IDEF0", ruta: "/modelo-idef0", grupo: "Análisis", color: "#a78bfa" },
    { sprint: 10, nombre: "BPMN", ruta: "/bpmn", grupo: "Análisis", color: "#a78bfa" },
    { sprint: 11, nombre: "Caso de Uso", ruta: "/caso-uso", grupo: "Análisis", color: "#a78bfa" },
    { sprint: 12, nombre: "Recursos", ruta: "/recursos", grupo: "Análisis", color: "#a78bfa" },
    { sprint: 13, nombre: "Diagrama Tecnológico", ruta: "/diagrama-tecnologico", grupo: "Análisis", color: "#a78bfa" },
    // Grupo DATOS
    { sprint: 14, nombre: "NotebookLM", ruta: "/notebooklm", grupo: "Datos", color: "#34d399" },
    { sprint: 15, nombre: "Gapminder", ruta: "/gapminder", grupo: "Datos", color: "#34d399" },
    { sprint: 16, nombre: "Tableau", ruta: "/tableau", grupo: "Datos", color: "#34d399" },
    { sprint: 17, nombre: "Especificaciones", ruta: "/especificaciones", grupo: "Datos", color: "#34d399" },
    { sprint: 18, nombre: "Costos", ruta: "/costos", grupo: "Datos", color: "#34d399" },
    { sprint: 19, nombre: "Maquetado", ruta: "/maquetado", grupo: "Datos", color: "#34d399" },
    { sprint: 20, nombre: "Weka", ruta: "/weka", grupo: "Datos", color: "#34d399" },
    { sprint: 21, nombre: "Pitch Elevator", ruta: "/pitch-elevator", grupo: "Datos", color: "#34d399" },
    { sprint: 22, nombre: "Material de Difusión", ruta: "/material-difusion", grupo: "Datos", color: "#34d399" },
    { sprint: 23, nombre: "SCRUM", ruta: "/scrum", grupo: "Datos", color: "#f59e0b" },
];

const GRUPOS = ["Idea", "Análisis", "Datos"] as const;
const GRUPO_COLORS: Record<string, string> = {
    "Idea": "#22d3ee",
    "Análisis": "#a78bfa",
    "Datos": "#34d399",
};

// ─── Pilares ─────────────────────────────────────────────────────────────────
const PILARES = [
    { icon: Flag, color: "#22d3ee", titulo: "Transparencia", desc: "Todos los aspectos del proceso son visibles para los responsables del resultado. Sin información oculta." },
    { icon: Zap, color: "#a78bfa", titulo: "Inspección", desc: "El equipo revisa frecuentemente los artefactos y el progreso hacia el objetivo del Sprint." },
    { icon: RefreshCw, color: "#34d399", titulo: "Adaptación", desc: "Si se detectan desviaciones, el proceso o el producto se ajustan lo antes posible." },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const Scrum = () => {
    const [expandedRol, setExpandedRol] = useState<number | null>(null);
    const [activeGrupo, setActiveGrupo] = useState<string>("Idea");

    const sprintsGrupo = SPRINTS.filter((s) => s.grupo === activeGrupo);

    return (
        <div style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
                @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
                @keyframes scanline { 0%{top:-2px} 100%{top:calc(100% + 2px)} }
                @keyframes rotate-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
            `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section style={{ position: "relative", overflow: "hidden", minHeight: "85vh", display: "flex", alignItems: "center" }}>
                {/* Grid bg */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(167,139,250,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.035) 1px,transparent 1px)", backgroundSize: "56px 56px", zIndex: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 65% at 70% 45%, rgba(167,139,250,0.08) 0%,transparent 65%)", zIndex: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(34,211,238,0.06) 0%,transparent 60%)", zIndex: 0 }} />

                {/* Ghost text */}
                <div style={{ position: "absolute", right: "-2rem", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(12rem, 28vw, 22rem)", fontWeight: 800, color: "rgba(167,139,250,0.025)", lineHeight: 1, userSelect: "none", zIndex: 0 }}>AG</div>

                {/* Corners */}
                <div style={{ position: "absolute", top: 32, left: 32, width: 56, height: 56, borderTop: "2px solid rgba(167,139,250,0.3)", borderLeft: "2px solid rgba(167,139,250,0.3)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 32, right: 32, width: 56, height: 56, borderBottom: "2px solid rgba(34,211,238,0.22)", borderRight: "2px solid rgba(34,211,238,0.22)", zIndex: 1 }} />

                <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "center" }}>

                    {/* Izquierda */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "flex", gap: "0.6rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.35rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.22)", background: "rgba(167,139,250,0.07)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#c4b5fd", letterSpacing: "0.1em" }}>
                                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", display: "inline-block", animation: "blink 1.5s infinite" }} />
                                ETAPA 24 — SCRUM
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.2)", background: "rgba(34,211,238,0.06)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#67e8f9", letterSpacing: "0.08em" }}>
                                <CheckCircle size={10} color="#22d3ee" />
                                23 SPRINTS · 100% COMPLETADO
                            </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.07, marginBottom: "1.25rem" }}>
                            Desarrollo Ágil
                            <br />
                            <span style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "shimmer 5s linear infinite" }}>
                                con Scrum
                            </span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.8, maxWidth: 520, marginBottom: "2.5rem" }}>
                            Este proyecto fue construido aplicando la metodología Scrum. Cada página representa un Sprint completo — desde la concepción de la idea hasta la difusión final.
                        </motion.p>

                        {/* Stats */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                            {[
                                { val: "23", unit: "Sprints completados", color: "#a78bfa" },
                                { val: "3", unit: "Roles Scrum", color: "#22d3ee" },
                                { val: "3", unit: "Fases del proyecto", color: "#34d399" },
                            ].map((s) => (
                                <div key={s.val}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2rem", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}</div>
                                    <div style={{ fontSize: "0.7rem", color: "#475569", letterSpacing: "0.06em", marginTop: "0.3rem" }}>{s.unit}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Derecha: Sprint cycle visual */}
                    <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                        <div style={{ position: "relative", width: 380, height: 380, margin: "0 auto" }}>
                            {/* Outer ring */}
                            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px dashed rgba(167,139,250,0.15)", animation: "rotate-slow 25s linear infinite" }} />
                            <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: "1px dashed rgba(34,211,238,0.1)", animation: "rotate-slow 35s linear infinite reverse" }} />

                            {/* Center */}
                            <div style={{ position: "absolute", inset: 80, borderRadius: "50%", background: "linear-gradient(135deg, rgba(167,139,250,0.1), rgba(34,211,238,0.08))", border: "2px solid rgba(167,139,250,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(167,139,250,0.15)" }}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2.5rem", fontWeight: 700, color: "#a78bfa", lineHeight: 1 }}>2–4</div>
                                <div style={{ fontSize: "0.65rem", color: "#64748b", letterSpacing: "0.1em", marginTop: "0.25rem" }}>SEMANAS</div>
                                <div style={{ fontSize: "0.7rem", color: "#94a3b8", marginTop: "0.4rem", fontWeight: 700 }}>por Sprint</div>
                            </div>

                            {/* Orbit labels */}
                            {[
                                { label: "Planning", angle: -90, color: "#22d3ee", r: 155 },
                                { label: "Daily", angle: 0, color: "#34d399", r: 155 },
                                { label: "Review", angle: 90, color: "#a78bfa", r: 155 },
                                { label: "Retro", angle: 180, color: "#f59e0b", r: 155 },
                            ].map((item) => {
                                const rad = (item.angle * Math.PI) / 180;
                                const x = 190 + item.r * Math.cos(rad);
                                const y = 190 + item.r * Math.sin(rad);
                                return (
                                    <div key={item.label} style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", textAlign: "center" }}>
                                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}12`, border: `1.5px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.3rem", boxShadow: `0 0 16px ${item.color}20` }}>
                                            <Repeat size={16} color={item.color} />
                                        </div>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: item.color, letterSpacing: "0.05em" }}>{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── TABLERO SCRUM (KANBAN) ───────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b", overflowX: "auto" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(34,211,238,0.06)", marginBottom: "1.25rem" }}>
                            <Layers size={11} color="#22d3ee" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee", letterSpacing: "0.1em" }}>TABLERO SCRUM</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            Kanban Board del{" "}
                            <span style={{ color: "#22d3ee" }}>Proyecto</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.9rem", lineHeight: 1.75 }}>
                            Vista general del flujo de trabajo Scrum aplicado — de la idea al incremento completado.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", minWidth: 800 }}>
                        {[
                            {
                                col: "Product Backlog",
                                color: "#38bdf8",
                                count: "24 ítems",
                                cards: [
                                    { label: "Lluvia de Ideas", tag: "Sprint 01" },
                                    { label: "Ishikawa", tag: "Sprint 02" },
                                    { label: "Definición del Problema", tag: "Sprint 03" },
                                    { label: "+ 21 más...", tag: "", faded: true },
                                ],
                            },
                            {
                                col: "Sprint Backlog",
                                color: "#f59e0b",
                                count: "1 ítem activo",
                                cards: [
                                    { label: "SCRUM", tag: "Sprint 24" },
                                    { label: "Documentación del proceso ágil", tag: "Tarea" },
                                    { label: "Revisión final", tag: "Tarea" },
                                ],
                            },
                            {
                                col: "En Progreso",
                                color: "#a78bfa",
                                count: "En curso",
                                cards: [
                                    { label: "Aplicación del framework", tag: "Dev" },
                                    { label: "Roles definidos", tag: "Dev" },
                                ],
                            },
                            {
                                col: "Completado ✓",
                                color: "#34d399",
                                count: "23 entregas",
                                cards: [
                                    { label: "Fase Idea", tag: "8 sprints", done: true },
                                    { label: "Fase Análisis", tag: "5 sprints", done: true },
                                    { label: "Fase Datos", tag: "10 sprints", done: true },
                                ],
                            },
                        ].map((col, ci) => (
                            <motion.div key={col.col} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: ci * 0.1 }} viewport={{ once: true }}>
                                {/* Column header */}
                                <div style={{ padding: "0.75rem 1rem", borderRadius: "0.75rem 0.75rem 0 0", background: `${col.color}10`, border: `1px solid ${col.color}22`, borderBottom: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: 800, fontSize: "0.8rem", color: col.color }}>{col.col}</span>
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#475569" }}>{col.count}</span>
                                </div>
                                {/* Cards */}
                                <div style={{ background: `${col.color}05`, border: `1px solid ${col.color}15`, borderTop: `2px solid ${col.color}40`, borderRadius: "0 0 0.75rem 0.75rem", padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.6rem", minHeight: 220 }}>
                                    {col.cards.map((card, ki) => (
                                        <motion.div key={ki} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: ci * 0.1 + ki * 0.08 }} viewport={{ once: true }} style={{ background: (card as {faded?: boolean}).faded ? "transparent" : "#0f172a", border: `1px solid ${(card as {done?: boolean}).done ? col.color + "30" : "#1e293b"}`, borderRadius: "0.5rem", padding: "0.7rem 0.85rem", opacity: (card as {faded?: boolean}).faded ? 0.4 : 1 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                                    {(card as {done?: boolean}).done && <CheckCircle size={11} color={col.color} style={{ flexShrink: 0, marginTop: 2 }} />}
                                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: (card as {faded?: boolean}).faded ? "#334155" : "#e2e8f0", lineHeight: 1.4 }}>{card.label}</span>
                                                </div>
                                                {card.tag && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: col.color, whiteSpace: "nowrap", padding: "0.15rem 0.45rem", borderRadius: "9999px", border: `1px solid ${col.color}22`, background: `${col.color}08` }}>{card.tag}</span>}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUÉ ES SCRUM ─────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.22)", background: "rgba(167,139,250,0.06)", marginBottom: "1.25rem" }}>
                            <BookOpen size={11} color="#a78bfa" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a78bfa", letterSpacing: "0.1em" }}>¿QUÉ ES SCRUM?</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
                            Un Framework para{" "}
                            <span style={{ color: "#a78bfa" }}>Trabajo en Equipo</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 640, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.85 }}>
                            Scrum es un framework ágil que permite a equipos pequeños desarrollar y entregar productos complejos de forma iterativa e incremental. Divide el trabajo en <strong style={{ color: "#94a3b8" }}>Sprints</strong> de duración fija, permitiendo inspeccionar y adaptar constantemente el proceso.
                        </p>
                    </motion.div>

                    {/* 3 pilares */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {PILARES.map((p, i) => (
                            <motion.div key={p.titulo} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }} whileHover={{ y: -5 }} style={{ background: "#0f172a", border: `1px solid ${p.color}18`, borderRadius: "1rem", padding: "2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, opacity: 0.55 }} />
                                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${p.color}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", border: `1.5px solid ${p.color}22`, boxShadow: `0 0 20px ${p.color}15` }}>
                                    <p.icon size={24} color={p.color} />
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.75rem", color: p.color }}>{p.titulo}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.87rem", lineHeight: 1.75 }}>{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ROLES ────────────────────────────────────────────────────── */}
            <section style={{ padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(34,211,238,0.06)", marginBottom: "1.25rem" }}>
                            <User size={11} color="#22d3ee" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#22d3ee", letterSpacing: "0.1em" }}>ROLES DEL EQUIPO</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            El Equipo{" "}
                            <span style={{ color: "#22d3ee" }}>Scrum</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {ROLES.map((rol, i) => (
                            <motion.div key={rol.titulo} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }}>
                                <div style={{ background: "#080f1f", border: `1px solid ${rol.color}18`, borderRadius: "1rem", overflow: "hidden" }}>
                                    {/* Header */}
                                    <div style={{ padding: "1.75rem 2rem", borderBottom: `1px solid ${rol.color}12`, position: "relative" }}>
                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: rol.color, opacity: 0.55 }} />
                                        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "0.75rem", background: `${rol.color}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${rol.color}22`, boxShadow: `0 0 18px ${rol.color}18` }}>
                                                <rol.icon size={22} color={rol.color} />
                                            </div>
                                            <div>
                                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: rol.color, letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{rol.titulo}</div>
                                                <div style={{ fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.3 }}>{rol.nombre}</div>
                                                <span style={{ display: "inline-block", marginTop: "0.4rem", fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#475569", padding: "0.2rem 0.6rem", borderRadius: "9999px", border: "1px solid #1e293b", background: "#0f172a" }}>{rol.badge}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Descripción */}
                                    <div style={{ padding: "1.25rem 2rem" }}>
                                        <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>{rol.descripcion}</p>

                                        {/* Toggle responsabilidades */}
                                        <button onClick={() => setExpandedRol(expandedRol === i ? null : i)} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "none", border: "none", cursor: "pointer", color: rol.color, fontSize: "0.78rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, padding: 0, marginBottom: "0.75rem" }}>
                                            Responsabilidades
                                            <motion.span animate={{ rotate: expandedRol === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                                <ChevronDown size={14} />
                                            </motion.span>
                                        </button>

                                        <AnimatePresence>
                                            {expandedRol === i && (
                                                <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} style={{ listStyle: "none", padding: 0, margin: 0, overflow: "hidden" }}>
                                                    {rol.responsabilidades.map((r) => (
                                                        <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.5rem" }}>
                                                            <CheckCircle size={13} color={rol.color} style={{ flexShrink: 0, marginTop: 2 }} />
                                                            <span style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.6 }}>{r}</span>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EQUIPO EN FOTOS ──────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(52,211,153,0.22)", background: "rgba(52,211,153,0.06)", marginBottom: "1.25rem" }}>
                            <Users size={11} color="#34d399" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#34d399", letterSpacing: "0.1em" }}>EL EQUIPO</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            Las Personas{" "}
                            <span style={{ color: "#34d399" }}>detrás del Proyecto</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", justifyItems: "center" }}>
                        {/* Product Owner — sin foto */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -6 }} style={{ width: "100%", maxWidth: 300, background: "#0f172a", border: "1px solid rgba(34,211,238,0.18)", borderRadius: "1.25rem", overflow: "hidden", position: "relative" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#22d3ee", opacity: 0.6 }} />
                            <div style={{ height: 220, background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(6,182,212,0.04))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", borderBottom: "1px solid rgba(34,211,238,0.1)" }}>
                                <div style={{ width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(6,182,212,0.1))", border: "2px solid rgba(34,211,238,0.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(34,211,238,0.2)", animation: "float-y 4s ease-in-out infinite" }}>
                                    <GraduationCap size={40} color="#22d3ee" />
                                </div>
                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#22d3ee", letterSpacing: "0.1em", padding: "0.3rem 0.8rem", borderRadius: "9999px", border: "1px solid rgba(34,211,238,0.22)", background: "rgba(34,211,238,0.06)" }}>PRODUCT OWNER</span>
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                <div style={{ fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.3rem" }}>Ing. Yamil Cardenas</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#22d3ee", marginBottom: "0.75rem" }}>Docente · UCB</div>
                                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.65 }}>Define la visión del producto y prioriza el backlog para maximizar el valor de cada entrega.</p>
                            </div>
                        </motion.div>

                        {/* Scrum Master — Franz */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} viewport={{ once: true }} whileHover={{ y: -6 }} style={{ width: "100%", maxWidth: 300, background: "#0f172a", border: "1px solid rgba(167,139,250,0.18)", borderRadius: "1.25rem", overflow: "hidden", position: "relative" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#a78bfa", opacity: 0.6 }} />
                            <div style={{ height: 220, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(167,139,250,0.1)" }}>
                                <img src={FOTO_FRANZ} alt="Franz Ramos" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(20%) brightness(0.85)" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 50%)" }} />
                                <span style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#a78bfa", letterSpacing: "0.1em", padding: "0.3rem 0.8rem", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.3)", background: "rgba(15,23,42,0.7)", whiteSpace: "nowrap" }}>SCRUM MASTER</span>
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                <div style={{ fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.3rem" }}>Franz Eliot Ramos Huacara</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#a78bfa", marginBottom: "0.75rem" }}>Scrum Master · Equipo</div>
                                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.65 }}>Facilita las ceremonias, elimina impedimentos y protege al equipo para mantener el ritmo del Sprint.</p>
                            </div>
                        </motion.div>

                        {/* Dev Team — Jaime */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} viewport={{ once: true }} whileHover={{ y: -6 }} style={{ width: "100%", maxWidth: 300, background: "#0f172a", border: "1px solid rgba(52,211,153,0.18)", borderRadius: "1.25rem", overflow: "hidden", position: "relative" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#34d399", opacity: 0.6 }} />
                            <div style={{ height: 220, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(52,211,153,0.1)" }}>
                                <img src={FOTO_JAIME} alt="Jaime Huaycho" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(20%) brightness(0.85)" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 50%)" }} />
                                <span style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#34d399", letterSpacing: "0.1em", padding: "0.3rem 0.8rem", borderRadius: "9999px", border: "1px solid rgba(52,211,153,0.3)", background: "rgba(15,23,42,0.7)", whiteSpace: "nowrap" }}>DEVELOPMENT TEAM</span>
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                <div style={{ fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.3rem" }}>Jaime Ignacio Huaycho Clavel</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#34d399", marginBottom: "0.75rem" }}>Developer · Equipo</div>
                                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.65 }}>Diseña, desarrolla y entrega los incrementos del producto — una página por Sprint.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CEREMONIAS ───────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(52,211,153,0.22)", background: "rgba(52,211,153,0.06)", marginBottom: "1.25rem" }}>
                            <Calendar size={11} color="#34d399" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#34d399", letterSpacing: "0.1em" }}>CEREMONIAS SCRUM</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            Eventos del{" "}
                            <span style={{ color: "#34d399" }}>Sprint</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.25rem" }}>
                        {CEREMONIAS.map((c, i) => (
                            <motion.div key={c.nombre} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} style={{ background: "#0f172a", border: `1px solid ${c.color}18`, borderRadius: "0.875rem", padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${c.color}, transparent)`, opacity: 0.7 }} />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                                    <div style={{ width: 42, height: 42, borderRadius: "0.65rem", background: `${c.color}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${c.color}20` }}>
                                        <c.icon size={18} color={c.color} />
                                    </div>
                                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: c.color, padding: "0.25rem 0.6rem", borderRadius: "9999px", border: `1px solid ${c.color}22`, background: `${c.color}08` }}>{c.duracion}</span>
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{c.nombre}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.7 }}>{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ARTEFACTOS ───────────────────────────────────────────────── */}
            <section style={{ padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(251,113,133,0.22)", background: "rgba(251,113,133,0.06)", marginBottom: "1.25rem" }}>
                            <Layers size={11} color="#fb7185" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#fb7185", letterSpacing: "0.1em" }}>ARTEFACTOS</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            Herramientas de{" "}
                            <span style={{ color: "#fb7185" }}>Transparencia</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {ARTEFACTOS.map((a, i) => (
                            <motion.div key={a.nombre} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12 }} viewport={{ once: true }} whileHover={{ y: -5 }} style={{ background: "#080f1f", border: `1px solid ${a.color}18`, borderRadius: "1rem", padding: "2rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", bottom: "-1.5rem", right: "1rem", fontFamily: "'Space Mono', monospace", fontSize: "5rem", fontWeight: 700, color: `${a.color}06`, lineHeight: 1, userSelect: "none" }}>0{i + 1}</div>
                                <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: `${a.color}10`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", border: `1px solid ${a.color}22` }}>
                                    <a.icon size={22} color={a.color} />
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.75rem", color: a.color }}>{a.nombre}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>{a.desc}</p>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {a.items.map((item) => (
                                        <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.color, flexShrink: 0, boxShadow: `0 0 6px ${a.color}` }} />
                                            <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VELOCIDAD POR FASE ───────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(251,191,36,0.22)", background: "rgba(251,191,36,0.06)", marginBottom: "1.25rem" }}>
                            <TrendingUp size={11} color="#f59e0b" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#f59e0b", letterSpacing: "0.1em" }}>VELOCIDAD DEL EQUIPO</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            Sprints por{" "}
                            <span style={{ color: "#f59e0b" }}>Fase</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.9rem", lineHeight: 1.75 }}>
                            Distribución de la carga de trabajo a lo largo de las tres grandes fases del proyecto.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
                        {/* Bar chart */}
                        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ background: "#0f172a", borderRadius: "1.25rem", padding: "2rem", border: "1px solid #1e293b" }}>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5rem", height: 200, justifyContent: "center", marginBottom: "1.5rem" }}>
                                {[
                                    { label: "Idea", sprints: 8, color: "#22d3ee", pct: 80 },
                                    { label: "Análisis", sprints: 5, color: "#a78bfa", pct: 50 },
                                    { label: "Datos", sprints: 11, color: "#34d399", pct: 100 },
                                ].map((fase, i) => (
                                    <div key={fase.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem", flex: 1 }}>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", fontWeight: 700, color: fase.color }}>{fase.sprints}</span>
                                        <div style={{ width: "100%", height: 180, display: "flex", alignItems: "flex-end", background: `${fase.color}06`, borderRadius: "0.5rem 0.5rem 0 0", border: `1px solid ${fase.color}15`, borderBottom: "none", position: "relative", overflow: "hidden" }}>
                                            <motion.div initial={{ height: 0 }} whileInView={{ height: `${fase.pct}%` }} transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }} viewport={{ once: true }} style={{ width: "100%", background: `linear-gradient(to top, ${fase.color}, ${fase.color}60)`, borderRadius: "0.4rem 0.4rem 0 0", boxShadow: `0 -4px 20px ${fase.color}30`, position: "absolute", bottom: 0 }} />
                                        </div>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#64748b" }}>{fase.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1rem", display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#475569" }}>TOTAL</span>
                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#34d399", fontWeight: 700 }}>24 sprints</span>
                            </div>
                        </motion.div>

                        {/* Stats cards */}
                        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                { fase: "Fase Idea", sprints: 8, pct: "33%", color: "#22d3ee", desc: "Ideación, definición del problema y planificación estratégica del proyecto." },
                                { fase: "Fase Análisis", sprints: 5, pct: "21%", color: "#a78bfa", desc: "Modelado técnico: IDEF0, BPMN, casos de uso y diagrama tecnológico." },
                                { fase: "Fase Datos", sprints: 11, pct: "46%", color: "#34d399", desc: "Análisis de datos, visualización, costos, maquetado, pitch y difusión." },
                            ].map((f, i) => (
                                <motion.div key={f.fase} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }} viewport={{ once: true }} style={{ display: "flex", gap: "1rem", alignItems: "center", background: "#0f172a", border: `1px solid ${f.color}15`, borderRadius: "0.875rem", padding: "1.25rem", position: "relative", overflow: "hidden" }}>
                                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: f.color, borderRadius: "0.875rem 0 0 0.875rem" }} />
                                    <div style={{ marginLeft: "0.5rem", flex: 1 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                                            <span style={{ fontWeight: 800, fontSize: "0.88rem" }}>{f.fase}</span>
                                            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: f.color, fontWeight: 700 }}>{f.sprints} sprints</span>
                                                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#475569" }}>{f.pct}</span>
                                            </div>
                                        </div>
                                        <div style={{ height: 4, background: "rgba(255,255,255,0.04)", borderRadius: 9999, marginBottom: "0.5rem" }}>
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: f.pct }} transition={{ duration: 1.1, delay: 0.3 + i * 0.1 }} viewport={{ once: true }} style={{ height: "100%", background: f.color, borderRadius: 9999, boxShadow: `0 0 8px ${f.color}50` }} />
                                        </div>
                                        <p style={{ fontSize: "0.75rem", color: "#64748b", lineHeight: 1.5 }}>{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SCRUM ───────────────────────────────────────────────── */}
            <section style={{ padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(251,113,133,0.22)", background: "rgba(251,113,133,0.06)", marginBottom: "1.25rem" }}>
                            <Play size={11} color="#fb7185" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#fb7185", letterSpacing: "0.1em" }}>¿QUÉ ES SCRUM? — VIDEO</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            Scrum explicado{" "}
                            <span style={{ color: "#fb7185" }}>en video</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 500, margin: "1rem auto 0", fontSize: "0.9rem", lineHeight: 1.75 }}>
                            Una introducción visual y práctica al framework Scrum y su aplicación en proyectos reales.
                        </p>
                    </motion.div>

                    {/* VIDEO — reemplaza VIDEO_URL con el embed de YouTube que quieras */}
                    {(() => {
                        const VIDEO_URL = "https://www.youtube.com/embed/gX6-px8bmLE?si=3quxvaPy8xB36_fs";
                        return VIDEO_URL ? (
                            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ position: "relative", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(251,113,133,0.15)", boxShadow: "0 0 50px rgba(251,113,133,0.08)" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #fb7185, transparent)" }} />
                                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                                    <iframe src={VIDEO_URL} title="¿Qué es Scrum?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ borderRadius: "1.25rem", border: "1px dashed rgba(251,113,133,0.25)", background: "rgba(251,113,133,0.04)", padding: "4rem 2rem", textAlign: "center" }}>
                                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(251,113,133,0.1)", border: "1px solid rgba(251,113,133,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                                    <Play size={28} color="#fb7185" />
                                </div>
                                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#475569" }}>Pegá el código embed de YouTube aquí<br /><span style={{ color: "#fb7185" }}>VIDEO_URL</span> en Scrum.tsx · línea ~520</p>
                            </motion.div>
                        );
                    })()}
                </div>
            </section>

            {/* ── SPRINTS DEL PROYECTO ─────────────────────────────────────── */}
            <section style={{ background: "#080f1f", padding: "5.5rem 2rem", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.9rem", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.22)", background: "rgba(167,139,250,0.06)", marginBottom: "1.25rem" }}>
                            <Flag size={11} color="#a78bfa" />
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a78bfa", letterSpacing: "0.1em" }}>SPRINTS DEL PROYECTO</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                            23 Sprints,{" "}
                            <span style={{ color: "#a78bfa" }}>23 Entregas</span>
                        </h2>
                        <p style={{ color: "#64748b", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.9rem", lineHeight: 1.75 }}>
                            Cada página del sitio representa un incremento entregado al final de su Sprint. Filtrá por fase para ver el detalle.
                        </p>
                    </motion.div>

                    {/* Barra de progreso total */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem", background: "#0f172a", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", border: "1px solid #1e293b", display: "flex", gap: "1.5rem", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#475569", whiteSpace: "nowrap" }}>PROGRESO TOTAL</span>
                        <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 9999, overflow: "hidden" }}>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5 }} viewport={{ once: true }} style={{ height: "100%", background: "linear-gradient(90deg, #22d3ee, #a78bfa, #34d399)", borderRadius: 9999 }} />
                        </div>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#34d399", fontWeight: 700, whiteSpace: "nowrap" }}>23 / 23 ✓</span>
                    </motion.div>

                    {/* Filtros por grupo */}
                    <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                        {GRUPOS.map((g) => (
                            <button key={g} onClick={() => setActiveGrupo(g)} style={{ padding: "0.5rem 1.25rem", borderRadius: "9999px", border: `1px solid ${activeGrupo === g ? GRUPO_COLORS[g] : "#1e293b"}`, background: activeGrupo === g ? `${GRUPO_COLORS[g]}12` : "transparent", color: activeGrupo === g ? GRUPO_COLORS[g] : "#475569", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", fontWeight: 700, cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.2s" }}>
                                {g.toUpperCase()}
                                <span style={{ marginLeft: "0.5rem", opacity: 0.7 }}>({SPRINTS.filter((s) => s.grupo === g).length})</span>
                            </button>
                        ))}
                    </div>

                    {/* Grid de sprints */}
                    <AnimatePresence mode="wait">
                        <motion.div key={activeGrupo} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
                            {sprintsGrupo.map((s, i) => (
                                <motion.a key={s.sprint} href={s.ruta} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.06 }} whileHover={{ y: -4, boxShadow: `0 0 20px ${s.color}18` }} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "#0f172a", border: `1px solid ${s.color}18`, borderRadius: "0.875rem", padding: "1.25rem", textDecoration: "none", color: "inherit", cursor: "pointer", transition: "box-shadow 0.3s", position: "relative", overflow: "hidden" }}>
                                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: s.color, opacity: 0.5 }} />
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: s.color }}>SPRINT {String(s.sprint).padStart(2, "0")}</span>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                            <CheckCircle size={12} color="#34d399" />
                                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#34d399" }}>DONE</span>
                                        </div>
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: "0.88rem", lineHeight: 1.4 }}>{s.nombre}</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#475569", fontSize: "0.72rem" }}>
                                        <ExternalLink size={11} />
                                        <span style={{ fontFamily: "'Space Mono', monospace" }}>Ver entrega</span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── CONCLUSIÓN ───────────────────────────────────────────────── */}
            <section style={{ padding: "5.5rem 2rem" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div style={{ position: "relative", background: "linear-gradient(145deg, rgba(167,139,250,0.06), rgba(34,211,238,0.06))", border: "1px solid rgba(167,139,250,0.18)", borderRadius: "1.5rem", padding: "3.5rem 2.5rem", textAlign: "center", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 2, background: "linear-gradient(90deg, transparent, #a78bfa, #22d3ee, transparent)" }} />

                            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(34,211,238,0.1))", border: "2px solid rgba(167,139,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.75rem", boxShadow: "0 0 30px rgba(167,139,250,0.2)" }}>
                                <ArrowRight size={28} color="#a78bfa" />
                            </div>

                            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
                                Scrum como{" "}
                                <span style={{ background: "linear-gradient(135deg,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    motor del proyecto
                                </span>
                            </h2>

                            <p style={{ color: "#64748b", maxWidth: 520, margin: "0 auto 2rem", fontSize: "0.92rem", lineHeight: 1.85 }}>
                                Aplicar Scrum nos permitió avanzar de forma ordenada y visible. Cada Sprint entregó valor concreto: una página funcional, publicada y accesible. El rol del <strong style={{ color: "#22d3ee" }}>Ing. Yamil Cardenas</strong> como Product Owner aseguró que cada entrega tuviera propósito académico real, mientras que el equipo mantuvo ritmo y calidad durante los 23 sprints del proyecto.
                            </p>

                            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                                {[
                                    { label: "Entrega iterativa", color: "#22d3ee" },
                                    { label: "Inspección continua", color: "#a78bfa" },
                                    { label: "Adaptación constante", color: "#34d399" },
                                    { label: "Valor en cada Sprint", color: "#f59e0b" },
                                ].map((tag) => (
                                    <span key={tag.label} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: tag.color, padding: "0.3rem 0.8rem", borderRadius: "9999px", border: `1px solid ${tag.color}22`, background: `${tag.color}08` }}>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
