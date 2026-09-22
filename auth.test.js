const { signup, login } = require("./auth");

describe("Authentication feature", () => {

    test("Successful signup", () => {
        expect(signup("Achinta", "achinta@gmail.com", "123456")).toBeTruthy();
    });

    test("Duplicate signup", () => {
        signup("Achinta", "achinta@gmail.com", "123456");
        expect(signup("Achinta", "achinta@gmail.com", "123456")).toBeFalsy();
    });

    test("Successful login", () => {
        signup("Achinta", "achinta@gmail.com", "123456");
        expect(login("achinta@gmail.com", "123456")).toBeTruthy();
    });

    test("Invalid password", () => {
        signup("Achinta", "achinta@gmail.com", "123456");
        expect(login("achinta@gmail.com", "wrongpassword")).toBeFalsy();
    });

});