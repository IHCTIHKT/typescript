type Product = {
    name: string;
    count: number;
    price: number;
};
type Person = {
    name: string;
    products: Product[];
};
type Family = {
    name: string;
    persons: Person[];
};

const family: Family = {
    name: 'Алексеевы',
    persons: [
        {
            name: 'Отец',
            products: [
                { name: 'Кофе', count: 2, price: 9 },
                { name: 'Колбаса', count: 3, price: 11 },
                { name: 'Огурцы', count: 3, price: 6.12 },
            ],
        },
        {
            name: 'Мать',
            products: [
                { name: 'Молоко', count: 1, price: 3.55 },
                { name: 'Сыр', count: 74, price: 2 },
            ],
        },
        {
            name: 'Дочь',
            products: [
                { name: 'Конфеты', count: 29, price: 9.67 },
                { name: 'Лимонад', count: 30, price: 0.55 },
                { name: 'Салат', count: 3, price: 9.25 },
                { name: 'Помидоры', count: 3, price: 3.09 },
            ],
        },
        {
            name: 'Сын',
            products: [{ name: 'Чипсы', count: 1, price: 1 }],
        },
    ],
};

function familyShopping(family: Family) {
    let totalFamilyMoney = 0;
    console.log('Список покупок семьи${family.name}');
    for (const person of family.persons) {
        let personMoney = 0;
        let items = 0;
        console.log(`Покупки ${person.name}:`);
        for (const product of person.products) {
            console.log(`  *  ${product.name} (${product.count})`);
            personMoney += product.price * product.count;
            items += product.count
        }
        totalFamilyMoney += personMoney;
        console.log(`Всего ${person.products.length} позиций (${items} штук) на ${personMoney} руб\n`);
    }
    console.log(`Всего семья купила на ${totalFamilyMoney} руб\n`);
}
familyShopping(family);