//feedback form appear once the rating symbol is clicked
const rates = document.querySelectorAll('.rate');
const feedback = document.querySelector('.feedback');

rates.forEach(rate => {
  rate.addEventListener('click', (e) => {
    if (e.target.classList.contains('rate')) {
      feedback.classList.remove('feedback');
    }
  })
}); 


//required filling of the form
//popup message when all the required fields are filled
form = document.querySelector('form');
textarea = document.getElementById('textarea');
submitButton = document.querySelector('button[type="submit"]');
const popup = document.querySelector('.popup');

submitButton.addEventListener('click', (event) => {
        if (form.checkValidity()) { 
            if (textarea.value.trim() !== '') {
                popup.classList.add("open-popup"); 
            }
            else{
                alert("Please fill out the feedback form."); 
            }
        }
        else {
            alert("Please fill out the feedback form."); 
          }
        });


//remove the feedback form once OK button is clicked
//reset the feedback form once OK button is clicked
function closePopup(){
    popup.classList.remove("open-popup");
}
function openFeedback(){
    feedback.classList.add("feedback");
    form.reset(); 
    textarea.value = '';
}





