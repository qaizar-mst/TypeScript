"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
// generics i.e. 'T' in this case.
// they make code reusable, it makes sure that whichever datatype is passed in <T>, the same goes on
// to the reamining 'T'.
wrapInArray("Hello");
wrapInArray(21);
const numberBox = { content: 21 };
const stringBox = { content: "hello" };
const res = {
    status: 200,
    data: { flavour: "This is my fav flavour" }
};
//# sourceMappingURL=generice.js.map