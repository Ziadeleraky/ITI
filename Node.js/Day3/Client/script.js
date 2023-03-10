const getClientsData = async () => {
  const res = await fetch("./clients.json");
  const data = await res.json();
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = ``;
  data.forEach((client) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.mobile}</td>
      <td>${client.address}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("table").style.display = "block";
};

document.getElementById("btn").addEventListener("click", getClientsData);
