const element = document.querySelector('#button');

element.addEventListener('click', (event) => {
    alert("Hello World")
  })


const element2 = document.querySelector('#buttonadd');
const body = document.querySelector('body');

element2.addEventListener('click', (event) => {
    body.innerHTML += `<p> Kurs ALX wiele mnie uczy </p>`;
  })
