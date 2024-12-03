const getNumber = (max = 101, min = 0) => Math.floor(Math.random() * (max - min) + min);
const getColor = (a = 100) => `rgba(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)}, ${a / 100})`;
const getWord = (n, w0, w1, w2) => {
    if (n % 100 < 11 || n % 100 > 14)
    {
        if (n % 10 ===1)
        {
            return w1;
        }
        else if (n % 10 >= 2 && n % 10 <=4)
        {
            return w2;
        }
        else
        {
            return w0;
        }
    }
    else
    {
        return w0;
    }    
}

const images = ["face-smile", "face-tired", "face-surprise", "face-meh", "face-angry","face-flushed",
 "face-sad-cry", "face-laugh", "face-laugh-wink", "face-laugh-beam", "face-kiss"];

const names = ["Агафья", "Аглая", "Агния", "Агафон", "Акиндин", "Агапит", "Авдей", "Авксентий", "Агапит", 
"Акакий", "Александр"];

class User {
    constructor(name, age, pic, color, cnt)
    {
        this.name = name;
        this.age = age;
        this.image = pic;
        this.color = color;
        this.cnt = cnt;
    }

    getInfo(dic)
    {
        let content = "";

        for (let i = 0; i < this.cnt; i++) {
          let word = dic[getNumber(dic.length)];
          if (i == 0) {
            content += word[i].toUpperCase + word.slice(1);
          }
          else
          {
            content += " " + word;
          }
        }

        return content;
    }

    getAge()
    {
        return `${this.age} ${getWord(this.age, 'лет', 'год', 'года')}`;
    }
}