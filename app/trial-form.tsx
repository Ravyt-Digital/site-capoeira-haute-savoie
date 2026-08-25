"use client";

import { FormEvent, useState } from "react";

export default function TrialForm(){
  const [error,setError]=useState("");
  const [sending,setSending]=useState(false);
  const submit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const name=String(form.get("prenom")||"").trim();
    const city=String(form.get("ville")||"").trim();
    const group=String(form.get("public")||"").trim();
    if(name.length<2||!city||!group){setError("Merci de renseigner votre prénom, la ville et le groupe concernés.");return}
    setError("");setSending(true);
    const message=`Bonjour Mestre Cobra Preta, je m’appelle ${name}. Je souhaite essayer un cours de capoeira à ${city} pour ${group}.`;
    window.open(`https://wa.me/33649447331?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
    window.location.assign("/merci");
  };
  return <section className="trial-form-section section" id="essai"><div><p className="eyebrow light">Deux cours d’essai offerts</p><h2>Préparez votre demande<br/><em>en quelques secondes.</em></h2><p>Les informations restent dans votre navigateur et servent uniquement à préparer votre message WhatsApp.</p></div><form className="trial-form" onSubmit={submit} noValidate><label>Prénom<input name="prenom" autoComplete="given-name" required minLength={2}/></label><label>Ville<select name="ville" defaultValue="" required><option value="" disabled>Choisir une ville</option><option>Marnaz</option><option>Thyez</option><option>Saint-Jeoire</option></select></label><label>Pour qui ?<select name="public" defaultValue="" required><option value="" disabled>Choisir un groupe</option><option value="un enfant de 5 à 7 ans">Enfant de 5 à 7 ans</option><option value="un enfant à partir de 8 ans">Enfant à partir de 8 ans</option><option value="un adulte">Adulte</option></select></label>{error&&<p className="form-error" role="alert">{error}</p>}<button className="button white" type="submit" disabled={sending}>{sending?"Ouverture de WhatsApp…":"Préparer ma demande sur WhatsApp"}<span>↗</span></button><small>En continuant, vous ouvrez WhatsApp (Meta). Consultez notre <a href="/politique-confidentialite">politique de confidentialité</a>.</small></form></section>
}
