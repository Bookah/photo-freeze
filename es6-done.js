// Introduction (history)

// Block bindings (var, let, const, (re)declaring, block bindings in loops, functions in loops (IFEE))

var name = 'John'
var name = 'Pete'
console.log(name);

let name = 'John'
let name = 'Pete'
console.log(name);

const name = 'John'
const name = 'Pete'
console.log(name);

const obj = {
    name: 'Chris'
}

obj = {};
obj.name = 'Tobias'

for (var i = 0; i < 10; i++) {

}

console.log(i);

var arr = [];

for (var i = 0; i < 10; i++) {
    arr.push(function() {
        console.log(i);
    })
}

arr.forEach(function(func) {
    func();
})

var arr = [];

for (var i = 0; i < 10; i++) {
    arr.push(function(value) {
        return function () {
            console.log(value);
        }
    }(i))
}

arr.forEach(function(func) {
    func();
})

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(function() {
        console.log(i)
    })
}

arr.forEach(function(func) {
    func();
})

// Functions (default parameters(functions, objects), arrow functions(declaring, arr.sort))

var printAll = function (first, second) {
    second = second || 'Default'
    console.log(first, second)
}

printAll(1,2)
printAll(1);

let printAll = function (   
                            first, 
                            second = 'Default', 
                            third = {
                                name: 'henk', 
                                id: 2
                            }, 
                            fourth=function(){
                                console.log('default function')
                            }
                        ) {
    console.log(first, second, third, fourth())
}

printAll(1);

var func = function (argument) {
    console.log(argument);
}

let func2 = (argument) => console.log(argument);

func('test');
func('test2');

let func3 = argument => console.log(argument);
let func4 = () => console.log('no argument');
let func5 = (first, second) => first;

let result = func5('test')

console.log(result);

let func5 = (first, second = 'Default') => {
    console.log(first, second)
    return first + second
}

var arr = [1,3,7,6];

arr.sort(function(a , b) {
    return a - b
})

console.log(arr);

let arr2 = [1,3,7,6];

arr2.sort((a, b) => a - b)

console.log(arr2)

var sayDelayedHello = function () {
    setTimeout(function() {
        console.log('Hello');
    },1000)
}

let sayDelayedHello2 = () => setTimeout(
        () => console.log('Hello2'),
        1000
    )

// Objects (shorthand property initializer, concise methods, computed property names, Object.assign (not a deep copy))

var name = 'Pete'
var age = 22

var obj = {
    name: name,
    age: age,
    sayName: function () {
        console.log(this.name)
    }
}

console.log(obj)
obj.sayName()

let obj2 = {
    name,
    age,
    sayName () {
        console.log(this.name)
    }
}

console.log(obj2)
obj2.sayName();

let obj3 = {}

for (let i = 0; i < 10; i++) {
    obj3['property'+i] = i;
}

console.log(obj3)
console.log(obj3['property1'])
console.log(obj3.property1);

let obj4 = Object.assign({property1: 'yolo'}, obj3)

console.log(obj4);

// Destructuring (declaring, nested destructuring, default values, array destructuring, swapping variables)

var results = {
    id: 1,
    age: 5,
    cleared: true,
    details: {
        one: 1,
        two: 2
    }
}

var id = results.id;
var age = results.age;
var cleared = results.cleared;

let {id, age, cleared = false, details: {one, two}} = results;

var arr = [1,2,3];

var first = arr[0]

let [first, second, third] = arr

var a = 1
var b = 2

var tmp = a
b = tmp
a = tmp

delete tmp;

[a, b] = [b, a];


// Classes (es5(contructor + prototype), static, inheritance)

var PersonType = function (name) {
    this.name = name
}

PersonType.prototype.sayName = function () {
    return this.name
}

person = new PersonType('Nick')
person.sayName();

class Person {
    constructor(name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name)
    }

    static notCallableFromInstance() {
        console.log('told ya')
    }
}

class Superhero {
    constructor(name) {
        super(name);
    }

    sayName () {
        console.log('Super '+ this.name)
    }
    fly () {
        console.log('flying!')
    }
}

person1 = new Person('Louis')
person2 = new Superhero('Clark')
Person.notCallableFromInstance();
person1.Person.notCallableFromInstance();
person1.sayName();
person1.fly();
person2.sayName();
person2.fly();

// Arrays (find(), findIndex(), fill())

var arr = [1,3,4,6,10];

for(var i = 0; i < arr.length; i++) {
    if (arr[i] > 4) {
        var result = arr[i]
        break;
    }
}

console.log(result)

let result = arr.find(n => n > 4)
let result = arr.findIndex(n => n > 4)

arr.fill(1);

console.log(arr);


