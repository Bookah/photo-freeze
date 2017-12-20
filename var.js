// // var vs let

// var name = 'Pete'
// var name = 'Chris'

// let surname = 'Sampras'
// let surname = 'Topher'

// // Constants

// const constant = {
//     yolo: 'yolo'
// };

// let contant = {}

// constant.yolo = 'henk'

// console.log(constant);

// constant.piet = 'piet'

// console.log(constant)

// //Block bindings in loops

// for (var i = 0; i < 10; i++) {
//     process(items[i]);
// }

// console.log(i);

// for (let i = 0; i < 10; i++) {
//     process(items[i]);
// }

// console.log(i);

// Functions in Loops

var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() { console.log(i); });
}

funcs.forEach(function(func) {
    func();
});

//IIFE workaround

var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push((function(value) {
        return function() {
            console.log(value);
        }
    }(i)));
}

funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
});

//ES6 to the rescue!

var funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
})

//Functions


// Destructuring

var person = {
    id: 1,
    age: 50,
    alive: false,
    children: [1,2,3]
}

let {id, age, alive=true, children:[first, second, third]} = person;

console.log(id, age, alive, third);

// Destructuring in functions 

    function setCookie(name, value, { secure, path, domain, expires }) {
    
        // code to set the cookie
    }
    
    setCookie("type", "js", {
        secure: true,
        expires: 60000
    });



