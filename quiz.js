function checkAnswer(){
    const correctAnswer = 4;
    const userAnswer = document.querySelector('input[type="radio"][name="quiz"]:checked').value;
   console.log(userAnswer);
        if (userAnswer === correctAnswer){
            document.getElementById('feedback').textContent =  "Correct! Well done."
        }
        else{
            document.getElementById('feedback').textContent =  "That's incorrect. Try again!"
        }  

}
document.getElementById('submit-answer').addEventListener('click', checkAnswer)