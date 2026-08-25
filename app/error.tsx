"use client";

import { useEffect } from "react";

export default function ErrorPage({error,reset}:{error:Error & {digest?:string};reset:()=>void}) {
  useEffect(()=>{console.error("Erreur d’affichage",error)},[error]);
  return <main className="status-page" role="alert"><p className="eyebrow">Un imprévu est survenu</p><h1>La roda s’est <em>interrompue.</em></h1><p>Vous pouvez réessayer maintenant ou revenir à la page d’accueil.</p><div className="status-actions"><button className="button dark" onClick={reset}>Réessayer</button><a className="button text" href="/">Retour à l’accueil</a></div></main>;
}
