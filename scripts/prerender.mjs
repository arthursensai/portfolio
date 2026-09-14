import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverEntry = path.join(distDir, 'server', 'entry-server.js');
const indexPath = path.join(distDir, 'index.html');

const template = fs.readFileSync(indexPath, 'utf8');

const { render } = await import(pathToFileURL(serverEntry).href);

const appHtml = render();

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(indexPath, html);

fs.rmSync(path.join(distDir, 'server'), {
  recursive: true,
  force: true,
});

console.log('✓ Prerendered dist/index.html');
