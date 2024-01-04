//Date
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myCreatedDate = new Date(2023,0,23)
myDate.toLocaleDateString('default',{
    weekday:"long",
})