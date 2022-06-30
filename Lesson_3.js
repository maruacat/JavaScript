// function yolochka (item1, item2) {
// let mass = "Hello!"
// console.log(mass, item1, item2);   
// console.log(mass, item1 + item2); 
// }

// // yolochka(11, 22)


// function f1 () {
//     console.log("Hello!");
// }
// f1()

// Стрелочная функция
// let f11 = () => console.log("Hello!!!!");
// f11()

// let t1 = 10
// let t2 = 20
// let t3 = 30
// let t4 = 40

// let f22 = (t1,t2) => console.log('Sum = ' , t1 + t2);
// f22(t1, t2)

// let f33 = (t1>t2) ?
// (tt1, tt2) => (console.log('order = ', tt1 + tt2)):
// (tt1, tt2) => (console.log('order = ', tt1 - tt2))
// f33(t3, t4)
 
// // tt1 и tt2 - это параметры функции, через которые мы передаем t3 и t4

// function f55(tt1, tt2) {
//     if(t1 < t2) {
//         console.log("Order = " , tt1 + tt2);
//     }else{
//         console.log('Order = '+ tt1 - tt2)
//     } 
// }

// f55(t3, t4)


function yolochka33() {};
yolochka33.prototype.fast = function () {
    console.log('Fast!!')
}
yolochka33.prototype.green = function (sun, co2) {
    console.log('Green = ', sun, '+', co2)
}
yolochka33.prototype.shishki = function () {
    console.log('Shishki = Yolki')
}
let forest = new yolochka33 ()

forest.fast()
forest.green(4000, 50)
forest.shishki()

