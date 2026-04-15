"use strict";
// using axios to get web requests
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fetchData = async () => {
    try {
        const response = await axios_1.default.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.log(error.response?.status);
        }
    }
};
//# sourceMappingURL=webReq.js.map