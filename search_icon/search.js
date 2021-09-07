const sIcon = document.querySelector('#search_btn');
let icon = false;
sIcon.addEventListener('click', () => {
    if (!icon) {
        sIcon.classList.add('open');
        icon = true;
    } else {
        sIcon.classList.remove('open');
        icon = false;
    }
})