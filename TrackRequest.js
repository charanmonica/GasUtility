// Example data for requests
const requests = [
    {
      id: 1,
      requestName: "Replace Gas",
      submitted: "2024-11-30 10:30:00",
      resolved: "",
      status: "Pending",
    },
    {
      id: 2,
      requestName: "Repair Leak",
      submitted: "2024-11-29 15:45:00",
      resolved: "2024-11-30 14:00:00",
      status: "Completed",
    },
  ];
  
  // Function to render the table
  const renderTable = () => {
    const tableBody = document.getElementById("requestTableBody");
    const totalRequests = document.getElementById("totalRequests");
    const completedRequests = document.getElementById("completedRequests");
    const pendingRequests = document.getElementById("pendingRequests");
  
    tableBody.innerHTML = ""; // Clear the table body
    let completedCount = 0;
    let pendingCount = 0;
  
    requests.forEach((request, index) => {
      if (request.status === "Completed") completedCount++;
      if (request.status === "Pending") pendingCount++;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${request.requestName}</td>
        <td>${request.submitted}</td>
        <td>${request.resolved || "N/A"}</td>
        <td>
          <button class="btn btn-${request.status === "Pending" ? "warning" : "success"} btn-sm btn-status">
            ${request.status}
          </button>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="editRequest(${request.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteRequest(${request.id})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  
    totalRequests.textContent = requests.length;
    completedRequests.textContent = completedCount;
    pendingRequests.textContent = pendingCount;
  };
  
  // Function to delete a request
  const deleteRequest = (id) => {
    const index = requests.findIndex((req) => req.id === id);
    if (index > -1) {
      requests.splice(index, 1);
      renderTable();
      alert("Request deleted successfully.");
    }
  };
  
  // Function to edit a request
  const editRequest = (id) => {
    const request = requests.find((req) => req.id === id);
    if (request) {
      const newName = prompt("Enter new request name:", request.requestName);
      if (newName) {
        request.requestName = newName;
        renderTable();
        alert("Request updated successfully.");
      }
    }
  };
  
  // Logout button functionality
  document.getElementById("logoutBtn").addEventListener("click", () => {
    alert("You have been logged out.");
    window.location.href = "accessloginPage.html"; // Redirect to login page
  });
  
  // Submit Request button functionality
  document.getElementById("submitRequestBtn").addEventListener("click", () => {
    window.location.href = "Queryrequest.html"; // Redirect to Submit Request page
  });
  
  // Initial render
  renderTable();
  