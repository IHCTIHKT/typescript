import { readFileSync } from 'fs';
const users = [];
const line = readFileSync('./users.csv', 'utf8').split('\n');
for (let i = 1; i < line.length - 1; i++) {
    const [id, name, email, age] = line[i].split(',');
    users.push({ id: Number(id), name, email, age: Number(age) });
}
console.log(users);