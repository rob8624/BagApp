const buttons = document.getElementsByClassName("order-btn")
//this returns a collection of buttons
const form = document.getElementById("form-container")
body = document.body;

var formVisible = false
var buttonState = true
var inputState = true


//fucntion to open form 



function showForm(event){
   event.stopPropagation();
   form.classList.toggle('visible');
   formVisible = !formVisible
}

function bodyCloseForm(event) {
    
    if (formVisible) {
        if (!form.contains(event.target)) {
            form.classList.toggle('visible')
            formVisible = !formVisible
        }
    }
}


window.addEventListener('load', () => {
    Array.from(buttons).forEach((btn) => {
        btn.addEventListener("click", (e) => showForm(e))
    })
        body.addEventListener('click', (e) => bodyCloseForm(e))
})






