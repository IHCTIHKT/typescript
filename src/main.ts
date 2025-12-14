type Options = {
    length: number,
    lowercase: boolean,
    uppercase: boolean,
    numbers: boolean,
    symbols: boolean,
}
function generatePassword2(options: Options) {
    const { length, lowercase, uppercase, numbers, symbols } = options;
    if (length <= 0) {
        return null;
    }
    let chars = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbol = '!@#$%^&*()_+{}|[];:,.<>?';
    if (lowercase) chars += alphabet;
    if (uppercase) chars += uppercase1;
    if (numbers) chars += number;
    if (symbols) chars += symbol;
    if (chars.length === 0) {
        return '';
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }
    return password;
}
console.log(generatePassword2({
    length: 10,
    lowercase: false,
    uppercase: true,
    numbers: false,
    symbols: true
}));