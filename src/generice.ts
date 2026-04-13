function wrapInArray <T>(item: T) : T[]{
    return [item]
}
// generics i.e. 'T' in this case.
// they make code reusable, it makes sure that whichever datatype is passed in <T>, the same goes on
// to the reamining 'T'.

wrapInArray("Hello")
wrapInArray(21)


// generic interfaces:

interface Box <T> {
    content : T
}

const numberBox : Box<number> = {content : 21}
const stringBox : Box<string> = {content : "hello"}


// an example: 
interface APIPromise<T> {
    status : number,
    data : T
}

const res : APIPromise<{flavour : string}> = {
    status : 200,
    data : {flavour : "This is my fav flavour"}
}