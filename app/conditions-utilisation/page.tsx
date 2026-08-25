import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  description: "Conditions d’utilisation du site Capoeira Haute-Savoie.",
  alternates: { canonical: "/conditions-utilisation" },
  robots: { index: false, follow: true },
};

export default function Terms(){return <main><header className="legal-hero"><p className="eyebrow light">Règles du site</p><h1>Conditions d’utilisation.</h1></header><article className="legal"><p>Dernière mise à jour : 25 août 2026.</p><h2>Objet</h2><p>Ces conditions encadrent l’accès et l’utilisation du site Capoeira Haute-Savoie. En naviguant sur le site, vous acceptez de l’utiliser de manière loyale et conforme au droit applicable.</p><h2>Informations et inscriptions</h2><p>Les informations sur les cours et événements sont fournies à titre indicatif. Les horaires, lieux, capacités et conditions d’accueil peuvent évoluer. Une demande envoyée par WhatsApp, téléphone ou e-mail ne constitue pas une inscription définitive avant confirmation de l’association.</p><h2>Disponibilité</h2><p>L’association s’efforce de maintenir le site accessible et sécurisé, sans garantir une disponibilité continue. Une interruption temporaire peut intervenir pour maintenance, mise à jour ou cas de force majeure.</p><h2>Liens externes</h2><p>Le site propose des liens vers des services tiers, notamment WhatsApp. En suivant ces liens, vous quittez le site et relevez des conditions et politiques du service tiers.</p><h2>Propriété intellectuelle</h2><p>Les contenus du site ne peuvent pas être reproduits, adaptés ou exploités sans autorisation préalable, sauf dans les cas permis par la loi.</p><h2>Droit applicable</h2><p>Ces conditions sont régies par le droit français. Pour toute question, contactez <a href="mailto:capoeirahautesavoie@gmail.com">capoeirahautesavoie@gmail.com</a>.</p></article></main>}
