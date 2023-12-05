const score = 100 
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber =12.876532
console.log("precision upto 3 decimal places gives output:")
console.log(otherNumber.toPrecision(3))
console.log("*************************############################************************")

const otherNumberTwo =112.876532
console.log("precision upto 3 decimal places gives output:")
console.log(otherNumberTwo.toPrecision(3))
console.log("*************************############################************************")

const otherNumber3 =1128.876532
console.log("precision upto 3 decimal places gives output:")
console.log(otherNumber3.toPrecision(3))
console.log("*************************############################************************")

console.log("precision upto 2 decimal places gives output:")
console.log(otherNumber.toPrecision(2))
console.log("*************************############################************************")

console.log("precision upto 4 decimal places gives output:")
console.log(otherNumber.toPrecision(4))
console.log("*************************############################************************")

console.log("*************************############################************************")

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(`here is your output ${console.log(hundreds.toLocaleString('en-IN'))}`)