// Function to open the modal
document.getElementById("openModalBtn").addEventListener("click", () => {
    const myModal = new bootstrap.Modal(document.getElementById('submitRequestModal'));
    myModal.show();
    populateSubCategories(); // Ensure subcategories are populated when modal opens
});

// Function to update subcategories (now generalized for all subcategories)
function populateSubCategories() {
    const subCategoryDropdown = document.getElementById("subcategory");

    // General list of subcategories
    const subCategories = [
        "Payment Not Processed",
        "Overcharged",
        "Invoice Request",
        "New Connection",
        "Service Upgrade",
        "Service Termination",
        "Faulty Meter",
        "Meter Reading Issue",
        "New Meter Installation",
        "Power Outage",
        "Partial Outage",
        "Scheduled Maintenance",
        "Website Feedback",
        "Service Feedback",
        "Product Feedback"
    ];

    // Clear previous subcategory options
    subCategoryDropdown.innerHTML = '<option value="" disabled selected>Select Subcategory</option>';

    // Populate the subcategory dropdown with all options
    subCategories.forEach(subCategory => {
        const option = document.createElement("option");
        option.value = subCategory;
        option.textContent = subCategory;
        subCategoryDropdown.appendChild(option);
    });
}

// Handle form submission
document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display a success message
    alert("Request submitted successfully!");

    // Hide the modal (Bootstrap 5 requires this)
    const myModal = bootstrap.Modal.getInstance(document.getElementById("submitRequestModal"));
    myModal.hide();

    // Redirect to the third page
    window.location.href = "ThirdtrackRequest.html"; // Ensure the filename and path are correct
});
