const orderButtons = document.body.getElementsByClassName("order-btn")
const orderForm = document.getElementById('order-form')
showForm = false


function showOrderForm(e) {
   typeOfOrderParent = e.target.closest("label") //gets the bag button paternt label
   typeOfOrder = typeOfOrderParent.querySelector('.bags-title'); //gets the title of which bag btn was cliked
   showForm = !showForm
   showForm ? orderForm.style.visibility = "visible" : orderForm.style.visibility = "hidden" 

    disableButton = () => {
       Array.from(orderButtons).forEach(btn => {
        btn.disabled = true
        const input = Array.from(document.getElementsByClassName("input"))
        input.forEach(input => input.disabled = true)
       }) 
    }

    showForm ? disableButton() : ""

}


window.addEventListener("load", () => {
    Array.from(orderButtons).forEach(btn => {
        btn.addEventListener("click", showOrderForm)
        
    })
})
