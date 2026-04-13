// enums allows to define a set of named constants.
// Using enums can make it easier to document intent, 
// or create a set of distinct cases. 
// TypeScript provides both numeric and string-based enums.


// numeric enums:
enum Directions {
    UP = 1,
    RIGHT,
    lEFT,
    DOWN
}
// Above, we have a numeric enum where Up is initialized with 1.
//  All of the following members are auto-incremented from that point on. 
// In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.



// string enums:
// String enums are a similar concept, but have some subtle runtime differences as documented below. 
// In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
