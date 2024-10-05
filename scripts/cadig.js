document.getElementById('add-btn').addEventListener('click', function() {
    const companyName = document.getElementById('company-name').value;
    const website = document.getElementById('website').value;
    const instagram = document.getElementById('instagram').value;

    if (companyName && website && instagram) {
        const companyList = document.getElementById('company-list');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${companyName}</strong> - <a href="${website}" target="_blank" rel="noopener noreferrer">Site</a> | <a href="${instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>`;

        companyList.appendChild(listItem);

        document.getElementById('company-name').value = '';
        document.getElementById('website').value = '';
        document.getElementById('instagram').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
