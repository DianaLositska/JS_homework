var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки електронної пошти
var regex = /^[\w\d]+(?:\.[\w\d]+)*@(?:gmail\.com|yahoo\.com)$/;

/*
^ - початок рядка.
[\w\d]+ - одне або більше літер або цифр.
(?:\.[\w\d]+)* - невиразна група, яка включає крапку і одне або більше літер або цифр. Ця група може повторюватися 0 або більше разів.
@ - символ "@".
(?:gmail\.com|yahoo\.com) - невиразна група, яка включає "gmail.com" або "yahoo.com".
$ - кінець рядка.
*/

// Масив для зберігання підходящих адрес електронної пошти
var trustedEmails = [];

// Перевірка кожної адреси електронної пошти на відповідність регулярному виразу
arr.forEach(function(obj) {
    if (regex.test(obj.email)) {
        trustedEmails.push(obj.email);
    }
});

// Вивід результатів перевірки
console.log("Довірені адреси електронної пошти:", trustedEmails);
