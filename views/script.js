document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("leaveTable");
  if (table) {
    fetch("/leaves")
      .then(res => res.json())
      .then(data => {
        data.forEach(leave => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${leave.employee ? leave.employee.name : "Unknown"}</td>
            <td>${new Date(leave.start_date).toLocaleDateString()}</td>
            <td>${new Date(leave.end_date).toLocaleDateString()}</td>
            <td>${leave.reason}</td>
            <td>${leave.status}</td>
          `;
          table.appendChild(row);
        });
      });
  }
});
