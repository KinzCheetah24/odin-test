const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shift) {
    let aux = "";

<<<<<<< HEAD
    string = string.toLowerCase();
    for(let char of string) {
        if(alphabet.includes(char)) {
            aux += alphabet[(alphabet.indexOf(char) + shift) % alphabet.length];
=======
    for(let char of string) {
        if(alphabet.includes(char.toLowerCase())) {
            aux += alphabet.includes(char) ? alphabet[(alphabet.indexOf(char.toLowerCase()) + shift) % alphabet.length] : alphabet[(alphabet.indexOf(char.toLowerCase()) + shift) % alphabet.length].toUpperCase();
>>>>>>> 34ace0d (feat: caesarCipher added)
        } else {
            aux += char;
        }
    }

    return aux;
}

module.exports = caesarCipher;