const body = document.body;
const square = body.querySelector(".square");
const link = square.querySelector(".btn");

// console.log(square);
// console.log(link);

square.style.backgroundColor = getColor(10);

// то же самое, что мы создали бы внутри div атрибут 'onclick='
// square.onclick - можно навесить только одну ф-цию

// цвет будет меняться у того тега, на который нажали
function changeBg (el) {
el.style.backgroundColor = getColor(70, 256, 0, 256);
}

// можем присвоить другую функцию
let n = 0;
// square.onclick = function() {
//     n++; 
//     // outerHTML - возвращает обьект в виде HTML - кода
//     //тк текст в ссылке уже есть, к нему добавляем еще текст
//     this.innerHTML = link.outerHTML + `Clicked ${n} times`;
// }

//если хотим навесить несколько ф-ций (внутри событие без 'on')
//атрибут 'onclick' уже не нужен с помощью обычной ф-ции через this
square.addEventListener('click', function(e) {
    n++;
    // 1 
    // мы закинули текст ссылки, но у нее больше нет события,
    // так как это другая ссылка
    // когда мы перезаписали innerHTML - мы подменили тег 'link'
    // создав его клон
    //this.innerHTML = link.outerHTML + `Clicked ${n} times`;
    //2
    let span = document.createElement("span");
    span.innerText = `Clicked ${n} times`;
    this.innerHTML = "";
    // здесь мы берем одну и ту же ссылку всегда
    this.append(link, span);
    //console.log(link.parentElement);
});

//с помощью стрелочной ф-ции через this не получится, только через
// 'target'
square.addEventListener("click", e => {
    // на таргет, тк таргет показывает, кто вызвал событие
    changeBg(e.target); // может сработать у квадрата, а может 
    // у ссылки, смотря на что нажали
})

link.addEventListener("click", e => {
    e.stopPropagation(); // при  нажатии на ссылку будет
    // работать только правило для ссылки - смена цвета рамки
    // для родит. тегов с подобным событием работать не будет
    e.preventDefault(); // отменить действия по умолчанию
    // не отправляем форму, страница не перезагружается, 
    // на сайт мы не переходим
    // 1 - размер, 2 - стиль, 3 - цвет
    e.target.style.border = `3px solid ${getColor()}`;
})

body.addEventListener("click", function() {
    this.style.background = getColor();
})

// если нам нужно скопировать обьект
 link.addEventListener("click", (e) => {
     let newTag = e.target.cloneNode(true);
     // 'cloneNode' - копируем тег, 'True' - все внутренние теги,
     // если есть скопирует тоже
     console.log(newTag);
 })

 // найти все теги 'p' в 'div1' и все теги 'p' в 'div2'
let elements = document.querySelectorAll("#div1 p, #div2 p");
console.log(elements);