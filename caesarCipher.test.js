const caesarCipher = require("./caesarCipher");

test("Caesar Cipher", () => {
    expect(caesarCipher("aaa", 1)).toEqual("bbb");
    expect(caesarCipher("zzz", 1)).toEqual("aaa");
    expect(caesarCipher("xyz", 3)).toEqual("abc");
    expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});