import { writeFileSync, readFileSync} from 'fs';

const fileName = readFileSync('order.csv', 'utf8');
const line = fileName.split('\n');
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let maxOrder = 0;
let maxDay = '';
let position = 0;

for (let i = 0; i < line.length; i++) {
    const number = line[i].split(',').map(Number);
    const day = days[i % 7];

    for (let k = 0; k < number.length; k++) {
        const thisNumber = number[k];
        if (thisNumber > maxOrder) {
            maxOrder = thisNumber;
            maxDay = day;
            position = k + 1;
        }
    }
}
console.log(` Наибольший заказ - ${maxOrder}`);
console.log(` Он сделан в ${maxDay}, по порядку #${position}`);