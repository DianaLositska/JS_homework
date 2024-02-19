
function myBlend(arr) {
    for (let i = arr.length - 1;  i > 0; i--) {
        // Генеруємо випадковий індекс від 0 до i
        let j = Math.floor(Math.random() * (i + 1));
        // Міняємо місцями елементи масиву з індексами i та j
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// Приклад 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Початковий масив:", arr);
myBlend(arr);
console.log("Перемішаний масив:", arr);
