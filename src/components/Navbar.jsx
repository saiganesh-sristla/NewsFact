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

    // Close menu when clicking outside
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
        <nav className="w-full bg-gradient-to-r from-black to-gray-900 text-white fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-bold tracking-wide text-white">
                        NewsFact<span className="text-blue-400">.</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`relative font-medium transition-colors duration-300 hover: ${
                                        location.pathname === item.path ? "text-yellow-400" : "text-gray-300"
                                    }`}
                                >
                                    {item.name}
                                    {location.pathname === item.path && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 h-[2px] bg-yellow-400 bottom-[-2px]"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg"
                    >
                        <ul className="py-4 px-6 space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="block text-white text-lg font-medium py-2 transition-colors duration-200 hover:text-blue-400"
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
