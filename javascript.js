//James Hibble 15/01/19
var answers = [];

function calculate() {
    //Gets the values from the index page
    var value1 = document.getElementById("value1").value;
    var symbol = document.getElementById("option").value;
    var value2 = document.getElementById("value2").value;
    var answer;

    //For the compare
    symbol = String(symbol);

    //Decides which calculation to execute
    if(symbol == "+")
    {
        answer = parseInt(value1) + parseInt(value2);
    }
    else if(symbol == "-")
    {
        answer = value1 - value2;
    }
    else if(symbol == "*")
    {
        answer = value1 * value2;
    }
    else if(symbol == "/")
    {
        answer = value1 / value2;
    }

    answers.push(answer);
    document.getElementById("answers").innerHTML = answers;

    //Enables the average button
    document.getElementById("average").disabled = false;
}

function average() {
    var total = 0;

    for(var i = 0; i < answers.length; i++)
    {
        total = total + answers[i];
    }

    var avg = total/answers.length;

    document.getElementById("avgNum").innerHTML = avg;
}
