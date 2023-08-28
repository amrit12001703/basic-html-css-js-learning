// variable
let num1 = 2
let num2 = 2
let name = "Amrit"
console.log(num1 + num2)
console.log(name)

// constant
const pi = 3.14
let radius = 5
let area
area = pi * radius * radius
console.log(area)

// Data Types: Numbers, String, Boolean, Null, Undefined and Symbol
let num = 34
console.log("Number: " + num)

let firstName = "Amrit"
let lastName = "Anand"
let user = firstName + " " + lastName
console.log(user)

let fullName = "\"Amrit Anand\""
console.log(fullName)

let a = 7
let b = 8
let bool = a > b
console.log(bool)

let n = null
console.log(n)

let u
console.log(u)

let x = 5 / "chars"
console.log(x)

//Type Conversion
let num3 = 7;
console.log(num3, typeof num3)

let str = "123";
console.log(typeof str)
let str_to_num = Number(str)
console.log(typeof str_to_num)

//Auto type conversion
let y
console.log(y, typeof y)
y = 8
console.log(y, typeof y)
y = y + ""
console.log(y, typeof y)
y = y - 2
console.log(y, typeof y)
y = !y
console.log(y, typeof y)
let c = parseInt("123 Amrit")
console.log(c)

//Arithmatic Operators
//Relational operators
//Assignment Operators
//Logical operators
//conditional/Ternary operator
let result = 5 % 2 === 0 ? "Even" : "odd";
console.log(result)
// Conditional Statement
if (2 > 4) {
    console.log("Num1 is greater")
}
else if (2 == 4) {
    console.log("both nos are equal")
}
else {
    console.log("Number2 is greater")
}

//Switch Statement
let day = "Tuesday"
switch (day) {
    case "Monday":
        console.log("Its Monday")
        break
    case "Tuesday":
        console.log("its tuesday!!")
        break
    default:
        console.log("Not a valid data")
}

//Template Literal(`......`)
let result2 = num1 + num2
console.log(`The addition of  ${num1} and ${num2} is ${result2}`)
console.log(`line 1
line 2`)

// while loop
let i = 5
while (i > 0) {
    console.log(`i = ${i}`)
    i--
}

//do while
let j = 5
do {
    console.log(`j = ${j}`)
    j--
} while (j > 0)

//for loop
for (let k = 0; k < 3; k++) {
    console.log(`k = ${k}`)
}

//Objects
let alien = {
    name: 'Amrit',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Asus'
    }
}
console.log(alien)
console.log(alien.name)
console.log(alien['tech'])
console.log(alien.laptop.brand)
console.log(alien.laptop.brand.drive?.length)
// delete alien.tech
console.log(alien)

//For in loop
for (let key in alien) {
    console.log(key, alien[key])
}

//Function
function greet(greeting) {
    return "Hello! " + greeting;
}

let res = greet("Good Morning");
console.log(res)

//Function expression
let add = function (nu1, nu2) {
    return nu1 + nu2
}

let sum = add(4, 5)
console.log(sum)

//Local and Global Variable - same works as a scope 

//Arrow functions
let arrFunc = (num1, num2) => num1 + num2;
let result3 = arrFunc(5, 6);
console.log(result3)

//Methods
let alien2 = {
    name: 'Amrit',
    tech: 'JS',
    brand: 'Asus',
    getName: function () {
        return this.name
    }
}

console.log(alien2.getName())

//Cunstructor function

function Alien(name, tech) {
    this.name = name
    this.tech = tech
    this.getName = function () {
        return this.name
    }
}

let alien1 = new Alien("Aakash", "c++")
console.log(alien1)
console.log(alien1.getName())

//Arrays
let values = [1, 2, 3, 4];
let values2 = new Array();
values2.push(1)
values2.push(2)
values2.push(3)

console.log(values2)
console.log(values2[0])

//Note: we can add multiple type of element
//      in array unlike other lang like c++, java

//Array Methods- push(),pop(),shift()<-,unshift()->
//splice(index,num of elements to remove)

//For loop in array
let nums = [];
nums[0] = 5
nums[1] = 10
nums[2] = 15;
for (let n of nums)
    console.log(n)

// Array destructuring
let words = ["hello", "what", "why", "when", "ok"]
let [s, t, , ...v] = words

console.log(s)
console.log(v)

//Array for each
values.forEach((e, i, values) => console.log(e, i, values))

//filter, map, reduce
values.filter(n => n % 2 === 0)
.map(n=>n*2)
.forEach(n => console.log(n));
let arr=[1, 2, 3, 4]
let result5 = arr.filter(n => n%2=== 0)
.map(n=>n*2)
.reduce((a,b)=>a+b);
console.log(result5)

//Set(it has unique value, it is ordered value unlike other lang)
let setData=new Set("bookkeeper");
console.log(setData)

//Map data structure
let map=new Map();
map.set("navin","java")
map.set("chirag","ML")
map.set("Amrit","web-dev")
map.set("navin","C++")

for(let[k,l] of map){
    console.log(k," ",l)
}
map.forEach((v,k)=>{
    console.log(k," : ",v)
});







