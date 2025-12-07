type numberArr = Record<string, number>;

function sumNumber(objects: numberArr[]): number {
    let total = 0;
    for (const obj of objects) {
        for (const value of Object.values(obj)) {
            total = total + value;
        }
    }
    return total;
}
console.log(sumNumber([{ a: 20, b: 30}, {}, { a: 3 }, { x: 5 }])); // 58
