//use .value for values like numbers/text in a input field

//.innerText for text, like headers etc

var numField1 = document.getElementById("numField1");

var numField2 = document.getElementById("numField2");

var resultField = document.getElementById("resultField");

var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function (Event) {
    if (!numField1.value || !numField2.value) {

        alert("Please enter values in the fields.");
    } else if (parseFloat(numField2.value) === 0) {
        alert("You cannot divide by 0 as that is an undefined answer.")
    } else {

        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        resultField.innerText = "Answer: " + ((x / y) * 100 + "%");
        Event.preventDefault();
    }
});
