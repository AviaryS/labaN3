// task 2
function isScroll() {

    // Проверка на наличие прокрутки
    if (window.pageYOffset > 0) {
        alert('Есть прокрутка');
    } else {
        alert('Нет прокрутки');
    }
}




// task 3
function sumNums() {
    // Получение чисел
    numsBlock = document.querySelector('#numsInput');
    nums = numsBlock.getElementsByTagName('input');

    // Изначальная сумма = 0
    let sum = 0;

    // Сложение чисел
    for (let num = 0; num < nums.length; num++) {
        sum += Number(nums[num].value);
    }

    // Вывод суммы
    alert(`sum = ${sum}`);
}




// task 4
function getTowns() {
    select = document.querySelector('#select');
    selectElem = select[select.selectedIndex].innerHTML;

    // Список городов
    arr = {
        'р': ['р1', 'р2', 'р3'],
        'а': ['а1', 'а2', 'а3'],
        'б': ['б1', 'б2', 'б3']
    }

    // Проверка на то, есть ли выбранный ключ в словаре
    if (selectElem in arr) {
        // создание и добавление селекта
        createSelect = document.createElement('select');
        document.body.appendChild(createSelect);
        for (let num = 0; num < arr[selectElem].length; num++) {
            // создание и добавление опшинов
            createOption = document.createElement('option');
            createOption.innerHTML = arr[selectElem][num];
            createSelect.appendChild(createOption);
        }
    }
}





// task 5
function addLi() {
    // Получение ol
    getOl = document.querySelector('#ol');
    
    // Создание li
    makeLi = document.createElement('li');
    makeLi.innerHTML = 'пункт';

    // Добавление li в ol
    getOl.appendChild(makeLi);
}




// task 8
let num = 1
function counter() {
    clickCounter = document.querySelector('#clickCounter');
    
    // Изменение значений счетчика 
    clickCounter.innerHTML = num;
    num++
}




