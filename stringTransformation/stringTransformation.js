function transformString(input) {
    const length = input.length;
    let result = input;

    if (length % 3 === 0) {
        result = reverseString(result);
    }

    if (length % 5 === 0) {
        result = replaceWithASCII(result);
    }

    return result;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function replaceWithASCII(str) {
    let asciiStr = '';
    for (let i = 0; i < str.length; i++) {
        asciiStr += str.charCodeAt(i) + ' ';
    }
    return asciiStr.trim();
}

// Example usage:
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
