"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SIX_MONTHS = 15_552_000_000;

export function SiteChrome({children}:{children:React.ReactNode}){
  const [menu,setMenu]=useState(false);
  const [wa,setWa]=useState(false);
  const [cookie,setCookie]=useState(false);
  const [prefs,setPrefs]=useState(false);
  const [analytics,setAnalytics]=useState(false);
  const [analyticsDraft,setAnalyticsDraft]=useState(false);
  const [eventOpen,setEventOpen]=useState(false);

  useEffect(()=>{
    const raw=localStorage.getItem("chs-privacy-choice");
    if(!raw) setCookie(true);
    else try{
      const choice=JSON.parse(raw) as {analytics:boolean;expiresAt:number};
      if(Date.now()>choice.expiresAt){localStorage.removeItem("chs-privacy-choice");setCookie(true)}
      else {setAnalytics(Boolean(choice.analytics));setAnalyticsDraft(Boolean(choice.analytics))}
    }catch{localStorage.removeItem("chs-privacy-choice");setCookie(true)}
    const open=()=>setWa(true);
    document.querySelectorAll("[data-open-whatsapp]").forEach(x=>x.addEventListener("click",open));
    return()=>document.querySelectorAll("[data-open-whatsapp]").forEach(x=>x.removeEventListener("click",open));
  },[children]);

  useEffect(()=>{
    if(!analytics)return;
    let referrer="direct";
    try{referrer=document.referrer?new URL(document.referrer).hostname:"direct"}catch{}
    navigator.sendBeacon("/api/analytics",JSON.stringify({path:window.location.pathname,referrer}));
  },[analytics,children]);

  useEffect(()=>{
    if(cookie||sessionStorage.getItem("chs-forum-saint-jeoire-2026")==="dismissed")return;
    const eventEnds=new Date("2026-08-29T13:00:00+02:00").getTime();
    if(Date.now()>eventEnds)return;
    const timer=window.setTimeout(()=>setEventOpen(true),1200);
    return()=>window.clearTimeout(timer);
  },[cookie]);

  const choose=(allowAnalytics:boolean)=>{
    localStorage.setItem("chs-privacy-choice",JSON.stringify({analytics:allowAnalytics,updatedAt:Date.now(),expiresAt:Date.now()+SIX_MONTHS}));
    setAnalytics(allowAnalytics);setAnalyticsDraft(allowAnalytics);setCookie(false);setPrefs(false);
  };
  const closeEvent=()=>{sessionStorage.setItem("chs-forum-saint-jeoire-2026","dismissed");setEventOpen(false)};

  return <>
    <a className="skip" href="#contenu">Aller au contenu</a>
    <header className="site-header">
      <Link className="brand" href="/" onClick={()=>setMenu(false)}><img className="official-logo" src="/logo-guerreiros-cobra-preta.webp" alt="Guerreiros dos Campeões — Mestre Cobra Preta" width="1143" height="1200"/><span><b>CAPOEIRA</b><small>HAUTE-SAVOIE</small></span></Link>
      <nav className={menu?"open":""} aria-label="Navigation principale"><Link href="/#cours" onClick={()=>setMenu(false)}>Les cours</Link><Link href="/#evenements" onClick={()=>setMenu(false)}>Événements</Link><Link href="/mestre-cobra-preta" onClick={()=>setMenu(false)}>Le Mestre</Link><Link href="/association" onClick={()=>setMenu(false)}>L’association</Link><button onClick={()=>{setWa(true);setMenu(false)}}>Nous rejoindre <span>↗</span></button></nav>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label={menu?"Fermer le menu":"Ouvrir le menu"}>{menu?"×":"☰"}</button>
    </header>
    <div id="contenu">{children}</div>
    <footer><div className="footer-top"><div className="brand footer-brand"><img className="official-logo" src="/logo-guerreiros-cobra-preta.webp" alt="Logo Guerreiros dos Campeões" width="1143" height="1200"/><span><b>CAPOEIRA</b><small>HAUTE-SAVOIE</small></span></div><p>Guerreiros dos Campeões<br/>Mestre Cobra Preta</p><address><span>380 allée des Poiriers<br/>74300 Thyez, France</span><a href="tel:+33649447331">06 49 44 73 31</a><a href="tel:+33767102539">07 67 10 25 39</a><a href="mailto:capoeirahautesavoie@gmail.com">capoeirahautesavoie@gmail.com</a></address></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Capoeira Haute-Savoie</span><div className="footer-center"><div className="footer-links"><Link href="/mentions-legales">Mentions légales</Link><Link href="/conditions-utilisation">Conditions d’utilisation</Link><Link href="/politique-confidentialite">Confidentialité</Link><Link href="/politique-cookies">Cookies</Link><button onClick={()=>setCookie(true)}>Gérer mes choix</button></div><span className="footer-credit">Site créé par <a href="https://ravytdigital.com" target="_blank" rel="noopener noreferrer">Ravyt Digital ↗</a></span></div></div></footer>
    <button className="wa-float" onClick={()=>setWa(!wa)} aria-label={wa?"Fermer les contacts WhatsApp":"Contacter sur WhatsApp"} aria-expanded={wa}><span className="wa-float-icon" aria-hidden="true">{wa?"×":"✆"}</span><span className="wa-float-copy"><b>{wa?"Fermer":"WhatsApp"}</b><small>{wa?"Les contacts":"Parlez-nous"}</small></span></button>
    {wa&&<div className="wa-panel"><button className="close" onClick={()=>setWa(false)} aria-label="Fermer">×</button><p className="eyebrow">Parlons capoeira</p><h2>Qui souhaitez-vous contacter ?</h2><a href="https://wa.me/33649447331?text=Bonjour%20Fernando%20%28Ma%C3%AEtre%20Cobra%20Preta%29%2C%20je%20souhaite%20des%20informations%20sur%20les%20cours%20de%20capoeira." target="_blank" rel="noopener noreferrer"><img className="wa-avatar" src="/contact-fernando.webp" alt="Portrait de Fernando, Maître Cobra Preta" width="102" height="105"/><div><b>Fernando — Maître Cobra Preta</b><small>06 49 44 73 31</small></div><i>↗</i></a><a href="https://wa.me/33767102539?text=Bonjour%20Fabiana%20%28Instructrice%20Serpente%29%2C%20je%20souhaite%20des%20informations%20sur%20les%20cours%20de%20capoeira." target="_blank" rel="noopener noreferrer"><img className="wa-avatar" src="/contact-fabiana.webp" alt="Portrait de Fabiana, Instructrice Serpente" width="101" height="103"/><div><b>Fabiana — Instructrice Serpente</b><small>07 67 10 25 39</small></div><i>↗</i></a><small>En continuant, vous quittez ce site et ouvrez WhatsApp (Meta).</small></div>}
    {eventOpen&&<div className="event-overlay" onMouseDown={(event)=>{if(event.target===event.currentTarget)closeEvent()}}><section className="event-popup" role="dialog" aria-modal="true" aria-labelledby="forum-title"><button className="event-close" onClick={closeEvent} aria-label="Fermer l’annonce">×</button><div className="event-photo"><img src="/forum-mestre-cobra-preta.webp" alt="Maître Cobra Preta devant le stand de Capoeira Haute-Savoie au forum associatif"/><span className="event-date"><b>29</b><small>AOÛT</small></span></div><div className="event-content"><p className="eyebrow">Saint-Jeoire · Événement</p><h2 id="forum-title">Forum des Associations <em>2026</em></h2><p className="event-lead">Capoeira Haute-Savoie sera présente ! Venez rencontrer notre équipe, découvrir nos cours et partager l’énergie de la capoeira.</p><div className="event-meta"><span><small>Quand</small><b>Samedi 29 août</b></span><span><small>Horaire</small><b>9h — 13h</b></span><span><small>Où</small><b>Gymnase de Saint-Jeoire</b></span></div><p className="event-invite">Démonstrations, échanges et inscriptions pour la nouvelle saison : nous vous attendons nombreux !</p><div className="event-actions"><button className="button primary" onClick={closeEvent}>C’est noté ! <span>✓</span></button><a className="button text" href="https://wa.me/33649447331?text=Bonjour%20Fernando%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20Forum%20des%20Associations%20du%2029%20ao%C3%BBt%202026%20%C3%A0%20Saint-Jeoire." target="_blank" rel="noopener noreferrer" onClick={closeEvent}>En savoir plus sur WhatsApp <span>↗</span></a></div></div></section></div>}
    {cookie&&<div className="cookie" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><div><p className="eyebrow">Votre vie privée, votre choix</p><h2 id="cookie-title">Nous respectons vos données.</h2><p>Le stockage nécessaire conserve votre choix. La mesure d’audience interne reste désactivée sans votre accord. Vous pouvez accepter, refuser ou personnaliser à tout moment.</p>{prefs&&<div className="prefs"><label><input type="checkbox" checked disabled/> Nécessaires <small>Toujours actifs · mémorisation de votre choix</small></label><label><input type="checkbox" checked={analyticsDraft} onChange={(e)=>setAnalyticsDraft(e.target.checked)}/> Mesure d’audience <small>Statistiques internes limitées, sans publicité</small></label><label><input type="checkbox" disabled/> Marketing <small>Non utilisé</small></label><button className="save-prefs" onClick={()=>choose(analyticsDraft)}>Enregistrer mes choix</button></div>}</div><div className="cookie-actions"><button onClick={()=>choose(true)}>Tout accepter</button><button onClick={()=>choose(false)}>Tout refuser</button><button className="outline" onClick={()=>setPrefs(!prefs)}>{prefs?"Fermer les options":"Personnaliser"}</button><Link href="/politique-cookies">En savoir plus</Link></div></div>}
  </>;
}
