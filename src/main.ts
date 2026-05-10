/**
 * Ф-ция должна принимать на вход массив отсортированных чисел и возвращать список пропущенных чисел.
 *
 * Если на вход получен неотсортированный массив (напр [4, 8, 5]) то нужно вернуть null
 * Если массив на входе был отсортирован, то нужно вернуть все пропущенный числа между минимальным и максимальным
 *
 * Например:
 * [1,2,5,6,7] => пропущены [3,4]
 * [2,6,9,14] => пропущены [3,4,5,7,8,10,11,12,13]
 */

function searchNumber(arr: number[]): number[] | null {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i] - 1) {
            return null;
        }
    }
    const min = arr[0];
    const max = arr[arr.length - 1];
    const missed: number[] = [];

    let minNumber = min;
    for (let i = 0; i < arr.length; i++) {;
        while (minNumber < arr[i]) {
            missed.push(minNumber);
            minNumber++;
        }
        minNumber = arr[i] + 1;
    }
    return missed;
}
console.log(searchNumber([1,2,5,100, 6,7]));
console.log(searchNumber([1,2,5,6,7]));