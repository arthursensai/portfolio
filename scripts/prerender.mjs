import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverEntry = path.join(distDir, 'server', 'entry-server.js');
const indexPath = path.join(distDir, 'index.html');

const siteUrl = 'https://mohammedaitsidibah.me';

const routes = [
  {
    path: '/',
    title: 'Mohammed Ait Sidi Bah | Full Stack Developer',
    description:
      "Mohammed Ait Sidi Bah's portfolio showcasing web development projects and skills in React, Next.js, Node.js, and more.",
  },
  {
    path: '/projects/waraq',
    title: 'Building Waraq — Mohammed Ait Sidi Bah',
    description:
      'A case study on Waraq, a full-stack reading and document management platform built with Next.js, TypeScript, Supabase, and PostgreSQL.',
  },
];

const template = fs.readFileSync(indexPath, 'utf8');
const { render } = await import(pathToFileURL(serverEntry).href);

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

for (const route of routes) {
  const appHtml = render(route.path);
  const canonicalUrl = route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  html = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${description}$2`
    );

  const outPath =
    route.path === '/'
      ? indexPath
      : path.join(distDir, route.path.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`✓ Prerendered ${route.path === '/' ? '/index.html' : path.relative(distDir, outPath)}`);
}

fs.rmSync(path.join(distDir, 'server'), {
  recursive: true,
  force: true,
});
