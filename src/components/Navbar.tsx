import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  CONFIGURA TU NAVEGACIÓN AQUÍ
//
// DOS tipos de entrada:
//
// 1. ITEM SUELTO:
//    { type: "item", name: "Inicio", path: "/", code: "00" }
//
// 2. GRUPO (dropdown):
//    {
//      type: "group",
//      label: "Idea",         ← nombre del botón
//      items: [               ← NO necesitas poner color, se asigna automático
//        { name: "Lluvia de ideas", path: "/lluvia-ideas", code: "01" },
//      ]
//    }
//
// Los colores se asignan automáticamente por orden del grupo.
// ─────────────────────────────────────────────────────────────────────────────

type NavItem = { type: "item"; name: string; path: string; code: string };
type NavGroup = {
    type: "group";
    label: string;
    items: { name: string; path: string; code: string }[];
};
type NavEntry = NavItem | NavGroup;

const NAV_CONFIG: NavEntry[] = [
    { type: "item", name: "Inicio", path: "/", code: "00" },

    {
        type: "group",
        label: "Idea",
        items: [
            { name: "Lluvia de ideas", path: "/lluvia-ideas", code: "01" },
            { name: "Ishikawa", path: "/ishikawa", code: "02" },
            { name: "Definición", path: "/definicion-problema", code: "03" },
            { name: "La Pregunta", path: "/la-pregunta", code: "04" },
            { name: "Objetivo", path: "/objetivo", code: "05" },
            { name: "SMART", path: "/smart", code: "06" },
            { name: "PART", path: "/modelo-part", code: "07" },
            { name: "SmartSheet", path: "/smartsheet", code: "08" },
        ],
    },

    {
        type: "group",
        label: "Analisis",
        items: [
            { name: "IDEF0", path: "/modelo-idef0", code: "10" },
            { name: "BPMN", path: "/bpmn", code: "11" },
            { name: "Caso de Uso", path: "/caso-uso", code: "12" },
            { name: "Recursos", path: "/recursos", code: "13" },
            { name: "Diagrama Tecnológico", path: "/diagrama-tecnologico", code: "14" },
            // Agrega más secciones aquí
        ],
    },

    {
        type: "group",
        label: "Datos",
        items: [
            { name: "NotebookLM", path: "/notebooklm", code: "15" },
            { name: "Gapminder", path: "/gapminder", code: "16" },
            { name: "Tableau", path: "/tableau", code: "17" },
            { name: "Especificaciones", path: "/especificaciones", code: "18" },
            { name: "Costos", path: "/costos", code: "19" },
            { name: "Maquetado", path: "/maquetado", code: "20" },
        ],
    },

    { type: "item", name: "Contactos", path: "/contactos", code: "" },

    // Nuevo grupo de ejemplo:
    // {
    //   type: "group",
    //   label: "Desarrollo",
    //   items: [
    //     { name: "Prototipo", path: "/prototipo", code: "11" },
    //   ],
    // },
];

// ─── Paleta automática de colores por índice de grupo ─────────────────────────
const GROUP_COLORS = [
    "#22d3ee",
    "#34d399",
    "#f59e0b",
    "#a78bfa",
    "#fb7185",
    "#38bdf8",
    "#4ade80",
    "#fbbf24",
];

function getGroupColor(groupIndex: number) {
    return GROUP_COLORS[groupIndex % GROUP_COLORS.length];
}

// Índice de grupo (solo contando grupos, no items sueltos)
function groupIndex(config: NavEntry[], label: string) {
    return config
        .filter((e) => e.type === "group")
        .findIndex((e) => (e as NavGroup).label === label);
}

// ─────────────────────────────────────────────────────────────────────────────

interface DropdownState {
    label: string;
    x: number; // posición left del botón
    y: number; // posición bottom del header
}

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [canScrollL, setCanScrollL] = useState(false);
    const [canScrollR, setCanScrollR] = useState(false);
    const [dropdown, setDropdown] = useState<DropdownState | null>(null);
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

    const navRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const location = useLocation();

    // Cierra dropdown al cambiar ruta
    useEffect(() => {
        setDropdown(null);
        setMobileOpen(false);
    }, [location.pathname]);

    // Scroll del header
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    // Cierra dropdown al hacer clic fuera
    useEffect(() => {
        const h = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                !target.closest("[data-nav-dropdown]") &&
                !target.closest("[data-nav-trigger]")
            ) {
                setDropdown(null);
            }
        };
        document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, []);

    // Arrows del scroll horizontal
    const updateArrows = useCallback(() => {
        const el = navRef.current;
        if (!el) return;
        setCanScrollL(el.scrollLeft > 4);
        setCanScrollR(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

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
    }, [updateArrows]);

    // Centra el item activo en el scroll
    useEffect(() => {
        const el = navRef.current;
        if (!el) return;
        const active = el.querySelector<HTMLElement>("[data-active='true']");
        if (active)
            el.scrollTo({
                left:
                    active.offsetLeft -
                    el.clientWidth / 2 +
                    active.offsetWidth / 2,
                behavior: "smooth",
            });
        setTimeout(updateArrows, 350);
    }, [location.pathname, updateArrows]);

    const scrollNav = (dir: "left" | "right") =>
        navRef.current?.scrollBy({
            left: dir === "left" ? -160 : 160,
            behavior: "smooth",
        });

    // Abre/cierra dropdown posicionado con coordenadas reales del botón
    const toggleDropdown = (label: string, btn: HTMLButtonElement) => {
        if (dropdown?.label === label) {
            setDropdown(null);
            return;
        }
        const rect = btn.getBoundingClientRect();
        const headerRect = headerRef.current?.getBoundingClientRect();
        setDropdown({
            label,
            x: rect.left + rect.width / 2,
            y: headerRect?.bottom ?? 60,
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

            {/* ── DROPDOWN PORTAL (fuera del overflow) ── */}
            <AnimatePresence>
                {dropdown &&
                    (() => {
                        const group = NAV_CONFIG.find(
                            (e) =>
                                e.type === "group" &&
                                (e as NavGroup).label === dropdown.label,
                        ) as NavGroup | undefined;
                        if (!group) return null;
                        const color = getGroupColor(
                            groupIndex(NAV_CONFIG, group.label),
                        );
                        // Ancho estimado del panel
                        const panelW = 220;
                        // Ajustar para no salirse por la derecha
                        const left = Math.min(
                            dropdown.x - panelW / 2,
                            window.innerWidth - panelW - 12,
                        );

                        return (
                            <motion.div
                                key="dropdown"
                                data-nav-dropdown="true"
                                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                transition={{ duration: 0.16, ease: "easeOut" }}
                                style={{
                                    position: "fixed",
                                    top: dropdown.y + 6,
                                    left,
                                    width: panelW,
                                    zIndex: 9999,
                                    background: "#0a1628",
                                    border: `1px solid ${color}30`,
                                    borderRadius: "0.9rem",
                                    overflow: "hidden",
                                    boxShadow: `0 24px 60px rgba(0,0,0,0.65), 0 0 0 1px ${color}10`,
                                }}
                            >
                                {/* Header del grupo */}
                                <div
                                    style={{
                                        padding: "0.55rem 1rem 0.4rem",
                                        borderBottom: `1px solid ${color}15`,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 3,
                                            height: 12,
                                            borderRadius: 2,
                                            background: color,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily:
                                                "'Space Mono', monospace",
                                            fontSize: "0.58rem",
                                            color,
                                            letterSpacing: "0.18em",
                                        }}
                                    >
                                        {group.label.toUpperCase()}
                                    </span>
                                </div>

                                {/* Items */}
                                <div style={{ padding: "0.4rem" }}>
                                    {group.items.map((item, i) => {
                                        const isActive =
                                            location.pathname === item.path;
                                        return (
                                            <motion.div
                                                key={item.path}
                                                initial={{ opacity: 0, x: -6 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: i * 0.025,
                                                }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.6rem",
                                                        padding:
                                                            "0.52rem 0.7rem",
                                                        borderRadius: "0.5rem",
                                                        textDecoration: "none",
                                                        background: isActive
                                                            ? `${color}14`
                                                            : "transparent",
                                                        border: `1px solid ${isActive ? color + "30" : "transparent"}`,
                                                        transition:
                                                            "background 0.15s, border-color 0.15s",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (!isActive)
                                                            e.currentTarget.style.background =
                                                                "rgba(255,255,255,0.06)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!isActive)
                                                            e.currentTarget.style.background =
                                                                "transparent";
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "'Space Mono', monospace",
                                                            fontSize: "0.58rem",
                                                            color: isActive
                                                                ? color
                                                                : "#475569",
                                                            minWidth: 18,
                                                        }}
                                                    >
                                                        {item.code}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "'Syne', sans-serif",
                                                            fontWeight: 600,
                                                            fontSize: "0.85rem",
                                                            color: isActive
                                                                ? color
                                                                : "#cbd5e1",
                                                            flex: 1,
                                                        }}
                                                    >
                                                        {item.name}
                                                    </span>
                                                    {isActive && (
                                                        <div
                                                            style={{
                                                                width: 5,
                                                                height: 5,
                                                                borderRadius:
                                                                    "50%",
                                                                background:
                                                                    color,
                                                                flexShrink: 0,
                                                                boxShadow: `0 0 5px ${color}`,
                                                            }}
                                                        />
                                                    )}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })()}
            </AnimatePresence>

            {/* ── HEADER ── */}
            <header
                ref={headerRef}
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 150,
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    background: scrolled
                        ? "rgba(2,6,23,0.97)"
                        : "rgba(8,15,31,0.85)",
                    borderBottom: "1px solid rgba(34,211,238,0.12)",
                    boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
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
                                    color: "#f1f5f9",
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
                                    color: "#475569",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                ARDUINO · v1.0
                            </div>
                        </div>
                    </Link>

                    {/* ── NAV SCROLLEABLE DESKTOP ── */}
                    <div
                        className="nav-center"
                        style={{
                            flex: 1,
                            alignItems: "center",
                            minWidth: 0,
                            position: "relative",
                        }}
                    >
                        {/* Flecha izq */}
                        <AnimatePresence>
                            {canScrollL && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => scrollNav("left")}
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        zIndex: 10,
                                        width: 26,
                                        height: 26,
                                        borderRadius: "50%",
                                        background: "rgba(2,6,23,0.95)",
                                        border: "1px solid rgba(34,211,238,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        flexShrink: 0,
                                        boxShadow:
                                            "4px 0 14px rgba(2,6,23,0.9)",
                                    }}
                                >
                                    <ChevronLeft
                                        size={13}
                                        style={{ color: "#22d3ee" }}
                                    />
                                </motion.button>
                            )}
                        </AnimatePresence>
                        {canScrollL && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 52,
                                    background:
                                        "linear-gradient(to right, rgba(2,6,23,0.95), transparent)",
                                    zIndex: 5,
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
                                gap: "0.1rem",
                                overflowX: "auto",
                                padding: "0 2rem",
                            }}
                        >
                            {NAV_CONFIG.map((entry) => {
                                if (entry.type === "item") {
                                    const isActive =
                                        location.pathname === entry.path;
                                    return (
                                        <Link
                                            key={entry.path}
                                            to={entry.path}
                                            data-active={
                                                isActive ? "true" : "false"
                                            }
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.3rem",
                                                flexShrink: 0,
                                                fontFamily:
                                                    "'Syne', sans-serif",
                                                fontWeight: 600,
                                                fontSize: "0.82rem",
                                                color: isActive
                                                    ? "#22d3ee"
                                                    : "#94a3b8",
                                                textDecoration: "none",
                                                padding: "0.32rem 0.65rem",
                                                borderRadius: "0.4rem",
                                                background: isActive
                                                    ? "rgba(34,211,238,0.1)"
                                                    : "transparent",
                                                border: `1px solid ${isActive ? "rgba(34,211,238,0.25)" : "transparent"}`,
                                                transition:
                                                    "color 0.2s, background 0.2s, border-color 0.2s",
                                                position: "relative",
                                                whiteSpace: "nowrap",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isActive) {
                                                    e.currentTarget.style.color =
                                                        "#f1f5f9";
                                                    e.currentTarget.style.background =
                                                        "rgba(255,255,255,0.06)";
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isActive) {
                                                    e.currentTarget.style.color =
                                                        "#94a3b8";
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
                                                        ? "#38bdf8"
                                                        : "#334155",
                                                }}
                                            >
                                                {entry.code}
                                            </span>
                                            {entry.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-underline"
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
                                }

                                // GRUPO
                                const gIdx = groupIndex(
                                    NAV_CONFIG,
                                    entry.label,
                                );
                                const color = getGroupColor(gIdx);
                                const isAnyActive = entry.items.some(
                                    (it) => it.path === location.pathname,
                                );
                                const isOpen = dropdown?.label === entry.label;

                                return (
                                    <div
                                        key={entry.label}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {/* Separador */}
                                        <div
                                            style={{
                                                width: 1,
                                                height: 16,
                                                background:
                                                    "rgba(255,255,255,0.07)",
                                                margin: "0 0.25rem",
                                            }}
                                        />

                                        <button
                                            data-nav-trigger="true"
                                            data-active={
                                                isAnyActive ? "true" : "false"
                                            }
                                            onClick={(e) =>
                                                toggleDropdown(
                                                    entry.label,
                                                    e.currentTarget as HTMLButtonElement,
                                                )
                                            }
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.3rem",
                                                fontFamily:
                                                    "'Syne', sans-serif",
                                                fontWeight: 700,
                                                fontSize: "0.82rem",
                                                color:
                                                    isOpen || isAnyActive
                                                        ? color
                                                        : "#c4d4e8",
                                                background: isOpen
                                                    ? `${color}14`
                                                    : isAnyActive
                                                      ? `${color}10`
                                                      : "transparent",
                                                border: `1px solid ${isOpen ? color + "35" : isAnyActive ? color + "25" : "transparent"}`,
                                                borderRadius: "0.4rem",
                                                padding: "0.32rem 0.65rem",
                                                cursor: "pointer",
                                                whiteSpace: "nowrap",
                                                transition:
                                                    "color 0.2s, background 0.2s, border-color 0.2s",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isOpen && !isAnyActive) {
                                                    e.currentTarget.style.color =
                                                        "#f1f5f9";
                                                    e.currentTarget.style.background =
                                                        "rgba(255,255,255,0.06)";
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isOpen && !isAnyActive) {
                                                    e.currentTarget.style.color =
                                                        "#c4d4e8";
                                                    e.currentTarget.style.background =
                                                        "transparent";
                                                }
                                            }}
                                        >
                                            {isAnyActive && (
                                                <span
                                                    style={{
                                                        width: 5,
                                                        height: 5,
                                                        borderRadius: "50%",
                                                        background: color,
                                                        display: "inline-block",
                                                        boxShadow: `0 0 5px ${color}`,
                                                    }}
                                                />
                                            )}
                                            {entry.label}
                                            <motion.div
                                                animate={{
                                                    rotate: isOpen ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown
                                                    size={12}
                                                    style={{
                                                        color:
                                                            isOpen ||
                                                            isAnyActive
                                                                ? color
                                                                : "#475569",
                                                    }}
                                                />
                                            </motion.div>
                                        </button>

                                        <div
                                            style={{
                                                width: 1,
                                                height: 16,
                                                background:
                                                    "rgba(255,255,255,0.07)",
                                                margin: "0 0.25rem",
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {canScrollR && (
                            <div
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 52,
                                    background:
                                        "linear-gradient(to left, rgba(2,6,23,0.95), transparent)",
                                    zIndex: 5,
                                    pointerEvents: "none",
                                }}
                            />
                        )}
                        <AnimatePresence>
                            {canScrollR && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => scrollNav("right")}
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        zIndex: 10,
                                        width: 26,
                                        height: 26,
                                        borderRadius: "50%",
                                        background: "rgba(2,6,23,0.95)",
                                        border: "1px solid rgba(34,211,238,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        flexShrink: 0,
                                        boxShadow:
                                            "-4px 0 14px rgba(2,6,23,0.9)",
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

                    {/* ── STATUS PILL ── */}
                    <div
                        className="nav-status"
                        style={{
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.35rem 0.9rem",
                            border: "1px solid rgba(34,211,238,0.2)",
                            borderRadius: "9999px",
                            background: "rgba(6,182,212,0.07)",
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
                                color: "#7dd3fc",
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
                            border: "1px solid rgba(34,211,238,0.3)",
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
                                background: "rgba(2,6,23,0.99)",
                            }}
                        >
                            <div
                                style={{
                                    padding: "1rem 1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.35rem",
                                }}
                            >
                                {NAV_CONFIG.map((entry, idx) => {
                                    if (entry.type === "item") {
                                        const isActive =
                                            location.pathname === entry.path;
                                        return (
                                            <motion.div
                                                key={entry.path}
                                                initial={{ opacity: 0, x: -12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: idx * 0.03,
                                                }}
                                            >
                                                <Link
                                                    to={entry.path}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding:
                                                            "0.65rem 0.75rem",
                                                        borderRadius: "0.5rem",
                                                        textDecoration: "none",
                                                        background: isActive
                                                            ? "rgba(6,182,212,0.1)"
                                                            : "transparent",
                                                        border: `1px solid ${isActive ? "rgba(34,211,238,0.25)" : "rgba(255,255,255,0.04)"}`,
                                                        transition: "all 0.15s",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "'Space Mono', monospace",
                                                            fontSize: "0.65rem",
                                                            color: isActive
                                                                ? "#38bdf8"
                                                                : "#475569",
                                                            minWidth: 20,
                                                        }}
                                                    >
                                                        {entry.code}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontFamily:
                                                                "'Syne', sans-serif",
                                                            fontWeight: 600,
                                                            fontSize: "0.9rem",
                                                            color: isActive
                                                                ? "#22d3ee"
                                                                : "#cbd5e1",
                                                        }}
                                                    >
                                                        {entry.name}
                                                    </span>
                                                    {isActive && (
                                                        <span
                                                            style={{
                                                                marginLeft:
                                                                    "auto",
                                                                color: "#22d3ee",
                                                                fontSize:
                                                                    "0.7rem",
                                                            }}
                                                        >
                                                            ●
                                                        </span>
                                                    )}
                                                </Link>
                                            </motion.div>
                                        );
                                    }

                                    // Grupo mobile
                                    const gIdx = groupIndex(
                                        NAV_CONFIG,
                                        entry.label,
                                    );
                                    const color = getGroupColor(gIdx);
                                    const isExp = expandedGroup === entry.label;
                                    const isAnyActive = entry.items.some(
                                        (it) => it.path === location.pathname,
                                    );

                                    return (
                                        <motion.div
                                            key={entry.label}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                        >
                                            <div
                                                style={{
                                                    height: 1,
                                                    background:
                                                        "rgba(255,255,255,0.05)",
                                                    margin: "0.25rem 0",
                                                }}
                                            />
                                            <button
                                                onClick={() =>
                                                    setExpandedGroup(
                                                        isExp
                                                            ? null
                                                            : entry.label,
                                                    )
                                                }
                                                style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.6rem",
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: "0.45rem 0.5rem",
                                                    borderRadius: "0.4rem",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 3,
                                                        height: 14,
                                                        borderRadius: 2,
                                                        background: color,
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        fontFamily:
                                                            "'Space Mono', monospace",
                                                        fontSize: "0.63rem",
                                                        color: isAnyActive
                                                            ? color
                                                            : "#94a3b8",
                                                        letterSpacing: "0.14em",
                                                        flex: 1,
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {entry.label.toUpperCase()}
                                                </span>
                                                {isAnyActive && (
                                                    <div
                                                        style={{
                                                            width: 5,
                                                            height: 5,
                                                            borderRadius: "50%",
                                                            background: color,
                                                        }}
                                                    />
                                                )}
                                                <motion.div
                                                    animate={{
                                                        rotate: isExp ? 180 : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                    <ChevronDown
                                                        size={13}
                                                        style={{
                                                            color: "#475569",
                                                        }}
                                                    />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isExp && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            height: "auto",
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                        style={{
                                                            overflow: "hidden",
                                                            paddingLeft:
                                                                "0.75rem",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            gap: "0.12rem",
                                                            paddingTop:
                                                                "0.2rem",
                                                        }}
                                                    >
                                                        {entry.items.map(
                                                            (item, i) => {
                                                                const isActive =
                                                                    location.pathname ===
                                                                    item.path;
                                                                return (
                                                                    <motion.div
                                                                        key={
                                                                            item.path
                                                                        }
                                                                        initial={{
                                                                            opacity: 0,
                                                                            x: -8,
                                                                        }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                            x: 0,
                                                                        }}
                                                                        transition={{
                                                                            delay:
                                                                                i *
                                                                                0.03,
                                                                        }}
                                                                    >
                                                                        <Link
                                                                            to={
                                                                                item.path
                                                                            }
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                                gap: "0.65rem",
                                                                                padding:
                                                                                    "0.5rem 0.65rem",
                                                                                borderRadius:
                                                                                    "0.45rem",
                                                                                textDecoration:
                                                                                    "none",
                                                                                background:
                                                                                    isActive
                                                                                        ? `${color}12`
                                                                                        : "transparent",
                                                                                border: `1px solid ${isActive ? color + "30" : "transparent"}`,
                                                                                transition:
                                                                                    "all 0.15s",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    fontFamily:
                                                                                        "'Space Mono', monospace",
                                                                                    fontSize:
                                                                                        "0.6rem",
                                                                                    color: isActive
                                                                                        ? color
                                                                                        : "#475569",
                                                                                    minWidth: 18,
                                                                                }}
                                                                            >
                                                                                {
                                                                                    item.code
                                                                                }
                                                                            </span>
                                                                            <span
                                                                                style={{
                                                                                    fontFamily:
                                                                                        "'Syne', sans-serif",
                                                                                    fontWeight: 600,
                                                                                    fontSize:
                                                                                        "0.86rem",
                                                                                    color: isActive
                                                                                        ? color
                                                                                        : "#cbd5e1",
                                                                                }}
                                                                            >
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                            {isActive && (
                                                                                <span
                                                                                    style={{
                                                                                        marginLeft:
                                                                                            "auto",
                                                                                        color: color,
                                                                                        fontSize:
                                                                                            "0.65rem",
                                                                                    }}
                                                                                >
                                                                                    ●
                                                                                </span>
                                                                            )}
                                                                        </Link>
                                                                    </motion.div>
                                                                );
                                                            },
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}

                                <div
                                    style={{
                                        marginTop: "0.5rem",
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
                                            color: "#475569",
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
