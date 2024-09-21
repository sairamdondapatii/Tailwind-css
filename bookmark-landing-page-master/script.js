let menu = document.querySelector('#menu');
let navLinks = document.querySelector('#nav-links');
let icon = document.querySelector('#icon');
let lgLogo = document.getElementById('lg-logo');
let smLogo = document.getElementById('sm-logo');

menu.onclick=()=>{
    changeIcon()
    navLinks.classList.toggle('menu-active');
    navLinks.onclick =()=>{
        changeIcon()
        navLinks.classList.remove('menu-active');
    }
};

function changeIcon(){
    if(menu.innerText=='menu'){
        menu.innerText = 'close';
        menu.classList.add('text-white')
        lgLogo.classList.add('hidden')
        smLogo.classList.remove('hidden')
    }else {
        menu.innerText ='menu';
        menu.classList.remove('text-white')
        lgLogo.classList.remove('hidden')
        smLogo.classList.add('hidden')
    }
}

let tabs  = document.querySelectorAll('.tab');
let panels = document.querySelectorAll('.panel');


tabs.forEach((tab)=>{tab.addEventListener('click',changeTab)});


function changeTab(e){
   tabs.forEach((tab)=>{
    tab.classList.remove('border-b-4', 'border-softRed', 'text-veryDarkBlue');
   });
   panels.forEach((panel)=>{
    panel.classList.add('hidden');
   });
   e.target.classList.add('border-b-4', 'border-softRed', 'text-veryDarkBlue');
   const classString = e.target.getAttribute('data-target');
   document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
   document.getElementById('panels').getElementsByClassName(classString)[0].classList.add('flex');

};


let faq = document.querySelectorAll('.faq');
// console.log(faq);
faq.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        update(ele)
    })
});
function update(ele){
    ele.classList.toggle('active');
}