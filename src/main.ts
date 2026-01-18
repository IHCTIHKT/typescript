import { readFileSync, writeFileSync } from 'fs';

const poem = readFileSync('./text.txt', 'utf8');
let newPoem = '';
for (let letter of poem) {
    if (letter === 'а') newPoem += 'о';
    else if (letter === 'А') newPoem += 'О';
    else if (letter === 'о') newPoem += 'а';
    else if (letter === 'О') newPoem += 'А';
    else newPoem += letter;
}
writeFileSync('./text2.txt', newPoem);
console.log(newPoem);