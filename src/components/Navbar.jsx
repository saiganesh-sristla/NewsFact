import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Pricing", path: "/pricing" },
        { name: "About", path: "/about" }
    ];

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className="w-full bg-black text-white py-4 fixed top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight">
                        NewsFact
                    </Link>

                    <button
                        className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    to={item.path}
                                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-medium"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <ul className="py-4 px-6 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className="hover:text-gray-300 transition-colors duration-200 cursor-pointer font-medium py-2 block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}