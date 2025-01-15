const resetButton = document.getElementById("reset-button")


const inputs = document.body.getElementsByClassName("input")

function resetInputs() {
    Array.from(inputs).forEach(input => {
        input.value = input.defaultValue;
        // setting input event 
        const inputEvent = new Event('input', { bubbles: true }); 
        input.dispatchEvent(inputEvent); 
       
    })
}


function showMessage() {
    const resetMessage = document.getElementsByClassName("reset-message")[0];
    resetMessage.style.visibility = "visible"; 

    setTimeout(() => {
        resetMessage.style.visibility = "hidden"; 
    }, 2000);
}


resetButton.addEventListener("click", resetInputs)
resetButton.addEventListener('click', showMessage)