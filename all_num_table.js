
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('numberTable');
    const size = 10; 

    const tbody = document.createElement('tbody');

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
});