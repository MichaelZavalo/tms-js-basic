/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Создайте массив из 5 любых элементов.
 * Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
 * Склонированный массив вывести в консоль
 *
 */
const arr = [5,7,6,78,86];
const arr1 = arr.slice();
console.log(arr1);

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 * 
 */
let array = [7,'восемь', 8];
let str = array.toString();
let str1 = array.join();
console.log(str);
console.log(str1);

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */
let arr2 = [5,5,6,6,7,8,9,9,21,31,35,456,45,45,56];
let arr3 = new Set(arr2);
let arr4 = [...arr3];
console.log(arr4);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
let num2 = [2,3,5,4,5];
let num3 = [2,4,6,8,6,7,9,10];
let num4 = num2.concat(num3);
let result = num4.reduce((sum,current)=>sum + current,0)
console.log(result);

//


/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
let arr5 = [5,6,5,4,54];
arr5.filter(item => item === 4).length;
console.log(arr5);

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let num = [1,2,3];
num.reverse();
let num1 = num.slice();
console.log(num1);
// 

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

