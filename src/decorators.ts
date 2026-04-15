// Decorators allow you to add functionality or modify the behaviour of classes,methods,
// properties, and parameters at runtime.

// They are functions that are applied using '@' symbol before the declarationyou want to decorate.

// an example of decorators.

function Logger(target : Function){
    console.log(`Logging...`)
}

@Logger
class User {
    name : string = "John";
    age : number = 21;

    constructor(){
        console.log(`Constructor Called..`)
    }
}

const u = new User();



// decorator factory, is a concept where you create a new function and return the decorator,
// so that we can pass arguments to the function, example: 