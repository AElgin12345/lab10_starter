/**
 * Script to process the submitted form data of the form in file
 * pricing.html 
 */
document.getElementById('num-guests').addEventListener('focusout', validateGuestsInput);
document.getElementById('num-nights').addEventListener('focusout', validateNightsInput);

function validateGuestsInput() {
    let numGuests = document.getElementById('num-guests').value;
    let guestsError = document.getElementById('guests-error');
  
    if (numGuests === '' || Number.parseInt(numGuests) <= 0) {
      guestsError.classList.remove('display-none');
      return false;
    } else {
      guestsError.classList.add('display-none');
      return true;
    }
}
    function validateNightsInput() {
        let numNights = document.getElementById('num-nights').value;
        let nightsError = document.getElementById('nights-error');
      
        if (numNights === '' || Number.parseInt(numNights) <= 1) {
          nightsError.classList.remove('display-none');
          return false;
        } else {
          nightsError.classList.add('display-none');
          return true;
        }
      }
  