function setMaxGreenBagValue(bag) {
    const bagInput = document.getElementById(bag);
    if (!bagInput) {
        console.error(`Element with id ${bag} not found.`);
        return;
    }

    const maxValue = bagInput.max;
    
    const greenBagsText = document.getElementById(`${bag}-bags-text`);
    if (greenBagsText) {
        greenBagsText.textContent += ` - Max: ${maxValue}`;
    } else {
        console.error(`Element with id ${bag}-bags-text not found.`);
    }
}

const bags = ["green", "food", "pink", "garden"];
const stockValue = document.getElementsByClassName("stock-value");



window.addEventListener("load", () => {
    bags.forEach(bag => {
        setMaxGreenBagValue(bag);
    });

    const originalStockText = document.querySelector('.stock-status').textContent

Array.from(stockValue).forEach(elem => {
        const label = elem.closest('label');
        const input = label.querySelector('.input');
        const parentDiv = elem.parentElement;
        const stockStatus = parentDiv.querySelector('.stock-status');
        const originalStockText = stockStatus ? stockStatus.textContent : '';
        
        
        
        // Set initial stock-level value based on the input
        if (input) {
            elem.textContent = input.value;
        }

        // Add event listener for input changes
       if (input) {
            const initialValue = input.value;
            const parentDiv = elem.parentElement;
            const stockStatus = parentDiv.querySelector('.stock-status');
            const orderBtn = parentDiv.querySelector('.order-btn')
           

            input.addEventListener('input', () => {
                elem.textContent = input.value;
                
            stockStatus.style.visibility = "visible";
        
            const isHalfStock = input.value < initialValue / 2;
            const isLowStock = input.value < initialValue / 3;
            const orderValue = input.value <= (20 / 100 * initialValue);  // percentage logic for input value.
            const outOfStock = input.value == 0
            
           // Set stock status text based on the conditions
            if (outOfStock) {
                stockStatus.textContent = "OUT OF STOCK";
                stockStatus.style.color = "gray"; // Gray for OUT OF STOCK
            } else if (isLowStock) {
                stockStatus.textContent = "LOW STOCK";
                stockStatus.style.color = "red"; // Red for LOW STOCK
            } else if (isHalfStock) {
                stockStatus.textContent = "Half Left";
                stockStatus.style.color = "orange"; // Orange for Half Left
            } else {
                stockStatus.textContent = originalStockText;
                stockStatus.style.color = "green"; // Green for normal stock levels
            }
            
            // Control the visibility of the order button based on order value
            orderBtn.style.visibility = orderValue ? "visible" : "hidden";
           
            
        });
        } else {
            console.error("Input element not found.");
        }
    });

});




