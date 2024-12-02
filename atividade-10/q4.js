const mainTitle = document.querySelector('#main-title');
console.log(mainTitle.textContent);

const homeButton = document.querySelector('#btn-home');
homeButton.textContent = "Bem-vindo!";

const navMenu = document.querySelector('#menu');
const newMenuItem = document.createElement('li');
newMenuItem.innerHTML = '<a href="#blog">Blog</a>';
navMenu.appendChild(newMenuItem);

const teamList = document.querySelector('.team');
teamList.removeChild(teamList.firstElementChild);

const servicesParagraph = document.querySelector('#services .services');
servicesParagraph.classList.add('highlight');

const navLinks = document.querySelectorAll('#menu a');
navLinks.forEach(link => link.setAttribute('target', '_blank'));

const servicesSection = document.querySelector('#services');
const promoMessage = document.createElement('p');
promoMessage.textContent = "Promoção: 50% de desconto!";
servicesSection.insertBefore(promoMessage, servicesSection.querySelector('ul'));

const aboutSection = document.querySelector('#about');
const aboutParagraph = aboutSection.querySelector('p');
aboutSection.appendChild(aboutParagraph);
