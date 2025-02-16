import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Precautions", path: "/precautions" },
        { name: "About", path: "/about" }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest("nav")) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed top-0 z-50 shadow-xl py-4">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-4xl font-extrabold tracking-wide">
                    <motion.span
                        className="relative"
                        animate={{ color: ["#fff"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        NewsFact.
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-10 text-lg font-semibold">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`relative transition-colors duration-300 hover:text-yellow-400 ${
                                    location.pathname === item.path ? "text-yellow-400" : "text-gray-300"
                                }`}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 h-[3px] bg-yellow-400 bottom-[-5px]"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-3 rounded-lg transition-all duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    {isMenuOpen ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg"
                    >
                        <ul className="py-6 px-8 space-y-6 text-xl font-semibold">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="block text-white py-3 transition-colors duration-200 hover:text-yellow-400"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
