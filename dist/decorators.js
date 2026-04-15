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
//# sourceMappingURL=decorators.js.map