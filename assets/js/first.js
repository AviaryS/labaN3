// task 1
let button = document.getElementById('button');

// добавление прослушки
button.addEventListener('click', func);
let time = setTimeout(func, 3000);

// перенос на 500px вниз через 3с
function func(){
    setTimeout(() => {
        window.scrollTo({
            top:500,
            left:0,
            behavior: "smooth"
        });
    }, 3000);
}