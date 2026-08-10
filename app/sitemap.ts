import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://www.capoeirahautesavoie.com";return["","/mestre-cobra-preta","/association","/mentions-legales","/politique-confidentialite","/politique-cookies"].map((url,i)=>({url:base+url,lastModified:new Date("2026-08-05"),changeFrequency:i<3?"monthly":"yearly",priority:i===0?1:i<3?.8:.2}))}
