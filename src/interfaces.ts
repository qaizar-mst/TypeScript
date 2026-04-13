type ChaiOrder = {
    type : string,
    sugar : number,
    strong : boolean
}

function makeChai(order : ChaiOrder){
    console.log(order)
}

function serveChai (order : ChaiOrder){
    console.log(order)
}

// above code shows how type is used : just a revision code



// what and why interface.

// type TeaRecipe = {
//     water : number,
//     milk : number
// }

// making above object Type into a interface
interface TeaRecipe {
    water : number,
    milk : number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50
}

// this code has no issue, but if similarly:

// type CupSize = "small" | "union";

// class Chai implements CupSize {
//     // here we dont get suggestion the error is:
//     // A class can only implement an object type 
//     // or intersection of object types with statically known members.
// }


// thus for this we use interface.
// making above  code into interface

interface CupSize { size : "small" | "large";}

// now implementing in class
class Chai implements CupSize{
    size: "small" | "large" = "large";
}