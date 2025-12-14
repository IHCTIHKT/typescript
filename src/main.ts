type Payment = {
    id: number;
    month: string;
    amount: number;
};
type TaxInfo = {
    income: number;
    tax13: number;
    tax15: number;
    total: number;
};
function theTaxService(payments: Payment[]): TaxInfo {
    let income = 0;
    for (const payment of payments) {
        income += payment.amount;
    }

    const limit = 2_400_000;
    const tax13limit = 0.13;
    const tax15limit = 0.15;

    let tax13 = 0;
    let tax15 = 0;

    if (income <= limit) {
        tax13 = income * tax13limit;
    } else {
        tax13 = limit * tax13limit;

        const theRemainderOfTheLimit = income - limit;
        tax15 = theRemainderOfTheLimit * tax15limit;
    }

    const totalTax = tax13 + tax15
    return {
        income,
        tax13,
        tax15,
        total: totalTax
    };
}

const payments: Payment[] = [
    { id: 1, month: 'Январь', amount: 265_000 },
    { id: 2, month: 'Февраль', amount: 320_000 },
    { id: 3, month: 'Февраль', amount: 3_500_000 },
];
    console.log(theTaxService(payments));