// function Finduser (date, date)
// {let user = 
//     console.log();
// }

// let arr = ["Яблоко", "Апельсин", "Груша"];
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i] );
// }

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// // проходит по значениям
// for (let fruit of fruits) {
//   console.log( fruit );
// }

// let music = ['Джаз', 'Блюз']
// music.push('Рок-н-рол')
// console.log(music);
// music[Math.floor((music.length - 1) / 2)] = "Классика"
// console.log(music);
// music.shift() 
// console.log(music);
// music.unshift('Рэп', 'Рэгги')
// console.log(music);

// let arr = ["a", "b"];
// arr.push(function() {
//   console.log( this );
// });
// arr[2]()

let users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];
const UserFiltred = users.filter((user) => {
    if(user.registrationDate === "09.10.2021" || user.registrationDate === "10.10.2021") 
        return user;
     }
)
console.log(UserFiltred);

