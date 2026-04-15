"use strict";
// type inferencing in TS.
Object.defineProperty(exports, "__esModule", { value: true });
let drink = "mojito";
let num = 12;
// here TS automatically infers the datatype of the created variable.
// type annotations:
let name = "simon";
// this is the developer deciding the type thus annotating the type of the variable.
// unions
let youtubeSubs = '10k';
youtubeSubs = 10000;
// says that this variable can have either number value or string value.
// user can create its possible states, for example:
let apiRequestStatus = 'pending';
apiRequestStatus = 'success';
function orderWaterBottle(obj) {
    return (typeof obj === "object" &&
        typeof obj != null &&
        typeof obj.company === "string" &&
        typeof obj.price === "number");
}
function serveWater(item) {
    if (orderWaterBottle(item)) {
        return `Serving ${item.company} of rs ${item.price}`;
    }
    return `Serving tap water.`;
}
function waterSupply(obj) {
    switch (obj.company) {
        case "fiji":
            return `serving fiji water `;
        case "ross":
            return `serving ross water `;
        case "local":
            return `serving tap water `;
    }
}
function orderWater(obj) {
    if ("quality" in obj) {
        // checking if special property is available in the obj.
        return `This is Fiji Water`;
    }
    if ("prop" in obj) {
        return `This is Ross Water`;
    }
}
// forceful type assertion
let response = "42";
let numericLength = response.length;
let bookString = '{"name": "Goosebumps by RL Stine."}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
// try catch block example:
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error: ", error);
}
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to Admin Dasboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to User Dashboard");
        return;
    }
    role;
}
//# sourceMappingURL=typesInTs.js.map