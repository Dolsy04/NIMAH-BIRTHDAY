let list = document.querySelector('.slider-list');
let items = document.querySelectorAll('.slide-item');
let dots = document.querySelectorAll('.container .dots li')
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;
let lengthItems = items.length;


next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1
    }
    reloadfunction();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadfunction();
}
let refreshslider = setInterval(()=>{next.click()},5000)
function reloadfunction(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.container .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, key) =>{
    li.addEventListener('click', () => {
        active = key;
        reloadfunction();
    });
    
});

//------------------------ popup image-----------------------------------
document.querySelectorAll('.image').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.large-image').src = image.getAttribute('src');
    }
})
document.querySelector('.close-popup').onclick = () =>{
    document.querySelector('.popup').style.display = 'none';
}

const now = new Date();
const showYear =  now.getFullYear();
document.getElementById('year').innerHTML = showYear;

const openNav = document.querySelector('.open-nav');
openNav.addEventListener('click',()=>{
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active')
    if( nav.classList.contains('active')){
        openNav.src = './image/imagefolder/bx--x.png';
    }else{
        openNav.src = './image/imagefolder/cil--menu.png'
    };
});

const link = document.querySelectorAll('.link');
link.forEach(link => link.addEventListener('click',()=>{
    const nav = document.querySelector('.nav');
    nav.classList.remove('active');
     openNav.src = './image/imagefolder/cil--menu.png';
}));