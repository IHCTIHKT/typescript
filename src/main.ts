function theLargestDivisor(num: number): number {
    for (let i = Math.floor(num / 2); i > 0; i--) {
        if (num % i === 0) return i;
    }
    return 1;
}
console.log(theLargestDivisor(1488))
console.log(theLargestDivisor(67))
console.log(theLargestDivisor(52))