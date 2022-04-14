var generateInput = document.getElementById('generateInput');

var validationInput = document.getElementById('validationInput');

document.getElementById('generateBtn').addEventListener('click', function() {
    if (generateInput.value == '') {
        alert('please Generate a Key');
    } else { var pinNumber = generateInput.value }

})

document.getElementById('calcBody').addEventListener('click', function(event) {
    let vInputs = event.target.innerText;

    if (vInputs == '<') {
        validationInput.value = validationInput.value.slice(0, validationInput.value.length - 1);
    } else if (vInputs == 'C') {
        validationInput.value = '';
    } else { validationInput.value += vInputs };



})