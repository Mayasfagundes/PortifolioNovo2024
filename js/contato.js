const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', function () {
    animeScroll();
  });
}


const myObserver = new IntersectionObserver ( (entries) =>{
entries.forEach( (entry) =>{
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  } else {
    entry.target.classList.remove('show')
  }
  
})

})

const elements = document.querySelectorAll('.hidden')

elements.forEach ( (element) => myObserver.observe(element))

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggleSwitch');

  toggleSwitch.addEventListener('change', function () {
    const body = document.body;
    const pretoTextElements = document.querySelectorAll('.preto');
    const Tcor1TextElements = document.querySelectorAll('.Tcor1');
    const Transicao1 = document.querySelectorAll('.Transiçãocor1');
    const Transicao2 = document.querySelectorAll('.Transiçãocor2');



    body.style.backgroundColor = this.checked ? '#D9D9D9' : '#333333';

    pretoTextElements.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? 'black' : 'white' ;
    });

    Tcor1TextElements.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? '#3A3757' : '#AFA5FC';
    });

    Transicao1.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? '#3A3757' : '#AFA5FC';
    });

    Transicao2.forEach(function (element) {
      element.style.color = toggleSwitch.checked ? '#3A3757' : '#A3C4FF';
    });
  });
});


// Função para alternar entre duas imagens quando clicada

function trocarImagem() {
  var imagem = document.getElementById("imagem");
  if (imagem.src.includes("homeArt1.svg")) {
    imagem.src = "./img/homeArt2.svg"; 
  } else {
    imagem.src = "./img/homeArt1.svg"; 
  }
}

//Cabeçalho

document.addEventListener('DOMContentLoaded', () => {
  const menuHamburguer = document.getElementById('menuHamburguer');
  const menuItemsMobile = document.getElementById('menuItemsMobile');

  menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('menu-open');
    menuItemsMobile.classList.toggle('menu-open');
  });
});


