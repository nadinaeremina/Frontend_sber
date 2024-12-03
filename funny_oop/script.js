let n = 12;

let data = [];

while (n--) {
    data.push(new User(
    names[getNumber(names.length)],
    getNumber(100,1),
    images[getNumber(images.length)],
    getColor(),
    getNumber(21,10)
)
);
}
console.log(data);

const wrapper = document.querySelector(".wrapper");

data.forEach(u => {
    const card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("i");
    img.className = `fa-solid fa-${u.image}`;
    img.style.color = u.color;

    let name = document.createElement("h2");
    name.innerText = u.name;

    let age = document.createElement("p");
    age.innerText = u.getAge();

    let text = document.createElement("p");
    text.innerText = u.getInfo(words);

    card.append(name, img, age, text);

    // добавляем тень карточкам цвета самой карточки
    card.style.boxShadow = `0 0 5px 0 ${u.color}`;

    wrapper.appendChild(card);
})