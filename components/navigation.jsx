"use client";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/cart";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b p-3">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-xl font-bold">
            <Image
              src={logo}
              alt="Company Logo"
              width={80} // adjust these values based on your logo size
              height={20} // adjust these values based on your logo size
              priority
              style={{ borderRadius: "50%" }}
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-x-6"
          >
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
          </motion.div>

          <Cart />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <Cart />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/products"
                className="block hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="block hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="block hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
