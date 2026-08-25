export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site") && request.headers.get("sec-fetch-site") !== "same-origin") return new Response(null,{status:403});
  try {
    const raw = await request.text();
    if (raw.length > 1000) return new Response(null,{status:413});
    const data = JSON.parse(raw) as {path?:unknown;referrer?:unknown};
    const path = typeof data.path === "string" && data.path.startsWith("/") ? data.path.slice(0,200) : "/";
    const referrer = typeof data.referrer === "string" ? data.referrer.slice(0,120) : "direct";
    console.log(JSON.stringify({event:"page_view",path,referrer,recordedAt:new Date().toISOString()}));
    return new Response(null,{status:204,headers:{"Cache-Control":"no-store"}});
  } catch {
    return Response.json({erreur:"Requête de mesure invalide."},{status:400,headers:{"Cache-Control":"no-store"}});
  }
}
