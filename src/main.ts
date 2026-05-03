import { faker } from '@faker-js/faker'

interface participants {
    nickname: string
    blocks: number
    died: boolean
    deathReason?: string
    finished: boolean
}
const participant: participants[] = []
const prtCount = Math.floor(Math.random() * 6) + 5;

for (let i = 0; i < prtCount; i++) {
    participant.push({
        nickname: faker.internet.username(),
        blocks: 0,
        died: false,
        finished: false
    });
}

type Block = 'Булыжник' | 'Золото' | 'Редстоун' | 'Лазурит' | 'Железо' | 'Земля' | 'Алмаз' | 'Лава';

function generateBlock(): Block {
    const random = Math.random() * 100;

    if (random < 90) return 'Булыжник';
    else if (random < 91) return 'Золото';
    else if (random < 96) return 'Редстоун';
    else if (random < 98) return 'Лазурит';
    else if (random < 99) return 'Железо';
    else if (random < 99.9) return 'Земля';
    else if (random < 99.99) return 'Алмаз';
    return 'Лава';
}

function findDiamonds(player: participants) {
    let hunger = 10;
    let blocks = 0;
    let finished = false;

    while (!finished) {
        const block = generateBlock();
        blocks++;
        console.log(`${player.nickname} выкопал: ${block} (всего ${blocks} блоков)`);

        if (block === 'Алмаз') {
            player.blocks = blocks;
            player.finished = true;
            player.died = false;
            console.log(`${player.nickname} нашел Алмаз!`);
            finished = true;
        }
        else if (block === 'Лава') {
            player.blocks = blocks;
            player.finished = true;
            player.died = true;
            player.deathReason = 'сгорел в Лаве!';
            console.log(`${player.nickname} сгорел в Лаве!`);
            finished = true;
        }
    }
}