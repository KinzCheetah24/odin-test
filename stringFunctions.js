function capitalize(string) {
    return string.toUpperCase();
}

function reverse(string) {
    return string.split("").reverse().join("");
}

module.exports = { capitalize, reverse };