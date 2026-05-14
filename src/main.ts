function correct(str: string): boolean {
    let result = str;

    while (result.includes('()') || result.includes('[]') || result.includes('{}')) {
        result = result.replace('()', '');
        result = result.replace('[]', '');
        result = result.replace('{}', '');
    }
    return result.length === 0;
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
console.log(correct('({[]})'));
console.log(correct('()()()()()()()()()()()()()()()()()()()()()()()()()()()(){}{}[]{}{[]}{{}}()'))
console.log(correct('{[({()})]}'));
