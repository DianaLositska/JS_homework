function pow(x, y) {
    let result = 1; // Ініціалізуємо змінну для зберігання результату

    // Здійснюємо y множень числа x на себе
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    // Повертаємо результат
    return result;
}

// Перевірка роботи функції
console.log(pow(2, 3)); // Очікуваний результат: 8

// x - число, яке потрібно піднести до ступеня,  y - ступінь, до якої потрібно піднести число