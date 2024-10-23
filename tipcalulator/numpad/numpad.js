let currentInputField = '';

function openNumpad(inputId) {
    currentInputField = inputId; // Store the current input field ID
    document.getElementById('numberpadModal').style.display = 'block'; // Show the numpad
}

function closeNumpad() {
    document.getElementById('numberpadModal').style.display = 'none'; // Hide the numpad
}

function addToInput(number) {
    const inputField = document.getElementById(currentInputField);
    inputField.value += number; // Append number to the input
}

function clearInput() {
    const inputField = document.getElementById(currentInputField);
    inputField.value = ''; // Clear the input
}

function submitInput() {
    closeNumpad(); // Close the numpad
    // Optionally, you can validate the input here
}

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
    const modal = document.getElementById('numberpadModal');
    if (event.target == modal) {
        closeNumpad();
    }
};
