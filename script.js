const botaoEntrar = document.getElementsByClassName('entrar-btn')[0];
const email = document.getElementsByName('email')[0];
const senha = document.getElementsByName('password')[0];
const botaoEnviar = document.getElementById('submit-btn');
const checar = document.getElementById('agreement');
const contador = document.getElementById('counter');
const texto = document.getElementById('textarea');
// const main = document.getElementsByTagName('main');
// const form = document.getElementById('evaluation-form');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', login);
botaoEnviar.disabled = true;

function check() {
  if (checar.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checar.addEventListener('click', check);

function contandoCaracteres() {
  const caracteres = texto.value.length;
  const max = 500;
  const sobra = max - caracteres;
  contador.innerText = sobra;
}

texto.addEventListener('keyup', contandoCaracteres);

let learn, family, house, rate;

const learnCheck = [];
const eraseForm = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const userEmail = document.getElementById('input-email');

function checkSelection() {
  family = document.querySelector('input[name=family]:checked').value;
  learn = document.getElementsByClassName('subject');
  rate = document.querySelector('input[name=rate]:checked').value;
  house = document.getElementById('house').value;

  for (let i = 0; i < learn.length; i += 1) {
    if (learn[i].checked) {
      learnCheck.push(` ${learn[i].value}`);
    }
  }
}

botaoEnviar.addEventListener('click', () => {
  checkSelection();
  eraseForm.style.display = 'none';
  const formulario = document.createElement('form');
  const formInfos = document.querySelector('main');
  formInfos.appendChild(formulario);
  formulario.setAttribute('id', 'form-data');
  const newForm = document.getElementById('form-data');
  newForm.innerHTML = `Nome: ${firstName.value} ${lastName.value}`;
  newForm.innerHTML += `<br> Email: ${userEmail.value}`;
  newForm.innerHTML += `<br> Casa: ${house}`;
  newForm.innerHTML += `<br> Família: ${family}`;
  newForm.innerHTML += `<br> Matérias:${learnCheck}`;
  newForm.innerHTML += `<br> Avaliação: ${rate}`;
  newForm.innerHTML += `<br> Observações: ${texto.value}`;
  event.preventDefault();
});
