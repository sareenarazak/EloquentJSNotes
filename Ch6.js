// Encapsulation --> wrapping properties (either variables or methods) into one unit (object)
// this points to the object it was called on
let woof = function() {
    if(this.isGoodBoi) {
        console.log(this.dogName  + "says. I am a good boi");
    } else {
        console.log(this.dogName + " says.I am not a good boi");
    }
}
let injiGoodBoi = {dogName : "Inji", isGoodBoi : true, woof};
let injiNotGoodBoi = {dogName : "inji", isGoodBoi : false, woof};
injiGoodBoi.woof();
injiNotGoodBoi.woof();
let injiBestBoi = {dogName : "Ini best boi", isGoodBoi : true, woof};

// another way to do method execution --> function.call (object)
woof.call(injiBestBoi);

// Arrow functions does not have `this` binding ,  but can see the ones in the scope around it
// what does this mean If I had written the argument to map using the function keyword, the code wouldn’t work.

// Prototype --> Another object that is used to fallback on ---> every object has a prototype that could be another object or null
// Top level prototype for any object is Object.prototype --> like in Java Object class

// Object.getPrototypeOf returns the prototype of an object.
console.log(Object.getPrototypeOf(injiNotGoodBoi) === Object.prototype); // true

console.log(Object.getPrototypeOf(Object.prototype)); // null  --> unsure : but looks like its cos there is no object created --> null prototype

console.log(Object.getPrototypeOf({}) === Object.prototype);// true
console.log(Object.getPrototypeOf("") === String.prototype); // true
console.log(Object.getPrototypeOf([1]) === Array.prototype); // true
console.log(Object.getPrototypeOf(woof) === Function.prototype); // true

// Comment : Is prototype similar to super class ?
// You can create a prototype object and use that to create an object
let doggoProtoType = {
    // define methods in prototype --> like this
    speak(message) {
        console.log(message + " my name is  " + this.name);
    }
};

let aNewDog = Object.create(doggoProtoType);
aNewDog.name = "new dog";
aNewDog.speak("woof");
console.log(Object.getPrototypeOf(aNewDog) === doggoProtoType); // true

// Prototype vs Classes
// Put common/ shared properties on prototype.
// Object specific ones on the class
// Classes in JavaScript are essentially syntactic sugar over the prototype-based system.

// two ways of creating an object
// using prototype
function createDoggo(name) {
    // here the doggoProtoType has the method speak
    let newDoggo = Object.create(doggoProtoType);
    newDoggo.name = name;
    return newDoggo
}
createDoggo("pipin").speak("woof");

// constructors are capitalized
function Doggo(name) {
    this.name = name;
}

Doggo.prototype.speak = function (message) {
    console.log(message + " my name is " + this.name);
};
let bobaDog = new Doggo("boba");
bobaDog.speak("woof");

// Constructors are functions --> their prototype is function
// But objects created using the constructor has prototype the name of function

console.log(Object.getPrototypeOf(Doggo) === Function.prototype); //true
console.log(Object.getPrototypeOf(bobaDog) === Doggo.prototype); //true

// new way of doing class definitions --> Sanity achieved
//constructor key word
// class key word
class DoggoClass {
    constructor(name) {
        this.name = name;
    }

    speak(message) {
        console.log(message + " my name is " + this.name)
    }
}

let happyDoggo = new DoggoClass("happy");
happyDoggo.speak("Yay");

// Overriding
DoggoClass.prototype.fur = "Long";
console.log(happyDoggo.fur); // Long
happyDoggo.fur = "Soft";
console.log(happyDoggo.fur); // Soft

// Map --> Using plain object as map is dangerous cos of prototypes
let doggoAge = {
    "inji" : 5,
    "mango" : 1,
    "boba" : 2

}
console.log("inji" in doggoAge); // true
console.log("toString" in doggoAge); // true

let aProperMap = new Map();
aProperMap.set("key1", "value1");
aProperMap.set("key2", "value2");
console.log(aProperMap.has("key1")); // true
console.log(aProperMap.has("key3")); // false

// Symbols --> values created with Symbol function --> Unique --> even if the string identifier for Symbol is same the symbol object are not
console.log("Symbol same " + (Symbol("name") === Symbol("name")));
// Assign symbols to prototype usin []
const newToString = Symbol("newToString");
Array.prototype[newToString] = () => console.log("This is a newToString Symbol");
[1,2,3][newToString](); //This is a newToString Symbol

// Iterators -->  A method named Symbol.iterator (Defined by the language and a property of Symbol ) --> return a object
// The returned object is an interface called iterator
// next () --> gives an object {value: any , done :boolean}
let aStringIterator = "abcd"[Symbol.iterator]();
let next = aStringIterator.next();
while(!next.done) {
    console.log(next.value); // a /n b /n c /n d
    next = aStringIterator.next();

}
// How to add an iterator to a class
class Doggos{
     constructor(names) {
         this.names = names;
     }

     get(index) {
         return this.names[index];
     }

     add(name) {
         this.names.push(name);
     }

}

class DoggoIterator {
    constructor(doggos) {
        this.doggoNames = doggos.names;
        this.start = 0;
    }

    next() {
        if(this.start === this.doggoNames.length) return { done: true};
        let name = this.doggoNames[this.start];
        this.start++;
        return {value : name, done: false};
    }
}

Doggos.prototype[Symbol.iterator] = function () {
    return new DoggoIterator(this);
}

let doggos = new Doggos(["inji", "luna", "radar", "boba", "mango"]);
let doggosIterator = doggos[Symbol.iterator]();
let nextDoggo = doggosIterator.next();
while(!nextDoggo.done) {
    console.log(nextDoggo.value);
    nextDoggo = doggosIterator.next(); // "inji", "luna", "radar", "boba", "mango"
}

// With iterator
for(let doggo of doggos) {
    console.log(doggo); // "inji", "luna", "radar", "boba", "mango"
}

// Not setting iterator using line 66 --> Uncaught TypeError: doggos is not iterable


// Getters and setters --> keywords 'get' and 'set'
class Hobbies{
    constructor() {
        this.hobbies = [];
    }

    get size() {
        return this.hobbies.length;
    }


    /// Cant have a getter that says hobbies --> error
    // Uncaught TypeError: Cannot set property hobbies of #<Hobbies> which has only a getter
    get getHobbies() {
        return this.hobbies;
    }

    set addHobby(newHobby) {
        this.hobbies.push(newHobby);
    }
}

const humanHobbies = new Hobbies();
humanHobbies.addHobby = "reading";
console.log(humanHobbies.size); // 1
console.log(humanHobbies.getHobbies); //  ["reading"]
humanHobbies.addHobby = "origami";
console.log(humanHobbies.getHobbies); //  ["reading", "origami"]


class Food{
    constructor() {
        // Important _food is needed to make it private and to have a getter that the same name as food
        this._food = [];
    }

    get size() {
        return this._food.length;
    }

    get food() {
        return this._food;
    }

    set addFood(newFood) {
        this._food.push(newFood);
    }
}

const dogFood = new Food();
dogFood.addFood = "kibble";
console.log(dogFood.size); // 1
console.log(dogFood.food); //  ["kibble"]
dogFood.addFood = "peanutbutter";
console.log(dogFood.food); //  ["kibble", "peanutbutter"]

// We can also add static methods using key word static -- > TODO : to google for example s

// Inheritance --> extends keywords --> similar to java -- we can override --> call super etc
// author discourages from using too much of this --> class hierarchy and to avoid tight coupling

// instance of
console.log(dogFood instanceof Food); // true
console.log(dogFood instanceof Hobbies); //false
console.log(dogFood instanceof Object); //true