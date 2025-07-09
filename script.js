const rawData = [
    { index: "A1", value: 41 },
    { index: "A2", value: 18 },
    { index: "A3", value: 21 },
    { index: "A4", value: 63 },
    { index: "A5", value: 2 },
    { index: "A6", value: 53 },
    { index: "A7", value: 5 },
    { index: "A8", value: 57 },
    { index: "A9", value: 60 },
    { index: "A10", value: 93 },
    { index: "A11", value: 28 },
    { index: "A12", value: 3 },
    { index: "A13", value: 90 },
    { index: "A14", value: 39 },
    { index: "A15", value: 80 },
    { index: "A16", value: 88 },
    { index: "A17", value: 49 },
    { index: "A18", value: 60 },
    { index: "A19", value: 26 },
    { index: "A20", value: 28 },
];

const table1 = document.getElementById("table1").getElementsByTagName("tbody")[0];
rawData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.index}</td><td>${row.value}</td>`;
    table1.appendChild(tr);
});

const alpha = rawData[4].value + rawData[19].value;
const Beta = rawData[14].value / rawData[6].value;
const Charlie = rawData[12].value * rawData[11].value;

const table2 = document.getElementById("table2").getElementsByTagName("tbody")[0];
const resultRow = [
    { index: "Alpha", value: alpha },
    { index: "Beta", value: Beta },
    { index: "Charlie", value: Charlie }
];

resultRow.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.index}</td><td>${row.value}</td>`;
    table2.appendChild(tr);
});