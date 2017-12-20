//Property Initializer Shorthand

function createPerson(name, age) {
    return {
        name,
        age
    };
}

let obj = createPerson()

console.log(obj);

// Concise Methods

let person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};

// Computed Property Names

let cow = {
    'klara-1': true
}

console.log(cow)
console.log(cow['klara-1'])

// 