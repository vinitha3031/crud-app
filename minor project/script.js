document.getElementById('crudForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addData();
});

function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const table = document.getElementById('crudTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = `<button class="edit" onclick="editData(this)">Edit</button> <button class="delete" onclick="deleteData(this)">Delete</button>`;

        document.getElementById('crudForm').reset();
    }
}

function editData(button) {
    const row = button.parentNode.parentNode;
    document.getElementById('name').value = row.cells[0].innerHTML;
    document.getElementById('email').value = row.cells[1].innerHTML;
    row.parentNode.removeChild(row);
}

function deleteData(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

