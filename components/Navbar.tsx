"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../app/globals.css'
import {useState, useEffect} from 'react'
import {usePathname} from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Department", href: "/department"},
    {name: "Doctors", href: "/doctors"},
    {name: "Services", href: "/services"},
    {name: "Blogs", href: "/blogs"},
    {name: "Contact", href: "/contact"},
  ];
  console.log(pathname);
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="logo">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={130}
            height={130}
            className="w-28 lg:w-32 h-auto"
          />
        </div>
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative pb-2 font-bold text-lg transition-colors ${pathname === link.href
                  ? "text-[var(--primary)]"
                  : "text-[var(--text)] hover:text-[var(--primary)]"
                  }`}
              >
                {link.name}

                {pathname === link.href && (
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-[var(--primary)]"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-8">

            <div>
              <Image
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="theme-icon transition duration-300 cursor-pointer"
                src="/search.png"
                alt="Search"
                width={23}
                height={23}
              />
            </div>

            <div>
              <Image
                onClick={() => setIsDark(!isDark)}
                src="/Toggel-buttton.png"
                alt="Dark"
                width={23}
                height={23}
                className="theme-icon transition duration-300 cursor-pointer"
              />
            </div>

            <button className="flex gap-2 text-white font-bold py-2 px-2.5 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)]">
              <Image
                src="/appointment-icon.png"
                alt=""
                width={20}
                height={20}
                className="invert"
              />
              Book Appointment
            </button>

          </div>

          {/* Mobile Search */}
          <Image
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            src="/search.png"
            alt="Search"
            width={22}
            height={22}
            className="lg:hidden theme-icon cursor-pointer"
          />
          {isSearchOpen && (
            <div className="absolute top-16 right-4 lg:right-40 z-50">
              <input
                type="text"
                placeholder="Enter to Search"
                className="w-56 lg:w-64 px-4 py-2 rounded-lg bg-[var(--surface-secondary)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-light)] shadow-lg outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          )}

          {/* Mobile Dark */}
          <Image
            onClick={() => setIsDark(!isDark)}
            src="/Toggel-buttton.png"
            alt="Dark"
            width={22}
            height={22}
            className="lg:hidden theme-icon cursor-pointer"
          />

          {/* Mobile Menu */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open Menu"
          >
            <Image
              src="/menu1.png"
              alt="Menu"
              width={28}
              height={28}
              className="theme-icon"
            />
          </button>

        </div>
      </nav>
      {
        isMenuOpen && (
          <div className="lg:hidden bg-[var(--background)] border-b border-[var(--border)]">

            <ul className="flex flex-col px-6 py-4 gap-5">

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-semibold ${pathname === link.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--text)]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <button className="bg-[var(--primary)] text-white rounded-lg py-3 mt-3">
                Book Appointment
              </button>

            </ul>

          </div>
        )}
    </>
  )
}

export default Navbar