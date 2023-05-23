/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
// testing load file
console.log('javascript loaded !');

const form = document.querySelector('.PF2');
const checking = document.querySelector('.checkk');

async function getPassword() {
  const res = await fetch('/generate-password');
  const data = await res.json();
  const convert = JSON.stringify(data.random_password);
  console.log(data.random_password);
  document.querySelector('.PF').textContent = convert;
};

document.querySelector('#getPas').addEventListener('click', () => {
  getPassword();
});

function generate() {
  form.classList.add('active');
}

function copy(containerid) {
  checking.classList.add('active');
  const txt = document.querySelector('.PF2').innerText;
  console.log(txt);
  if (document.selection) {
    const range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand('copy');
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand('copy');
  }
  window.getSelection().removeAllRanges();
  setTimeout(function() {
    checking.classList.remove('active');
  }, 2000);
}
