//Напишите функцию, которая получает на вход отсортированный массив чисел от 1 до N и возвращает пропущенные числа.
    //Если массив, полученный на вход, не отсортирован, необходимо вернуть null.

function getMissingDigit(arr: number[]): number | null {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return null;
        }
    }
    const result: number[] = [];
    let first = arr[0];
    let last = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        while (first < arr[i]) {
            result.push(first);
            first++;
        }
    }
    return result;
}
console.log(getMissingDigit([1, 2, 3, 4, 5, 8, 10, 11, 12, 15]));