const form = document.getElementById('personForm');
const tableBody = document.querySelector('#peopleTable tbody');
const averageHeightSpan = document.getElementById('averageHeight');
const averageWeightSpan = document.getElementById('averageWeight');

let people = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (name && height && weight) {
        addPersonToTable(name, height, weight);
        calculateAverages();
        form.reset(); // Limpa o formulário após a inclusão
    }
});

function addPersonToTable(name, height, weight) {
    const row = document.createElement('tr');
    const personIndex = people.length;

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const heightCell = document.createElement('td');
    heightCell.textContent = height;
    row.appendChild(heightCell);

    const weightCell = document.createElement('td');
    weightCell.textContent = weight;
    row.appendChild(weightCell);

    // Criar célula para o botão de exclusão
    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        deletePerson(personIndex); // Função para excluir pessoa
    });
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
    
    // Adiciona a pessoa à lista
    people.push({ name, height, weight });
}

function deletePerson(index) {
    people.splice(index, 1); // Remove a pessoa da lista de pessoas
    updateTable();           // Atualiza a tabela com as pessoas restantes
    calculateAverages();     // Recalcula as médias
}

function updateTable() {
    tableBody.innerHTML = ''; // Limpa a tabela

    people.forEach((person, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        const heightCell = document.createElement('td');
        heightCell.textContent = person.height;
        row.appendChild(heightCell);

        const weightCell = document.createElement('td');
        weightCell.textContent = person.weight;
        row.appendChild(weightCell);

        // Adiciona novamente o botão de excluir
        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            deletePerson(index); // Atualiza a função para o índice correto
        });
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

function calculateAverages() {
    if (people.length === 0) {
        averageHeightSpan.textContent = 0;
        averageWeightSpan.textContent = 0;
        return;
    }

    const totalHeight = people.reduce((sum, person) => sum + person.height, 0);
    const totalWeight = people.reduce((sum, person) => sum + person.weight, 0);

    const averageHeight = (totalHeight / people.length).toFixed(2);
    const averageWeight = (totalWeight / people.length).toFixed(2);

    averageHeightSpan.textContent = averageHeight;
    averageWeightSpan.textContent = averageWeight;
}
