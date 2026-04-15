"use strict";
// enums allows to define a set of named constants.
// Using enums can make it easier to document intent, 
// or create a set of distinct cases. 
// TypeScript provides both numeric and string-based enums.
Object.defineProperty(exports, "__esModule", { value: true });
// numeric enums:
var Directions;
(function (Directions) {
    Directions[Directions["UP"] = 1] = "UP";
    Directions[Directions["RIGHT"] = 2] = "RIGHT";
    Directions[Directions["lEFT"] = 3] = "lEFT";
    Directions[Directions["DOWN"] = 4] = "DOWN";
})(Directions || (Directions = {}));
// Above, we have a numeric enum where Up is initialized with 1.
//  All of the following members are auto-incremented from that point on. 
// In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
// string enums:
// String enums are a similar concept, but have some subtle runtime differences as documented below. 
// In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
//# sourceMappingURL=enums.js.map