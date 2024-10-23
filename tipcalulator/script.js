document.addEventListener("DOMContentLoaded", function () {
    const serviceRating = document.getElementById("serviceRating");
    const calculateBtn = document.getElementById("calculateBtn");
    const billAmount = document.getElementById("billAmount");
    const peopleCount = document.getElementById("peopleCount");
    const tipAmount = document.getElementById("tipAmount");
    const shareAmount = document.getElementById("shareAmount");
    const errorMessage = document.getElementById("errorMessage");

    // Populate service rating options
    for (let i = 2; i <= 10; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        serviceRating.appendChild(option);
    }

    calculateBtn.addEventListener("click", function () {
        errorMessage.textContent = "";  // Clear previous error messages
        tipAmount.value = "";
        shareAmount.value = "";

        // Clear error classes
        removeError(billAmount);
        removeError(peopleCount);

        const bill = parseFloat(billAmount.value);
        const rating = parseInt(serviceRating.value);
        const people = parseInt(peopleCount.value);

        // Input validation for numbers
        if (isNaN(bill) || bill <= 0) {
            displayError(billAmount, "Please enter a valid bill amount.");
            return;
        }

        if (isNaN(rating) || rating < 1 || rating > 10) {
            errorMessage.textContent = "Please select a valid service rating.";
            return;
        }

        if (isNaN(people) || people <= 0) {
            displayError(peopleCount, "Please enter a valid number of people.");
            return;
        }

        // Calculate tip and share amounts
        const tipPercentage = (rating*2) / 100;
        const calculatedTip = bill * tipPercentage;
        const totalAmount = bill + calculatedTip;
        const perPersonShare = totalAmount / people;

        // Update the fields
        tipAmount.value = calculatedTip.toFixed(2);
        shareAmount.value = perPersonShare.toFixed(2);

        // Display tip per person and total amount text
        document.getElementById('tipPerPersonText').innerText = `Tip per person: ₹${(calculatedTip / people).toFixed(2)}`;
        document.getElementById('totalAmountText').innerText = `Total: ₹${totalAmount.toFixed(2)}`;
    });

    // Function to display error message and highlight input
    function displayError(inputElement, message) {
        inputElement.classList.add("error");
        errorMessage.textContent = message;
    }

    // Function to remove error class from input
    function removeError(inputElement) {
        inputElement.classList.remove("error");
    }
});

// Reset function to clear input fields
function resetFields() {
    document.getElementById('billAmount').value = '';
    document.getElementById('serviceRating').value = '';
    document.getElementById('peopleCount').value = '';
    document.getElementById('tipAmount').value = '';
    document.getElementById('shareAmount').value = '';
    document.getElementById('tipPerPersonText').innerText = '';
    document.getElementById('totalAmountText').innerText = '';
    document.getElementById('errorMessage').textContent = ''; // Clear error message on reset
}
