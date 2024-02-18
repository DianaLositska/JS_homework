let car = {
    brand: 'toyota',
    model: 'Camry',
    year: 2015,
    getInfo: function() {
        let info = '';
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                info += `${key}: ${this[key]}\n`;
            }
        }
        console.log(info);
    }
};

// Виведемо інформацію про обєкт
car.getInfo();

// Додамо нову властивість
car.color = 'blue';

// Виведемо інформацію про автомобіль з новою властивістю
car.getInfo();
