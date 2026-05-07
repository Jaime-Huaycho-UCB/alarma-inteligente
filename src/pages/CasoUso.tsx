import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
    Users,
    Cpu,
    Zap,
    Radio,
    AlertTriangle,
    Phone,
    Lock,
    Settings,
    CheckCircle,
    ArrowRight,
    WifiIcon,
} from "lucide-react";
import casoUsoImg from "../assets/caso-uso.png";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    usecase:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    user: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    circuit:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    control:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    sensor: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80",
    smartphone:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    installation:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
};

// ─── Actores del sistema ─────────────────────────────────────────────────────
const actores = [
    {
        icon: Users,
        title: "Usuario (Propietario)",
        desc: "Es la persona que interactúa directamente con el sistema para Armar (activar) o Desarmar (desactivar) la alarma usando un teclado, control remoto o app. Su objetivo principal es asegurar su propiedad.",
        color: "#22d3ee",
        img: IMGS.user,
        role: "Actor Principal",
    },
    {
        icon: Radio,
        title: "Sensor PIR (Movimiento)",
        desc: 'Es el "ojo" del sistema en interiores. Detecta cambios en la radiación infrarroja causados por el movimiento de una persona. Cuando detecta algo, envía una señal digital al Arduino indicando una posible intrusión.',
        color: "#34d399",
        img: IMGS.sensor,
        role: "Sensor de Entrada",
    },
    {
        icon: Lock,
        title: "Sensor de Apertura (Magnético)",
        desc: 'Es el "centinela" de puertas y ventanas. Consta de un imán y un interruptor reed. Si se separan (la puerta se abre estando armada), envía una señal inmediata al Arduino.',
        color: "#f59e0b",
        img: IMGS.sensor,
        role: "Sensor de Entrada",
    },
    {
        icon: Cpu,
        title: "Arduino (Controlador Central)",
        desc: 'Es el "cerebro". Recibe y procesa todas las señales de los sensores. Si el sistema está armado y recibe una señal de intrusión, ejecuta la lógica programada para activar los actuadores (Sirena/Alerta).',
        color: "#a78bfa",
        img: IMGS.circuit,
        role: "Controlador",
    },
    {
        icon: Zap,
        title: "Sirena (Aviso Acústico)",
        desc: "Es el disuasor inmediato. El Arduino la activa para generar un sonido estridente que alerte a los vecinos y asuste al intruso.",
        color: "#fb7185",
        img: IMGS.control,
        role: "Actuador",
    },
    {
        icon: Settings,
        title: "Instalador / Técnico",
        desc: "Se encarga del montaje físico, la conexión eléctrica de los sensores y la carga del código (sketch) inicial en el Arduino. También configura parámetros como los tiempos de entrada/salida y códigos de seguridad.",
        color: "#fbbf24",
        img: IMGS.installation,
        role: "Actor Secundario",
    },
    {
        icon: WifiIcon,
        title: "Sistema de Alerta (GSM/WiFi)",
        desc: "Es la vía de comunicación externa. Si se incluye (por ejemplo, un módulo SIM800L o ESP8266), permite que el Arduino envíe un SMS o una notificación push al teléfono del propietario cuando se dispara la alarma.",
        color: "#22d3ee",
        img: IMGS.smartphone,
        role: "Sistema Externo",
    },
];

// ─── Casos de uso principales ────────────────────────────────────────────────
const casosDeUso = [
    {
        num: "01",
        title: "Configurar parámetros",
        desc: "El técnico o propietario configura parámetros del sistema como sensibilidad de sensores, tiempos de retardo, códigos de acceso y modo operativo.",
        actors: ["Instalador / Técnico", "Arduino"],
        color: "#22d3ee",
        steps: [
            "Acceder al panel de configuración",
            "Ajustar sensibilidad de sensores PIR",
            "Establecer tiempos de entrada/salida",
            "Guardar configuración en Arduino",
        ],
    },
    {
        num: "02",
        title: "Armar/Desarmar sistema",
        desc: "El propietario activa o desactiva el sistema de alarma mediante contraseña, control remoto, o aplicación móvil. El Arduino registra el estado.",
        actors: ["Usuario (Propietario)", "Arduino"],
        color: "#34d399",
        steps: [
            "Ingresar código o usar control remoto",
            "Arduino valida la autenticación",
            "Cambio de estado del sistema",
            "Confirmación visual/sonora",
        ],
    },
    {
        num: "03",
        title: "Detectar intrusión",
        desc: "Los sensores PIR y magnéticos detectan movimiento o apertura. El Arduino procesa las señales y determina si hay una intrusión real.",
        actors: ["Sensor PIR", "Sensor de Apertura", "Arduino"],
        color: "#f59e0b",
        steps: [
            "Sensor detecta movimiento o apertura",
            "Envía señal al Arduino",
            "Arduino valida detección con lógica",
            "Confirma intrusión si es válida",
        ],
    },
    {
        num: "04",
        title: "Enviar alerta",
        desc: "Cuando se detecta una intrusión, el Arduino activa la sirena y envía notificaciones al propietario a través de WiFi/GSM.",
        actors: ["Arduino", "Sirena", "Sistema de Alerta"],
        color: "#a78bfa",
        steps: [
            "Arduino detecta intrusión confirmada",
            "Activa sirena de 85 dB",
            "Envía alerta por WiFi/SMS",
            "Registra evento en log del sistema",
        ],
    },
];

// ─── Flujo del sistema ────────────────────────────────────────────────────────
const flujoSistema = [
    {
        step: "1",
        title: "Armado",
        desc: "Usuario activa el sistema. Arduino entra en modo vigilancia.",
        icon: Lock,
        color: "#22d3ee",
    },
    {
        step: "2",
        title: "Monitoreo",
        desc: "Sensores PIR y magnéticos operan continuamente detectando cambios.",
        icon: Radio,
        color: "#34d399",
    },
    {
        step: "3",
        title: "Alerta",
        desc: "Detección confirma intrusión. Sirena suena inmediatamente.",
        icon: AlertTriangle,
        color: "#f59e0b",
    },
    {
        step: "4",
        title: "Notificación",
        desc: "Sistema envía SMS/Push al propietario en tiempo real.",
        icon: Phone,
        color: "#a78bfa",
    },
];

// ─── Definición de caso de uso ───────────────────────────────────────────────
const definicionCasoUso = {
    title: "¿Qué es un Caso de Uso?",
    description:
        "Un caso de uso es una descripción de cómo un usuario (o actor) interactúa con un sistema para lograr un objetivo específico. Es una narrativa que documenta las acciones y reacciones entre el usuario y el sistema, mostrando el flujo de eventos desde el inicio hasta el final.",
    caracteristicas: [
        "Define interacciones entre actores y el sistema",
        "Describe secuencias de eventos paso a paso",
        "Identifica objetivos específicos y medibles",
        "Muestra flujos normales y alternativos",
        "Facilita la comprensión del comportamiento del sistema",
        "Es fundamental para el diseño e implementación",
    ],
};

// ─── Actor card ──────────────────────────────────────────────────────────────
function ActorCard({ actor, i }: { actor: (typeof actores)[0]; i: number }) {
    const [expanded, setExpanded] = useState(false);
    const Icon = actor.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: "#0f172a",
                border: `1px solid ${expanded ? actor.color : "rgba(34,211,238,0.12)"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: expanded ? `0 0 30px ${actor.color}22` : "none",
            }}
            whileHover={{ y: -4 }}
        >
            {/* Image */}
            <div
                style={{
                    height: 160,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <img
                    src={actor.img}
                    alt={actor.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                        transform: expanded ? "scale(1.06)" : "scale(1)",
                    }}
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, #0f172a 20%, transparent 60%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "9999px",
                        background: `${actor.color}22`,
                        border: `1px solid ${actor.color}`,
                        color: actor.color,
                        fontSize: "0.68rem",
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 600,
                    }}
                >
                    {actor.role}
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.25rem" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "0.6rem",
                    }}
                >
                    <div style={{ color: actor.color }}>
                        <Icon size={20} />
                    </div>
                    <h3
                        style={{
                            color: "#e2e8f0",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {actor.title}
                    </h3>
                </div>
                <p
                    style={{
                        color: "#64748b",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        margin: 0,
                    }}
                >
                    {expanded ? actor.desc : actor.desc.slice(0, 80) + "..."}
                </p>
                <div
                    style={{
                        marginTop: "0.75rem",
                        color: actor.color,
                        fontSize: "0.72rem",
                        fontFamily: "'Space Mono', monospace",
                    }}
                >
                    {expanded ? "▲ leer menos" : "▼ leer más"}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Caso de uso card ────────────────────────────────────────────────────────
function CasoDeUsoCard({
    caso,
    i,
}: {
    caso: (typeof casosDeUso)[0];
    i: number;
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: "#0f172a",
                border: `2px solid ${expanded ? caso.color : "rgba(34,211,238,0.12)"}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: expanded ? `0 0 30px ${caso.color}22` : "none",
            }}
            whileHover={{ x: 8 }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                }}
            >
                <div>
                    <div
                        style={{
                            color: caso.color,
                            fontSize: "2rem",
                            fontWeight: 800,
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        {caso.num}
                    </div>
                    <h3
                        style={{
                            color: "#e2e8f0",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            margin: "0.5rem 0 0 0",
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {caso.title}
                    </h3>
                </div>
                <div
                    style={{
                        color: caso.color,
                        transition: "transform 0.3s",
                        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    <ArrowRight size={20} />
                </div>
            </div>

            {/* Description */}
            <p
                style={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    margin: "0 0 1rem 0",
                }}
            >
                {caso.desc}
            </p>

            {/* Actors */}
            <div
                style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                }}
            >
                {caso.actors.map((actor) => (
                    <span
                        key={actor}
                        style={{
                            padding: "0.3rem 0.75rem",
                            borderRadius: "9999px",
                            background: `${caso.color}15`,
                            border: `1px solid ${caso.color}40`,
                            color: caso.color,
                            fontSize: "0.7rem",
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        {actor}
                    </span>
                ))}
            </div>

            {/* Steps */}
            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                        paddingTop: "1rem",
                        borderTop: `1px solid ${caso.color}22`,
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: caso.color,
                            margin: "0 0 0.75rem 0",
                        }}
                    >
                        Pasos:
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        {caso.steps.map((step, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <CheckCircle
                                    size={16}
                                    color={caso.color}
                                    style={{ marginTop: "2px", flexShrink: 0 }}
                                />
                                <span
                                    style={{
                                        color: "#cbd5e1",
                                        fontSize: "0.8rem",
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const CasoUso = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div
            style={{
                background: "#0f172a",
                color: "#e2e8f0",
                fontFamily: "'Syne', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.6 } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      `}</style>

            {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
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
                <img
                    src={IMGS.hero}
                    alt="seguridad"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.1) saturate(0.4)",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.9))",
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

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: "inline-block",
                            padding: "0.5rem 1.5rem",
                            background: "rgba(34, 211, 238, 0.08)",
                            border: "1px solid rgba(34, 211, 238, 0.2)",
                            borderRadius: "9999px",
                            marginBottom: "1rem",
                        }}
                    >
                        <span style={{ color: "#22d3ee", fontSize: "0.85rem" }}>
                            Análisis UML
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.4rem)",
                            fontWeight: 800,
                            margin: "0 0 1rem 0",
                            lineHeight: 1.1,
                            background:
                                "linear-gradient(135deg, #22d3ee 0%, #34d399 50%, #f59e0b 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Casos de Uso
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: "1.1rem",
                            color: "#cbd5e1",
                            maxWidth: "600px",
                        }}
                    >
                        Descripción de las interacciones entre el usuario y el
                        sistema de alarma inteligente
                    </motion.p>
                </div>
            </section>

            {/* ── DEFINICIÓN SECCIÓN ────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(167,139,250,0.05))",
                        border: "1px solid rgba(34,211,238,0.2)",
                        borderRadius: "1.5rem",
                        padding: "2.5rem",
                        marginBottom: "3rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            color: "#e2e8f0",
                        }}
                    >
                        {definicionCasoUso.title}
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#cbd5e1",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                        }}
                    >
                        {definicionCasoUso.description}
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {definicionCasoUso.caracteristicas.map((carac, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    alignItems: "center",
                                }}
                            >
                                <CheckCircle
                                    color="#22d3ee"
                                    size={20}
                                    style={{ flexShrink: 0 }}
                                />
                                <span
                                    style={{
                                        color: "#cbd5e1",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    {carac}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ─── DIAGRAMA DE CASO DE USO ────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "2rem 2rem 4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                            textAlign: "center",
                            color: "#e2e8f0",
                        }}
                    >
                        Diagrama de Casos de Uso
                    </h2>
                    <div
                        style={{
                            background: "#0f172a",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "1.5rem",
                            padding: "2rem",
                            overflow: "auto",
                        }}
                    >
                        <img
                            src={casoUsoImg}
                            alt="Diagrama de Casos de Uso - Alarma Antirrobo"
                            style={{
                                width: "100%",
                                maxWidth: "100%",
                                height: "auto",
                                objectFit: "contain",
                                borderRadius: "1rem",
                            }}
                        />
                    </div>
                    <p
                        style={{
                            textAlign: "center",
                            color: "#64748b",
                            fontSize: "0.9rem",
                            marginTop: "1rem",
                        }}
                    >
                        El diagrama muestra los actores del sistema, los casos
                        de uso principales y las interacciones entre ellos
                    </p>
                </motion.div>
            </section>

            {/* ── ACTORES SECCIÓN ────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "2rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Actores del Sistema
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {actores.map((actor, i) => (
                        <ActorCard key={actor.title} actor={actor} i={i} />
                    ))}
                </div>
            </section>

            {/* ── CASOS DE USO PRINCIPALES ───────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "2rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Principales Casos de Uso
                </motion.h2>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    {casosDeUso.map((caso, i) => (
                        <CasoDeUsoCard key={caso.num} caso={caso} i={i} />
                    ))}
                </div>
            </section>

            {/* ── FLUJO DEL SISTEMA ──────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "3rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Flujo del Sistema
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1.5rem",
                        alignItems: "stretch",
                    }}
                >
                    {flujoSistema.map((flujo, i) => {
                        const Icon = flujo.icon;
                        return (
                            <motion.div
                                key={flujo.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    style={{
                                        background: "#0f172a",
                                        border: `2px solid ${flujo.color}`,
                                        borderRadius: "1rem",
                                        padding: "1.5rem",
                                        textAlign: "center",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.boxShadow =
                                            `0 0 30px ${flujo.color}33`;
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.borderColor = flujo.color;
                                    }}
                                    onMouseLeave={(e) => {
                                        (
                                            e.currentTarget as HTMLElement
                                        ).style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                background: `${flujo.color}15`,
                                                border: `2px solid ${flujo.color}`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Icon
                                                color={flujo.color}
                                                size={28}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            color: flujo.color,
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "2rem",
                                            fontWeight: 800,
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {flujo.step}
                                    </div>
                                    <h3
                                        style={{
                                            color: "#e2e8f0",
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            margin: "0.5rem 0",
                                        }}
                                    >
                                        {flujo.title}
                                    </h3>
                                    <p
                                        style={{
                                            color: "#94a3b8",
                                            fontSize: "0.85rem",
                                            lineHeight: 1.5,
                                            margin: "0.75rem 0 0 0",
                                        }}
                                    >
                                        {flujo.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(52,211,153,0.1))",
                        border: "1px solid rgba(34,211,238,0.3)",
                        borderRadius: "1.5rem",
                        padding: "3rem",
                        textAlign: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            color: "#e2e8f0",
                        }}
                    >
                        Beneficios de modelar los Casos de Uso
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#cbd5e1",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                        }}
                    >
                        El modelado de casos de uso permite a nuestro equipo de
                        desarrollo entender completamente cómo los usuarios
                        interactuarán con la alarma inteligente, asegurando que
                        cada requisito sea capturado y que el sistema final sea
                        intuitivo, confiable y responda a las necesidades reales
                        del usuario.
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(150px, 1fr))",
                            gap: "1.5rem",
                            marginTop: "2rem",
                        }}
                    >
                        {[
                            { label: "Requisitos", value: "100% claros" },
                            { label: "Interacciones", value: "Documentadas" },
                            { label: "Flujos", value: "Optimizados" },
                            { label: "Validación", value: "Completa" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    style={{
                                        color: "#22d3ee",
                                        fontSize: "0.85rem",
                                        fontFamily: "'Space Mono', monospace",
                                    }}
                                >
                                    {item.label}
                                </div>
                                <div
                                    style={{
                                        color: "#e2e8f0",
                                        fontSize: "1.2rem",
                                        fontWeight: 700,
                                        marginTop: "0.5rem",
                                    }}
                                >
                                    {item.value}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── SIGUIENTE SECCIÓN ─────────────────────────────────────────────── */}
            <section
                style={{
                    background: "#080f1f",
                    borderTop: "1px solid #1e293b",
                    padding: "5rem 2rem",
                    textAlign: "center",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            marginBottom: "1rem",
                            color: "#e2e8f0",
                        }}
                    >
                        Siguiente: Análisis de Recursos
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con los casos de uso definidos, el siguiente paso es
                        identificar los recursos necesarios para el proyecto.
                    </p>
                    <a
                        href="/recursos"
                        style={{
                            display: "inline-block",
                            padding: "0.85rem 2rem",
                            background: "linear-gradient(135deg,#06b6d4,#0891b2)",
                            color: "#fff",
                            borderRadius: "0.5rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            boxShadow: "0 0 30px rgba(6,182,212,0.3)",
                        }}
                    >
                        Ver Análisis de Recursos →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
