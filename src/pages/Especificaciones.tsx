import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    ExternalLink,
    Shield,
    Wifi,
    Bell,
    Smartphone,
    CheckCircle,
    XCircle,
    Zap,
    Users,
    DollarSign,
    Wrench,
    ChevronDown,
    Eye,
    Globe,
    Lock,
    TrendingUp,
    AlertTriangle,
    Star,
    Building2,
    Radio,
    Cpu,
    Camera,
} from "lucide-react";

// ─── Imágenes (Unsplash) ──────────────────────────────────────────────────────
const IMGS = {
    hero:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    inova:      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ondas:      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    protel:     "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    ubicar:     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    mercado:    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    alarma:     "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80",
};

// ─── Estadísticas del mercado ─────────────────────────────────────────────────
const STATS = [
    { valor: "4", unidad: "empresas", desc: "competidoras identificadas en Bolivia", color: "#22d3ee" },
    { valor: "< $50", unidad: "USD", desc: "costo estimado de nuestro hardware", color: "#34d399" },
    { valor: "85 dB", unidad: "buzzer", desc: "alerta local sin dependencia de internet", color: "#f59e0b" },
    { valor: "100%", unidad: "boliviano", desc: "desarrollo local con hardware abierto", color: "#a78bfa" },
];

// ─── Empresas competidoras ─────────────────────────────────────────────────────
// ✏️  EDITA AQUÍ — datos de los competidores
const COMPETIDORES = [
    {
        code: "01",
        nombre: "Inova Bolivia",
        subtitulo: "Sistemas de seguridad & alarmas antiintrusos",
        url: "https://inova.com.bo/sistemas-seguridad-bolivia-innova/710-alarma-antiintrusos-sistema-de-seguridad-bolivia.html",
        urlLabel: "inova.com.bo",
        color: "#22d3ee",
        imagen: IMGS.inova,
        descripcion:
            "Empresa boliviana especializada en sistemas de seguridad integral. Ofrecen alarmas antiintrusos con sensores de movimiento, contactos magnéticos y sirenas, orientadas principalmente a inmuebles comerciales y residenciales. Su enfoque es la venta e instalación de hardware importado con soporte técnico local.",
        descripcionLarga:
            "Inova es uno de los proveedores más completos del mercado boliviano en sistemas antiintrusos. Su catálogo incluye paneles de control de múltiples zonas, sensores pasivos infrarrojos (PIR), contactos magnéticos para puertas y ventanas, teclados LCD y sirenas de exterior. La empresa importa equipos de marcas como DSC y Paradox, ofreciendo garantía de fábrica y servicio postventa. Su modelo de negocio se basa en la venta de hardware más instalación por técnicos propios, con opción a contratos de mantenimiento anual.",
        caracteristicas: [
            "Sensores de movimiento y contacto magnético",
            "Sirenas internas y externas",
            "Panel de control con teclado",
            "Instalación por técnicos certificados",
        ],
        fortalezas: [
            "Amplio catálogo de hardware importado",
            "Técnicos propios con experiencia",
            "Garantía de marca en equipos",
        ],
        limitaciones: [
            "Sin conectividad IoT ni notificaciones remotas",
            "Costo de instalación elevado",
            "Dependencia de proveedores externos",
        ],
        segmento: "Residencial y comercial",
        modelo: "Venta + instalación",
        enfoque: "Hardware importado · Instalación presencial",
    },
    {
        code: "02",
        nombre: "Ondas AT",
        subtitulo: "Alarmas y monitoreo residencial",
        url: "https://ondasat.net/alarmas/",
        urlLabel: "ondasat.net",
        color: "#f59e0b",
        imagen: IMGS.ondas,
        descripcion:
            "Proveedor boliviano de alarmas residenciales y comerciales con servicio de monitoreo 24/7. Trabajan con equipos de marcas reconocidas y ofrecen planes de monitoreo donde una central recibe la señal de la alarma y coordina la respuesta. Orientados a contratos de servicio de mediano y largo plazo.",
        descripcionLarga:
            "Ondas AT opera bajo el modelo de «alarma como servicio», donde el cliente paga una mensualidad por el monitoreo centralizado de su sistema. Cuando se activa una alarma, el operador de la central recibe la señal, verifica la situación y coordina con el propietario o con los servicios de emergencia. Este modelo es popular en zonas residenciales de clase media-alta en ciudades como La Paz, Cochabamba y Santa Cruz. La empresa también provee el hardware de instalación, pero su valor principal es el servicio continuo de vigilancia.",
        caracteristicas: [
            "Monitoreo central 24/7",
            "Equipos de marcas certificadas",
            "Contratos de servicio mensual",
            "Respuesta coordinada ante alertas",
        ],
        fortalezas: [
            "Monitoreo humano continuo",
            "Coordinación con emergencias",
            "Modelo de suscripción predecible",
        ],
        limitaciones: [
            "Costo mensual recurrente obligatorio",
            "Respuesta no instantánea (intervención humana)",
            "Sin app móvil directa al propietario",
        ],
        segmento: "Residencial clase media-alta",
        modelo: "Suscripción mensual",
        enfoque: "Monitoreo centralizado · Contratos de servicio",
    },
    {
        code: "03",
        nombre: "Protel Bolivia",
        subtitulo: "Tecnología en seguridad electrónica",
        url: "https://www.protel.com.bo/",
        urlLabel: "protel.com.bo",
        color: "#34d399",
        imagen: IMGS.protel,
        descripcion:
            "Empresa con trayectoria en el mercado boliviano de seguridad electrónica. Integran soluciones de CCTV, alarmas, control de acceso y automatización. Su propuesta abarca desde el diseño del sistema hasta la instalación y mantenimiento, dirigida principalmente a empresas medianas y grandes.",
        descripcionLarga:
            "Protel se posiciona como integrador de sistemas de seguridad de alto nivel. No solo venden alarmas sino que diseñan arquitecturas de seguridad completas que combinan videovigilancia IP, control de acceso biométrico, sistemas de intrusión y automatización de edificios. Su cliente típico es una empresa mediana o una institución que requiere un sistema centralizado de gestión de seguridad (PSIM). Tienen experiencia en proyectos de gran escala como centros comerciales, instituciones educativas y edificios de oficinas.",
        caracteristicas: [
            "CCTV + alarmas integrados",
            "Control de acceso biométrico",
            "Automatización de instalaciones",
            "Soporte y mantenimiento continuo",
        ],
        fortalezas: [
            "Integración de múltiples sistemas",
            "Proyectos de gran escala",
            "Soporte técnico especializado",
        ],
        limitaciones: [
            "Orientado a empresas, no hogares",
            "Presupuesto de instalación alto",
            "Sin solución económica para residencias",
        ],
        segmento: "Empresarial e institucional",
        modelo: "Integración de sistemas",
        enfoque: "Solución integral · Segmento empresarial",
    },
    {
        code: "04",
        nombre: "Ubicar Bolivia",
        subtitulo: "Monitoreo de propiedades y alarmas",
        url: "https://www.ubicar.com.bo/servicios-monitoreo-de-propiedades/sistema-de-alarma",
        urlLabel: "ubicar.com.bo",
        color: "#a78bfa",
        imagen: IMGS.ubicar,
        descripcion:
            "Plataforma boliviana enfocada en el monitoreo GPS y seguridad de propiedades. Combinan alarmas tradicionales con rastreo en tiempo real y notificaciones al propietario. Su diferencial es la integración entre seguridad física y seguimiento digital, con aplicación móvil para visualización remota.",
        descripcionLarga:
            "Ubicar es la propuesta más cercana a un sistema IoT dentro del mercado boliviano identificado. Nacida como empresa de rastreo GPS para vehículos, ha expandido su plataforma hacia el monitoreo de propiedades. Ofrecen alarmas conectadas a su plataforma en la nube, permitiendo al propietario recibir notificaciones en tiempo real a través de su app móvil. Es el competidor que más se acerca a la propuesta del proyecto en términos de conectividad, aunque su enfoque principal sigue siendo el rastreo vehicular y no el sistema de alarma residencial inteligente.",
        caracteristicas: [
            "Monitoreo GPS en tiempo real",
            "App móvil para propietarios",
            "Notificaciones remotas",
            "Integración alarma + rastreo",
        ],
        fortalezas: [
            "App móvil propia y funcional",
            "Notificaciones en tiempo real",
            "Plataforma cloud establecida",
        ],
        limitaciones: [
            "Enfoque principal en rastreo vehicular",
            "Alarma residencial como servicio secundario",
            "Sin validación cruzada de sensores",
        ],
        segmento: "Residencial y vehicular",
        modelo: "Plataforma + suscripción",
        enfoque: "GPS + Alarma · App móvil propia",
    },
];

// ─── Tabla comparativa ────────────────────────────────────────────────────────
const CRITERIOS = [
    {
        icon: DollarSign,
        criterio: "Accesibilidad económica (< $50 USD)",
        competidores: [false, false, false, false],
        nosotros: true,
        nota: "Hardware abierto de bajo costo",
    },
    {
        icon: Wifi,
        criterio: "Conectividad IoT propia",
        competidores: [false, false, false, true],
        nosotros: true,
        nota: "ESP8266 + protocolo propio",
    },
    {
        icon: Smartphone,
        criterio: "Notificación push al propietario",
        competidores: [false, true, false, true],
        nosotros: true,
        nota: "Alerta instantánea en segundos",
    },
    {
        icon: Wrench,
        criterio: "Hardware de código abierto",
        competidores: [false, false, false, false],
        nosotros: true,
        nota: "Arduino + sensores estándar",
    },
    {
        icon: Shield,
        criterio: "Validación cruzada de sensores",
        competidores: [false, false, false, false],
        nosotros: true,
        nota: "PIR + ultrasónico en paralelo",
    },
    {
        icon: Bell,
        criterio: "Alarma autónoma sin internet",
        competidores: [true, false, true, false],
        nosotros: true,
        nota: "Buzzer 85 dB, resiliente a cortes",
    },
    {
        icon: Users,
        criterio: "Soporte técnico local",
        competidores: [true, true, true, true],
        nosotros: true,
        nota: "Equipo universitario directo",
    },
    {
        icon: Zap,
        criterio: "Desarrollo 100% boliviano",
        competidores: [true, true, true, true],
        nosotros: true,
        nota: "Diseñado y construido en Bolivia",
    },
];

// ─── Stack tecnológico comparado ──────────────────────────────────────────────
const STACK_ITEMS = [
    {
        capa: "Detección",
        icon: Eye,
        color: "#22d3ee",
        competencia: "Sensores PIR y magnéticos de marcas importadas (DSC, Paradox, Bosch)",
        nosotros: "Sensor PIR HC-SR501 + ultrasónico HC-SR04 con validación cruzada en Arduino",
    },
    {
        capa: "Procesamiento",
        icon: Cpu,
        color: "#f59e0b",
        competencia: "Paneles de control propietarios con firmware cerrado",
        nosotros: "Arduino Uno con lógica propia programada en C++, código abierto y modificable",
    },
    {
        capa: "Conectividad",
        icon: Radio,
        color: "#34d399",
        competencia: "Línea telefónica (PSTN), GSM o plataforma cloud del proveedor",
        nosotros: "Módulo ESP8266 WiFi con protocolo TCP/IP sobre red doméstica existente",
    },
    {
        capa: "Alerta local",
        icon: Bell,
        color: "#a78bfa",
        competencia: "Sirenas de 110 dB y estrobos, requieren instalación por técnico",
        nosotros: "Buzzer activo de 85 dB + LED de alerta, montaje sin herramientas especiales",
    },
    {
        capa: "Notificación remota",
        icon: Smartphone,
        color: "#fb7185",
        competencia: "Llamada a central de monitoreo o app del proveedor (solo en Ondas AT / Ubicar)",
        nosotros: "Notificación push directa al propietario en segundos vía app",
    },
    {
        capa: "Cámara / Visión",
        icon: Camera,
        color: "#38bdf8",
        competencia: "CCTV IP integrado (solo Protel), sin análisis automático",
        nosotros: "Módulo de cámara extensible como mejora futura del prototipo actual",
    },
];

// ─── Nuestra diferencia ───────────────────────────────────────────────────────
const DIFERENCIALES = [
    {
        icon: Shield,
        color: "#22d3ee",
        titulo: "Validación cruzada de sensores",
        texto:
            "Combinamos sensor PIR (calor corporal) y ultrasónico (distancia) para confirmar intrusiones antes de disparar la alarma. Ningún competidor boliviano de este segmento de precio aplica este nivel de verificación. Esto reduce drásticamente los falsos positivos que afectan la experiencia del usuario.",
    },
    {
        icon: Bell,
        color: "#f59e0b",
        titulo: "Alarma autónoma sin internet",
        texto:
            "El buzzer de 85 dB actúa de forma inmediata e independiente de la red WiFi. Si el internet falla, la alarma sonora continúa funcionando. Las soluciones de monitoreo centralizado como Ondas AT dependen completamente de la conectividad para funcionar, convirtiéndose en un punto único de fallo.",
    },
    {
        icon: DollarSign,
        color: "#34d399",
        titulo: "Precio accesible para hogares",
        texto:
            "Diseñado para el segmento residencial boliviano con presupuesto limitado. El costo de hardware es menor a $50 USD, significativamente por debajo de cualquier solución comercial instalada por las empresas del sector, cuya inversión inicial típica supera los $200 USD sin incluir mensualidades.",
    },
    {
        icon: Zap,
        color: "#a78bfa",
        titulo: "Sistema extensible y abierto",
        texto:
            "Al estar basado en Arduino y componentes estándar, el sistema puede ampliarse con nuevos sensores o módulos sin depender de un proveedor específico ni pagar licencias de software. Esto reduce el costo total de propiedad a largo plazo y permite mejoras continuas.",
    },
    {
        icon: Globe,
        color: "#fb7185",
        titulo: "Sin dependencia de central de monitoreo",
        texto:
            "A diferencia de Ondas AT y Ubicar, nuestro sistema notifica directamente al propietario sin intermediarios. No hay contratos mensuales, ni central que pueda fallar o tener tiempos de respuesta variables. La alerta llega en segundos, no en minutos.",
    },
    {
        icon: Lock,
        color: "#38bdf8",
        titulo: "Transparencia total del sistema",
        texto:
            "El código, el esquema de conexiones y el diseño de hardware son públicos y auditables. El propietario puede entender exactamente cómo funciona su sistema de seguridad, modificarlo y mejorarlo. Las soluciones comerciales ofrecen cajas negras con firmware cerrado.",
    },
];

// ─── Preguntas frecuentes del análisis ────────────────────────────────────────
const FAQS = [
    {
        pregunta: "¿Por qué los competidores no usan hardware abierto?",
        respuesta:
            "Las empresas comerciales dependen de la venta de hardware propietario y contratos de mantenimiento como fuente de ingresos recurrentes. El hardware abierto eliminaría la dependencia del cliente hacia el proveedor, reduciendo el margen del negocio. Nuestro proyecto al ser académico y sin fines de lucro puede priorizar la accesibilidad sobre el modelo de negocio.",
        color: "#22d3ee",
    },
    {
        pregunta: "¿Puede nuestro sistema competir directamente con estas empresas?",
        respuesta:
            "En el segmento residencial de bajos ingresos, sí. Las empresas identificadas apuntan al segmento medio-alto o empresarial. Nuestro sistema cubre una necesidad no atendida: el hogar boliviano promedio que no puede pagar instalaciones de $200+ USD ni mensualidades de $30-50 USD pero sí necesita seguridad básica inteligente.",
        color: "#f59e0b",
    },
    {
        pregunta: "¿Qué podemos aprender de Ubicar Bolivia?",
        respuesta:
            "Ubicar demuestra que el mercado boliviano ya acepta la notificación remota vía app como feature de valor. Su existencia valida que el usuario boliviano está dispuesto a pagar por conectividad en su sistema de alarma. Nuestro diferencial es ofrecerlo a una fracción del costo y sin contratos.",
        color: "#34d399",
    },
    {
        pregunta: "¿Cuál es el mayor riesgo competitivo identificado?",
        respuesta:
            "Que Inova o Protel lancen una línea de productos low-cost basada en microcontroladores. Sin embargo, su estructura de costos (importación, técnicos certificados, garantías de marca) hace difícil que puedan competir en precio con un sistema de hardware abierto ensamblado localmente.",
        color: "#a78bfa",
    },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export const Especificaciones = () => {
    const [faqAbierto, setFaqAbierto] = useState<number | null>(null);
    const [cardExpandida, setCardExpandida] = useState<string | null>(null);

    return (
        <div style={{ background: "#020617", color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

            {/* ── HERO ──────────────────────────────────────────────────────────── */}
            <section
                style={{
                    position: "relative",
                    minHeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Imagen de fondo */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${IMGS.hero})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.12)",
                    }}
                />
                {/* Gradiente encima */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.12) 0%, rgba(2,6,23,0.9) 70%)",
                    }}
                />
                {/* Grid decorativo */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
                {/* Ícono decorativo */}
                <div style={{ position: "absolute", top: "20%", right: "8%", opacity: 0.05 }}>
                    <Shield size={260} color="#22d3ee" />
                </div>
                {/* Esquinas */}
                {[
                    { top: 32, left: 32, borderTop: "2px solid #22d3ee", borderLeft: "2px solid #22d3ee" },
                    { top: 32, right: 32, borderTop: "2px solid #22d3ee", borderRight: "2px solid #22d3ee" },
                    { bottom: 32, left: 32, borderBottom: "2px solid #22d3ee", borderLeft: "2px solid #22d3ee" },
                    { bottom: 32, right: 32, borderBottom: "2px solid #22d3ee", borderRight: "2px solid #22d3ee" },
                ].map((s, i) => (
                    <div key={i} style={{ position: "absolute", width: 48, height: 48, opacity: 0.35, ...s }} />
                ))}

                <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "5rem 2rem 4rem", maxWidth: 860 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "0.3rem 1rem",
                            borderRadius: "2rem",
                            border: "1px solid rgba(34,211,238,0.35)",
                            background: "rgba(34,211,238,0.08)",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <Building2 size={13} color="#22d3ee" />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#22d3ee", letterSpacing: "0.12em" }}>
                            ANÁLISIS DE MERCADO · SECCIÓN 23 · GRUPO DATOS
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 1.2rem" }}
                    >
                        Especificaciones{" "}
                        <span style={{ color: "#22d3ee" }}>del Mercado</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: 660, margin: "0 auto 2rem" }}
                    >
                        Relevamiento de <strong style={{ color: "#e2e8f0" }}>4 empresas bolivianas</strong> que ofrecen
                        productos similares al sistema de alarma inteligente que desarrollamos. Analizamos sus propuestas,
                        tecnologías y modelos de negocio para identificar nuestra ventaja diferencial.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
                    >
                        {COMPETIDORES.map((c) => (
                            <a
                                key={c.code}
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    background: `${c.color}14`,
                                    border: `1px solid ${c.color}33`,
                                    borderRadius: 8,
                                    padding: "6px 14px",
                                    color: c.color,
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                }}
                            >
                                {c.nombre} <ExternalLink size={11} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── ESTADÍSTICAS ──────────────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "40px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.desc}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{ textAlign: "center", padding: "16px 8px" }}
                        >
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2rem", fontWeight: 700, color: s.color, lineHeight: 1 }}>
                                {s.valor}
                            </div>
                            <div style={{ fontSize: "0.7rem", color: s.color, fontWeight: 700, letterSpacing: "0.1em", margin: "4px 0 6px", opacity: 0.7 }}>
                                {s.unidad.toUpperCase()}
                            </div>
                            <div style={{ fontSize: "0.78rem", color: "#64748b" }}>{s.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── TARJETAS DE COMPETIDORES ──────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 48px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#22d3ee", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>
                        COMPETIDORES IDENTIFICADOS
                    </p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>
                        Empresas del sector en Bolivia
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                        Haz clic en una tarjeta para ver el análisis extendido de cada empresa.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
                    {COMPETIDORES.map((c, i) => {
                        const expandida = cardExpandida === c.code;
                        return (
                            <motion.div
                                key={c.code}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    background: "#0b1629",
                                    border: `1px solid ${expandida ? c.color + "55" : c.color + "22"}`,
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    boxShadow: expandida ? `0 0 32px ${c.color}18` : "none",
                                    transition: "border-color 0.3s, box-shadow 0.3s",
                                }}
                                onClick={() => setCardExpandida(expandida ? null : c.code)}
                            >
                                {/* Imagen */}
                                <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                                    <img
                                        src={c.imagen}
                                        alt={c.nombre}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4)" }}
                                    />
                                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${c.color}33, transparent)` }} />
                                    <div style={{ position: "absolute", bottom: 16, left: 20 }}>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: c.color, fontWeight: 700, letterSpacing: "0.1em" }}>
                                            {c.code}
                                        </span>
                                        <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#e2e8f0", margin: "2px 0 0" }}>{c.nombre}</h3>
                                    </div>
                                    <div style={{ position: "absolute", top: 16, right: 16 }}>
                                        <a
                                            href={c.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 5,
                                                background: `${c.color}22`,
                                                border: `1px solid ${c.color}55`,
                                                borderRadius: 8,
                                                padding: "5px 12px",
                                                color: c.color,
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                textDecoration: "none",
                                            }}
                                        >
                                            {c.urlLabel} <ExternalLink size={11} />
                                        </a>
                                    </div>
                                </div>

                                {/* Cuerpo */}
                                <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
                                    <p style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>{c.subtitulo}</p>
                                    <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.65 }}>{c.descripcion}</p>

                                    {/* Características */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                        {c.caracteristicas.map((feat) => (
                                            <div key={feat} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                                <div style={{ width: 5, height: 5, borderRadius: "50%", background: c.color, flexShrink: 0 }} />
                                                <span style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Expandible */}
                                    <AnimatePresence>
                                        {expandida && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.35 }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div style={{ paddingTop: 12, borderTop: `1px solid ${c.color}18`, display: "flex", flexDirection: "column", gap: 14 }}>
                                                    <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.7 }}>{c.descripcionLarga}</p>

                                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                                        <div>
                                                            <p style={{ fontSize: "0.68rem", color: "#34d399", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>FORTALEZAS</p>
                                                            {c.fortalezas.map((f) => (
                                                                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
                                                                    <CheckCircle size={12} color="#34d399" style={{ marginTop: 2, flexShrink: 0 }} />
                                                                    <span style={{ fontSize: "0.75rem", color: "#cbd5e1" }}>{f}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div>
                                                            <p style={{ fontSize: "0.68rem", color: "#fb7185", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>LIMITACIONES</p>
                                                            {c.limitaciones.map((l) => (
                                                                <div key={l} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
                                                                    <XCircle size={12} color="#fb7185" style={{ marginTop: 2, flexShrink: 0 }} />
                                                                    <span style={{ fontSize: "0.75rem", color: "#cbd5e1" }}>{l}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                                        {[
                                                            { label: "Segmento", val: c.segmento },
                                                            { label: "Modelo", val: c.modelo },
                                                        ].map((item) => (
                                                            <div key={item.label} style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, padding: "6px 12px" }}>
                                                                <span style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, display: "block" }}>{item.label.toUpperCase()}</span>
                                                                <span style={{ fontSize: "0.78rem", color: "#e2e8f0", fontWeight: 600 }}>{item.val}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Footer */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: `1px solid ${c.color}18` }}>
                                        <span style={{ fontSize: "0.72rem", color: "#475569", background: "#0f172a", border: "1px solid #1e293b", borderRadius: 6, padding: "4px 10px", fontFamily: "'Space Mono', monospace" }}>
                                            {c.enfoque}
                                        </span>
                                        <div style={{ display: "flex", alignItems: "center", gap: 6, color: c.color, fontSize: "0.75rem", fontWeight: 700 }}>
                                            <span>{expandida ? "Cerrar" : "Ver análisis"}</span>
                                            <motion.div animate={{ rotate: expandida ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                                <ChevronDown size={15} color={c.color} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── IMAGEN CENTRAL + CONTEXTO ─────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "0" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
                    {/* Imagen */}
                    <div style={{ position: "relative", minHeight: 420, overflow: "hidden" }}>
                        <img
                            src={IMGS.mercado}
                            alt="Mercado de seguridad"
                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.3)" }}
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #080f1f)" }} />
                        <div style={{ position: "absolute", bottom: 32, left: 32 }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2.5rem", fontWeight: 700, color: "#22d3ee" }}>4</div>
                            <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>empresas analizadas</div>
                        </div>
                    </div>

                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        style={{ padding: "56px 40px" }}
                    >
                        <p style={{ color: "#22d3ee", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 12 }}>
                            CONTEXTO DEL MERCADO
                        </p>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#e2e8f0", marginBottom: 16, lineHeight: 1.2 }}>
                            El ecosistema de seguridad residencial en Bolivia
                        </h2>
                        <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 14 }}>
                            El mercado boliviano de alarmas y seguridad electrónica está dominado por empresas que importan
                            hardware de marcas internacionales (DSC, Paradox, Bosch, Hikvision) y ofrecen servicios de
                            instalación y monitoreo. La barrera de entrada para el usuario es principalmente económica:
                            instalaciones que parten de los $150–$300 USD más mensualidades de $25–$50 USD.
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
                            Este costo deja fuera del mercado a gran parte de los hogares bolivianos, especialmente en
                            ciudades intermedias. Ninguna de las empresas identificadas ofrece una solución IoT de bajo
                            costo, código abierto y sin contrato de mantenimiento obligatorio.
                        </p>
                        {[
                            { icon: TrendingUp, color: "#34d399", texto: "Mercado en crecimiento por aumento de la inseguridad urbana" },
                            { icon: AlertTriangle, color: "#f59e0b", texto: "Brecha de precio no cubierta por ningún competidor actual" },
                            { icon: Star, color: "#a78bfa", texto: "Oportunidad en el segmento residencial de bajo y medio ingreso" },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                                    <Icon size={16} color={item.color} style={{ marginTop: 2, flexShrink: 0 }} />
                                    <span style={{ fontSize: "0.82rem", color: "#cbd5e1" }}>{item.texto}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── TABLA COMPARATIVA ─────────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 40 }}
                >
                    <p style={{ color: "#34d399", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>
                        BENCHMARKING
                    </p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>
                        Comparativa de capacidades
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                        Evaluación de criterios técnicos y de negocio frente a los competidores bolivianos identificados.
                    </p>
                </motion.div>

                {/* Encabezado */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 40px 40px 40px 1fr", gap: 8, padding: "10px 20px", marginBottom: 8, alignItems: "center" }}>
                    <span style={{ fontSize: "0.7rem", color: "#475569", fontWeight: 700, letterSpacing: "0.08em" }}>CRITERIO</span>
                    {COMPETIDORES.map((c) => (
                        <span key={c.code} style={{ fontSize: "0.62rem", color: c.color, fontWeight: 700, textAlign: "center" }} title={c.nombre}>
                            {c.code}
                        </span>
                    ))}
                    <span style={{ fontSize: "0.7rem", color: "#22d3ee", fontWeight: 700, letterSpacing: "0.08em", textAlign: "right" }}>
                        NOSOTROS
                    </span>
                </div>

                {CRITERIOS.map((row, i) => {
                    const Icon = row.icon;
                    return (
                        <motion.div
                            key={row.criterio}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            viewport={{ once: true }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 40px 40px 40px 40px 1fr",
                                gap: 8,
                                padding: "14px 20px",
                                background: i % 2 === 0 ? "#0b1629" : "transparent",
                                borderRadius: 10,
                                alignItems: "center",
                                marginBottom: 4,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <Icon size={15} color="#475569" />
                                <span style={{ fontSize: "0.82rem", color: "#cbd5e1", fontWeight: 600 }}>{row.criterio}</span>
                            </div>
                            {row.competidores.map((val, ci) => (
                                <div key={ci} style={{ display: "flex", justifyContent: "center" }}>
                                    {val ? <CheckCircle size={16} color="#34d399" /> : <XCircle size={16} color="#334155" />}
                                </div>
                            ))}
                            <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
                                <span style={{ fontSize: "0.72rem", color: "#64748b", textAlign: "right" }}>{row.nota}</span>
                                <CheckCircle size={16} color="#22d3ee" />
                            </div>
                        </motion.div>
                    );
                })}

                {/* Leyenda */}
                <div style={{ display: "flex", gap: 20, marginTop: 24, flexWrap: "wrap" }}>
                    {COMPETIDORES.map((c) => (
                        <div key={c.code} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: c.color, fontWeight: 700 }}>{c.code}</span>
                            <span style={{ fontSize: "0.72rem", color: "#475569" }}>{c.nombre}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── STACK TECNOLÓGICO COMPARADO ───────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "72px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: 48 }}
                    >
                        <p style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>
                            ARQUITECTURA TÉCNICA
                        </p>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>
                            Stack tecnológico comparado
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8, maxWidth: 560 }}>
                            Capa por capa, cómo se compara la tecnología que usa la competencia vs. lo que implementamos en el proyecto.
                        </p>
                    </motion.div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {STACK_ITEMS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.capa}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "140px 1fr 1fr",
                                        gap: 16,
                                        background: "#0b1629",
                                        border: `1px solid ${item.color}18`,
                                        borderRadius: 12,
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Capa */}
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: 20, background: `${item.color}0c`, borderRight: `1px solid ${item.color}18` }}>
                                        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}18`, border: `1px solid ${item.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Icon size={18} color={item.color} />
                                        </div>
                                        <span style={{ fontSize: "0.72rem", color: item.color, fontWeight: 700, textAlign: "center", letterSpacing: "0.05em" }}>{item.capa.toUpperCase()}</span>
                                    </div>
                                    {/* Competencia */}
                                    <div style={{ padding: "18px 20px" }}>
                                        <p style={{ fontSize: "0.65rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>COMPETENCIA</p>
                                        <p style={{ fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.6 }}>{item.competencia}</p>
                                    </div>
                                    {/* Nosotros */}
                                    <div style={{ padding: "18px 20px", borderLeft: `1px solid ${item.color}18` }}>
                                        <p style={{ fontSize: "0.65rem", color: item.color, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6 }}>NUESTRO SISTEMA</p>
                                        <p style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.6 }}>{item.nosotros}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── NUESTRA DIFERENCIA ────────────────────────────────────────────── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ color: "#a78bfa", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>
                        PROPUESTA DE VALOR
                    </p>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>
                        Nuestra ventaja diferencial
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8, maxWidth: 520 }}>
                        Aspectos técnicos y de negocio que posicionan al sistema de alarma inteligente por encima
                        de las soluciones comerciales existentes en Bolivia.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
                    {DIFERENCIALES.map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <motion.div
                                key={d.titulo}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                style={{
                                    background: "#0b1629",
                                    border: `1px solid ${d.color}22`,
                                    borderRadius: 14,
                                    padding: 24,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12,
                                }}
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

            {/* ── PREGUNTAS DEL ANÁLISIS ────────────────────────────────────────── */}
            <section style={{ background: "#080f1f", borderTop: "1px solid #1e293b", padding: "72px 24px 96px" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: 48 }}
                    >
                        <p style={{ color: "#fb7185", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 8 }}>
                            ANÁLISIS CRÍTICO
                        </p>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0" }}>
                            Preguntas clave del análisis competitivo
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "0.875rem", marginTop: 8 }}>
                            Reflexiones derivadas del relevamiento de mercado para orientar las decisiones del proyecto.
                        </p>
                    </motion.div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {FAQS.map((faq, i) => {
                            const abierto = faqAbierto === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    style={{
                                        background: "#0b1629",
                                        border: `1px solid ${abierto ? faq.color + "44" : "#1e293b"}`,
                                        borderRadius: 12,
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        transition: "border-color 0.3s",
                                    }}
                                    onClick={() => setFaqAbierto(abierto ? null : i)}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", gap: 12 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: faq.color, flexShrink: 0 }} />
                                            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#e2e8f0" }}>{faq.pregunta}</span>
                                        </div>
                                        <motion.div animate={{ rotate: abierto ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
                                            <ChevronDown size={18} color="#475569" />
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {abierto && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div style={{ padding: "0 22px 20px 42px" }}>
                                                    <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.75 }}>{faq.respuesta}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
