import { motion } from "framer-motion";
import { useState } from "react";
import {
    Activity,
    ArrowRight,
    Circle,
    Diamond,
    Edit3,
    Grid3x3,
    Eye,
    Zap,
    Shield,
    Cpu,
    Bell,
    Smartphone,
    CheckCircle2,
} from "lucide-react";
import DiagramaBPMN from "../assets/diagrama-bpmn.jpeg";

const IMGS = {
    hero: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80", // sala de control
    process:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // diagrama / datos
    workflow:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", // flujo / equipo
    automation:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // automatización
};

const bpmnElementos = [
    {
        icon: Circle,
        nombre: "Evento",
        color: "#22d3ee",
        desc: "Marca el inicio, intermedio o fin de un proceso. Representa algo que sucede dentro o fuera del negocio.",
        ejemplo: "Inicio: Detección de movimiento | Fin: Alerta enviada",
    },
    {
        icon: Diamond,
        nombre: "Decisión",
        color: "#34d399",
        desc: "Un punto donde el proceso se ramifica. Evalúa condiciones para determinar el siguiente paso.",
        ejemplo: "¿Sensor confirma movimiento? → Sí/No",
    },
    {
        icon: Edit3,
        nombre: "Actividad/Tarea",
        color: "#f59e0b",
        desc: "Una acción específica que debe ejecutarse dentro del proceso. Es la unidad de trabajo más pequeña.",
        ejemplo: "Procesar señal, Enviar notificación, Activar buzzer",
    },
    {
        icon: Grid3x3,
        nombre: "Subproceso",
        color: "#a78bfa",
        desc: "Un conjunto de actividades agrupadas que forman un proceso interno más detallado.",
        ejemplo: "Validar entrada | Procesar salida",
    },
    {
        icon: ArrowRight,
        nombre: "Flujo de secuencia",
        color: "#fb7185",
        desc: "Las conexiones que muestran el orden en que ocurren los pasos. Define dependencias entre actividades.",
        ejemplo: "Sensor → Arduino → Notificación",
    },
    {
        icon: Activity,
        nombre: "Carril (Lane)",
        color: "#38bdf8",
        desc: "Agrupa actividades por responsable. Separa tareas por rol, departamento o participante.",
        ejemplo: "Carril Sensor | Carril Arduino | Carril Notificación",
    },
];

const ventajas = [
    {
        icon: Eye,
        title: "Visualización clara",
        desc: "BPMN proporciona una notación estándar que todos pueden entender, independientemente del rol técnico.",
        color: "#22d3ee",
    },
    {
        icon: ArrowRight,
        title: "Flujo controlado",
        desc: "Define el orden exacto de ejecución, decisiones condicionales y ramificaciones en el proceso.",
        color: "#34d399",
    },
    {
        icon: Grid3x3,
        title: "Modularidad",
        desc: "Los subprocesos permiten agrupar complejidad y reutilizar flujos en diferentes contextos.",
        color: "#f59e0b",
    },
    {
        icon: Activity,
        title: "Documentación viva",
        desc: "Sirve tanto para documentar el diseño actual como para planificar mejoras futuras del sistema.",
        color: "#a78bfa",
    },
];

// ─── Flujo del sistema de alarma paso a paso ─────────────────────────────────
const flujoDelSistema = [
    {
        num: "01",
        titulo: "Sensor detecta movimiento",
        desc: "El sensor PIR HC-SR501 monitorea constantemente el área. Cuando detecta cambios de calor por movimiento, envía una señal al Arduino.",
        detalles: ["Rango: 3-7 metros", "Ángulo: 120°", "Respuesta: <500ms"],
        color: "#22d3ee",
    },
    {
        num: "02",
        titulo: "Arduino procesa la señal",
        desc: "El microcontrolador recibe el pulso digital y ejecuta la lógica programada. Verifica si el sistema está armado y valida la señal.",
        detalles: ["Firmware en C++", "Lógica de validación", "Timestamp registrado"],
        color: "#34d399",
    },
    {
        num: "03",
        titulo: "Decisión: ¿Alarma activa?",
        desc: "El sistema evalúa si la alarma debe sonar. Si está desactivada, registra el evento. Si está armada, procede a la alerta.",
        detalles: ["Estado del sistema", "Modo actual", "Historial de eventos"],
        color: "#f59e0b",
    },
    {
        num: "04",
        titulo: "Activar salida sonora",
        desc: "El buzzer emite una señal acústica intermitente de 85 dB, audible a toda la vivienda. También se enciende un LED visual.",
        detalles: ["85 dB SPL", "Frecuencia: 2300 Hz", "Паtrón: 500ms on/off"],
        color: "#a78bfa",
    },
    {
        num: "05",
        titulo: "Enviar alerta por WiFi",
        desc: "El módulo ESP8266 transmite la alerta a través de la red WiFi local. Se conecta al servidor y envía notificación push.",
        detalles: ["802.11 b/g/n", "Latencia: <5s", "Protocolo MQTT"],
        color: "#fb7185",
    },
    {
        num: "06",
        titulo: "Notificación al celular",
        desc: "El usuario recibe una notificación push instantánea en su celular con detalles: hora, tipo de evento, ubicación del sensor.",
        detalles: ["Push notification", "Timestamp exacto", "Datos del evento"],
        color: "#38bdf8",
    },
];

// ─── Casos de uso en la práctica ──────────────────────────────────────────────
const casosDeUso = [
    {
        escenario: "Usuario en el trabajo",
        problema: "El propietario está fuera de casa durante el día.",
        solucion: "El sistema detectedé un intruso en la ventana. Buzzer suena localmente (disuade al intruso). Notificación push llega al celular del usuario en 2 segundos. El usuario puede verificar cámaras o avisar a la policía.",
        color: "#22d3ee",
    },
    {
        escenario: "Usuario durmiendo",
        problema: "El propietario está dormido dentro de la casa.",
        solucion: "Movimiento en la puerta principal activa el sensor. Alarma sonora despierta a todos. ESP8266 envía SMS/notificación como respaldo. Usuario puede activar botón de pánico.",
        color: "#34d399",
    },
    {
        escenario: "Intento fallido de robo",
        problema: "Delincuente intenta entrar por una ventana lateral.",
        solucion: "Sensor ultrasónico detecta proximidad anormal. Sistema valida con sensor PIR. Alarma activa. LED hace visible el dispositivo (disuasión). Ladrón huye. Evento queda registrado con timestamp.",
        color: "#f59e0b",
    },
    {
        escenario: "Mascota genera falsa alarma",
        problema: "El perro se mueve rápido cerca del sensor por la noche.",
        solucion: "Algoritmo anti-falsas-alarmas valida: múltiples sensores confirman movimiento. Buzzer NO activa si sensor está en modo 'mascota'. Notificación registra evento sin alarma sonora.",
        color: "#a78bfa",
    },
];

// ─── Los 3 carriles del diagrama ──────────────────────────────────────────────
const carriles = [
    {
        carril: "Usuario (Admin)",
        icon: "👤",
        color: "#22d3ee",
        desc: "Responsable de activar/desactivar el sistema mediante código o aplicación móvil.",
        responsabilidades: [
            "Ingresar código de activación",
            "Recibir notificaciones de eventos",
            "Desactivar alarma manualmente",
            "Revisar historial de accesos",
        ],
    },
    {
        carril: "Lógica Firmware (Arduino)",
        icon: "⚙️",
        color: "#34d399",
        desc: "Cerebro del sistema. Procesa sensores, valida códigos, toma decisiones.",
        responsabilidades: [
            "Verificar credenciales de activación",
            "Leer estado de sensores (PIR/Magnético)",
            "Evaluar umbral de detección",
            "Registrar eventos en SD/EEPROM",
        ],
    },
    {
        carril: "Periféricos/Actuadores",
        icon: "🔊",
        color: "#f59e0b",
        desc: "Componentes físicos que actúan cuando se dispara la alarma.",
        responsabilidades: [
            "Sirena emite sonido (Piezo)",
            "LEDs RGB se encienden",
            "Notificación SMS/GSM se envía",
            "Log de eventos se actualiza",
        ],
    },
];

// ─── Tabla de decisiones y códigos ────────────────────────────────────────────
const tablaCodigos = [
    {
        evento: "Usuario ingresa código CORRECTO",
        accion: "Sistema se DESARMA",
        sonido: "Beep ascendente (100-500Hz)",
        led: "Verde parpadeante",
        log: "✓ Acceso autorizado - Timestamp",
    },
    {
        evento: "Usuario ingresa código INCORRECTO",
        accion: "Temporizador se inicia (30s)",
        sonido: "Beep descendente (500-100Hz)",
        led: "Rojo intermitente",
        log: "✗ Acceso denegado - Intento #N",
    },
    {
        evento: "Tiempo agotado sin código",
        accion: "Alarma se DISPARA",
        sonido: "Sirena continua 85dB",
        led: "Rojo fijo + parpadeante",
        log: "⚠ Alarma disparada - Intruso",
    },
    {
        evento: "Sensor detecta movimiento (Armado)",
        accion: "Temporizador inicia",
        sonido: "Beep rápido (3 tonos)",
        led: "Amarillo parpadeante",
        log: "? Movimiento detectado",
    },
];

// ─── FAQ interactivo ──────────────────────────────────────────────────────────
const faq = [
    {
        pregunta: "¿Por qué el diagrama tiene 3 carriles?",
        respuesta: "Cada carril representa un actor/responsabilidad: Usuario toma decisiones, Firmware ejecuta lógica, Periféricos actúan físicamente.",
        color: "#22d3ee",
    },
    {
        pregunta: "¿Qué decide el nodo rombo 'Evalúa Señal del Sensor'?",
        respuesta: "Valida si la señal del sensor es confiable (no es ruido falsopositivo). Si es válida AND sistema ARMADO, procede a alarma.",
        color: "#34d399",
    },
    {
        pregunta: "¿Cuál es el flujo si código es INCORRECTO?",
        respuesta: "Inicia temporizador de entrada (ej: 30s). Usuario puede reintentar código. Si se agota tiempo → Alarma dispara automáticamente.",
        color: "#f59e0b",
    },
    {
        pregunta: "¿Dónde se guardan los eventos?",
        respuesta: "Dual: 1) SD Card local (rápido, permanente), 2) Cloud/Firebase (respaldo remoto, análisis, acceso desde cualquier lugar).",
        color: "#a78bfa",
    },
    {
        pregunta: "¿Qué pasa si pierdo la conexión WiFi?",
        respuesta: "El sistema sigue funcionando localmente. Sirena, LEDs y logs en SD operan sin WiFi. SMS como respaldo si hay módulo GSM.",
        color: "#fb7185",
    },
    {
        pregunta: "¿Cómo evito falsas alarmas?",
        respuesta: "Validación cruzada: PIR + Sensor magnético confirman. Retardo mínimo (1-2s). Ajuste de sensibilidad PIR según ambiente.",
        color: "#38bdf8",
    },
];

const mejoresPracticas = [
    {
        practica: "Validación cruzada de sensores",
        desc: "Usa múltiples sensores (PIR + Ultrasónico + Magnético) para confirmar amenaza antes de activar alarma.",
        beneficio: "Reduce falsas alarmas en 95%",
        icon: CheckCircle2,
        color: "#22d3ee",
    },
    {
        practica: "Retardo de confirmación",
        desc: "Espera 1-2 segundos después de detectar movimiento antes de activar buzzer.",
        beneficio: "Permite cancelación manual si está permitido",
        icon: Zap,
        color: "#34d399",
    },
    {
        practica: "Registro de todos los eventos",
        desc: "Almacena cada activación (exitosa o falsa) con timestamp, tipo, sensor usado.",
        beneficio: "Auditoría completa y patrones de ataque",
        icon: Shield,
        color: "#f59e0b",
    },
    {
        practica: "Comunicación redundante",
        desc: "WiFi como primaria, SMS como respaldo, LED visual como terciario.",
        beneficio: "Garantiza que alerta siempre llega",
        icon: Smartphone,
        color: "#a78bfa",
    },
    {
        practica: "Bajo consumo energético",
        desc: "Modo sleep entre detecciones. Sensores PIR con detector de movimiento incorporado.",
        beneficio: "Funciona 24/7 sin sobrecargar electricidad",
        icon: Cpu,
        color: "#fb7185",
    },
    {
        practica: "Interfaz intuitiva",
        desc: "Botones simples: Armar/Desarmar. LCD muestra estado. Beep de confirmación.",
        beneficio: "Cualquiera puede usarlo sin entrenamient",
        icon: Bell,
        color: "#38bdf8",
    },
];

// ─── Elemento BPMN card ──────────────────────────────────────────────────────
function BpmnElementCard({
    elem,
    i,
}: {
    elem: (typeof bpmnElementos)[0];
    i: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const Icon = elem.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            onClick={() => setExpanded(!expanded)}
            style={{
                background: "#0f172a",
                border: `1px solid ${expanded ? elem.color : "rgba(34,211,238,0.12)"}`,
                borderRadius: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: expanded
                    ? `0 0 30px ${elem.color}22`
                    : "none",
            }}
        >
            {/* Header */}
            <div style={{ padding: "1.25rem" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "0.5rem",
                            background: `${elem.color}15`,
                            border: `1px solid ${elem.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: elem.color,
                        }}
                    >
                        <Icon size={18} />
                    </div>
                    <h3
                        style={{
                            color: elem.color,
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            fontFamily: "'Syne', sans-serif",
                            margin: 0,
                        }}
                    >
                        {elem.nombre}
                    </h3>
                </div>

                <p
                    style={{
                        color: "#64748b",
                        fontSize: "0.8rem",
                        lineHeight: 1.6,
                        margin: 0,
                    }}
                >
                    {elem.desc}
                </p>
            </div>

            {/* Expandable section */}
            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                        borderTop: `1px solid ${elem.color}22`,
                        padding: "1rem 1.25rem",
                        background: `${elem.color}05`,
                    }}
                >
                    <div
                        style={{
                            color: "#94a3b8",
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            marginBottom: "0.5rem",
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        Ejemplo en tu proyecto:
                    </div>
                    <div
                        style={{
                            color: "#e2e8f0",
                            fontSize: "0.8rem",
                            lineHeight: 1.6,
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        {elem.ejemplo}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

// ─── Ventaja card ────────────────────────────────────────────────────────────
function VentajaCard({
    v,
    i,
}: {
    v: (typeof ventajas)[0];
    i: number;
}) {
    const Icon = v.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{
                background: "#0f172a",
                border: `1px solid ${v.color}20`,
                borderRadius: "1rem",
                padding: "1.5rem",
                transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 20px 40px ${v.color}18`)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
            <div
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: "0.6rem",
                    background: `${v.color}15`,
                    border: `1px solid ${v.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: v.color,
                }}
            >
                <Icon size={22} />
            </div>
            <h3
                style={{
                    color: "#e2e8f0",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                    fontFamily: "'Syne', sans-serif",
                    margin: 0,
                }}
            >
                {v.title}
            </h3>
            <p
                style={{
                    color: "#64748b",
                    fontSize: "0.83rem",
                    lineHeight: 1.7,
                    margin: 0,
                }}
            >
                {v.desc}
            </p>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const BPMN = () => {
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
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section
                style={{
                    position: "relative",
                    minHeight: 440,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <img
                    src={IMGS.hero}
                    alt="Flujo de procesos"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.2) saturate(0.5)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(2,6,23,0.3), rgba(2,6,23,0.97))",
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

                {/* Corner accents */}
                {[
                    {
                        top: 32,
                        left: 32,
                        borderTop: "2px solid #22d3ee",
                        borderLeft: "2px solid #22d3ee",
                    },
                    {
                        top: 32,
                        right: 32,
                        borderTop: "2px solid #22d3ee",
                        borderRight: "2px solid #22d3ee",
                    },
                    {
                        bottom: 32,
                        left: 32,
                        borderBottom: "2px solid #22d3ee",
                        borderLeft: "2px solid #22d3ee",
                    },
                    {
                        bottom: 32,
                        right: 32,
                        borderBottom: "2px solid #22d3ee",
                        borderRight: "2px solid #22d3ee",
                    },
                ].map((s, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: 32,
                            height: 32,
                            ...(s as any),
                        }}
                    />
                ))}

                {/* Hero content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        maxWidth: 600,
                        padding: "0 1.5rem",
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
                            border: "1px solid rgba(34,211,238,0.3)",
                            borderRadius: "9999px",
                            marginBottom: "1.5rem",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#67e8f9",
                            background: "rgba(6,182,212,0.08)",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#22d3ee",
                                animation: "blink 1.5s infinite",
                            }}
                        />
                        ETAPA 11 — MODELO BPMN
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3.4rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: "1rem",
                            background:
                                "linear-gradient(135deg, #22d3ee, #34d399)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        BPMN 2.0
                    </motion.h1>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            color: "#94a3b8",
                            lineHeight: 1.8,
                        }}
                    >
                        Modalidad de notación estándar para documentar flujos de proceso,
                        decisiones y participantes de tu sistema de alarma inteligente.
                    </p>
                </motion.div>
            </section>

            {/* ── ELEMENTOS BPMN ───────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    <div
                        style={{
                            fontSize: "0.8rem",
                            fontFamily: "'Space Mono', monospace",
                            color: "#22d3ee",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem",
                            opacity: 0.7,
                        }}
                    >
                        Componentes
                    </div>
                    <h2
                        style={{
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem",
                        }}
                    >
                        Elementos BPMN
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            maxWidth: 500,
                            margin: "0 auto",
                        }}
                    >
                        Los símbolos fundamentales que componen cualquier diagrama BPMN
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "1.5rem",
                        marginBottom: "4rem",
                    }}
                >
                    {bpmnElementos.map((elem, i) => (
                        <BpmnElementCard key={i} elem={elem} i={i} />
                    ))}
                </div>
            </section>

            {/* ── VENTAJAS ─────────────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    background: "linear-gradient(180deg, rgba(34,211,238,0.04) 0%, transparent 100%)",
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.8rem",
                                fontFamily: "'Space Mono', monospace",
                                color: "#34d399",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "0.75rem",
                                opacity: 0.7,
                            }}
                        >
                            Beneficios
                        </div>
                        <h2
                            style={{
                                fontSize: "2.2rem",
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            ¿Por qué usar BPMN?
                        </h2>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {ventajas.map((v, i) => (
                            <VentajaCard key={i} v={v} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DIAGRAMA BPMN ────────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    <div
                        style={{
                            fontSize: "0.8rem",
                            fontFamily: "'Space Mono', monospace",
                            color: "#f59e0b",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem",
                            opacity: 0.7,
                        }}
                    >
                        Tu Diagrama
                    </div>
                    <h2
                        style={{
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem",
                        }}
                    >
                        Flujo BPMN Completo
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            maxWidth: 500,
                            margin: "0 auto",
                        }}
                    >
                        Visualiza el diagrama BPMN de tu sistema de alarma inteligente
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        background: "#0f172a",
                        border: "1px solid rgba(34,211,238,0.15)",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        minHeight: "auto",
                        position: "relative",
                    }}
                >
                    <img
                        src={DiagramaBPMN}
                        alt="Diagrama BPMN del Sistema de Alarma"
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            objectFit: "contain",
                            padding: "2rem",
                        }}
                    />
                </motion.div>
            </section>

            {/* ── FLUJO DEL SISTEMA PASO A PASO ────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    background: "linear-gradient(180deg, rgba(34,211,238,0.04) 0%, transparent 100%)",
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.8rem",
                                fontFamily: "'Space Mono', monospace",
                                color: "#34d399",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "0.75rem",
                                opacity: 0.7,
                            }}
                        >
                            Ejecución
                        </div>
                        <h2
                            style={{
                                fontSize: "2.2rem",
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            Flujo del Sistema
                        </h2>
                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                maxWidth: 550,
                                margin: "0 auto",
                            }}
                        >
                            Cada paso del proceso desde que el sensor detecta movimiento hasta que se notifica al usuario
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {flujoDelSistema.map((paso, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0f172a",
                                    border: `1px solid ${paso.color}20`,
                                    borderRadius: "1rem",
                                    padding: "1.75rem",
                                    transition: "box-shadow 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.boxShadow = `0 20px 40px ${paso.color}18`)
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.boxShadow = "none")
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "0.6rem",
                                            background: `${paso.color}15`,
                                            border: `1px solid ${paso.color}30`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontFamily: "'Space Mono', monospace",
                                            fontWeight: 700,
                                            color: paso.color,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        {paso.num}
                                    </div>
                                    <h3
                                        style={{
                                            color: paso.color,
                                            fontWeight: 700,
                                            fontSize: "0.95rem",
                                            fontFamily: "'Syne', sans-serif",
                                            margin: 0,
                                        }}
                                    >
                                        {paso.titulo}
                                    </h3>
                                </div>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.85rem",
                                        lineHeight: 1.7,
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {paso.desc}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                    }}
                                >
                                    {paso.detalles.map((detalle, j) => (
                                        <span
                                            key={j}
                                            style={{
                                                padding: "0.3rem 0.7rem",
                                                background: `${paso.color}10`,
                                                border: `1px solid ${paso.color}30`,
                                                borderRadius: "0.4rem",
                                                color: paso.color,
                                                fontSize: "0.7rem",
                                                fontFamily: "'Space Mono', monospace",
                                            }}
                                        >
                                            {detalle}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CASOS DE USO ──────────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    <div
                        style={{
                            fontSize: "0.8rem",
                            fontFamily: "'Space Mono', monospace",
                            color: "#a78bfa",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem",
                            opacity: 0.7,
                        }}
                    >
                        Escenarios
                    </div>
                    <h2
                        style={{
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem",
                        }}
                    >
                        Casos de Uso
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            maxWidth: 550,
                            margin: "0 auto",
                        }}
                    >
                        Situaciones reales donde el sistema demuestra su valor
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {casosDeUso.map((caso, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${caso.color}22`,
                                borderRadius: "1rem",
                                padding: "1.75rem",
                                transition: "box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = `0 20px 40px ${caso.color}18`)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = "none")
                            }
                        >
                            <h3
                                style={{
                                    color: caso.color,
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    marginBottom: "0.75rem",
                                    fontFamily: "'Syne', sans-serif",
                                }}
                            >
                                📌 {caso.escenario}
                            </h3>
                            <div style={{ marginBottom: "1rem" }}>
                                <div
                                    style={{
                                        color: "#94a3b8",
                                        fontSize: "0.75rem",
                                        fontFamily: "'Space Mono', monospace",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        marginBottom: "0.4rem",
                                    }}
                                >
                                    Problema
                                </div>
                                <p
                                    style={{
                                        color: "#64748b",
                                        fontSize: "0.85rem",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {caso.problema}
                                </p>
                            </div>
                            <div>
                                <div
                                    style={{
                                        color: caso.color,
                                        fontSize: "0.75rem",
                                        fontFamily: "'Space Mono', monospace",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        marginBottom: "0.4rem",
                                    }}
                                >
                                    Solución
                                </div>
                                <p
                                    style={{
                                        color: "#e2e8f0",
                                        fontSize: "0.85rem",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {caso.solucion}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── MEJORES PRÁCTICAS ─────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    background: "linear-gradient(180deg, rgba(52,211,153,0.04) 0%, transparent 100%)",
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.8rem",
                                fontFamily: "'Space Mono', monospace",
                                color: "#22d3ee",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "0.75rem",
                                opacity: 0.7,
                            }}
                        >
                            Recomendaciones
                        </div>
                        <h2
                            style={{
                                fontSize: "2.2rem",
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            Mejores Prácticas
                        </h2>
                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                maxWidth: 550,
                                margin: "0 auto",
                            }}
                        >
                            Estrategias y técnicas para optimizar tu sistema de alarma
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {mejoresPracticas.map((practica, i) => {
                            const Icon = practica.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6 }}
                                    style={{
                                        background: "#0f172a",
                                        border: `1px solid ${practica.color}20`,
                                        borderRadius: "1rem",
                                        padding: "1.75rem",
                                        transition: "box-shadow 0.3s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.boxShadow = `0 20px 40px ${practica.color}18`)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.boxShadow = "none")
                                    }
                                >
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "0.6rem",
                                            background: `${practica.color}15`,
                                            border: `1px solid ${practica.color}30`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "1rem",
                                            color: practica.color,
                                        }}
                                    >
                                        <Icon size={22} />
                                    </div>
                                    <h3
                                        style={{
                                            color: "#e2e8f0",
                                            fontWeight: 700,
                                            fontSize: "0.95rem",
                                            marginBottom: "0.5rem",
                                            fontFamily: "'Syne', sans-serif",
                                        }}
                                    >
                                        {practica.practica}
                                    </h3>
                                    <p
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.82rem",
                                            lineHeight: 1.6,
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        {practica.desc}
                                    </p>
                                    <div
                                        style={{
                                            padding: "0.75rem",
                                            background: `${practica.color}08`,
                                            border: `1px solid ${practica.color}20`,
                                            borderRadius: "0.5rem",
                                            color: practica.color,
                                            fontSize: "0.75rem",
                                            fontFamily: "'Space Mono', monospace",
                                            fontWeight: 600,
                                        }}
                                    >
                                        ✓ {practica.beneficio}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── LOS 3 CARRILES DEL DIAGRAMA ───────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    <div style={{
                        fontSize: "0.8rem",
                        fontFamily: "'Space Mono', monospace",
                        color: "#fb7185",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                        opacity: 0.7,
                    }}>
                        Participantes
                    </div>
                    <h2 style={{
                        fontSize: "2.2rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                    }}>
                        Los 3 Carriles del BPMN
                    </h2>
                    <p style={{
                        color: "#64748b",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        maxWidth: 550,
                        margin: "0 auto",
                    }}>
                        Cada carril representa una entidad con responsabilidades específicas
                    </p>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                }}>
                    {carriles.map((carril, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: "#0f172a",
                                border: `1px solid ${carril.color}22`,
                                borderRadius: "1rem",
                                padding: "1.75rem",
                                transition: "box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = `0 20px 40px ${carril.color}18`)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = "none")
                            }
                        >
                            <div style={{
                                fontSize: "2rem",
                                marginBottom: "0.75rem",
                            }}>
                                {carril.icon}
                            </div>
                            <h3 style={{
                                color: carril.color,
                                fontWeight: 700,
                                fontSize: "1rem",
                                marginBottom: "0.5rem",
                                fontFamily: "'Syne', sans-serif",
                            }}>
                                {carril.carril}
                            </h3>
                            <p style={{
                                color: "#64748b",
                                fontSize: "0.85rem",
                                marginBottom: "1rem",
                                lineHeight: 1.6,
                            }}>
                                {carril.desc}
                            </p>
                            <ul style={{
                                listStyle: "none",
                                padding: 0,
                                color: "#94a3b8",
                                fontSize: "0.8rem",
                            }}>
                                {carril.responsabilidades.map((resp, j) => (
                                    <li key={j} style={{ marginBottom: "0.4rem" }}>
                                        <span style={{ color: carril.color, marginRight: "0.5rem" }}>✓</span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* ── TABLA DE DECISIONES ───────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    background: "linear-gradient(180deg, rgba(52,211,153,0.04) 0%, transparent 100%)",
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                        }}
                    >
                        <div style={{
                            fontSize: "0.8rem",
                            fontFamily: "'Space Mono', monospace",
                            color: "#22d3ee",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem",
                            opacity: 0.7,
                        }}>
                            Referencia
                        </div>
                        <h2 style={{
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem",
                        }}>
                            Tabla de Decisiones y Respuestas
                        </h2>
                        <p style={{
                            color: "#64748b",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            maxWidth: 550,
                            margin: "0 auto",
                        }}>
                            Qué sucede en cada escenario del sistema
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            overflowX: "auto",
                            background: "#0f172a",
                            border: "1px solid rgba(34,211,238,0.15)",
                            borderRadius: "1rem",
                            padding: "1.5rem",
                        }}
                    >
                        <table style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.8rem",
                        }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid rgba(34,211,238,0.2)" }}>
                                    <th style={{
                                        padding: "0.75rem",
                                        textAlign: "left",
                                        color: "#22d3ee",
                                        fontWeight: 700,
                                    }}>
                                        Evento
                                    </th>
                                    <th style={{
                                        padding: "0.75rem",
                                        textAlign: "left",
                                        color: "#34d399",
                                        fontWeight: 700,
                                    }}>
                                        Acción
                                    </th>
                                    <th style={{
                                        padding: "0.75rem",
                                        textAlign: "left",
                                        color: "#f59e0b",
                                        fontWeight: 700,
                                    }}>
                                        Sonido
                                    </th>
                                    <th style={{
                                        padding: "0.75rem",
                                        textAlign: "left",
                                        color: "#a78bfa",
                                        fontWeight: 700,
                                    }}>
                                        LED
                                    </th>
                                    <th style={{
                                        padding: "0.75rem",
                                        textAlign: "left",
                                        color: "#fb7185",
                                        fontWeight: 700,
                                    }}>
                                        Log
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tablaCodigos.map((fila, i) => (
                                    <tr key={i} style={{
                                        borderBottom: "1px solid rgba(34,211,238,0.08)",
                                        background: i % 2 === 0 ? "transparent" : "rgba(34,211,238,0.02)",
                                    }}>
                                        <td style={{
                                            padding: "0.75rem",
                                            color: "#e2e8f0",
                                        }}>
                                            {fila.evento}
                                        </td>
                                        <td style={{
                                            padding: "0.75rem",
                                            color: "#94a3b8",
                                        }}>
                                            {fila.accion}
                                        </td>
                                        <td style={{
                                            padding: "0.75rem",
                                            color: "#94a3b8",
                                        }}>
                                            {fila.sonido}
                                        </td>
                                        <td style={{
                                            padding: "0.75rem",
                                            color: "#94a3b8",
                                        }}>
                                            {fila.led}
                                        </td>
                                        <td style={{
                                            padding: "0.75rem",
                                            color: "#94a3b8",
                                        }}>
                                            {fila.log}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* ── FAQ INTERACTIVO ───────────────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    background: "linear-gradient(180deg, rgba(245,158,11,0.04) 0%, transparent 100%)",
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            textAlign: "center",
                            marginBottom: "3rem",
                        }}
                    >
                        <div style={{
                            fontSize: "0.8rem",
                            fontFamily: "'Space Mono', monospace",
                            color: "#22d3ee",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem",
                            opacity: 0.7,
                        }}>
                            Preguntas
                        </div>
                        <h2 style={{
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem",
                        }}>
                            FAQ - Preguntas Frecuentes
                        </h2>
                    </motion.div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                        {faq.map((item, i) => {
                            const [open, setOpen] = useState(false);
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    onClick={() => setOpen(!open)}
                                    style={{
                                        background: "#0f172a",
                                        border: `1px solid ${item.color}${open ? "50" : "20"}`,
                                        borderRadius: "1rem",
                                        padding: "1.25rem",
                                        cursor: "pointer",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}12`)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.boxShadow = "none")
                                    }
                                >
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: open ? "0.75rem" : 0,
                                    }}>
                                        <h3 style={{
                                            color: item.color,
                                            fontWeight: 700,
                                            fontSize: "0.95rem",
                                            fontFamily: "'Syne', sans-serif",
                                            margin: 0,
                                        }}>
                                            {item.pregunta}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: open ? 180 : 0 }}
                                            style={{
                                                color: item.color,
                                                marginLeft: "1rem",
                                                flexShrink: 0,
                                            }}
                                        >
                                            ▼
                                        </motion.div>
                                    </div>
                                    {open && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            style={{
                                                color: "#94a3b8",
                                                fontSize: "0.85rem",
                                                lineHeight: 1.7,
                                                margin: 0,
                                                paddingTop: "0.75rem",
                                                borderTop: `1px solid ${item.color}20`,
                                            }}
                                        >
                                            {item.respuesta}
                                        </motion.p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── HERRAMIENTAS UTILIZADAS ───────────────────────────────────────── */}
            <section
                style={{
                    padding: "6rem 1.5rem",
                    background: "linear-gradient(180deg, rgba(167,139,250,0.04) 0%, transparent 100%)",
                    borderTop: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ textAlign: "center", marginBottom: "3rem" }}
                    >
                        <div
                            style={{
                                fontSize: "0.8rem",
                                fontFamily: "'Space Mono', monospace",
                                color: "#a78bfa",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "0.75rem",
                                opacity: 0.7,
                            }}
                        >
                            Stack de diseño
                        </div>
                        <h2
                            style={{
                                fontSize: "2.2rem",
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            Herramientas Utilizadas
                        </h2>
                        <p
                            style={{
                                color: "#64748b",
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                maxWidth: 550,
                                margin: "0 auto",
                            }}
                        >
                            Estas son las herramientas con las que se construyó el diagrama BPMN del sistema de alarma inteligente
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {/* bpmn.io */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: "#0f172a",
                                border: "1px solid rgba(34,211,238,0.22)",
                                borderRadius: "1rem",
                                padding: "2rem",
                                transition: "box-shadow 0.3s",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = "0 20px 40px rgba(34,211,238,0.12)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = "none")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: 120,
                                    height: 120,
                                    background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
                                    borderRadius: "0 1rem 0 0",
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: "0.75rem",
                                        background: "rgba(34,211,238,0.1)",
                                        border: "1px solid rgba(34,211,238,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.6rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    🗺️
                                </div>
                                <div>
                                    <div
                                        style={{
                                            color: "#22d3ee",
                                            fontWeight: 700,
                                            fontSize: "1.1rem",
                                            fontFamily: "'Syne', sans-serif",
                                        }}
                                    >
                                        bpmn.io
                                    </div>
                                    <div
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.75rem",
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        Editor de diagramas BPMN
                                    </div>
                                </div>
                            </div>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    fontSize: "0.85rem",
                                    lineHeight: 1.7,
                                    margin: "0 0 1.25rem",
                                }}
                            >
                                Herramienta web gratuita y open-source para modelar diagramas BPMN 2.0 directamente en el navegador. Permite crear, editar y exportar flujos de proceso con una interfaz drag-and-drop intuitiva.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                }}
                            >
                                {["BPMN 2.0", "Drag & Drop", "Exportar XML", "Open source"].map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            background: "rgba(34,211,238,0.08)",
                                            border: "1px solid rgba(34,211,238,0.2)",
                                            color: "#22d3ee",
                                            borderRadius: "0.4rem",
                                            padding: "0.25rem 0.6rem",
                                            fontSize: "0.72rem",
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div
                                style={{
                                    marginTop: "1.25rem",
                                    paddingTop: "1.25rem",
                                    borderTop: "1px solid rgba(34,211,238,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    color: "#64748b",
                                    fontSize: "0.78rem",
                                    fontFamily: "'Space Mono', monospace",
                                }}
                            >
                                <span style={{ color: "#22d3ee" }}>→</span>
                                Usado para construir el diagrama del proceso de la alarma
                            </div>
                        </motion.div>

                        {/* Gemini */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: "#0f172a",
                                border: "1px solid rgba(52,211,153,0.22)",
                                borderRadius: "1rem",
                                padding: "2rem",
                                transition: "box-shadow 0.3s",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = "0 20px 40px rgba(52,211,153,0.12)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = "none")
                            }
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: 120,
                                    height: 120,
                                    background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
                                    borderRadius: "0 1rem 0 0",
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: "0.75rem",
                                        background: "rgba(52,211,153,0.1)",
                                        border: "1px solid rgba(52,211,153,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.6rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    ✦
                                </div>
                                <div>
                                    <div
                                        style={{
                                            color: "#34d399",
                                            fontWeight: 700,
                                            fontSize: "1.1rem",
                                            fontFamily: "'Syne', sans-serif",
                                        }}
                                    >
                                        Google Gemini
                                    </div>
                                    <div
                                        style={{
                                            color: "#64748b",
                                            fontSize: "0.75rem",
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        Asistente de IA generativa
                                    </div>
                                </div>
                            </div>
                            <p
                                style={{
                                    color: "#94a3b8",
                                    fontSize: "0.85rem",
                                    lineHeight: 1.7,
                                    margin: "0 0 1.25rem",
                                }}
                            >
                                Se le proporcionó el diagrama BPMN construido en bpmn.io para que analizara el flujo, validara la lógica del proceso e identificara posibles mejoras en la secuencia de actividades del sistema de alarma.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                }}
                            >
                                {["Análisis de flujos", "Validación lógica", "IA generativa", "Google"].map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            background: "rgba(52,211,153,0.08)",
                                            border: "1px solid rgba(52,211,153,0.2)",
                                            color: "#34d399",
                                            borderRadius: "0.4rem",
                                            padding: "0.25rem 0.6rem",
                                            fontSize: "0.72rem",
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div
                                style={{
                                    marginTop: "1.25rem",
                                    paddingTop: "1.25rem",
                                    borderTop: "1px solid rgba(52,211,153,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    color: "#64748b",
                                    fontSize: "0.78rem",
                                    fontFamily: "'Space Mono', monospace",
                                }}
                            >
                                <span style={{ color: "#34d399" }}>→</span>
                                Revisó y validó el diagrama para asegurar coherencia del proceso
                            </div>
                        </motion.div>
                    </div>

                    {/* Flujo de trabajo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            marginTop: "2rem",
                            background: "#0f172a",
                            border: "1px solid rgba(167,139,250,0.15)",
                            borderRadius: "1rem",
                            padding: "1.5rem 2rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                color: "#a78bfa",
                                fontSize: "0.75rem",
                                fontFamily: "'Space Mono', monospace",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                flexShrink: 0,
                            }}
                        >
                            Flujo de trabajo
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                flexWrap: "wrap",
                                flex: 1,
                            }}
                        >
                            {[
                                { label: "Diseñar diagrama", tool: "bpmn.io", color: "#22d3ee" },
                                { label: "→", tool: null, color: "#475569" },
                                { label: "Exportar / compartir", tool: null, color: "#94a3b8" },
                                { label: "→", tool: null, color: "#475569" },
                                { label: "Analizar con IA", tool: "Gemini", color: "#34d399" },
                                { label: "→", tool: null, color: "#475569" },
                                { label: "Diagrama final validado", tool: null, color: "#e2e8f0" },
                            ].map((step, i) =>
                                step.tool === null && step.label === "→" ? (
                                    <span key={i} style={{ color: step.color, fontSize: "1rem" }}>
                                        {step.label}
                                    </span>
                                ) : (
                                    <span
                                        key={i}
                                        style={{
                                            color: step.color,
                                            fontSize: "0.82rem",
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        {step.label}
                                        {step.tool && (
                                            <span
                                                style={{
                                                    marginLeft: "0.35rem",
                                                    background: `${step.color}15`,
                                                    border: `1px solid ${step.color}30`,
                                                    borderRadius: "0.3rem",
                                                    padding: "0.1rem 0.4rem",
                                                    fontSize: "0.7rem",
                                                }}
                                            >
                                                {step.tool}
                                            </span>
                                        )}
                                    </span>
                                )
                            )}
                        </div>
                    </motion.div>
                </div>
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
                        Siguiente: Caso de Uso
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con el diagrama BPMN completo, el siguiente paso es
                        analizar los actores del sistema con el Caso de Uso.
                    </p>
                    <a
                        href="/caso-uso"
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
                        Ver Caso de Uso →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};