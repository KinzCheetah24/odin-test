const { capitalize, reverse } = require("./stringFunctions");

test("Capitalize String", () => {
    expect(capitalize("hello")).toEqual("HELLO");
});

test("Reverse String", () => {
    expect(reverse("hello")).toEqual("olleh");
});