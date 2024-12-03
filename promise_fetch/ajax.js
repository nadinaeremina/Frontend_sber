// это 'promise' - принимает путь данных с сервера
// 1
// fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
//     .then(ans => {
//          console.log(ans);
// // получили не пойми какие данные - нужно их преобразовать в текст
//       //1 return ans.text(); // это 'promise'
// // лучше в 'json'
         //2 return ans.json();
//          // 'text' - это доп. 'promise' - метод
//     })
//     .then(result => {
//         console.log(result);
//     })
// quantity - любое число, нужное нам кол-во
// исп-ем 'then', чтобы получить данные от сервера корректно, 
//а не ввиде 'promise'

// 2
fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
// после того, как получен ответ от сервера
    .then(ans => {
         return ans.json(); //ответ от сервера - 'promise'
         // поэтому его тоже нужно обработать
         // 'json' возвращает обьект в виде js
    // можно написать '.then(ans => ans.json())'
    })
    .then(result => {
        console.log(result);
        let html = "";
        result.data.forEach(el => {
            html += `<div class="card">
                     <div> ${el.number} </div>
                     <div class="user"> ${el.owner} </div>
                     </div>`;
        });
        document.querySelector(".fun").innerHTML += html;
    })  
