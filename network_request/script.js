// API - application programm interface

// REST API
// RestFull API

// CRUD -для одной записи в БД мы можем сделать такие действия
// создать, прочитать, обновить, удалить

// CRUD        RESTfull       REST
// 'Create' - 'POST'         'POST'
// 'Read'   - 'GET'          'GET'
// 'Update' - 'PUT'/'PATCH'  'POST'
// 'Delete' - 'DELETE"       'GET'

fetch("https://sb-cats.herokuapp.com/api/2/lekso4ka/show")
      .then(res => res.json())
      .then(ans => {
        console.log(ans.data);
      })