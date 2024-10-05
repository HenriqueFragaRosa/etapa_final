function calcularFinanciamento() {
    const valorBem = parseFloat(document.getElementById("valorBem").value);
    const prazo = parseInt(document.getElementById("prazo").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value) / 100;

    if (isNaN(valorBem) || isNaN(prazo) || isNaN(taxaJuros)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Fórmula para cálculo de financiamento com juros compostos
    const parcelaMensal = valorBem * (taxaJuros * Math.pow(1 + taxaJuros, prazo)) / (Math.pow(1 + taxaJuros, prazo) - 1);
    console.log(parcelaMensal);
    document.getElementById("parcela").textContent = "R$ " + parcelaMensal.toFixed(2);
}