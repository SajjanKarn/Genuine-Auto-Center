"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Lucide icons for menu and close

interface Link {
  href: string;
  title: string;
}

const links: Link[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/services", title: "Services" },
  { href: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 border shadow-sm flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Genuine <span className="text-fuchsia-700">Auto Center</span>
        </h1>
      </div>

      {/* Sidebar Toggle Button for small screens */}
      <button className="md:hidden p-2" onClick={toggleSidebar}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-50 font-medium z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-3">
          <X
            className="hover:text-fuchsia-500 cursor-pointer"
            onClick={toggleSidebar}
            size={30}
          />
        </div>

        <nav className="flex flex-col p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 px-4 hover:bg-gray-300 hover:text-fuchsia-800"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Links for larger screens */}
      <nav className="hidden md:block">
        <ul className="flex items-center text-xl space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-fuchsia-800">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
