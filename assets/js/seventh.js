// task 7
function numSqrt() {
    numBlock = document.querySelector('#nums')
    numbers = document.getElementsByTagName('p');

    // Возведение чисел в квадрат
    for (let num = 0; num < numbers.length; num++) {
        numbers[num].innerHTML = Number(numbers[num].innerHTML)**2; 
    }
}