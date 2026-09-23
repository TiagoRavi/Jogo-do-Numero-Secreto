const numeroLimite = 10;

const numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1;
console.log(numeroSecreto);

const campoPalpite = document.querySelector('#palpite');
console.log(campoPalpite.value);

const botaoChutar = document.querySelector('#btn-chutar');

botaoChutar.addEventListener('click', () => {
    console.log(campoPalpite.value);
});
