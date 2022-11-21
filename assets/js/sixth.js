// task 6
// Получение ашек
linksBlock = document.querySelector('#links');
links = linksBlock.getElementsByTagName('a');

// Прослушка кликов
linksBlock.addEventListener('click', function(event) {
    target = event.target;

    // Добавление ссылки в конец текста
    if (target.tagName == 'A') {
        target.innerHTML += ' (' + target.href + ') ';
        event.preventDefault();
    }
})
