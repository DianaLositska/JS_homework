
let unit = "км"; // Одиниця виміру: км, години, кг
let value = 10; // Кількість одиниць

// Функція для переведення одиниць виміру
function convertUnits(unit, value) {
    let result = ""; // Результат переведення

    // Використовуємо switch для обробки різних одиниць виміру
    switch (unit) {
        case "км":
            result = value + " км це " + (value * 1000) + " м.";
            break;
        case "г":
            result = value + " г це " + (value * 60) + " хв.";
            break;
        case "кг":
            result = value + " кг це " + (value * 1000) + " г.";
            break;
        default:
            result = "Невідома одиниця виміру.";
    }

    return result; // Повертаємо результат
}

// Викликаємо функцію та виводимо результат
console.log(convertUnits(unit, value));