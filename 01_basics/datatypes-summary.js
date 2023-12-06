// Primitive 

// 7 types: String , Number, Boolean, NUll ,undefined , Symbol,BigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail;
let userPassword=undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

const bigNumber = 21323666567675656565656577n 
/* big int*/
// Reference(non Primitive)

// Array,Objects ,Functions

const heros =["batman","superman","spiderman"]
let obj={
    name:"harsh",
    age: 22
}   


const myFunction=function(){
    console.log("hii");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(non Primitive)
let myYoutubename="harshchannel"
let anothername ="virushp278"
console.log(myYoutubename)
console.log(anothername)


let userOne ={
    email:"user@google.com",
    upi:"123@ybl"
}
let userTwo = userOne

userTwo.email ="harsh@gmail.com";
console.log(userOne.email)
console.log(userTwo.email)
console.log("this is just a test message tocheck whether my work is getting updated")//