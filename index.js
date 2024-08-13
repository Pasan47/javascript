// const promise1 = new Promise( (resolved, reject) => {
//     setTimeout(() => {
//         console.log("user gannawa");
//         resolved({secretId: "123"});
//         reject(new Error("not working"));
//     }, 3000)
// });

// const promise2 = new Promise( (resolved , reject) => {
//     setTimeout(() => {
//         console.log("user secret eka gannawa");
//         resolved({secretKey:["a", "c" , "d"]});
//         reject(new Error("key is not working"));

//     }, 5000)
// }

// )

function getUser() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      console.log("user gannawa");
      resolved({ secretId: "123" });
      reject(new Error("not working"));
    }, 3000);
  });
}

function getUserKey() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      console.log("user secret eka gannawa");
      resolved({ secretKey: ["a", "c", "d"] });
      reject(new Error("key is not working"));
    }, 5000);
  });
}

// promise1.then(result =>console.log(result)).catch(error =>console.log(error));
// promise2.then(result => console.log(result)).catch(error => console.log(error));

// to make the code look more synchronous
async function getUserAndKey() {
  const user = await getUser();
  console.log(user);
  const secret = await getUserKey();
  console.log(secret);
}

getUserAndKey();

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2);
const person = { name: "Charlie", age: 25 };
const { name, age } = person;
console.log(person.name);
console.log(person.age);
// differnce between var and let

function test() {
  var x = 10;
  let y = 20;

  if (true) {
    var x = 30; // Redeclaration allowed with var
    let y = 40; // Redeclaration not allowed with let
    console.log(x); // Output: 30
    console.log(y); // Output: 40
  }

  console.log(x); // Output: 30 (due to hoisting)
  console.log(y); // Output: 20 (block-scoped)
}
test();

// hoisting
console.log(a);
var a = 30;

// console.log(b);
// let b = 20;

const student = {
  name1: "Charlie",
  Address: { street: "idigahadeniya", reigion: "dehiwala" },
};
const {
  name1,
  Address: { street, reigion },
} = student;
console.log(name1);
console.log(street);
console.log(reigion);
