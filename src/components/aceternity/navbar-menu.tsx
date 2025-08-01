"use client";

import React from "react";
import { motion } from "framer-motion";

export const MenuItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.a
    href={href}
    onClick={onClick}
    transition={{ duration: 0.3 }}
    className="cursor-pointer text-white md:text-base text-sm hover:opacity-80 font-medium"
  >
    {children}
  </motion.a>
);

export const Menu = ({ children }: { children: React.ReactNode }) => (
  <nav className="rounded-full border border-white/5 bg-transparent backdrop-blur-sm shadow-xl flex justify-center space-x-10 md:px-8 md:py-6 px-3 py-4">
    {children}
  </nav>
);
