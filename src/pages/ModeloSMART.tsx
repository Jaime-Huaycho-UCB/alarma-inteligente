import { motion } from "framer-motion";
import { Target, BarChart3, Cpu, Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
  hero:     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80", // matrix / código
  circuit:  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",  // circuito electrónico
  lab:      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",  // laboratorio / prototipo
  security: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",     // seguridad
  data:     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",     // dashboard / métricas
  phone:    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",  // celular
  team:     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",  // sala de control
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
  { src: IMGS.circuit,  title: "Hardware electrónico",   desc: "Circuitos integrados y sensores que forman el núcleo físico del sistema de alarma." },
  { src: IMGS.lab,      title: "Prototipado y pruebas",  desc: "Validación en entorno real del sistema, ajustando parámetros de sensibilidad y respuesta." },
  { src: IMGS.phone,    title: "Alertas en tiempo real", desc: "Notificaciones push enviadas al celular del propietario en menos de 5 segundos." },
];

// ─── SMART detail card ───────────────────────────────────────────────────────
function SmartCard({ s, i }: { s: typeof smart[0]; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        background: "#0f172a",
        border: `1px solid ${s.color}22`,
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}18`)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Image */}
      <div style={{ height: 140, overflow: "hidden", position: "relative" }}>
        <motion.img
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
          src={s.img}
          alt={s.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, #0f172a 10%, transparent 65%)` }} />

        {/* Big letter */}
        <div style={{
          position: "absolute", top: "0.25rem", left: "0.75rem",
          fontFamily: "'Space Mono', monospace", fontSize: "4.5rem",
          fontWeight: 700, color: `${s.color}22`, lineHeight: 1, userSelect: "none",
        }}>{s.letter}</div>

        {/* Icon badge */}
        <div style={{
          position: "absolute", bottom: "0.75rem", right: "0.75rem",
          width: 36, height: 36, borderRadius: "0.4rem",
          background: `${s.color}20`, border: `1px solid ${s.color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: s.color,
        }}>
          <Icon size={16} />
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.4rem", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.letter}</span>
          <div>
            <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Syne', sans-serif" }}>{s.title}</div>
            <div style={{ color: "#475569", fontSize: "0.7rem", fontFamily: "'Space Mono', monospace" }}>{s.label}</div>
          </div>
        </div>

        <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.7, flex: 1 }}>{s.text}</p>

        {/* KPI chip */}
        <div style={{
          padding: "0.35rem 0.75rem", borderRadius: "0.4rem",
          background: `${s.color}10`, border: `1px solid ${s.color}25`,
          fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: s.color,
          alignSelf: "flex-start"
        }}>{s.kpi}</div>
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const ModeloSMART = () => {
  return (
    <div style={{ background: "#020617", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: 440, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img
          src={IMGS.hero}
          alt="hero"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.18) saturate(0.4) hue-rotate(160deg)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(2,6,23,0.3), rgba(2,6,23,0.97))" }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />

        {/* SMART letters background */}
        <div style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", display: "flex", gap: "0.15rem", opacity: 0.04, userSelect: "none" }}>
          {smart.map(s => (
            <div key={s.letter} style={{ fontFamily: "'Space Mono', monospace", fontSize: "7rem", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.letter}</div>
          ))}
        </div>

        {[
          { top: 32, left: 32, borderTop: "2px solid #22d3ee", borderLeft: "2px solid #22d3ee" },
          { top: 32, right: 32, borderTop: "2px solid #22d3ee", borderRight: "2px solid #22d3ee" },
          { bottom: 32, left: 32, borderBottom: "2px solid #22d3ee", borderLeft: "2px solid #22d3ee" },
          { bottom: 32, right: 32, borderBottom: "2px solid #22d3ee", borderRight: "2px solid #22d3ee" },
        ].map((s, i) => (
          <div key={i} style={{ position: "absolute", width: 48, height: 48, opacity: 0.4, ...s }} />
        ))}

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "5rem 2rem 4rem", maxWidth: 820 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.3rem 1rem", border: "1px solid rgba(34,211,238,0.3)",
              borderRadius: "9999px", marginBottom: "1.5rem",
              fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
              color: "#67e8f9", background: "rgba(6,182,212,0.08)",
            }}
          >
            <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", animation: "blink 1.5s infinite" }} />
            ETAPA 07 — MODELO SMART
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.25rem" }}
          >
            Modelo{" "}
            <span style={{ background: "linear-gradient(90deg,#22d3ee,#34d399,#f59e0b,#a78bfa,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              SMART
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ maxWidth: 620, margin: "0 auto", color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.8 }}
          >
            Herramienta que permite definir objetivos claros, medibles y alcanzables para el
            desarrollo del sistema de alarma inteligente para viviendas.
          </motion.p>

          {/* SMART pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginTop: "2rem", flexWrap: "wrap" }}
          >
            {smart.map(s => (
              <div key={s.letter} style={{
                display: "flex", alignItems: "center", gap: "0.35rem",
                padding: "0.3rem 0.8rem", borderRadius: "9999px",
                border: `1px solid ${s.color}40`, background: `${s.color}10`,
              }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, color: s.color, fontSize: "0.85rem" }}>{s.letter}</span>
                <span style={{ color: "#64748b", fontSize: "0.72rem" }}>{s.label}</span>
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
            <div style={{ fontFamily: "'Space Mono', monospace", color: "#22d3ee", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>// VIDEO EXPLICATIVO</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>Explicación del Modelo SMART</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              borderRadius: "1rem", overflow: "hidden",
              border: "1px solid rgba(34,211,238,0.2)",
              boxShadow: "0 0 60px rgba(6,182,212,0.08)",
              aspectRatio: "16/9"
            }}
          >
            <iframe
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              src="https://www.youtube.com/embed/1-SvuFIQjK8"
              title="Modelo SMART"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>


      {/* ── SMART CARDS ──────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", color: "#22d3ee", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>// ESTRUCTURA</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>Componentes del Modelo SMART</h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Cada letra define una dimensión del objetivo del proyecto.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.1rem" }}>
          {smart.map((s, i) => <SmartCard key={i} s={s} i={i} />)}
        </div>
      </section>


      {/* ── OBJETIVO SMART COMPLETO ───────────────────────────────────────── */}
      <section style={{ background: "#080f1f", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{ fontFamily: "'Space Mono', monospace", color: "#22d3ee", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>// OBJETIVO INTEGRADO</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>Objetivo SMART del proyecto</h2>
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
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #22d3ee 20%, #34d399 40%, #f59e0b 60%, #a78bfa 80%, transparent)" }} />
            <div style={{ position: "absolute", top: "1rem", left: "2rem", fontSize: "6rem", color: "rgba(34,211,238,0.04)", fontFamily: "serif", lineHeight: 1, userSelect: "none" }}>"</div>

            <p style={{ color: "#cbd5e1", lineHeight: 2, fontSize: "1.05rem", position: "relative", zIndex: 1 }}>
              Desarrollar un{" "}
              <span style={{ color: "#22d3ee", fontWeight: 600 }}>sistema de alarma antirrobo inteligente</span>{" "}
              basado en sensores de movimiento y tecnología Arduino capaz de{" "}
              <span style={{ color: "#34d399", fontWeight: 600 }}>detectar intrusos</span>{" "}
              dentro de una vivienda y enviar una{" "}
              <span style={{ color: "#f59e0b", fontWeight: 600 }}>alerta automática al teléfono del propietario en menos de 5 segundos</span>,
              utilizando{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>componentes Arduino accesibles y de bajo costo</span>,
              implementando un prototipo funcional en un periodo máximo de{" "}
              <span style={{ color: "#fb7185", fontWeight: 600 }}>4 semanas</span>.
            </p>

            {/* Color legend */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(34,211,238,0.1)", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {smart.map(s => (
                <div key={s.letter} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#475569" }}>{s.letter}: {s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── OBJETIVOS ESPECÍFICOS ────────────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", color: "#22d3ee", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>// METAS CONCRETAS</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>Objetivos específicos del proyecto</h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Cada objetivo representa un entregable concreto del sistema.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {objetivos.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                display: "flex", alignItems: "center", gap: "1.5rem",
                background: "#0f172a",
                border: `1px solid ${o.color}18`,
                borderRadius: "0.85rem",
                padding: "1.25rem 1.5rem",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${o.color}40`;
                e.currentTarget.style.boxShadow = `0 8px 30px ${o.color}10`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${o.color}18`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Number */}
              <div style={{
                minWidth: 44, height: 44, borderRadius: "0.5rem",
                background: `${o.color}15`, border: `1px solid ${o.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Space Mono', monospace", fontWeight: 700,
                color: o.color, fontSize: "0.75rem", flexShrink: 0,
              }}>{o.n}</div>

              <CheckCircle2 size={18} style={{ color: o.color, flexShrink: 0 }} />

              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.6 }}>{o.text}</p>

              <ArrowRight size={16} style={{ color: o.color, flexShrink: 0, opacity: 0.4, marginLeft: "auto" }} />
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
            <div style={{ fontFamily: "'Space Mono', monospace", color: "#22d3ee", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>// IMPLEMENTACIÓN</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>Tecnología utilizada en el sistema</h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {techImgs.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(34,211,238,0.12)", background: "#0f172a" }}
              >
                <div style={{ height: 210, overflow: "hidden", position: "relative" }}>
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    src={t.src}
                    alt={t.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0f172a 10%, transparent 55%)" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h4 style={{ color: "#22d3ee", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{t.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(34,211,238,0.08)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", color: "#475569", fontSize: "0.75rem", letterSpacing: "0.18em", marginBottom: "1rem" }}>// PROYECTO COMPLETADO</div>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>Explorar desde el inicio</h2>
          <p style={{ color: "#64748b", maxWidth: 440, margin: "0 auto 2rem", fontSize: "0.9rem" }}>
            Has completado todas las etapas del proyecto. Vuelve al inicio para explorar el sistema completo.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block", padding: "0.85rem 2rem",
              background: "linear-gradient(135deg,#06b6d4,#0891b2)",
              color: "#fff", borderRadius: "0.5rem", fontWeight: 700,
              textDecoration: "none", fontSize: "0.9rem",
              boxShadow: "0 0 30px rgba(6,182,212,0.3)"
            }}
          >
            Volver al inicio →
          </a>
        </motion.div>
      </section>

    </div>
  );
};