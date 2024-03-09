 //singleton

 //objwct literals
 const mySym= Symbol("key1")
 const JsUser={
     name: "Harsh",
     age: 18,
     mySym:"mykey1",
     location: "jaipur",
     email: "harsh@google.com",
     isLoggedIn: false,
     latsLoginDays: ["monday","saturday"]
 }
 
//  console.log(JsUser.name);
//  console.log(JsUser["email"]);
//  console.log(JsUser[mySym])


JsUser.greetings = function(){
    console.log("Hello Js User!!");

}


JsUser.greetings2 = function(){
    console.log(`Hello Js User!!,${this.name}`);

}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());