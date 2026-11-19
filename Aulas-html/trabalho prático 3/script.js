//passo 1
console.log('Olá Mundo!');
//passo 2
const cabeçalho = document.querySelector('header')
console.log(cabeçalho);
//passo 3
const btnTema = document.querySelector('#btn-tema');
//passo 4
const boasVindas = document.querySelector('#boasVindas')
//passo 5
const tituloSite = document.querySelector('header h1');
//passo 6
const listaBeneficios = document.querySelectorAll('ol li')
console.log(listaBeneficios.length);
//passo 7
const campoNome = document.querySelector('input[type="text"]').value = 'Sobrevivente Anônimo';
const campoEmail = document.querySelector('input[type="email"]');
//passo 8
tituloSite.textContent = "The Walking Date"
//passo 9
document.querySelector('cite').innerHTML = "-<strong>Zezinho da foice</strong>, Sobrevivente nivel 5"
//passo 10
const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
console.log(textoBoasVindas);
aside = document.querySelector('aside').style.fontSize = '1.1rem';
img = document.querySelector('img').getAttribute('alt', 'casal de Zumbis apaixonado caminhando pelo por do sol');


