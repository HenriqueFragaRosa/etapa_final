document.getElementById('add-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value.replace(/\D/g, ''); 

    if (name && phone) {
        
        if (phone.length === 11) { 
            const contactList = document.getElementById('contact-list');

            const whatsappLink = `https://wa.me/55${phone}`; 
            const formattedPhoneNumber = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`; 

            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${whatsappLink}" target="_blank" rel="noopener noreferrer">${name} - ${formattedPhoneNumber}</a>`;

            contactList.appendChild(listItem);

            
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
        } else {
            alert('Por favor, insira um número de celular válido (11 dígitos).');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


document.getElementById('phone').addEventListener('input', function() {
    let input = this.value.replace(/\D/g, ''); 
    this.value = formatPhoneNumber(input); 
});


function formatPhoneNumber(input) {
    let formatted = '';
    if (input.length > 0) {
        formatted += '(' + input.slice(0, 2) + ') '; 
    }
    if (input.length > 2) {
        formatted += input[2] + ' '; 
    }
    if (input.length > 3) {
        formatted += input.slice(3, 8); 
    }
    if (input.length >= 8) {
        formatted += '-' + input.slice(8); 
    }
    return formatted;
};


document.getElementById('phone').addEventListener('keydown', function(e) {
    const key = e.key;
    const isBackspaceOrDelete = key === 'Backspace' || key === 'Delete';

    if (isBackspaceOrDelete) {
        const cursorPosition = this.selectionStart;
        setTimeout(() => {
            const inputValue = this.value.replace(/\D/g, '');
            this.value = formatPhoneNumber(inputValue);
            this.setSelectionRange(cursorPosition, cursorPosition);
        }, 0);
    }
});
