document.getElementById('generateBtn').addEventListener('click', function() {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = ''; // Limpa números antigos

    const numbers = generateRandomNumbers(6, 1, 60);
    numbers.forEach(num => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = num;
        numbersContainer.appendChild(numberDiv);
    });
});

function generateRandomNumbers(quantity, min, max) {
    const numbers = new Set();
    while (numbers.size < quantity) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}
