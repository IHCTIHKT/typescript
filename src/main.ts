const blue = (text: string) => `\x1b[34m${text}\x1b[0m`;
const magenta = (text: string) => `\x1b[35m${text}\x1b[0m`;
const red = (text: string) => `\x1b[31m${text}\x1b[0m`;
const green = (text: string) => `\x1b[32m${text}\x1b[0m`;

type Card = {
    no: string;
    pin: number;
    balance: number;
    badTries: number;
    active: boolean;
};

type CallbackFn = (msg: string) => void;

const database: Card[] = [
    { no: '4276 1234 5678 9101', pin: 1234, balance: 15000, badTries: 0, active: true },
    { no: '4214 5678 9101 1121', pin: 5678, balance: 23000, badTries: 0, active: true },
    { no: '4376 1111 2222 3333', pin: 4321, balance: 5000, badTries: 0, active: true },
    { no: '4276 4444 5555 6666', pin: 8765, balance: 12000, badTries: 0, active: true },
    { no: '4214 7777 8888 9999', pin: 1357, balance: 32000, badTries: 0, active: true },
];

const separator = () => console.log('----------------------\n');

const logRed: CallbackFn = (msg: string) => {
    console.log(blue(new Date().toISOString()), magenta('ERROR'), red(msg));
};

const logGreen: CallbackFn = (msg: string) => {
    console.log(blue(new Date().toISOString()), magenta('INFO'), green(msg));
};

export const withdraw =  (
    cardNo: string,
    pin: number,
    amount: number,
    successfully: CallbackFn,
    error: CallbackFn
): void => {
    let card = null;
    for (let i = 0; i < database.length; i++) {
        if (database[i].no === cardNo) {
            card = database[i];
            break;
        }
    }
    if (card === null) {
        error('Карта не обслуживается');
        return;
    }

    if (card.active === false) {
        error('Карта заблокирована');
        return;
    }

    if (pin !== card.pin) {
        card.badTries = card.badTries + 1;
        if (card.badTries >= 3) {
            card.active = false;
            error('Карта заблокирована');
        } else {
            error('PIN неверный!');
        }
        return;
    }

    card.badTries = 0;

    if (card.balance < amount) {
        error('Недостаточно средств');
        return;
    }

    card.balance = card.balance - amount;
    successfully(`Снятие наличных ${amount} руб. Баланс: ${card.balance} руб`);
}

console.log('Проверка на реальное снятие баланса');
withdraw('4276 1234 5678 9101', 1234, 14000, logGreen, logRed); // Снятие наличных 14000 руб. Баланс: 1000 руб
withdraw('4276 1234 5678 9101', 1234, 500, logGreen, logRed); // Снятие наличных 500 руб. Баланс: 500 руб
withdraw('4276 1234 5678 9101', 1234, 501, logGreen, logRed); // Недостаточно средств

separator();

// Проверка на несуществующую карту
console.log('Проверка на несуществующую карту');
withdraw('1111 2222 3333 4444', 1234, 501, logGreen, logRed); // Карта не обслуживается!

separator();

// Проверка, что карта блокируется после трех неправильных вводов PIN
console.log('Проверка, что карта блокируется после трех неправильных вводов PIN');
withdraw('4276 4444 5555 6666', 1111, 1, logGreen, logRed); // PIN неверный!
withdraw('4276 4444 5555 6666', 1111, 1, logGreen, logRed); // PIN неверный!
withdraw('4276 4444 5555 6666', 1111, 1, logGreen, logRed); // Карта заблокирована!
withdraw('4276 4444 5555 6666', 8765, 1, logGreen, logRed); // Карта не обслуживается!

separator();

// Проверка, что счётчик неправильных попыток сбрасывается после правильного PIN
console.log('Проверка, что счётчик неправильных попыток сбрасывается после правильного PIN');
const a = 16000;
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed); // PIN неверный!
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed); // PIN неверный!
withdraw('4214 7777 8888 9999', 1357, a, logGreen, logRed); // Снятие наличных 16000 руб. Баланс: 16000 руб
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed); // PIN неверный!
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed); // PIN неверный!
withdraw('4214 7777 8888 9999', 1357, a, logGreen, logRed); // Снятие наличных 16000 руб. Баланс: 0 руб