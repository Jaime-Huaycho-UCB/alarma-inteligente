import { motion } from "framer-motion";
import {
    DoorOpen,
    Camera,
    Radio,
    Wifi,
    Smartphone,
    Volume2,
    Battery,
    Network,
    Cpu,
    ArrowRight,
    Shield,
    AlertCircle,
} from "lucide-react";
import diagramaTecnoImg from "../assets/diagrama-tecnologico.png";

// ─── Reliable Unsplash CDN images ────────────────────────────────────────────
const IMGS = {
    hero: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=80", // chips/tecnología
    architecture:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", // seguridad
    integration:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // datos conectados
};

// ─── Componentes del sistema ────────────────────────────────────────────────
const componentesSistema = [
    {
        icon: DoorOpen,
        title: "Sensores de Puerta/Ventana",
        tipo: "Entrada",
        color: "#22d3ee",
        desc: "Detectores magnéticos reed switch",
        detalles:
            "Estos sensores utilizan imanes y interruptores reed para detectar cuando una puerta o ventana se abre. Son económicos, confiables y tienen un consumo de energía mínimo.",
        img: IMGS.architecture,
        especificaciones: [
            "Tipo: Reed Switch Magnético",
            "Rango de detección: Hasta 2cm",
            "Voltaje: 5-12V DC",
            "Consumo: < 1mA",
            "Respuesta: Inmediata",
        ],
    },
    {
        icon: Camera,
        title: "Cámaras de Vigilancia",
        tipo: "Entrada",
        color: "#34d399",
        desc: "Vigilancia visual en tiempo real",
        detalles:
            "Las cámaras permiten registrar video en tiempo real y detectar intrusiones visuales. Se pueden integrar cámaras IP para acceso remoto.",
        img: IMGS.architecture,
        especificaciones: [
            "Res: 720p o 1080p",
            "Conexión: Ethernet/WiFi",
            "Visión nocturna: IR LED",
            "Almacenamiento: Nube/SD",
            "Livestream: Sí",
        ],
    },
    {
        icon: Radio,
        title: "Sensor de Movimiento",
        tipo: "Entrada",
        color: "#f59e0b",
        desc: "Detección PIR de intrusiones",
        detalles:
            "El sensor PIR (Passive Infrared) detecta cambios en la radiación infrarroja causada por movimiento de personas. Es el detector principal de intrusiones.",
        img: IMGS.architecture,
        especificaciones: [
            "Tipo: PIR (HC-SR501)",
            "Rango: 5-7 metros",
            "Ángulo: 110°",
            "Voltaje: 5-20V DC",
            "Tiempo respuesta: <1 segundo",
        ],
    },
    {
        icon: Cpu,
        title: "Central de Alarma / Concentrador",
        tipo: "Núcleo",
        color: "#a78bfa",
        desc: "Cerebro del sistema",
        detalles:
            "La central procesa todas las señales de entrada, ejecuta la lógica de detección y controla todos los actuadores. Es responsable de las decisiones en tiempo real.",
        img: IMGS.architecture,
        especificaciones: [
            "Procesador: Arduino Uno/Mega",
            "Memoria: 2KB SRAM",
            "Velocidad: 16MHz",
            "Entradas: 8-14 analógicas",
            "Salidas: 6-20 PWM",
        ],
    },
    {
        icon: Wifi,
        title: "Conexión WiFi / GSM",
        tipo: "Salida",
        color: "#fb7185",
        desc: "Comunicación remota",
        detalles:
            "Permite enviar alertas al propietario a través de WiFi (ESP8266) o GSM (SIM800L). Proporciona conectividad remota desde cualquier lugar.",
        img: IMGS.architecture,
        especificaciones: [
            "Módulos: ESP8266 / SIM800L",
            "Cobertura: 100+ metros",
            "Velocidad: GPRS/WiFi",
            "Latencia: <2 segundos",
            "Notificaciones: SMS/Push",
        ],
    },
    {
        icon: Smartphone,
        title: "App de Seguridad",
        tipo: "Salida",
        color: "#38bdf8",
        desc: "Control y monitoreo remoto",
        detalles:
            "Aplicación móvil que permite al propietario recibir alertas en tiempo real, monitorear cámaras y controlar la alarma desde cualquier lugar.",
        img: IMGS.architecture,
        especificaciones: [
            "Plataforma: iOS/Android",
            "Actualizaciones: Real-time",
            "Historial: 30+ días",
            "Geolocalización: Sí",
            "Control: Arm/Disarm remoto",
        ],
    },
    {
        icon: Volume2,
        title: "Sirena Interna / Externa",
        tipo: "Salida",
        color: "#fbbf24",
        desc: "Alerta acústica disuasoria",
        detalles:
            "Emite una alarma sonora potente (85dB) que alerta al propietario y los vecinos, además de disuadir al intruso. Puede ser interna o externa.",
        img: IMGS.architecture,
        especificaciones: [
            "Decibeles: 85-120 dB",
            "Frecuencia: 1-4 kHz",
            "Voltaje: 12V DC",
            "Corriente: 500mA",
            "Tipo: Electromecánica/Sirena",
        ],
    },
    {
        icon: Battery,
        title: "Respaldo de Energía",
        tipo: "Soporte",
        color: "#6366f1",
        desc: "Alimentación de respaldo",
        detalles:
            "Un sistema de batería de respaldo garantiza que la alarma funcione incluso si hay corte de electricidad, protegiendo el hogar 24/7.",
        img: IMGS.architecture,
        especificaciones: [
            "Tipo: Batería Li-Po",
            "Capacidad: 5,000-10,000 mAh",
            "Voltaje: 9-12V DC",
            "Autonomía: 8-12 horas",
            "Recarga: 2-4 horas",
        ],
    },
    {
        icon: Network,
        title: "Aviso a Central Monitoreada",
        tipo: "Externa",
        color: "#ec4899",
        desc: "Integración con servicio profesional (opcional)",
        detalles:
            "Opción avanzada que permite conectar el sistema a una central de monitoreo profesional que puede alertar a autoridades en caso de alarma.",
        img: IMGS.architecture,
        especificaciones: [
            "Protocolo: SIA/CID",
            "Disponibilidad: 24/7",
            "Respuesta: <5 minutos",
            "Verificación: Bimodal",
            "Costo: Mensual",
        ],
    },
];

// ─── Flujos de datos ───────────────────────────────────────────────────────
const flujosDatos = [
    {
        fase: "Detección",
        color: "#22d3ee",
        descripcion: "Los sensores detectan movimiento o apertura",
        pasos: [
            "Sensor PIR o magnético detecta evento",
            "Señal digital enviada a Arduino",
            "Arduino registra el evento en memoria",
        ],
    },
    {
        fase: "Procesamiento",
        color: "#34d399",
        descripcion: "La central procesa y valida la alerta",
        pasos: [
            "Arduino ejecuta lógica de detección",
            "Valida con otros sensores (previene falsas alarmas)",
            "Confirma estado de armado/desarmado",
        ],
    },
    {
        fase: "Acción",
        color: "#f59e0b",
        descripcion: "El sistema ejecuta acciones de alerta",
        pasos: [
            "Activa sirena local (85dB)",
            "Enciende LEDs de alerta",
            "Inicia grabación de cámaras",
        ],
    },
    {
        fase: "Comunicación",
        color: "#a78bfa",
        descripcion: "Notificación remota al propietario",
        pasos: [
            "WiFi/GSM envía alerta a nube",
            "Servidor enruta notificación push",
            "Propietario recibe alerta en móvil",
        ],
    },
];

// ─── Arquitectura técnica ──────────────────────────────────────────────────
const capasArquitectura = [
    {
        capa: "Capa de Sensores",
        description: "Dispositivos de entrada que detectan eventos",
        items: [
            "PIR HC-SR501",
            "Reed Switches",
            "Cámaras IP",
            "Sensores ultrasónicos",
        ],
        color: "#22d3ee",
    },
    {
        capa: "Capa de Control",
        description: "Procesamiento central y lógica de detección",
        items: [
            "Arduino Uno/Mega",
            "Firmware de detección",
            "Lógica de validación",
            "Memoria de eventos",
        ],
        color: "#a78bfa",
    },
    {
        capa: "Capa de Actuadores",
        description: "Dispositivos de salida que actúan ante alertas",
        items: ["Sirena", "LEDs", "Relés", "Motores (opcional)"],
        color: "#f59e0b",
    },
    {
        capa: "Capa de Comunicación",
        description: "Conectividad e integración remota",
        items: [
            "WiFi (ESP8266)",
            "GSM (SIM800L)",
            "Cloud/API",
            "Aplicación móvil",
        ],
        color: "#34d399",
    },
];

// ─── Component card ──────────────────────────────────────────────────────────
function ComponenteCard({
    componente,
    i,
}: {
    componente: (typeof componentesSistema)[0];
    i: number;
}) {
    const Icon = componente.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
            style={{
                background: "#0f172a",
                border: `1px solid ${componente.color}`,
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "all 0.3s",
            }}
            whileHover={{ y: -4, boxShadow: `0 0 30px ${componente.color}33` }}
        >
            {/* Header */}
            <div
                style={{
                    background: `${componente.color}15`,
                    borderBottom: `1px solid ${componente.color}`,
                    padding: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                }}
            >
                <div
                    style={{
                        color: componente.color,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Icon size={24} />
                </div>
                <div style={{ flex: 1 }}>
                    <h3
                        style={{
                            color: "#e2e8f0",
                            fontWeight: 700,
                            fontSize: "1rem",
                            margin: 0,
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {componente.title}
                    </h3>
                    <p
                        style={{
                            color: componente.color,
                            fontSize: "0.7rem",
                            margin: "0.25rem 0 0 0",
                            fontWeight: 600,
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        {componente.tipo}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.5rem" }}>
                <p
                    style={{
                        color: "#94a3b8",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        margin: "0 0 1rem 0",
                    }}
                >
                    {componente.detalles}
                </p>

                <p
                    style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: componente.color,
                        margin: "1rem 0 0.75rem 0",
                    }}
                >
                    Especificaciones:
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                    }}
                >
                    {componente.especificaciones.map((spec, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "flex-start",
                                fontSize: "0.75rem",
                                color: "#cbd5e1",
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    color: componente.color,
                                    marginTop: "2px",
                                }}
                            >
                                ▪
                            </span>
                            <span>{spec}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ──────────────────────────────────────────────────────────
export const DiagramaTecnologico = () => {
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
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34,211,238,0.5); }
          50% { box-shadow: 0 0 40px rgba(34,211,238,0.8); }
        }
      `}</style>

            {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
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
                    alt="tecnología"
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
                            "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />

                {/* Floating decorative elements */}
                {[
                    { top: "15%", left: "12%", icon: Cpu, color: "#22d3ee" },
                    { top: "40%", right: "10%", icon: Wifi, color: "#a78bfa" },
                    { bottom: "15%", left: "20%", icon: Shield, color: "#f59e0b" },
                ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                opacity: 0.06,
                                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                            }}
                        >
                            <Icon size={140} color={item.color} />
                        </div>
                    );
                })}

                {/* Corner decorations */}
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
                        borderTop: "2px solid #34d399",
                        borderRight: "2px solid #34d399",
                    },
                    {
                        bottom: 32,
                        left: 32,
                        borderBottom: "2px solid #f59e0b",
                        borderLeft: "2px solid #f59e0b",
                    },
                    {
                        bottom: 32,
                        right: 32,
                        borderBottom: "2px solid #a78bfa",
                        borderRight: "2px solid #a78bfa",
                    },
                ].map((s, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: 48,
                            height: 48,
                            opacity: 0.4,
                            ...s,
                        }}
                    />
                ))}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        padding: "5rem 2rem 4rem",
                        maxWidth: 820,
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
                        ETAPA 14 — DIAGRAMA TECNOLÓGICO
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: "1.25rem",
                        }}
                    >
                        Diagrama{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#22d3ee,#34d399,#f59e0b)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Tecnológico
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{
                            maxWidth: 620,
                            margin: "0 auto",
                            color: "#94a3b8",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Arquitectura técnica del sistema de alarma antirrobo
                        residencial. Muestra la integración de sensores,
                        procesamiento y actuadores
                    </motion.p>
                </div>
            </section>

            {/* ── DIAGRAMA CENTRAL ────────────────────────────────────────────── */}
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
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "2.5rem",
                            textAlign: "center",
                            color: "#e2e8f0",
                        }}
                    >
                        Arquitectura del Sistema
                    </h2>

                    {/* Diagrama */}
                    <div
                        style={{
                            background: "#0f172a",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "1.5rem",
                            padding: "2rem",
                            marginBottom: "3rem",
                            overflow: "auto",
                        }}
                    >
                        <img
                            src={diagramaTecnoImg}
                            alt="Diagrama Tecnológico - Alarma Inteligente"
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
                            color: "#94a3b8",
                            fontSize: "0.95rem",
                            lineHeight: 1.7,
                        }}
                    >
                        El diagrama muestra cómo los sensores de entrada se
                        conectan a la central de alarma (Arduino), que procesa
                        las señales y controla múltiples actuadores de salida
                        para alertar al propietario y las autoridades
                    </p>
                </motion.div>
            </section>

            {/* ── FLUJOS DE DATOS ────────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "4rem 2rem",
                    backgroundColor: "rgba(34, 211, 238, 0.02)",
                    borderRadius: "1.5rem",
                    marginLeft: "2rem",
                    marginRight: "2rem",
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
                    Flujos de Datos y Procesamiento
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {flujosDatos.map((flujo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background: "#0f172a",
                                border: `2px solid ${flujo.color}`,
                                borderRadius: "1rem",
                                padding: "2rem",
                                transition: "all 0.3s",
                            }}
                            whileHover={{
                                boxShadow: `0 0 30px ${flujo.color}33`,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "3rem",
                                    fontWeight: 800,
                                    color: flujo.color,
                                    marginBottom: "0.75rem",
                                    fontFamily: "'Space Mono', monospace",
                                }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    color: flujo.color,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {flujo.fase}
                            </h3>
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "0.9rem",
                                    marginBottom: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                {flujo.descripcion}
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                }}
                            >
                                {flujo.pasos.map((paso, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            display: "flex",
                                            gap: "0.75rem",
                                            alignItems: "flex-start",
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        <ArrowRight
                                            size={16}
                                            color={flujo.color}
                                            style={{
                                                marginTop: "2px",
                                                flexShrink: 0,
                                            }}
                                        />
                                        <span
                                            style={{
                                                color: "#94a3b8",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {paso}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CAPAS ARQUITECTÓNICAS ───────────────────────────────────────── */}
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
                        marginBottom: "3rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Capas Arquitectónicas del Sistema
                </motion.h2>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    {capasArquitectura.map((capa, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                background: `linear-gradient(135deg, ${capa.color}10, ${capa.color}05)`,
                                border: `2px solid ${capa.color}`,
                                borderRadius: "1rem",
                                padding: "2rem",
                                transition: "all 0.3s",
                            }}
                            whileHover={{
                                boxShadow: `0 0 40px ${capa.color}33`,
                                x: 8,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "1.5rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "0.75rem",
                                        background: `${capa.color}20`,
                                        border: `2px solid ${capa.color}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "1.8rem",
                                            fontWeight: 800,
                                            color: capa.color,
                                            fontFamily: "'Space Mono', monospace",
                                        }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3
                                        style={{
                                            fontSize: "1.3rem",
                                            fontWeight: 700,
                                            color: capa.color,
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {capa.capa}
                                    </h3>
                                    <p
                                        style={{
                                            color: "#cbd5e1",
                                            fontSize: "0.95rem",
                                            marginBottom: "1rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {capa.description}
                                    </p>
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                                "repeat(auto-fit, minmax(150px, 1fr))",
                                            gap: "0.75rem",
                                        }}
                                    >
                                        {capa.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    background: `${capa.color}15`,
                                                    border: `1px solid ${capa.color}`,
                                                    borderRadius: "0.5rem",
                                                    padding: "0.75rem",
                                                    fontSize: "0.85rem",
                                                    color: "#cbd5e1",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── COMPONENTES DETALLADOS ────────────────────────────────────── */}
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
                        marginBottom: "1rem",
                        textAlign: "center",
                        color: "#e2e8f0",
                    }}
                >
                    Componentes del Sistema — Análisis Detallado
                </motion.h2>
                <p
                    style={{
                        textAlign: "center",
                        color: "#94a3b8",
                        marginBottom: "3rem",
                        fontSize: "1rem",
                    }}
                >
                    Explora cada componente del sistema y sus especificaciones
                    técnicas
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {componentesSistema.map((componente, i) => (
                        <ComponenteCard
                            key={componente.title}
                            componente={componente}
                            i={i}
                        />
                    ))}
                </div>
            </section>

            {/* ── INTEGRACIÓN TOTAL ───────────────────────────────────────────── */}
            <section
                style={{
                    maxWidth: "1200px",
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
                        border: "2px solid #22d3ee",
                        borderRadius: "1.5rem",
                        padding: "3rem",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <AlertCircle color="#22d3ee" size={48} />
                    </div>
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            color: "#e2e8f0",
                        }}
                    >
                        Cómo Funciona la Integración
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#cbd5e1",
                            lineHeight: 1.8,
                            maxWidth: 700,
                            margin: "0 auto",
                        }}
                    >
                        Todos los componentes del sistema funcionan en
                        sincronización. Los sensores detectan eventos y envían
                        señales a la central, que procesa la información,
                        ejecuta la lógica de detección y actúa en consecuencia,
                        notificando al propietario y activando los mecanismos
                        de protección en menos de 500 milisegundos.
                    </p>
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
                        Continuar al grupo Datos
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            maxWidth: 440,
                            margin: "0 auto 2rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Con el diagrama completo, el siguiente paso es explorar
                        los datos y herramientas de investigación del proyecto.
                    </p>
                    <a
                        href="/notebooklm"
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
                        Ver NotebookLM →
                    </a>
                </motion.div>
            </section>
        </div>
    );
};
