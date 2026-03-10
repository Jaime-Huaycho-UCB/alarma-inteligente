import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Inicio", path: "/", code: "00" },
    { name: "Lluvia de ideas", path: "/lluvia-ideas", code: "01" },
    { name: "Ishikawa", path: "/ishikawa", code: "02" },
    { name: "Definición", path: "/definicion-problema", code: "03" },
    { name: "La Pregunta", path: "/la-pregunta", code: "04" },
    { name: "Objetivo", path: "/objetivo", code: "05" },
    { name: "SMART", path: "/smart", code: "06" },
    { name: "PART", path: "/modelo-part", code: "07" },
    { name: "SmartSheet", path: "/smartsheet", code: "08" },
    { name: "Contactos", path: "/contactos", code: "09" }
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@600;700&display=swap');

        .nav-link-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #94a3b8;
          text-decoration: none;
          padding: 0.35rem 0;
          transition: color 0.25s ease;
          letter-spacing: 0.02em;
        }

        .nav-link-item:hover { color: #e2e8f0; }
        .nav-link-item.active { color: #22d3ee; }

        .nav-link-item .code {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          color: #334155;
          transition: color 0.25s ease;
        }

        .nav-link-item:hover .code,
        .nav-link-item.active .code { color: #0891b2; }

        .nav-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, #22d3ee, #0ea5e9);
        }

        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    background: scrolled
                        ? "rgba(2,6,23,0.92)"
                        : "rgba(15,23,42,0.75)",
                    borderBottom: "1px solid rgba(34,211,238,0.12)",
                    boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
                    transition: "background 0.4s ease, box-shadow 0.4s ease",
                }}
            >
                <div
                    style={{
                        maxWidth: 1280,
                        margin: "0 auto",
                        padding: "0 1.5rem",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* ── LOGO ── */}
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            flexShrink: 0,
                        }}
                    >
                        {/* Animated shield icon */}
                        <div
                            style={{
                                position: "relative",
                                width: 32,
                                height: 32,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    width: 28,
                                    height: 28,
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
                            </motion.div>
                            {/* Blink dot */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: 7,
                                    height: 7,
                                    borderRadius: "50%",
                                    background: "#22d3ee",
                                    boxShadow: "0 0 6px #22d3ee",
                                    animation: "blink 2s infinite",
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
                                    lineHeight: 1.1,
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

                    {/* ── DESKTOP NAV ── */}
                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                        }}
                        className="hidden-mobile"
                    >
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`nav-link-item ${isActive ? "active" : ""}`}
                                    style={{ padding: "0.35rem 0.65rem" }}
                                >
                                    <span className="code">{item.code}</span>
                                    {item.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="nav-underline"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 28,
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── STATUS PILL (desktop) ── */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.35rem 0.9rem",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "9999px",
                            background: "rgba(6,182,212,0.06)",
                            flexShrink: 0,
                        }}
                        className="hidden-mobile"
                    >
                        <div
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "#22d3ee",
                                boxShadow: "0 0 6px #22d3ee",
                                animation: "blink 2.5s infinite",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.65rem",
                                color: "#67e8f9",
                                letterSpacing: "0.08em",
                            }}
                        >
                            SISTEMA ACTIVO
                        </span>
                    </div>

                    {/* ── MOBILE TOGGLE ── */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="show-mobile"
                        style={{
                            background: "none",
                            border: "1px solid rgba(34,211,238,0.25)",
                            borderRadius: "0.4rem",
                            padding: "0.4rem 0.6rem",
                            cursor: "pointer",
                            display: "none",
                        }}
                    >
                        <div
                            style={{
                                width: 20,
                                display: "flex",
                                flexDirection: "column",
                                gap: open ? "0px" : "4px",
                                transition: "gap 0.2s",
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: open ? 45 : 0,
                                    y: open ? 6 : 0,
                                }}
                                style={{
                                    height: 1.5,
                                    background: "#22d3ee",
                                    borderRadius: 2,
                                }}
                            />
                            <motion.div
                                animate={{ opacity: open ? 0 : 1 }}
                                style={{
                                    height: 1.5,
                                    background: "#22d3ee",
                                    borderRadius: 2,
                                }}
                            />
                            <motion.div
                                animate={{
                                    rotate: open ? -45 : 0,
                                    y: open ? -6 : 0,
                                }}
                                style={{
                                    height: 1.5,
                                    background: "#22d3ee",
                                    borderRadius: 2,
                                }}
                            />
                        </div>
                    </button>
                </div>

                {/* ── MOBILE MENU ── */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            style={{
                                overflow: "hidden",
                                borderTop: "1px solid rgba(34,211,238,0.1)",
                                background: "rgba(2,6,23,0.97)",
                            }}
                        >
                            <div
                                style={{
                                    padding: "1rem 1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.25rem",
                                }}
                            >
                                {navItems.map((item, i) => {
                                    const isActive =
                                        location.pathname === item.path;
                                    return (
                                        <motion.div
                                            key={item.path}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.04 }}
                                        >
                                            <Link
                                                to={item.path}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.75rem",
                                                    padding: "0.65rem 0.75rem",
                                                    borderRadius: "0.5rem",
                                                    textDecoration: "none",
                                                    background: isActive
                                                        ? "rgba(6,182,212,0.1)"
                                                        : "transparent",
                                                    border: `1px solid ${isActive ? "rgba(34,211,238,0.25)" : "transparent"}`,
                                                    transition: "all 0.2s ease",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontFamily:
                                                            "'Space Mono', monospace",
                                                        fontSize: "0.65rem",
                                                        color: isActive
                                                            ? "#0891b2"
                                                            : "#334155",
                                                        minWidth: 20,
                                                    }}
                                                >
                                                    {item.code}
                                                </span>
                                                <span
                                                    style={{
                                                        fontFamily:
                                                            "'Syne', sans-serif",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 600,
                                                        color: isActive
                                                            ? "#22d3ee"
                                                            : "#94a3b8",
                                                    }}
                                                >
                                                    {item.name}
                                                </span>
                                                {isActive && (
                                                    <span
                                                        style={{
                                                            marginLeft: "auto",
                                                            color: "#22d3ee",
                                                            fontSize: "0.75rem",
                                                        }}
                                                    >
                                                        ●
                                                    </span>
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                {/* Mobile status */}
                                <div
                                    style={{
                                        marginTop: "0.75rem",
                                        padding: "0.65rem 0.75rem",
                                        borderTop:
                                            "1px solid rgba(34,211,238,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            background: "#22d3ee",
                                            animation: "blink 2s infinite",
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.65rem",
                                            color: "#334155",
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        ARDUINO · SISTEMA ACTIVO
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Responsive styles injected */}
                <style>{`
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
          @media (min-width: 769px) {
            .show-mobile { display: none !important; }
            .hidden-mobile { display: flex !important; }
          }
        `}</style>
            </header>
        </>
    );
};
