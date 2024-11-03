function showTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        content.style.display = "none";
    });

    // Remove "active" class from all tab buttons
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Show the current tab content and set the clicked tab button to active
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tab1").style.display = "block";
});
