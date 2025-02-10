"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 pt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Newsletter Section */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest offers and products.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="max-w-[240px]"
              />
              <Button type="submit" variant="secondary">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                123 Store Street, City, Country
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                contact@store.com
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={childVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12  py-3 border-t"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={childVariants}
              className="text-sm text-muted-foreground"
            >
              © {new Date().getFullYear()} Pulse Tech. All rights reserved.
            </motion.p>
            <motion.div variants={childVariants} className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
