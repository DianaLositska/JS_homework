function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", ((evenCount / count) * 100).toFixed(2) + "% парних до " + ((oddCount / count) * 100).toFixed(2) + "% не парних");
}

// Приклад 
checkProbabilityTheory(1000);
