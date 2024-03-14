const searchicon1 = document.querySelector("#searchicon1");
const searchicon1 = document.querySelector("#searchicon");
const searchinput1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click", function(){
    searchinput1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

const searchicon2 = Document.querySelector("#searchicon1");
const searchicon2 = Document.querySelector("#searchicon");
const searchinput2 = Document.querySelector("#searchinput1");

searchicon2.addEventListener("click", function(){
    searchinput2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.haederbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display = 'block'
    }, 200);
    headerbar.style.right = '0%';
});