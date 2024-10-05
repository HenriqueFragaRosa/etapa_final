document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const baseSalary = parseFloat(document.getElementById('baseSalary').value) || 0;
    const hoursExtras = parseFloat(document.getElementById('hoursExtras').value) || 0;
    const insalubridade = parseFloat(document.getElementById('insalubridade').value) || 0;
    const periculosidade = parseFloat(document.getElementById('periculosidade').value) || 0;
    const inss = parseFloat(document.getElementById('inss').value) || 0;
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;
    const vt = parseFloat(document.getElementById('vt').value) || 0;

    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

    const newRow = employeeTable.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${baseSalary.toFixed(2)}</td>
        <td>${hoursExtras.toFixed(2)}</td>
        <td>${insalubridade.toFixed(2)}</td>
        <td>${periculosidade.toFixed(2)}</td>
        <td>${inss.toFixed(2)}</td>
        <td>${irpf.toFixed(2)}</td>
        <td>${vt.toFixed(2)}</td>
        <td><button onclick="deleteRow(this)">Excluir</button></td>
    `;

    calculateTotals();

    // Limpa os campos após adicionar
    document.getElementById('employeeForm').reset();
});

function deleteRow(button) {
    // Remove a linha da tabela
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calculateTotals();
}

function calculateTotals() {
    const employeeTable = document.getElementById('employeeTable');
    const rows = employeeTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    let totalBaseSalary = 0;
    let totalHE = 0;
    let totalInsalubridade = 0;
    let totalPericulosidade = 0;
    let totalINSS = 0;
    let totalIRPF = 0;
    let totalVT = 0;

    for (const row of rows) {
        totalBaseSalary += parseFloat(row.cells[1].innerText) || 0;
        totalHE += parseFloat(row.cells[2].innerText) || 0;
        totalInsalubridade += parseFloat(row.cells[3].innerText) || 0; // Atualizando o índice para Insalubridade
        totalPericulosidade += parseFloat(row.cells[4].innerText) || 0; // Atualizando o índice para Periculosidade
        totalINSS += parseFloat(row.cells[5].innerText) || 0;
        totalIRPF += parseFloat(row.cells[6].innerText) || 0;
        totalVT += parseFloat(row.cells[7].innerText) || 0;
    }

    document.getElementById('totalBaseSalary').innerText = totalBaseSalary.toFixed(2);
    document.getElementById('totalHE').innerText = totalHE.toFixed(2);
    document.getElementById('totalInsalubridade').innerText = totalInsalubridade.toFixed(2);
    document.getElementById('totalPericulosidade').innerText = totalPericulosidade.toFixed(2);
    document.getElementById('totalINSS').innerText = totalINSS.toFixed(2);
    document.getElementById('totalIRPF').innerText = totalIRPF.toFixed(2);
    document.getElementById('totalVT').innerText = totalVT.toFixed(2);
}
