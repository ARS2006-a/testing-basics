const { createOrder } = require("./order");

describe("Order Creation", () => {

    test("Valid order", () => {
        const result = createOrder(
            [{ name: "Pizza", price: 200, quantity: 2 }],
            null
        );

        expect(result.success).toBe(true);
        expect(result.order.total).toBe(400);
    });

    test("Empty cart", () => {
        const result = createOrder([], null);

        expect(result.success).toBe(false);
        expect(result.message).toBe("Cart is empty");
        expect(result.order).toBeNull();
    });

    test("Multiple products", () => {
        const result = createOrder([
            { name: "Pizza", price: 200, quantity: 1 },
            { name: "Burger", price: 100, quantity: 2 }
        ]);

        expect(result.order.items.length).toBe(2);
    });

    test("Coupon applied", () => {
        const result = createOrder(
            [{ name: "Pizza", price: 1000, quantity: 1 }],
            "SAVE10"
        );

        expect(result.order.total).toBe(900);
    });

    test("No coupon", () => {
        const result = createOrder(
            [{ name: "Pizza", price: 500, quantity: 1 }]
        );

        expect(result.order.coupon).toBeNull();
    });

});