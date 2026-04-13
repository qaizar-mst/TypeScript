// type inferencing in TS.

let drink = "mojito"
let num = 12;
// here TS automatically infers the datatype of the created variable.


// type annotations:
let name:string = "simon"
// this is the developer deciding the type thus annotating the type of the variable.

// unions
let youtubeSubs:number | string = '10k'
youtubeSubs = 10000;
// says that this variable can have either number value or string value.

// user can create its possible states, for example:
let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending'

apiRequestStatus = 'success';
// this can take any of the above 3 only!!


// custom types creation.
// using the type keyword

type waterBottle = {
    company : string,
    price : number
}

function orderWaterBottle(obj :any):obj is waterBottle{
    return (
        typeof obj === "object" &&
        typeof obj != null &&
        typeof obj.company === "string" && 
        typeof obj.price === "number"
    )
}

function serveWater(item : waterBottle | string){
    if (orderWaterBottle(item)){
        return `Serving ${item.company} of rs ${item.price}`
    }
    return `Serving tap water.`
}




// type narrowing in TS.

type fijiWater = {company : "fiji", quality : number}
type rossWater = {company : "ross", prop: boolean}
type tapWater = {company : "local" , value : number}

type water = fijiWater | rossWater | tapWater


function waterSupply(obj: water){
    switch (obj.company) {
        case "fiji":
            return `serving fiji water `            
    
        case "ross":
            return `serving ross water `
            
        case "local":
            return `serving tap water `
    }
}


function orderWater(obj: fijiWater | rossWater){
    if ("quality" in obj){
        // checking if special property is available in the obj.
        return `This is Fiji Water`
    }
    if ("prop" in obj){
        return `This is Ross Water`
    }
}



// forceful type assertion
let response:string = "42"

let numericLength: number = (response as string).length


type Book = {
    name : string;
};


let bookString = '{"name": "Goosebumps by RL Stine."}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement


// try catch block example:

try {
    
} catch (error) {
    if (error instanceof Error){
        console.log(error.message)
    }

    console.log("Error: ", error)
}


type Role = "admin" | "user"

function redirectBasedOnRole(role : Role) : void{
    if (role === "admin"){
        console.log("Redirecting to Admin Dasboard");
        return;
    }

    if(role === "user"){
        console.log("Redirecting to User Dashboard");
        return;
    }

    role;
} 