const { capitalize, reverse } = require("./functions");

test("Capitalize String", () => {
    expect(capitalize("hello")).toEqual("HELLO");
});

test("Reverse String", () => {
    expect(reverse("hello")).toEqual("olleh");
});