import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {title:"Merci pour votre demande",description:"Votre demande de cours d’essai est prête à être envoyée.",robots:{index:false,follow:false}};

export default function Merci(){return <main className="status-page thank-you"><p className="status-check" aria-hidden="true">✓</p><p className="eyebrow">Merci pour votre demande</p><h1>Votre premier mouvement est <em>lancé.</em></h1><p>WhatsApp s’est ouvert avec votre message préparé. Il ne vous reste qu’à l’envoyer. Si l’application ne s’est pas ouverte, vous pouvez choisir directement l’un de nos contacts.</p><div className="status-actions"><button className="button dark" data-open-whatsapp>Ouvrir les contacts WhatsApp</button><Link className="button text" href="/">Retour à l’accueil</Link></div></main>}
