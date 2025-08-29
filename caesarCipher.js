const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shift) {
    let aux = "";

    for(let char of string) {
        if(alphabet.includes(char.toLowerCase())) {
            aux += alphabet.includes(char) ? alphabet[(alphabet.indexOf(char.toLowerCase()) + shift) % alphabet.length] : alphabet[(alphabet.indexOf(char.toLowerCase()) + shift) % alphabet.length].toUpperCase();
        } else {
            aux += char;
        }
    }

    return aux;
}

module.exports = caesarCipher;