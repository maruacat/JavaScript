// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let i = 1
// let result = 1
//  while (i < 11) {
//     result = result *2
//    i++
//    console.log(result)
// }



// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function Stepen (n) 
// {
// let item_i = 2
// while(n <= 10)
// {   console.log(item_i**n)
//     n ++
// }
// } 
// Stepen(10)

// for(let n = 1; n <= 10; n++) {
//      console.log(item_i**n);
// }


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let word = ":)"
// let result2 = " "
// for(let i=1; i<=5; i++) {
//     result2+=word
//     console.log(result2);
// }
//  += - переприсвоение переменной саму себе (result2 = result2 + word) - длинная запись

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// Вариант 1
// const printSmile = function printSmile(stroka, numberOfRows)
// {   let result = " "
//     let i = 1
//     while(i <= numberOfRows) {
//     result = result + stroka
//     i++
//     console.log(result)}
// } 
// printSmile(":(", 5)

// Вариант 2
// const printSmile = function printSmile(stroka, numberOfRows)
// {   let i = 1
//     while(i <= numberOfRows) {
//     i++
//     console.log(stroka.repeat(i))}
// } 
// printSmile(":*", 6)