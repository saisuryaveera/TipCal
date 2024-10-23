// Open Theme Selector Modal
function openThemeSelector() {
    document.getElementById('themeModal').style.display = 'block';
}

// Close Theme Selector Modal
function closeThemeSelector() {
    document.getElementById('themeModal').style.display = 'none';
}

// Set Dark Mode for Inner Tip Calculator
function setDarkMode() {
    document.querySelector('.container').style.backgroundColor = "#333";
    document.querySelector('.container').style.color = "#fff";
}

// Set Light Mode for Inner Tip Calculator
function setLightMode() {
    document.querySelector('.container').style.backgroundColor = "#fff";
    document.querySelector('.container').style.color = "#000";
}

// Set Theme Color for Outer Background Without Closing Modal
document.querySelectorAll('.theme-circle').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        // Set background color for the outer part (outer-container)
        document.querySelector('.outer-container').style.backgroundColor = color;
        // Keep the popup open after color selection
    });
});
