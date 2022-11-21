// task 10
database = document.querySelector('#database')
fnames = database.querySelector('#fnames');
lnames = database.querySelector('#lnames');


function newUser() {

    form = document.querySelector('#form');

    // Создание блока с именем
    makeFName = document.createElement('div');
    makeFName.innerHTML = form.fname.value;
    makeFName.className = 'fname';

    // Создание блока с фамилией
    makeLName = document.createElement('div');
    makeLName.innerHTML = form.lname.value;
    makeLName.className = 'lname';

    // Добавление блоков в таблицу
    fnames.appendChild(makeFName);
    lnames.appendChild(makeLName);
}


// Прослушка на имя 
fnames.addEventListener('click', function(event) {
    target = event.target;

    // Если это  название столбца, то не менять
    if (target.innerHTML != 'Имя') {
        newFName = prompt('Введите новое имя');
        // Замена старового значения на новое
        target.innerHTML = newFName;
    } else {
        return
    }
})


// Прослушка на фамилию
lnames.addEventListener('click', function(event) {
    target = event.target;

    // Если это  название столбца, то не менять
    if (target.innerHTML != 'Фамилия') {
        newLName = prompt('Введите новую фамилию');
        // Замена старового значения на новое
        target.innerHTML = newLName;
    } else {
        return
    }
})