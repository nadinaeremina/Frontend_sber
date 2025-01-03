const  createCard = (data, parent, arr) => {
     const card = document.createElement("div");
     card.className = "card";
     // data-атрибут, чтобы в дальнейшем его можно было использовать
     card.setAttribute("data-id", data.id);
     // синоним
     // card.dataset.id = data.id;

     const age = document.createElement("div");
     age.className = "age";
     age.innerText = data.age || "no";

     const rate = document.createElement("div");
     rate.className = "rate";
     rate.innerHTML = "<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>";

     const pic = document.createElement("div");
     pic.className = "pic";
     pic.style.backgroundImage = `url(${data.img_link || "imgg/animals.jpg"})`;

     const name = document.createElement("div");
     name.className = "name";
     name.innerText = data.name;

     card.append(pic, age, rate, name);
     card.addEventListener("click", function() {
        showPopup(arr,"card");
     });
     parent.append(card);
}

const showPopup = (list, type, parent, content) => {
    let el = list.filter(el => el.dataset.type === type)[0];
    el.classList.add("active");
    el.parentElement.classList.add("active");
}