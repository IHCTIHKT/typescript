type User = {
    id: number;
    name?: string;
    email: string;
};

type Item = {
    id: number;
    name: string;
    price: number;
    count?: number;
};

type DiscountCard = {
    id: number;
    series: number;
};

type Order = {
    id: number;
    user: User | null;
    card: DiscountCard | null;
    items: Item[];
};

function receipt(order: Order): string {
    let cheque = '';
    cheque += `Заказ #${order.id}\n`;

    if (order.user) {
        cheque += 'Клиент:\n';
        cheque += `id: ${order.user.id}\n`;
        cheque += `имя: ${order.user.name ?? 'не указано'}\n`;
        cheque += `email: ${order.user.email}\n`;
    } else {
        cheque += 'Клиент: Не указан\n';
    }

    if (order.card) {
        cheque += `Скидочная карта: серия ${order.card.series}\n`;
    } else {
        cheque += 'Скидочная карта: Не применена\n';
    }

    cheque += 'Список покупок:\n';
    let totalCount = 0;
    let totalSum = 0;

    for (const item of order.items) {
        const count = item.count ?? 1;
        const sum = item.price * count;
        cheque += `${item.name} ${item.price} ${count}\n`;
        totalCount += count;
        totalSum += sum;
    }

    cheque += `Итого ${totalCount} позиций на ${totalSum}`;
    return cheque;
}
const order: Order = {
    id: 3,
    user: {
        id: 5,
        email: 'example@domain.com',
    },
    card: null,
    items: [
        { id: 6, name: 'Хлеб', price: 75, count: 3 },
        { id: 9, name: 'Вафли', price: 95.9, count: 1 },
        { id: 12, name: 'Набор конфет', price: 350 },
    ],
};
console.log(receipt(order));