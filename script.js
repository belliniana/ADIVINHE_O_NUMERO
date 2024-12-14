let randomNumber = Math.floor(Math.random() * 10); // Número aleatório entre 0 e 9
let attempts = 0;
const maxAttempts = 3;

function makeGuess(num) {
    attempts++;
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    if (attempts > maxAttempts) {
        messageElement.innerText = `Você já usou todas as suas tentativas! O número era ${randomNumber}.`;
        return;
    }

    if (num === randomNumber) {
        messageElement.innerText = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas!`;
    } else if (num < randomNumber) {
        messageElement.innerText = 'Muito baixo! Tente novamente.';
    } else {
        messageElement.innerText = 'Muito alto! Tente novamente.';
    }

    attemptsElement.innerText = `Tentativas feitas: ${attempts} / ${maxAttempts}`;

    if (attempts === maxAttempts) {
        messageElement.innerText += ` Você não conseguiu adivinhar o número. O número era ${randomNumber}.`;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10);
    attempts = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('attempts').innerText = `Tentativas feitas: 0 / ${maxAttempts}`;
}