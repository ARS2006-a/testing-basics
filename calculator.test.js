//describe() - Test plan
// it() / test() - test case
//expect() - assertion
const {add} = require("./calculator");
const {sub} = require("./calculator");
const {mul} = require("./calculator");
const {div} = require("./calculator");

describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
        //expect().toEqual();
        //expect().toBeTruthy()
        //expect().toBeFalsy()
        //expect().toBeDefined()
        //expect().toBeUndefined()
    });
    test("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });

    test("Subtract 2 negative numbers",()=>{
        expect(sub(-5,-10)).toBe(5);
    });

     test("Subtract 2 positive numbers",()=>{
        expect(sub(10,5)).toBe(5);
    });
    test("Multiply 2 positive numbers",()=>{
        expect(mul(5,10)).toBe(50);
    });
    test("Divide 2 positive numbers",()=>{
        expect(div(10,5)).toBe(2);
    });
});