// create a function and variables that connect to the HTML file
function GradeGenerator(){
  const score = document.getElementById('input').value;

  const result = document.getElementById('grade');
  
  if (score > 79 && score <= 100){
    result.innerHTML = "A"; // grade A section
  }
  else if (score >= 60 && score <= 79){
    result.innerHTML = "B"; // grade B section
  }
  else if (score >= 49 && score <= 59){
    result.innerHTML = "C"; // grade C section
  }
  else if (score >= 40 && score <=49){
    result.innerHTML = "D"; // grade D section
  }
  else if (score <= 40 && score >= 0){
    result.innerHTML = "F"; // grade F section
  }
// accounts for extremeties eg if someone inputs a score over 100 or a negative score
  else{
    window.alert("Invalid. Please enter a valid score.");
  }
}