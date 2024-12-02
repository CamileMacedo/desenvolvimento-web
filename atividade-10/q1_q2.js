//Q1

const body = document.body;
const div = document.createElement('div');
const h2 = document.createElement('h2');
const ul = document.createElement('ul');
const items = ['item1', 'item2', 'item3'];

h2.textContent = "Lista de Itens";

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

div.appendChild(h2);
div.appendChild(ul);
body.appendChild(div);


//Q2
const item1 = document.querySelector('ul > li');
console.log(item1.textContent);

const menuItems = document.querySelectorAll('ul > li');
menuItems.forEach(child => console.log(child.textContent));
