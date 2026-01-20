/*

Напишите функцию intersection, которая получает на вход 2 массива чисел.
А возвращает те элементы, которые есть в обоих массивах (то есть общие элементы).

 */
function intersection(arr1: number[], arr2: number[]) {
    const result: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        let number = arr1[i];

        for(let j = 0; j < arr2.length; j++) {
            if (number === arr2[j]) {
                result.push(number);
            }
        }
    }
    return result;
}
console.log(intersection([1, 2, 3], [2, 3, 4, 5]));