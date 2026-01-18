import { readFileSync } from 'fs';
const content = readFileSync('./text.txt', 'utf8');
for (const length of content.split('\n')) {
    console.log(`(${length.length}) ${length}`);
}