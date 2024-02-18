
function pad(str, symbol, length, addToStart) {
    if (typeof str !== 'string' || typeof symbol !== 'string') {
        throw new Error('Перший та другий аргументи повинні бути рядками');
    }

    if (length <= str.length) {
        return str;
    }

    const diff = length - str.length;
    const repeatCount = Math.ceil(diff / symbol.length);
    const padStr = symbol.repeat(repeatCount).slice(0, diff);

    return addToStart ? padStr + str : str + padStr;
}

// Приклад 
console.log(pad('qwerty', '+', 8, true)); // Виведе "++++qwerty"
console.log(pad('qwerty', '+', 8, false)); // Виведе "qwerty++++"
