import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n’existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <main className="status-page"><p className="status-code">404</p><p className="eyebrow">Page introuvable</p><h1>Cette page a quitté la <em>roda.</em></h1><p>Le lien est peut-être ancien ou l’adresse contient une erreur. Retrouvez les cours et les informations de Capoeira Haute-Savoie depuis l’accueil.</p><Link className="button dark" href="/">Retour à l’accueil <span>→</span></Link></main>;
}
