import Link from "next/link";
import HeroSlider from "./hero-slider";
import TrialForm from "./trial-form";

const courses = [
  { city: "Marnaz", day: "Lundi", time: "18h00 — 19h30", place: "La Pyramide", address: "409 avenue du Mont-Blanc · 74460 Marnaz", color: "sun", image: "/photos/cours-echauffement-bois.webp" },
  { city: "Thyez", day: "Mardi", time: "18h30 — 20h00", place: "Gymnase municipal", address: "Rue des Charmilles · 74300 Thyez", color: "forest", image: "/photos/cours-enfants-adultes.webp" },
  { city: "Saint-Jeoire", day: "Mercredi", time: "17h30 — 19h30", place: "Salle des Fêtes", address: "73 place Germain-Sommeiller · 74490 Saint-Jeoire", color: "clay", image: "/photos/cours-roda.webp" },
];

const forumWhatsApp = "https://wa.me/33649447331?text=Bonjour%20Fernando%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20Forum%20des%20Associations%20du%2029%20ao%C3%BBt%202026%20%C3%A0%20Saint-Jeoire.";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsActivityLocation",
        "@id": "https://www.capoeirahautesavoie.com/#association",
        name: "Capoeira Haute-Savoie – Guerreiros dos Campeões", url: "https://www.capoeirahautesavoie.com",
        telephone: "+33649447331", email: "capoeirahautesavoie@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "380 allée des Poiriers", postalCode: "74300", addressLocality: "Thyez", addressCountry: "FR" },
        areaServed: ["Thyez", "Marnaz", "Saint-Jeoire", "Haute-Savoie"],
        founder: { "@type": "Person", name: "Mestre Cobra Preta" },
        sameAs: ["https://www.facebook.com/capoeirahautesavoie"]
      },
      {
        "@type": "Event",
        name: "Forum des Associations 2026 — Capoeira Haute-Savoie",
        description: "Rencontrez Capoeira Haute-Savoie au Forum des Associations de Saint-Jeoire : échanges, informations, démonstrations et inscriptions pour la nouvelle saison.",
        startDate: "2026-08-29T09:00:00+02:00",
        endDate: "2026-08-29T13:00:00+02:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        image: "https://www.capoeirahautesavoie.com/forum-mestre-cobra-preta.webp",
        location: { "@type": "Place", name: "Gymnase de Saint-Jeoire", address: { "@type": "PostalAddress", addressLocality: "Saint-Jeoire", postalCode: "74490", addressCountry: "FR" } },
        organizer: { "@id": "https://www.capoeirahautesavoie.com/#association" }
      }
    ]
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    <main>
      <section className="hero" id="accueil">
        <div className="hero-grain" />
        <div className="hero-copy reveal">
          <p className="eyebrow">Haute-Savoie · Depuis 2021</p>
          <h1>L’énergie du Brésil.<br/><em>Au cœur des Alpes.</em></h1>
          <p className="hero-text">Bien plus qu’un art martial : une culture vivante où le mouvement, la musique et le collectif ne font qu’un.</p>
          <div className="hero-actions">
            <a className="button primary" href="#cours">Trouver mon cours <span>↘</span></a>
            <Link className="button text" href="/mestre-cobra-preta">Découvrir le Mestre <span>→</span></Link>
          </div>
          <div className="trial"><strong>2</strong><span>cours d’essai<br/>offerts</span></div>
        </div>
        <HeroSlider />
      </section>

      <section className="manifesto section">
        <p className="eyebrow">Une roda ouverte à tous</p>
        <div className="manifesto-grid">
          <h2>Entre ici comme tu es.<br/><em>Repars plus fort.</em></h2>
          <div><p>Enfants, adolescents ou adultes, débutants ou initiés : chacun trouve sa place dans la roda. On y apprend à bouger, à écouter, à prendre confiance — et à grandir ensemble.</p><p className="signature">Axé !</p></div>
        </div>
        <div className="values">
          <article><span>01</span><h3>Corps</h3><p>Coordination, souplesse, équilibre et énergie.</p></article>
          <article><span>02</span><h3>Rythme</h3><p>Berimbau, chants et musicalité afro-brésilienne.</p></article>
          <article><span>03</span><h3>Confiance</h3><p>Se dépasser sans jamais se comparer.</p></article>
          <article><span>04</span><h3>Collectif</h3><p>Respect, entraide et joie de partager.</p></article>
        </div>
      </section>

      <section className="courses section" id="cours">
        <div className="section-head"><div><p className="eyebrow light">Près de chez vous</p><h2>Trois villes.<br/><em>Une même énergie.</em></h2></div><p>Des cours mixtes enfants & adultes, accessibles à tous les niveaux. Les horaires peuvent évoluer : confirmez votre venue par WhatsApp.</p></div>
        <div className="course-list">
          {courses.map((c, i) => <article className={`course-card ${c.color}`} key={c.city}>
            <img className="course-photo" src={c.image} alt={`Cours de capoeira avec enfants et adultes à ${c.city}`} loading="lazy" />
            <span className="course-no">0{i+1}</span><p>{c.day}</p><h3>{c.city}</h3><strong>{c.time}</strong><div><b>{c.place}</b><span>{c.address}</span></div>
            <a href={`https://wa.me/33649447331?text=${encodeURIComponent(`Bonjour Mestre Cobra Preta, je souhaite essayer un cours de capoeira à ${c.city}.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Demander un essai à ${c.city} sur WhatsApp`}>Réserver un essai <span>↗</span></a>
          </article>)}
        </div>
      </section>

      <section className="agenda section" id="evenements">
        <div className="agenda-head">
          <div><p className="eyebrow">À noter dans votre agenda</p><h2>Nos prochains<br/><em>événements.</em></h2></div>
          <p>Rencontres, démonstrations, rodas et temps forts : retrouvez ici les rendez-vous de Capoeira Haute-Savoie.</p>
        </div>
        <article className="agenda-card">
          <div className="agenda-visual">
            <img src="/forum-mestre-cobra-preta.webp" alt="Maître Cobra Preta devant le stand de Capoeira Haute-Savoie au forum associatif" loading="lazy"/>
            <span className="agenda-label">Prochain rendez-vous</span>
            <div className="agenda-date"><b>29</b><span>AOÛT</span><small>2026</small></div>
          </div>
          <div className="agenda-copy">
            <p className="eyebrow">Saint-Jeoire · Événement</p>
            <h3>Forum des Associations 2026</h3>
            <p className="agenda-lead">Capoeira Haute-Savoie sera présente ! Venez rencontrer notre équipe, découvrir nos cours et partager l’énergie de la capoeira.</p>
            <div className="agenda-meta"><span><small>Quand</small><b>Samedi 29 août 2026</b></span><span><small>Horaire</small><b>9h — 13h</b></span><span><small>Où</small><b>Gymnase de Saint-Jeoire</b></span></div>
            <p>Démonstrations, échanges et inscriptions pour la nouvelle saison : nous vous attendons nombreux !</p>
            <a className="button primary" href={forumWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="En savoir plus sur le Forum des Associations auprès de Maître Cobra Preta sur WhatsApp">En savoir plus sur WhatsApp <span>↗</span></a>
          </div>
        </article>
      </section>

      <section className="mestre section">
        <div className="mestre-art"><img src="/photos/capoeira-alpes.webp" alt="Mestre Cobra Preta et Fabiana pratiquant la capoeira face aux Alpes" loading="lazy"/><div className="mestre-stat"><span>+40</span><p>années de<br/>transmission</p></div><div className="stamp">Brasil · França · Capoeira ·</div></div>
        <div className="mestre-copy"><p className="eyebrow">Mestre Cobra Preta</p><h2>Une vie guidée<br/>par la <em>ginga.</em></h2><p>Il entre dans la capoeira à 14 ans, à Teresina. Ancien instrutor du groupe ABADÁ-Capoeira et élève de Mestre Camisa, Mestre Cobra Preta transmet aujourd’hui plus de quatre décennies d’expérience.</p><p>Du Rio de Janeiro au Piauí, du Maranhão au Pará, ses projets ont fait de la capoeira un outil d’éducation, de lien et d’émancipation. En Haute-Savoie, cette histoire continue — dans chaque cours, chaque chant, chaque roda.</p><Link className="button dark" href="/mestre-cobra-preta">Lire son histoire <span>→</span></Link></div>
      </section>

      <section className="quote section"><blockquote>« La capoeira ne se regarde pas.<br/><em>Elle se vit, ensemble.</em> »</blockquote><p>— L’esprit Guerreiros dos Campeões</p></section>

      <section className="culture-photo"><img src="/photos/instruments-capoeira.webp" alt="Berimbaus, pandeiro et atabaque, instruments traditionnels de la capoeira" loading="lazy"/><div><p className="eyebrow light">La musique guide le jeu</p><h2>Écouter.<br/>Répondre.<br/><em>Jouer.</em></h2></div></section>

      <TrialForm />
      <section className="cta section"><p className="eyebrow light">Prêt à entrer dans la roda ?</p><h2>Votre premier mouvement<br/>commence <em>ici.</em></h2><p>Deux cours d’essai offerts. Écrivez-nous sur WhatsApp, choisissez votre ville et venez simplement comme vous êtes.</p><button className="button white" data-open-whatsapp>Choisir mon contact WhatsApp <span>↗</span></button></section>
    </main>
  </>;
}
