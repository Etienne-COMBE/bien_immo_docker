
var columns = ["Ville", "Moyenne", "Ecart-type"];
var data = [
    ["Annecy", "23", "33"],
    ["Arles", "12", "14"],
    ["Clermont-Ferrand", "3", "10"]
];

var number = 134;
var std = 234;

var record_number = document.getElementById("record_number");
record_number.append(number);

var record_std = document.getElementById("record_std");
record_std.append(std.toFixed(2));

var table = document.getElementById("results")
var thead = document.createElement("thead")
thead.className = "columns"
for (var i = 0; i < columns.length; i++){
    var th = document.createElement("th")
    th.className = "col"
    th.append(columns[i])
    thead.appendChild(th)
}
table.appendChild(thead)
for (var row = 0; row < data.length; row++){
    var tr = document.createElement("tr")
    tr.className = "row"
    for (var column = 0; column < data[row].length; column++){
        var td = document.createElement("td")
        td.className="cell"
        var value = data[row][column]
        td.append(value)
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
