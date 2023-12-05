const name="harsh"
const repoCount = 50

//console.log(name + repoCount + "Value");
// string interpolation(use ` symbol)
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('harsh-psc-12-5-23')
console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString)
// sub string accepts  only positive value
const anotherstring = gameName.slice(-4,-1)
console.log(anotherstring)
// trim accepts neg values also

const newStringOne = new String("   white spaces removed   ")
console.log(newStringOne);
console.log(newStringOne.trim())
// trim removes any white spaces

const url = "https:www.harsh%20chauhan.com"
console.log(url)
console.log("now the %20 sign will be replaced with a '_' sign")
console.log(url.replace("%20","_"))
console.log(url.includes('sundar'))
// replace is used to replace givrn characters within a string

console.log("*************************************___________________*****************************************")
console.log("split function is used to split the given string on the basis of the string parameter that hs been passed within it.. for example")
console.log("the given string: " +gameName+ "   gets split into:")
console.log(gameName.split("-"));

//************************************************************************************************************** */
