function isPalindrome(str: string): boolean {
    let reverse = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return str === reverse;
}
console.log(isPalindrome('топот'));
console.log(isPalindrome('кабак'));
console.log(isPalindrome('дед'));