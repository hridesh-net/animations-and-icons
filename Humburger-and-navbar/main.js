const mBtn = document.querySelector('#m-btn');
let menuOpen = false;
mBtn.addEventListener('click', () => {
    if (!menuOpen) {
        mBtn.classList.add('open');
        menuOpen = true;
    } else {
        mBtn.classList.remove('open');
        menuOpen = false;
    }
})

// const iBtn_1 = document.querySelector('#item_5');
// iBtn_1.addEventListener('mouseover', () => {
//     iBtn_1.classList.add('dropdown');
// })
// iBtn_1.addEventListener('mouseout', () => {
//     iBtn_1.classList.remove('dropdown');
// })

// const iBtn_2 = document.querySelector('#item_2');
// // let btn_open = false;
// iBtn_2.addEventListener('mouseover', () => {
//     iBtn_2.classList.add('dropdown');
// })
// iBtn_2.addEventListener('mouseout', () => {
//     iBtn_2.classList.remove('dropdown');
// })

// const iBtn_3 = document.querySelector('#item_3');
// iBtn_3.addEventListener('mouseover', () => {
//     iBtn_3.classList.add('dropdown');
// })
// iBtn_3.addEventListener('mouseout', () => {
//     iBtn_3.classList.remove('dropdown');
// })