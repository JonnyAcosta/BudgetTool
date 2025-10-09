const itemNameInput = document.getElementById('itemName');
const itemPriceInput = document.getElementById('itemPrice');
const addButton = document.getElementById('addButton');
const budgetList = document.getElementById('budgetList');
const totalAmount = document.getElementById('totalAmount');

let total = 0;

addButton.addEventListener('click', () => {
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);

    if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter a valid item and price.');
        return;
    }

    // Create table row
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const priceCell = document.createElement('td');
    priceCell.textContent = price.toFixed(2);

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        budgetList.removeChild(row);
        total -= price;
        updateTotal();
    });

    actionCell.appendChild(deleteBtn);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(actionCell);

    budgetList.appendChild(row);

    total += price;
    updateTotal();

    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemNameInput.focus();
});

function updateTotal() {
    totalAmount.textContent = total.toFixed(2);
}
