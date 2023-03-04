const container = document.querySelector('.container');

var clicked = false;

function changeColor() {
    if (!clicked) {
        container.classList = 'container_dark';
        clicked = true;
    } else {
        container.classList = 'container';
        clicked = false;
    }
}