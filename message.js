const openNav = document.querySelector('.open-nav');
    openNav.addEventListener('click',()=>{
        const nav = document.querySelector('.nav');
            nav.classList.toggle('active');
            if(nav.classList.contains('active')){
                openNav.src = './image/imagefolder/bx--x.png';
            }else{
                openNav.src = './image/imagefolder/cil--menu.png'
            };
    });

const link = document.querySelectorAll('.link');
        link.forEach(link => link.addEventListener('click',()=>{
            const nav = document.querySelector('.nav');
            nav.classList.remove('active')
            openNav.src = './image/imagefolder/cil--menu.png';
    }));