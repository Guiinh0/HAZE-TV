"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Tv, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { useScroll } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-haze-line/80 bg-haze-base/85 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-haze-card border border-haze-line flex items-center justify-center text-haze-primary group-hover:border-haze-primary transition-all duration-300 shadow-purple-glow">
            <Tv className="w-5 h-5 text-haze-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider text-haze-text">
              HAZE<span className="text-haze-primary">TV</span>
            </span>
            <span className="text-[10px] text-haze-muted tracking-widest uppercase -mt-1 font-semibold">
              Streaming
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-haze-muted">
          <a href="#diferenciais" className="hover:text-haze-text transition-colors">
            Diferenciais
          </a>
          <a href="#conteudo" className="hover:text-haze-text transition-colors">
            Conteúdo
          </a>
          <a href="#dispositivos" className="hover:text-haze-text transition-colors">
            Dispositivos
          </a>
          <a href="#planos" className="hover:text-haze-text transition-colors">
            Planos
          </a>
          <a href="#faq" className="hover:text-haze-text transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas sobre a Haze TV.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-haze-muted hover:text-haze-text transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-haze-primary" />
            Suporte
          </a>
          
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-haze-cta text-haze-base font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-green-glow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Teste 4 Horas</span>
          </a>
        </div>
      </div>
    </header>
  );
}
