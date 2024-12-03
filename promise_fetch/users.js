const DB = {
    users: [
        {
            name: "Leonid",
            age: 25,
            id: new Date().getTime()
        }
    ]
}

const getDelay = () => Math.floor(Math.random() * 1000);
//console.log(DB.users);

// 'cb' - ф-ция обратного вызова, кот. будет все это использовать

// показать всех
const getAllUsers = (cb) => {
    setTimeout(() => {
        cb(DB.users);
    }, getDelay());
}

// создать нового 
const setNewUser = (newUser, cb) => {
    setTimeout(() => {
        const user = {
             id: new Date().getTime(),
             ...newUser
        };
        DB.users.push(user);
        cb(user)
    }, getDelay())
}

// изменить существующего
const updateUser = (id, fields, cb) => {
    setTimeout(() => {
        let update;
        // с пом. метода 'map' перезаписываем данные
        DB.users = DB.users.map(user => {
            if (user.id === id) {
                update = {
                // записываем нашего 'user', изменяя пар-ры 'fields'
                    ...user, // сюда записываем старого юзера
                    ...fields // сюда изменения
                }
                return update;
            }
            return user;
        });
        cb(update);
    }, getDelay())
}

getAllUsers(function(data) {
    console.log(data);
})

let leon = DB.users[0];
updateUser(leon.id, {age: ++leon.age}, function(data) {
    console.log("Новый Леонид", data);
})

const newUser = {
    name: "Alex",
    age: 31
}

setNewUser(newUser, function(newData) {
    console.log("Добавлен новый пользователь", newData);
    updateUser(newData.id, {name: "Alexander"}, 
    function(upDate) {
        console.log("пользователь изменен", upDate);
        getAllUsers(function(allData) {
            allData.forEach(function(user, i) {
              console.log(`пользователь ${i + 1}`, user);  
            }) 
        })
    })
})
