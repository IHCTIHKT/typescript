type Options = {
    length: number;
}
function generatePassword(options: Options) {
    const { length } = options;
    if (length <= 0) {
        return null;
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const all = alphabet + uppercase + numbers;
    let password= '';
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * all.length);
        password += all[random]
    }
    return password;
}
console.log(generatePassword({ length: 10 }));1