// ф-ция принимает в себя функцию, показывает сегодняшнюю дату
// а именно здесь - сегодняшнее время, вторым арг-ом - время
// через которое будет вып-ся наша ф-ция (в милисекундах)
setTimeout(function() {
    console.log(new Date().toLocaleTimeString());
}, 1000);

//callback - ф-ция, кот. выз-ся внутри др. ф-ции

// 'resolve' - все хорошо, 'reject' - все плохо
const promise = new Promise(function(resolve, reject) { 
    // внутри можем создать условную реализацию - успех или нет?
    let result  = Math.round(Math.random());
    // в 'result' получим либо 0, либо 1
    if (result) {
        resolve("All correct!");
    } else {
        reject("Something wrong!");
    }
});

console.log(promise);

//если все хорошо - отработает 'then'
promise
        .then(function(data) {
            console.log("Успешность - 100%", data)
        })
        .catch(function(err) {
            console.log("Ошибка!");
        })
// 'data' - это то, что мы передали в 'resolve'
// если прийдет ошибка - "успешность - 100%" не увидим
// 'catch' - это отлов ошибки
// 'err' - это то, что мы передали в 'reject'
