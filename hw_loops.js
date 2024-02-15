//  перший приклад for
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol;
        }
        console.log(line);
    }
}

// Приклад використання:
drawTriangle(5, '*');


// другий приклад - використання методу repeat()

function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}

// Приклад використання:
drawTriangle(5, '*');
