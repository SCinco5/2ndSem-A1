function calculateTotal() {
    // this function defines that it will be executed when the user clicks the calculate button
    let costPerLiter = parseFloat(document.getElementById("costPerLiter").value);
    // so the document.getElementById("costPerLiter") finds that input box on my page.
    // .value gets whatever the number the user has typed inside
    // for the parseFloat() it makes sure that the number the user placed is treated as a decimal number
    
    let liters = parseFloat(document.getElementById("liters").value);

    let totalCost = costPerLiter * liters;
    // this one just calculates the total cost

    document.getElementById("totalCost").innerText = "Total Cost:  " + totalCost.toFixed(2) + "  PHP";
    // the document.getElementById("totalCost") finds the spot where the total should be displayed
    // .innerText changes the text inside that spot
    // totalCost.toFixed(2) makes sure the number has 2 decimal places so that it wont be like 2345.2084082308
}