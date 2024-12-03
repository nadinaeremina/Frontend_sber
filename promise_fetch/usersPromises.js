// вместо 'callback' исп-ем 'resolve'
// показать всех 
const getAllUsers = () => {
    return new Promise(resolve => {
        // 'resolve' - в случае успеха
        setTimeout(() => {
           resolve(DB.users);
           // по сути: const getAllUsers = resolve(DB.users);
        }, getDelay());
    })
}

// создать нового 
const setNewUser = (newUser) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const user = {
                 id: new Date().getTime(),
                 ...newUser
            };
            DB.users.push(user);
            resolve(user) // передаем их в 'resolve', чтобы далее в 'then' можно было пользоваться этими данными
        }, getDelay())
    })
}

// изменить существующего
const updateUser = (id, fields) => {
    return new Promise(resolve => {
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
            resolve(update);
        }, getDelay())
    })  
}

setNewUser(newUser) 
// вернет 'promise' - поэтому дальше 'then'
// 'setNewUser' - вернет нам нового пользователя и дальше новый пользователь - это - 'newData'
//  в 'resolve' перешел новый пользователь, далее мы пользуемся этими данными, передавая их в 'Console.log'
    .then(newData => {
        console.log("Добавлен новый пользователь", newData);
        return updateUser(newData.id, {name: "Alexander"});
    })
    .then(upData => {
        console.log("пользователь изменен", upData);
       return getAllUsers();
    })
    .then(allData => {
        allData.forEach(function(user, i) {
            console.log(`пользователь ${i + 1}`, user); 
        }); 
    })

