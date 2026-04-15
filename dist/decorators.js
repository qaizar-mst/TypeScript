"use strict";
// Decorators allow you to add functionality or modify the behaviour of classes,methods,
// properties, and parameters at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
// They are functions that are applied using '@' symbol before the declarationyou want to decorate.
// an example of decorators.
function Logger(target) {
    console.log(`Logging...`);
}
@Logger
class User {
    name = "John";
    age = 21;
    constructor() {
        console.log(`Constructor Called..`);
    }
}
const u = new User();
// decorator factory, is a concept where you create a new function and return the decorator,
// so that we can pass arguments to the function, example: 
function LoggerDecorator() {
    function Logger1(target) {
        console.log(`Logging...`);
    }
    return Logger1;
}
@LoggerDecorator()
class User1 {
    name = "John";
    age = 21;
    constructor() {
        console.log(`Constructor Called..`);
    }
}
const u1 = new User();
//# sourceMappingURL=decorators.js.map