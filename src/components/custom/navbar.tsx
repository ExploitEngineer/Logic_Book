"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "../aceternity/navbar-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why" },
  { href: "#download", label: "Download" },
  { href: "#preview", label: "Preview" },
  { href: "#author", label: "Author" },
];

export function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn(
        "md:fixed absolute top-6 inset-x-0 mx-auto max-w-2xl z-50",
        className,
      )}
    >
      {/* Desktop menu */}
      <div className="hidden md:block">
        <Menu>
          {links.map((link) => (
            <MenuItem key={link.href} href={link.href}>
              {link.label}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* toggle buttons */}
      <div className="md:hidden flex justify-end px-4">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white p-2"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <X color="white" className="w-6 h-6 relative z-100" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8"
          >
            {links.map((link) => (
              <MenuItem
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </MenuItem>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
