let nig = document.getElementById('nig');
buttons = document.querySelectorAll('button');
let nigValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            nigValue += buttonText;
            nig.value = nigValue;
        }
        else if (buttonText == 'AC') {
            nigValue = "";
            nig.value = nigValue;
        }
        else if (buttonText == '=') {
            nig.value = eval(nigValue);
        }
        else {
            nigValue += buttonText;
            nig.value = nigValue;
        }

    })
}

