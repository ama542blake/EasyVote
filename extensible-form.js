// counter for the number of questions
// starts at 2 because the first question is added on load
var questionCounter = 2;
// create different references to the question count for the add option buttons
var qCountButtonTracker = new Array(1);

// add a text response question
$("#tr").click(function () {
    //  adds a text response question, gives it an ID that corresponds to the question number
    $("#qBlock").append(questionTextHTML(questionCounter)); 
    questionCounter++;
});


// add a multiple response question
$("#ms").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter));
    $("#question" + questionCounter).append(addOptionHTML(questionCounter));
    newAddOptionClickListener("#button" + questionCounter, questionCounter);
    questionCounter++;
});

$("#ss").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter));
    $("#question" + questionCounter).append(addOptionHTML(questionCounter));
    newAddOptionClickListener("#button" + questionCounter, questionCounter);
    questionCounter++;
});

// creates HTML for adding question text
// TODO: add name attribute once we figure out how the backend needs to receive data
function questionTextHTML(counter) {
    return '<div class="form-group input-field" id="question' + counter + '">'
        + '<label>Question ' + counter
        + '<input type="text" class="form-control">'
        + '</label></div>';
}

function addOptionHTML(counter) {
    return '<button type="button" class="btn btn-default" id="button' + counter + '">Add Option</button>';
}
    
// TODO: determine how to identify each option textBox based on question type for submission to the database b
// creates the input boxes for options of multiple and single selection questions
// questionNum: used by the input box ID field
// optionNum: used by the input box ID field
function optionInputHTML(questionNum, optionNum) {
    return '<label>Option ' + optionNum
           + '<input type=text class="form-control option-input" '
           + 'id="question' + questionNum + '-option'+ optionNum
           + '"></label>';
}

// adds click listeners to the "Add Option" button
// buttonID: ID of the button to attact the function to
// questionNumber: question that the button is attached to
function newAddOptionClickListener(buttonID, questionNumber) {
    qCountButtonTracker[questionNumber] = questionNumber;
    var optionNum = 1;
    $(buttonID).click(function () {
        $("#question" + qCountButtonTracker[questionNumber]).append(optionInputHTML(qCountButtonTracker[questionNumber], optionNum));
        optionNum++;
    });
}
