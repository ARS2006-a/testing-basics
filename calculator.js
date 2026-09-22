//describe() - Test plan
// it() / test() - test case
//expect() - assertion

describe("Add feature of the calculator",()=>{
    test("Add 2 positive numbers",()=>{
        expect(add(5,10)).toBe(15);
    });
    test("Add 2 negative numbers",()=>{
        expect(add(-5,-10)).toBe(-15);
    });
});


function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

module.exports = {
    add, 
    sub, 
    mul, 
    div
}