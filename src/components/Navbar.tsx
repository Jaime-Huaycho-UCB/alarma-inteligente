import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Inicio", path: "/" },
        { name: "Lluvia de ideas", path: "/lluvia-ideas" },
        { name: "Definicion del problema", path: "/definicion-problema" },
        { name: "Ishikawa", path: "/ishikawa" },
        { name: "La Pregunta", path: "/la-pregunta" },
        { name: "Modelo PART", path: "/modelo-part" },
        { name: "Modelo SMART", path: "/smart" },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-cyan-400/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-white font-bold text-xl"
                >
                    <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6 }}
                        className="text-cyan-400 text-2xl"
                    >
                        🛡
                    </motion.span>

                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Sistema Alarma
                    </span>
                </Link>

                {/* MENU DESKTOP */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <LinkToNavItem
                            key={item.path}
                            item={item}
                            activePath={location.pathname}
                        />
                    ))}
                </nav>

                {/* BOTON MOBILE */}
                <button
                    className="md:hidden text-cyan-400 text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#020617] border-t border-cyan-500/20"
                >
                    <div className="flex flex-col p-4 space-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className="text-gray-200 hover:text-cyan-400 transition font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

interface NavLinkProps {
    item: { name: string; path: string };
    activePath: string;
}

const LinkToNavItem = ({ item, activePath }: NavLinkProps) => {
    const isActive = activePath === item.path;

    return (
        <Link
            to={item.path}
            className="relative text-gray-200 font-medium hover:text-cyan-400 transition"
        >
            {item.name}

            {/* indicador activo */}
            {isActive && (
                <motion.span
                    layoutId="navbar-indicator"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </Link>
    );
};
