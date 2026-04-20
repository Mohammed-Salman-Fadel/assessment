const data = {
  A1: 41,
  A2: 18,
  A3: 21,
  A4: 63,
  A5: 2,
  A6: 53,
  A7: 5,
  A8: 57,
  A9: 60,
  A10: 93,
  A11: 28,
  A12: 3,
  A13: 90,
  A14: 39,
  A15: 80,
  A16: 88,
  A17: 49,
  A18: 60,
  A19: 26,
  A20: 28,
};

const table1Body = document.querySelector("#table-1 tbody");
const table2Body = document.querySelector("#table-2 tbody");

// Avoids repetition and this approach will allow me to use the values to calculate for table 2.
for (const key in data) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${key}</td>
      <td>${data[key]}</td>
    `;
  table1Body.appendChild(row);
}

const results = {
  Alpha: data.A5 + data.A20,
  Beta: data.A15 / data.A7,
  Charlie: data.A13 * data.A12,
};

for (const category in results) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${category}</td>
      <td>${results[category]}</td>
    `;
  table2Body.appendChild(row);
}
