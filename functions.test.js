const capitalize = require("./functions");

test("Capitalize", () => {
    expect(capitalize("hello")).toEqual("HELLO");
});