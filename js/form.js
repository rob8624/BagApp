const orderButtons = document.body.getElementsByClassName("order-btn");
const orderForm = document.getElementById('form-container');
let showForm = false;

// Reusable function to disable/enable buttons and inputs
const toggleElementsState = (disable = true) => {
    Array.from(orderButtons).forEach(btn => {
        btn.disabled = disable;
    });
    const inputs = Array.from(document.getElementsByClassName("input"));
    inputs.forEach(input => {
        input.disabled = disable;
    });
};

// Reusable function to handle the form visibility toggling
const toggleFormVisibility = (show) => {
    if (show) {
        orderForm.classList.add('visible'); // Add 'visible' class to show the form
    } else {
        orderForm.classList.remove('visible'); // Remove 'visible' class to hide the form
    }
};

// Function to handle the click event and close the form if necessary
const closeFormOnBodyClick = () => {
    const body = document.body;

    const handleClick = (e) => {
        // Check if the click is outside the form
        if (!orderForm.contains(e.target) && showForm) {
            toggleFormVisibility(false);  // Hide the form
            toggleElementsState(false);   // Re-enable the buttons and inputs
            body.removeEventListener('click', handleClick);  // Clean up event listener
            showForm = false;  // Update showForm state to reflect the form is hidden
        }
    };

    // Add the event listener to the body to detect outside clicks
    body.addEventListener('click', handleClick);
};

// Function to show or hide the form when the order button is clicked
const showOrderForm = (e) => {
    // Prevent the click on the order button from propagating to the body
    e.stopPropagation(); // Prevent click from bubbling up to the body
    showForm = !showForm;
    toggleFormVisibility(showForm);

    if (showForm) {
        toggleElementsState(true); // Disable buttons and inputs when form is shown
        closeFormOnBodyClick(); // Attach body click listener to close form
    } else {
        toggleElementsState(false); // Re-enable buttons and inputs when form is hidden
    }
};

window.addEventListener("load", () => {
    // Add event listener to each order button
    Array.from(orderButtons).forEach(btn => {
        btn.addEventListener("click", showOrderForm);
    });
});