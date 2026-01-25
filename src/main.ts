import { faker } from '@faker-js/faker'
import { writeFileSync } from 'fs';

type User = {
    id: number;

    name: string;
    age: number;

    country: string;
    city: string;

    email: string;
    phone: string;

    work: string;
    post: string;

}

function generateUsers(count: number): User[] {
    const users: User[] = [];
    for (let i = 1; i <= count; i++) {
        users.push({
            id: i,
            name: faker.person.fullName(),
            age: faker.number.int({ min: 18, max: 100 }),
            country: faker.location.country(),
            city: faker.location.city(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            work: faker.company.name(),
            post: faker.person.jobTitle()
        });
    }
    return users;
}
const usersList = generateUsers(2000);
console.log(usersList);

writeFileSync('report.txt', ['id,name,age,country,city,email,phone,work,post'], usersList, 'utf-8');
