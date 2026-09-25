// ==============================
// ESTADO INICIAL DO JOGO
// ==============================

// Define o maior número possível do jogo.
const numeroLimite = 10;

// Gera o número secreto entre 1 e 10.
const numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1;

console.log(numeroSecreto);


// ==============================
// ELEMENTOS DA INTERFACE
// ==============================

// Localiza o campo onde o jogador digita o palpite.
const campoPalpite = document.querySelector('#palpite');

console.log(campoPalpite.value);

// Localiza o botão "Chutar".
const botaoChutar = document.querySelector('#btn-chutar');


// ==============================
// EVENTO DO BOTÃO
// ==============================

// Executa esta função quando o jogador clicar em "Chutar".
botaoChutar.addEventListener('click', () => {

    // O valor de um input vem como string.
    // Number() transforma o valor digitado em número.
    const palpite = Number(campoPalpite.value);

    console.log(campoPalpite.value);


    // Verifica se o palpite é exatamente igual ao número secreto.
    if (palpite === numeroSecreto) {
        console.log('Acertou');
    } else if (palpite > numeroSecreto) {
        console.log('O número secreto é menor');
    } else {
        console.log('O número secreto é maior')
    }

});