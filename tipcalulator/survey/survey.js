// Function to open the survey modal
function openSurvey() {
    document.getElementById('surveyModal').style.display = 'block';
}

// Function to close the survey modal
function closeSurvey() {
    document.getElementById('surveyModal').style.display = 'none';
}

// Function to handle the submission of the survey
function submitSurvey() {
    // Get values from survey form
    const q1 = document.querySelector('input[name="q1"]:checked')?.value || 0;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value || 0;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value || 0;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value || 0;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value || 0;

    // Calculate the total score from the survey
    const totalScore = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5);

    // Scale the score to match a rating between 1 and 10
    const rating = Math.round((totalScore / 5) * 10); // Normalize score to 10-point scale

    // Set the service rating value
    document.getElementById('serviceRating').innerHTML = `<option value="${rating}">${rating}</option>`;

    // Close the survey modal
    closeSurvey();
}

// Close the survey modal if clicked outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('surveyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
