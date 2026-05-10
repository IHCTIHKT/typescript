function correct(str: string): boolean {
    let result = str;

    while(result.includes('()') || result.includes('[]') || result.includes('{}')) {
        result = result.replace('()', '');
        result = result.replace('[]', '');
        result = result.replace('{}', '');
    }
}
console.log(correct('()'));
console.log(correct('({})')); // true
console.log(correct('{[({()})]})')); // true
console.log(correct('(){}([])[[[]]]{}()')); // true

console.log(correct('(({})')); // false
console.log(correct('({}))')); // false
console.log(correct('([})')); // false
console.log(correct(')(')); // false
console.log(correct(')(}][{')); // false
