// WALLPAPER
document.querySelector('#btn_default').addEventListener('click',()=>{
    document.querySelector('#wallpaper').classList.remove('wallpaper_red'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_blue'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_green'),
    document.querySelector('#wallpaper').classList.add('wallpaper_default')
})
document.querySelector('#btn_red').addEventListener('click',()=>{
    document.querySelector('#wallpaper').classList.remove('wallpaper_default'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_blue'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_green'),
    document.querySelector('#wallpaper').classList.add('wallpaper_red')
})
document.querySelector('#btn_blue').addEventListener('click',()=>{
    document.querySelector('#wallpaper').classList.remove('wallpaper_default'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_red'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_green'),
    document.querySelector('#wallpaper').classList.add('wallpaper_blue')
})
document.querySelector('#btn_green').addEventListener('click',()=>{
    document.querySelector('#wallpaper').classList.remove('wallpaper_default'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_blue'),
    document.querySelector('#wallpaper').classList.remove('wallpaper_red'),
    document.querySelector('#wallpaper').classList.add('wallpaper_green')
})

// TV SLEEP SCREEN
document.querySelector('#btn-tv_sakura').addEventListener('click',()=>{
    document.querySelector('#openBtn-tv').classList.remove('snow'),
    document.querySelector('#openBtn-tv').classList.remove('leaves'),
    document.querySelector('#openBtn-tv').classList.add('sakura')
})
document.querySelector('#btn-tv_snow').addEventListener('click',()=>{
    document.querySelector('#openBtn-tv').classList.remove('sakura'),
    document.querySelector('#openBtn-tv').classList.remove('leaves'),
    document.querySelector('#openBtn-tv').classList.add('snow')
})
document.querySelector('#btn-tv_leaves').addEventListener('click',()=>{
    document.querySelector('#openBtn-tv').classList.remove('snow'),
    document.querySelector('#openBtn-tv').classList.remove('sakura'),
    document.querySelector('#openBtn-tv').classList.add('leaves')
})


// Name-tag pop-up
const dialogNT = document.getElementById('nametag-miniWindow');
const openBtnNT = document.getElementById('openBtn-nt');
const closeBtnNT = document.getElementById('closeBtn-nt');

     // Open the pop-up
    openBtnNT.addEventListener('click', () => {
        dialogNT.showModal();
    });

    // Close the pop-up
    closeBtnNT.addEventListener('click', () => {
        dialogNT.close();
    });


// TV pop-up
const dialogTV = document.getElementById('tv-miniWindow');
const openBtnTV = document.getElementById('openBtn-tv');
const closeBtnTV = document.getElementById('closeBtn-tv');

     // Open the pop-up
    openBtnTV.addEventListener('click', () => {
        dialogTV.showModal();
    });

    // Close the pop-up
    closeBtnTV.addEventListener('click', () => {
        dialogTV.close();
    });


// Notion pop-up
const dialogNo = document.getElementById('notion-miniWindow');
const openBtnNo = document.getElementById('openBtn-notion');
const closeBtnNo = document.getElementById('closeBtn-notion');

     // Open the pop-up
    openBtnNo.addEventListener('click', () => {
        dialogNo.showModal();
    });

    // Close the pop-up
    closeBtnNo.addEventListener('click', () => {
        dialogNo.close();
    });

// Journal Gallery pop-up
const dialogGA = document.getElementById('gallery-miniWindow');
const openBtnGA = document.getElementById('openBtn-gallery');
const closeBtnGA = document.getElementById('closeBtn-gallery');

     // Open the pop-up
    openBtnGA.addEventListener('click', () => {
        dialogGA.showModal();
    });

    // Close the pop-up
    closeBtnGA.addEventListener('click', () => {
        dialogGA.close();
    });

// Laptop pop-up
const dialogLT = document.getElementById('lt-miniWindow');
const openBtnLT = document.getElementById('openBtn-lt');
const closeBtnLT = document.getElementById('closeBtn-lt');

     // Open the pop-up
    openBtnLT.addEventListener('click', () => {
        dialogLT.showModal();
    });

    // Close the pop-up
    closeBtnLT.addEventListener('click', () => {
        dialogLT.close();
    });