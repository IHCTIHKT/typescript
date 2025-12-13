import { faker } from '@faker-js/faker';
type UserRole = 'admin' | 'guest' | 'manager';

type User = {
    id: string;
    email: string;
    password: string;
    role: UserRole;
}
function generateRandomUser(n: number): User[] {
    const users = [];
    const roles = ['admin', 'guest', 'manager'];
    for(let i = 0; i < n; i++) {
        const random = Math.floor(Math.random() * roles.length);
        const randomRole = roles[random];
        const user: User = {
            id: faker.string.uuid(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: randomRole
        }
        users.push(user);
    }
    return users;
}
function filterByRole(users: User[], role: UserRole[]): User[] {
    const user = [];
    for (let i = 0; i < user.length; i++) {
        const user = user[i];
        if (user.role === role) {
        }
        user.push(user[i]);
    }
    return user;
}
console.log(generateRandomUser(5));