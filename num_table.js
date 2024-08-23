
function generateTable() {
    var num = document.getElementById('numberInput').value;
    var table = document.getElementById('table');
   
    table.innerHTML = '';

    for (var i = 1; i <= 10; i++) {
        var row = document.createElement('tr');

        var cell1 = document.createElement('td');
        cell1.textContent = num + ' x ' + i;
        row.appendChild(cell1);

        var cell2 = document.createElement('td');
        cell2.textContent = num * i;
        row.appendChild(cell2);

        table.appendChild(row);
    }
}