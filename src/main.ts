import { fakerRU } from '@faker-js/faker'

const possibleTasks = ['Купить кота', 'Продать кота', 'Помыть кота', 'Купить арбуз'];

type User = {
    id: string;
    name: string;
    email: string;
    company: string;
    tasks: string[];  // Исправлено: массив строк вместо строки
};

function generateUsers(min: number = 3, max: number = 6): User[] {  // Исправлено: возвращает массив
    const count: number = fakerRU.number.int({ min, max });
    const users: User[] = [];  // Исправлено: инициализация как пустой массив

    for (let i = 0; i < count; i++) {
        users.push({
            id: fakerRU.string.nanoid(6),
            name: fakerRU.person.fullName(),
            email: fakerRU.internet.email(),
            company: fakerRU.company.name(),
            tasks: fakerRU.helpers.arrayElements(possibleTasks, { min: 0, max: 2 })
        });
    }
    return users;
}

function userTask(user: User, index: number): string {
    const count: number = user.tasks.length;

    if (count === 0) {
        return `${index + 1} Пользователь "${user.name}" (id="${user.id}"); Нет дел на сегодня`;
    } else {
        return `${index + 1} Пользователь "${user.name}" (id="${user.id}"); ${count} дел на сегодня`;
    }
}

const users = generateUsers();  // Исправлено: вызываем правильное имя функции
users.forEach((user, index) => {
    console.log(userTask(user, index));
});