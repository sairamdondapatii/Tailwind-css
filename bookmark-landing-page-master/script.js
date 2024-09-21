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


let tab1 = document.getElementById('tab-1');
let tab2 = document.getElementById('tab-2');
let tab3 = document.getElementById('tab-3');
let panel1 = document.getElementById('panel-1');
let panel2 = document.getElementById('panel-2');
let panel3 = document.getElementById('panel-3');

tab1.onclick =()=>{
    tab1.classList.add('tab-active')
    tab2.classList.remove('tab-active');
    tab3.classList.remove('tab-active');
    panel1.classList.remove('hidden');
    panel2.classList.add('hidden')
    panel2.classList.remove('flex')
    panel3.classList.add('hidden');
    panel3.classList.remove('flex');
}

tab2.onclick =()=>{
    tab1.classList.remove('tab-active')
    tab2.classList.add('tab-active');
    tab3.classList.remove('tab-active');
    panel1.classList.add('hidden');
    panel2.classList.remove('hidden')
    panel2.classList.add('flex')
    panel3.classList.add('hidden');
    panel3.classList.remove('flex');
}

tab3.onclick =()=>{
    tab1.classList.remove('tab-active');
    tab2.classList.remove('tab-active');
    tab3.classList.add('tab-active');
    panel1.classList.add('hidden');
    panel2.classList.add('hidden');
    panel2.classList.remove('flex');
    panel3.classList.add('flex');
    panel3.classList.remove('hidden');
}


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