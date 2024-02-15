
function myIsNaN(value) {
    // Перевіряємо, чи є значення числом, або NaN яке не дорівнює самому собі
    return typeof value !== 'number' || (value !== value);
  }
  // Перевірка
  console.log(myIsNaN(NaN));  // Виведе: true, тому що NaN дійсно є NaN
  console.log(myIsNaN("qwerty")); // Виведе: true, рядок не є числом, отже вважається NaN
  console.log(myIsNaN(123));  // Виведе: false, тому що це число а не NaN
  console.log(myIsNaN("123"));  // Виведе: false, хоча це рядок який  може бути конвертований в число
  