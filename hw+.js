// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function(age)
// {   let age2 = 18
//     let age3 = 60

//   if (age < age2)
//     {
//      console.log("You don't have access cause your age is " + age + " It's less then " + age2);
//     } else if (age >= age2 && age < age3)
//     {
//      console.log("Welcome!");
//      }  else if (age > age3)
//     {
//      console.log("Keep calm and look Culture channel");
//     } 
//   else { 
//       console.log("Technical work");
//     }
//    }

// checkAge(17)
// checkAge(18)
// checkAge(61)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// if(typeof(age) == "number")

// const checkAge = function(age)
// {   let age2 = 18
//     let age3 = 60
//     if(typeof(age) == "number")

//     if (age < age2)
//     {
//      console.log("You don't have access cause your age is " + age + " It's less then " + age2);
//     } else if (age >= age2 && age < age3)
//     {
//      console.log("Welcome!");
//      }  else if (age > age3)
//     {
//      console.log("Keep calm and look Culture channel");
//     } 
//     else { 
//       console.log("Technical work");
//     } 
// else {console.log("Not numer");}
//    }

// checkAge(17)
// checkAge("njbn")

 
// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
//     let age2 = 18
//     let age3 = 60
// const checkAge = function(age)
// {   
//     // // age = Number(age)
//     //  if(Number(age)) - можно написать только это или +age и все сработает
//      if(+(age))
//     // if(!isNaN(age))
//     // if(typeof(age) == "number") - будет пропускать "22ффф"
//     if (age < age2)
//     {
//      console.log("You don't have access cause your age is " + age + " It's less then " + age2);
//     } else if (age >= age2 && age < age3)
//     {
//      console.log("Welcome!");
//      }  else if (age > age3)
//     {
//      console.log("Keep calm and look Culture channel");
//     } 
//     else { 
//       console.log("Technical work");
//     } 
//  else {console.log("Not numer");}
// }

// checkAge(17)
// checkAge("19")
// checkAge("22aaa")


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age2 = 18
let age3 = 60
const checkAge = function(age)
{   
age = Number(age)

if(!isNaN(age))
if (age < age2)
{
 console.log("You don't have access cause your age is " + age + " It's less then " + age2);
} else if (age >= age2 && age < age3)
{
 console.log("Welcome!");
 }  else if (age > age3)
{
 console.log("Keep calm and look Culture channel");
} 
else { 
  console.log("Technical work");
} 
else {console.log("Not numer");}
}

checkAge(17)
checkAge("19")
checkAge("22aaa")
let agePromt = prompt("Enter age")
checkAge(agePromt)
