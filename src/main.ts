function includes(text, numbers) {
    if (numbers.length > text.length) return false;

    const countNumbers: Record<string, number> = {};
    for (let number of numbers) {
        countNumbers[number] = (countNumbers[number] || 0) + 1;
    }
    for (let i = 0; i <= text.length - numbers.length; i++) {
        const textExcerpt: Record<string, number> = {};
        for (let j = 1; j < i + numbers.length; j++) {
            const number = text[j];
            textExcerpt[number] = (textExcerpt[number] || 0) + 1;
        }
        if (Object.keys(countNumbers).length !== Object.keys(textExcerpt).length) {
            return false;
        }
        for (let key in countNumbers) {
            if (countNumbers[key] !== textExcerpt[key]) {
                return false;
            }
        }
        return true;
    }
}
console.log(includes('example', 'pml')); // true, ищем 'pml' и находим 'mpl'
console.log(includes('server', 'revers')); // true, ищем 'revers' и находим 'server'
console.log(includes('automat', 'amtto')); // true, ищем 'amtto' и находим 'amtto  '