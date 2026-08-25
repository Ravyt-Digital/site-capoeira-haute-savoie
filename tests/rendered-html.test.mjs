import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("les fondamentaux SEO et les routes de conformité sont présents", async () => {
  const [layout,robots,sitemap,chrome] = await Promise.all([
    read("app/layout.tsx"),read("app/robots.ts"),read("app/sitemap.ts"),read("app/site-chrome.tsx"),
  ]);
  assert.match(layout,/metadataBase/);
  assert.match(layout,/openGraph/);
  assert.match(layout,/og-franco-brasil\.webp/);
  assert.match(robots,/sitemap\.xml/);
  assert.match(sitemap,/conditions-utilisation/);
  assert.match(chrome,/politique-confidentialite/);
  assert.match(chrome,/chs-privacy-choice/);
  await Promise.all(["app/not-found.tsx","app/loading.tsx","app/error.tsx","app/merci/page.tsx","app/conditions-utilisation/page.tsx","app/api/analytics/route.ts"].map(path=>access(new URL(path,root))));
});

test("les images de contenu et d’identité utilisent WebP", async () => {
  const [home,chrome,slider,association,mestre] = await Promise.all([
    read("app/page.tsx"),read("app/site-chrome.tsx"),read("app/hero-slider.tsx"),read("app/association/page.tsx"),read("app/mestre-cobra-preta/page.tsx"),
  ]);
  const source=[home,chrome,slider,association,mestre].join("\n");
  const imageSources=[...source.matchAll(/<img[^>]+src=(?:"([^"]+)"|\{([^}]+)\})/g)];
  assert.ok(imageSources.length>0);
  assert.doesNotMatch(source,/src="[^"]+\.(?:png|jpe?g)"/i);
  assert.doesNotMatch(source,/<img(?![^>]*\balt=)[^>]*>/i);
});

test("le formulaire comporte validation, erreur et sortie de succès", async () => {
  const form=await read("app/trial-form.tsx");
  assert.match(form,/role="alert"/);
  assert.match(form,/required/);
  assert.match(form,/disabled=\{sending\}/);
  assert.match(form,/window\.location\.assign\("\/merci"\)/);
});
