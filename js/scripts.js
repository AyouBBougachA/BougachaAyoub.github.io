// Define the answers to the quiz
const correctAnswers = {
    q1: "C",  // Answer for question 1
    q2: "A",  // Answer for question 2
    q3: "C",  // Answer for question 3
    q4: "B",  // Answer for question 4
    q5: "C",  // Answer for question 5
    q6: "B",  // Answer for question 6
    q7: "B",  // Answer for question 7
    q8: "A",  // Answer for question 8
    q9: "B",  // Answer for question 9
    q10: "C", // Answer for question 10
    q11: "C", // Answer for question 11
    q12: "B", // Answer for question 12
    q13: "A", // Answer for question 13
    q14: "B", // Answer for question 14
    q15: "B", // Answer for question 15
};

// Submit the quiz and calculate the score
document.getElementById("submit-btn").addEventListener("click", function() {
    let score = 0;

    // Check each question answer
    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display score and show the results section
    document.getElementById("score").textContent = score;
    document.getElementById("quiz-questions").style.display = "none";
    document.getElementById("quiz-results").style.display = "block";
});

// Show the correct answers after validation
function showCorrectAnswers() {
    let resultHTML = '<h3>Correct Answers:</h3>';
    for (let question in correctAnswers) {
        const correctAnswer = correctAnswers[question];
        resultHTML += `
            <p><strong>${question}</strong>: Correct Answer: ${correctAnswer}</p>
        `;
    }
    document.getElementById("correct-answers").innerHTML = resultHTML;
}
