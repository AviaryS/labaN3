// task 9
// Получение ol
getUl = document.querySelector('#ul2')


// Функция добавления li 
function addLi() {
    // Создание li
    makeLi = document.createElement('li');
    makeLi.innerHTML = 'пункт';

    // Добавление li в ul
    getUl.appendChild(makeLi);
}


// Прослушка клика в ul
getUl.addEventListener('click', function(event) {
    target = event.target;
    
    // Добавление ! для li
    if (target.tagName == 'LI') {
        target.innerHTML += '!';
    }
})


