var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100,
    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === 'number') {
                total += this[key];
            }
        }
        return total;
    },
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'number' && this[key] < min) {
                min = this[key];
            }
        }
        return min;
    },
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === 'number' && this[key] > max) {
                max = this[key];
            }
        }
        return max;
    }
}

// Додамо нову послугу
services['Розбити скло'] = 200;

// Виведемо загальну вартість наданих послуг
console.log("Загальна вартість наданих послуг:", services.price());

// Виведемо мінімальну вартість послуги
console.log("Мінімальна вартість послуги:", services.minPrice());

// Виведемо максимальну вартість послуги
console.log("Максимальна вартість послуги:", services.maxPrice());
