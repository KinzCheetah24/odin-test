function analyzeArray(array) {
    let average = 0, min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER, length = 0;

    if(array.length > 0) {
        for(let number of array) {
            average += number;
            min = number < min ? number : min;
            max = number > max ? number : max;
        }
    }

    length = array.length;
    average /= length;

    return {average, min, max, length};
}

module.exports = analyzeArray;