import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Lluvia de ideas", path: "/lluvia-ideas" },
    { name: "Ishikawa", path: "/ishikawa" },
    { name: "Definición", path: "/definicion-problema" },
    { name: "La Pregunta", path: "/la-pregunta" },
    { name: "Objetivo", path: "/objetivo" },
    { name: "Modelo PART", path: "/modelo-part" },
    { name: "Modelo SMART", path: "/smart" },
];

const socials = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
];

export const Footer = () => {
    return (
        <footer
            style={{
                background: "#080f1f",
                borderTop: "1px solid rgba(34,211,238,0.1)",
                fontFamily: "'Syne', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

            {/* ── TOP STRIP ────────────────────────────────────────────────────── */}
            <div
                style={{
                    borderBottom: "1px solid rgba(34,211,238,0.08)",
                    padding: "2rem 1.5rem",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#22d3ee",
                                boxShadow: "0 0 8px #22d3ee",
                                animation: "blink 2s infinite",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.72rem",
                                color: "#475569",
                                letterSpacing: "0.12em",
                            }}
                        >
                            SISTEMA DE ALARMA — EN LÍNEA Y ACTIVO
                        </span>
                    </div>
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.65rem",
                            color: "#334155",
                            letterSpacing: "0.08em",
                        }}
                    >
                        ARDUINO UNO R3 · SENSOR PIR · ESP8266 · BUZZER 85 dB
                    </div>
                </div>
            </div>

            {/* ── MAIN FOOTER BODY ─────────────────────────────────────────────── */}
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "3.5rem 1.5rem",
                    display: "grid",
                    gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
                    gap: "3rem",
                }}
            >
                {/* ── COL 1: Brand ─────────────────────────────────────────────── */}
                <div>
                    {/* Logo */}
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            marginBottom: "1.25rem",
                        }}
                    >
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                border: "1.5px solid #22d3ee",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(6,182,212,0.08)",
                            }}
                        >
                            <div
                                style={{
                                    width: 10,
                                    height: 10,
                                    background: "#22d3ee",
                                    borderRadius: "2px",
                                    boxShadow: "0 0 8px #22d3ee",
                                }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    color: "#e2e8f0",
                                }}
                            >
                                Sistema{" "}
                                <span style={{ color: "#22d3ee" }}>Alarma</span>
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.58rem",
                                    color: "#334155",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                ARDUINO · v1.0
                            </div>
                        </div>
                    </Link>

                    <p
                        style={{
                            color: "#475569",
                            fontSize: "0.83rem",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                            maxWidth: 260,
                        }}
                    >
                        Proyecto académico de ingeniería enfocado en el
                        desarrollo de un sistema de alarma antirrobo inteligente
                        basado en Arduino y sensores electrónicos.
                    </p>

                    {/* Status chip */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "9999px",
                            border: "1px solid rgba(34,211,238,0.2)",
                            background: "rgba(6,182,212,0.06)",
                        }}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "#22d3ee",
                                display: "inline-block",
                                animation: "blink 2.5s infinite",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.65rem",
                                color: "#67e8f9",
                                letterSpacing: "0.06em",
                            }}
                        >
                            PROYECTO ACTIVO
                        </span>
                    </div>
                </div>

                {/* ── COL 2: Navegación ────────────────────────────────────────── */}
                <div>
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#22d3ee",
                            letterSpacing: "0.15em",
                            marginBottom: "1.25rem",
                        }}
                    >
                        // NAVEGACIÓN
                    </div>
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.6rem",
                        }}
                    >
                        {navLinks.slice(0, 4).map((l) => (
                            <li key={l.path}>
                                <Link
                                    to={l.path}
                                    style={{
                                        textDecoration: "none",
                                        color: "#475569",
                                        fontSize: "0.83rem",
                                        transition: "color 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color =
                                            "#22d3ee")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                            "#475569")
                                    }
                                >
                                    <span
                                        style={{
                                            color: "#22d3ee",
                                            opacity: 0.4,
                                            fontSize: "0.65rem",
                                        }}
                                    >
                                        ▸
                                    </span>
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── COL 3: Más secciones ─────────────────────────────────────── */}
                <div>
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#22d3ee",
                            letterSpacing: "0.15em",
                            marginBottom: "1.25rem",
                        }}
                    >
                        // SECCIONES
                    </div>
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.6rem",
                        }}
                    >
                        {navLinks.slice(4).map((l) => (
                            <li key={l.path}>
                                <Link
                                    to={l.path}
                                    style={{
                                        textDecoration: "none",
                                        color: "#475569",
                                        fontSize: "0.83rem",
                                        transition: "color 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color =
                                            "#22d3ee")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                            "#475569")
                                    }
                                >
                                    <span
                                        style={{
                                            color: "#22d3ee",
                                            opacity: 0.4,
                                            fontSize: "0.65rem",
                                        }}
                                    >
                                        ▸
                                    </span>
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── COL 4: Contacto + Redes ──────────────────────────────────── */}
                <div>
                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#22d3ee",
                            letterSpacing: "0.15em",
                            marginBottom: "1.25rem",
                        }}
                    >
                        // CONTACTO
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.6rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {[
                            { label: "Email", value: "info@alarma.com" },
                            { label: "Tel", value: "+591 60000000" },
                            { label: "País", value: "Bolivia" },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                style={{
                                    display: "flex",
                                    gap: "0.5rem",
                                    alignItems: "baseline",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.62rem",
                                        color: "#22d3ee",
                                        minWidth: 36,
                                    }}
                                >
                                    {label}
                                </span>
                                <span
                                    style={{
                                        color: "#475569",
                                        fontSize: "0.82rem",
                                    }}
                                >
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.68rem",
                            color: "#22d3ee",
                            letterSpacing: "0.15em",
                            marginBottom: "1rem",
                        }}
                    >
                        // SÍGUENOS
                    </div>

                    <div style={{ display: "flex", gap: "0.6rem" }}>
                        {socials.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: "0.4rem",
                                    border: "1px solid rgba(34,211,238,0.2)",
                                    background: "rgba(6,182,212,0.05)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#475569",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    transition:
                                        "color 0.2s, border-color 0.2s, background 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#22d3ee";
                                    e.currentTarget.style.borderColor =
                                        "rgba(34,211,238,0.4)";
                                    e.currentTarget.style.background =
                                        "rgba(6,182,212,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#475569";
                                    e.currentTarget.style.borderColor =
                                        "rgba(34,211,238,0.2)";
                                    e.currentTarget.style.background =
                                        "rgba(6,182,212,0.05)";
                                }}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── BOTTOM BAR ───────────────────────────────────────────────────── */}
            <div
                style={{
                    borderTop: "1px solid rgba(34,211,238,0.08)",
                    padding: "1.25rem 1.5rem",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.65rem",
                            color: "#334155",
                        }}
                    >
                        © {new Date().getFullYear()} Alarma Inteligente — Todos
                        los derechos reservados.
                    </span>

                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {["Inicio", "Objetivo", "Modelo SMART"].map(
                            (name, i) => {
                                const paths = ["/", "/objetivo", "/smart"];
                                return (
                                    <Link
                                        key={name}
                                        to={paths[i]}
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.62rem",
                                            color: "#334155",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                            letterSpacing: "0.04em",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.color =
                                                "#22d3ee")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.color =
                                                "#334155")
                                        }
                                    >
                                        {name}
                                    </Link>
                                );
                            },
                        )}
                    </div>

                    <div
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.62rem",
                            color: "#334155",
                        }}
                    >
                        Ingeniería Electrónica — 2024
                    </div>
                </div>
            </div>
        </footer>
    );
};
