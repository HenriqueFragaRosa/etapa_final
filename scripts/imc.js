document.getElementById('calculate-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        const imc = (weight / (height * height)).toFixed(2);
        let category = '';

        if (imc < 18.5) {
            category = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            category = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            category = 'Sobrepeso';
        } else {
            category = 'Obesidade';
        }

        document.getElementById('result').innerText = `Seu IMC é ${imc}. Classificação: ${category}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
    }
});
