var generateInput = document.getElementById('generateInput');

var validationInput = document.getElementById('validationInput');

var pinNumber

document.getElementById('generateBtn').addEventListener('click', function() {

    if (generateInput.value == '') {
        alert('please Generate a Key');
    } else { generateInput.style.display = 'none';
        pinNumber = generateInput.value }

})

document.getElementById('calcBody').addEventListener('click', function(event) {
    let vInputs = event.target.innerText;

    if (vInputs == '<') {
        validationInput.value = validationInput.value.slice(0, validationInput.value.length - 1);
    } else if (vInputs == 'C') {
        validationInput.value = '';
    } else { validationInput.value += vInputs };



})

document.getElementById('submission').addEventListener('click', function() {

    const notifyValid = document.getElementById('notify-valid');
    const notifyInvalid = document.getElementById('notify-invalid')


    if (pinNumber == validationInput.value) {
        notifyValid.style.display = 'block';
        notifyInvalid.style.display = 'none';
    } else if (pinNumber != validationInput.value) {
        notifyInvalid.style.display = 'block';
        notifyValid.style.display = 'none';
    }


})