import Link from "next/link";
import { Tv } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-haze-base text-haze-text flex flex-col items-center justify-center p-4 text-center">
      <div className="w-12 h-12 rounded-xl bg-haze-card border border-haze-line flex items-center justify-center text-haze-primary mb-6 shadow-purple-glow">
        <Tv className="w-6 h-6 text-haze-primary" />
      </div>
      <h1 className="font-display font-bold text-4xl mb-2">404</h1>
      <p className="text-haze-muted text-sm mb-6 max-w-sm">
        A página que você procura não foi encontrada ou foi movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-haze-card border border-haze-line text-sm font-semibold hover:border-haze-primary transition-colors"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}

