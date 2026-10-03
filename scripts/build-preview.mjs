// Inline data/data-cube.json into preview/cube-preview.html so the page opens straight from disk.
import { readFileSync, writeFileSync } from 'node:fs';

const template = readFileSync('preview/cube-preview.template.html', 'utf8');
const data = readFileSync('data/data-cube.json', 'utf8');
writeFileSync('preview/cube-preview.html', template.replace('/*DATA*/', () => data));
console.log('Wrote preview/cube-preview.html');
