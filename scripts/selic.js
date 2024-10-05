document.getElementById('calculate-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const duration = parseInt(document.getElementById('duration').value);
    const selicRate = parseFloat(document.getElementById('selic-rate').value);

    if (amount > 0 && duration > 0 && selicRate > 0) {
       
        const totalAmount = amount * Math.pow(1 + (selicRate / 100), duration / 12);
        const profit = totalAmount - amount;

        document.getElementById('result').innerText = `Rendimento Total: R$ ${profit.toFixed(2)}\nValor Final: R$ ${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
    }
});
