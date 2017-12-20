let DriveMixin = {
    drive () {
        return this.name + ' is cruisin!'
    }
}

let MagicGlasses = {
    peek () {
        return this.sayName() + ' is peeking!'
    }
}

function mixins (...mixins) {
    var base = function() {};
    Object.assign(base.prototype, ...mixins);
    return base;
}

class Person extends mixins(DriveMixin, MagicGlasses) {
    constructor (name) {
        super();
        this.name = name
    }

    sayName () {
        return this.name
    }

}

class Superhero extends Person {
    constructor (name) {
        super(name)
    }

    sayName () {
        return 'Super ' + this.name
    }
}



let pete = new Person('Pete');
let clark = new Superhero('Clark')

console.log(pete.drive());
console.log(pete.sayName());
console.log(clark.drive());
console.log(clark.sayName());
console.log(pete instanceof Superhero)
console.log(clark instanceof Superhero)
console.log(clark.peek())


