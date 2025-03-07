"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        {/* Logo (Left) */}
        <div className="logo">
        <Image src={"/media/images/budge.jpg"} alt="cornerstone budge" width={40} height={50}/>
          </div>

        {/*Name (Center) */}
        <div className="nav-title text-2xl font-bold text-center">
           <h1>Cornerstone Leadership Academy</h1>
           <p className="text-center text-sm text-gray-500">Nurturing Future Leaders</p>
           </div>

        {/* Menu Button (Right) */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Main Menu */}
      <div className={`menu-dropdown ${menuOpen ? "show" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/enrol" onClick={() => setMenuOpen(false)}>Enrol</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/about#blog" onClick={() => setMenuOpen(false)}>Blog</Link>
      </div>
    </nav>
  );
}
