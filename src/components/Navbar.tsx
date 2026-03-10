import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  AGREGA secciones aquí — todas al mismo nivel, sin límite
// ─────────────────────────────────────────────────────────────────────────────
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
    { name: "Contactos", path: "/contactos", code: "09" },
    // Agrega más aquí:
    // { name: "Nueva sección", path: "/nueva", code: "10" },
];
// ─────────────────────────────────────────────────────────────────────────────

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [canScrollL, setCanScrollL] = useState(false);
    const [canScrollR, setCanScrollR] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Scroll listener para el header
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Cierra el menú mobile al cambiar ruta
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Detecta si la nav puede hacer scroll izq/der
    const updateArrows = () => {
        const el = navRef.current;
        if (!el) return;
        setCanScrollL(el.scrollLeft > 4);
        setCanScrollR(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        const el = navRef.current;
        if (!el) return;
        updateArrows();
        el.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);
        return () => {
            el.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, []);

    // Al cambiar ruta, hace scroll al item activo
    useEffect(() => {
        const el = navRef.current;
        if (!el) return;
        const activeEl = el.querySelector<HTMLElement>("[data-active='true']");
        if (activeEl) {
            const left =
                activeEl.offsetLeft -
                el.clientWidth / 2 +
                activeEl.offsetWidth / 2;
            el.scrollTo({ left, behavior: "smooth" });
        }
        setTimeout(updateArrows, 350);
    }, [location.pathname]);

    const scrollNav = (dir: "left" | "right") => {
        navRef.current?.scrollBy({
            left: dir === "left" ? -160 : 160,
            behavior: "smooth",
        });
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@600;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .nav-scroll::-webkit-scrollbar { display: none; }
        .nav-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        @media (max-width: 768px) {
          .nav-center { display: none !important; }
          .nav-status  { display: none !important; }
          .nav-toggle  { display: flex  !important; }
        }
        @media (min-width: 769px) {
          .nav-center { display: flex !important; }
          .nav-status  { display: flex  !important; }
          .nav-toggle  { display: none  !important; }
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
                        ? "rgba(2,6,23,0.95)"
                        : "rgba(15,23,42,0.8)",
                    borderBottom: "1px solid rgba(34,211,238,0.1)",
                    boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
                    transition: "background 0.4s, box-shadow 0.4s",
                }}
            >
                <div
                    style={{
                        maxWidth: 1400,
                        margin: "0 auto",
                        padding: "0 1.25rem",
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
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
                        <div style={{ flexShrink: 0 }}>
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

                    {/* ── NAV SCROLLEABLE (desktop) ── */}
                    <div
                        className="nav-center"
                        style={{
                            flex: 1,
                            alignItems: "center",
                            minWidth: 0,
                            position: "relative",
                        }}
                    >
                        {/* Flecha izquierda */}
                        <AnimatePresence>
                            {canScrollL && (
                                <motion.button
                                    initial={{ opacity: 0, x: 4 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 4 }}
                                    onClick={() => scrollNav("left")}
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        zIndex: 2,
                                        width: 26,
                                        height: 26,
                                        borderRadius: "50%",
                                        background: "rgba(2,6,23,0.9)",
                                        border: "1px solid rgba(34,211,238,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        flexShrink: 0,
                                        boxShadow:
                                            "4px 0 12px rgba(2,6,23,0.8)",
                                    }}
                                >
                                    <ChevronLeft
                                        size={13}
                                        style={{ color: "#22d3ee" }}
                                    />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Fade izquierdo */}
                        {canScrollL && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 48,
                                    background:
                                        "linear-gradient(to right, rgba(2,6,23,0.9), transparent)",
                                    zIndex: 1,
                                    pointerEvents: "none",
                                }}
                            />
                        )}

                        {/* Lista scrolleable */}
                        <div
                            ref={navRef}
                            className="nav-scroll"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.15rem",
                                overflowX: "auto",
                                padding: "0 2rem",
                                scrollSnapType: "x proximity",
                            }}
                        >
                            {navItems.map((item) => {
                                const isActive =
                                    location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        data-active={
                                            isActive ? "true" : "false"
                                        }
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.3rem",
                                            flexShrink: 0,
                                            scrollSnapAlign: "start",
                                            fontFamily: "'Syne', sans-serif",
                                            fontWeight: 600,
                                            fontSize: "0.8rem",
                                            color: isActive
                                                ? "#22d3ee"
                                                : "#64748b",
                                            textDecoration: "none",
                                            padding: "0.3rem 0.6rem",
                                            borderRadius: "0.4rem",
                                            background: isActive
                                                ? "rgba(34,211,238,0.08)"
                                                : "transparent",
                                            border: `1px solid ${isActive ? "rgba(34,211,238,0.2)" : "transparent"}`,
                                            transition:
                                                "color 0.2s, background 0.2s, border-color 0.2s",
                                            position: "relative",
                                            letterSpacing: "0.01em",
                                            whiteSpace: "nowrap",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color =
                                                    "#e2e8f0";
                                                e.currentTarget.style.background =
                                                    "rgba(255,255,255,0.04)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color =
                                                    "#64748b";
                                                e.currentTarget.style.background =
                                                    "transparent";
                                            }
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "'Space Mono', monospace",
                                                fontSize: "0.58rem",
                                                color: isActive
                                                    ? "#0891b2"
                                                    : "#1e293b",
                                            }}
                                        >
                                            {item.code}
                                        </span>
                                        {item.name}
                                        {/* Underline activo */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                style={{
                                                    position: "absolute",
                                                    bottom: -1,
                                                    left: "10%",
                                                    right: "10%",
                                                    height: 1,
                                                    background:
                                                        "linear-gradient(90deg, transparent, #22d3ee, transparent)",
                                                    borderRadius: 1,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Fade derecho */}
                        {canScrollR && (
                            <div
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 48,
                                    background:
                                        "linear-gradient(to left, rgba(2,6,23,0.9), transparent)",
                                    zIndex: 1,
                                    pointerEvents: "none",
                                }}
                            />
                        )}

                        {/* Flecha derecha */}
                        <AnimatePresence>
                            {canScrollR && (
                                <motion.button
                                    initial={{ opacity: 0, x: -4 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -4 }}
                                    onClick={() => scrollNav("right")}
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        zIndex: 2,
                                        width: 26,
                                        height: 26,
                                        borderRadius: "50%",
                                        background: "rgba(2,6,23,0.9)",
                                        border: "1px solid rgba(34,211,238,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        flexShrink: 0,
                                        boxShadow:
                                            "-4px 0 12px rgba(2,6,23,0.8)",
                                    }}
                                >
                                    <ChevronRight
                                        size={13}
                                        style={{ color: "#22d3ee" }}
                                    />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ── STATUS PILL (desktop) ── */}
                    <div
                        className="nav-status"
                        style={{
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.35rem 0.9rem",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "9999px",
                            background: "rgba(6,182,212,0.06)",
                            flexShrink: 0,
                        }}
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
                        onClick={() => setMobileOpen((o) => !o)}
                        className="nav-toggle"
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
                                gap: mobileOpen ? "0px" : "4px",
                                transition: "gap 0.2s",
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: mobileOpen ? 45 : 0,
                                    y: mobileOpen ? 6 : 0,
                                }}
                                style={{
                                    height: 1.5,
                                    background: "#22d3ee",
                                    borderRadius: 2,
                                }}
                            />
                            <motion.div
                                animate={{ opacity: mobileOpen ? 0 : 1 }}
                                style={{
                                    height: 1.5,
                                    background: "#22d3ee",
                                    borderRadius: 2,
                                }}
                            />
                            <motion.div
                                animate={{
                                    rotate: mobileOpen ? -45 : 0,
                                    y: mobileOpen ? -6 : 0,
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
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            style={{
                                overflow: "hidden",
                                borderTop: "1px solid rgba(34,211,238,0.1)",
                                background: "rgba(2,6,23,0.98)",
                            }}
                        >
                            <div
                                style={{
                                    padding: "1rem 1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.2rem",
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
                                            transition={{ delay: i * 0.03 }}
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
                                                    transition: "all 0.15s",
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
                                                        fontWeight: 600,
                                                        fontSize: "0.9rem",
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
                                                            fontSize: "0.7rem",
                                                        }}
                                                    >
                                                        ●
                                                    </span>
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                <div
                                    style={{
                                        marginTop: "0.75rem",
                                        paddingTop: "0.75rem",
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
                                            fontSize: "0.62rem",
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
            </header>
        </>
    );
};
