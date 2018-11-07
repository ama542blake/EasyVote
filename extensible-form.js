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
    newMsClickListener("#button" + questionCounter, questionCounter);
    questionCounter++;
});

$("#ss").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter));
    $("#question" + questionCounter).append(addOptionHTML(questionCounter));
    newSsClickListener("#button" + questionCounter, questionCounter);
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
    return '<button type="button" class="btn btn-default" id="button' + counter + '">+</button>';
}
    
function msHTML(questionNum, optionNum) {
    return '<label>Option ' + optionNum
           + '<input type=text class="form-control" '
           + 'id="question' + questionNum + '-option'+ optionNum
           + '"></label>';
}

function ssHTML(questionNum, optionNum) {
    return '<label>Option ' + optionNum
           + '<input type=text class="form-control option-input" '
           + 'id="question' + questionNum + '-option'+ optionNum
           + '"></label>';
}

function newMsClickListener(buttonID, counter) {
    qCountButtonTracker[counter] = counter;
    var optionNum = 1;
    $(buttonID).click(function () {
        $("#question" + qCountButtonTracker[counter]).append(msHTML(qCountButtonTracker[counter], optionNum));
        optionNum++;
    });
}
    
function newSsClickListener(buttonID, counter) {
    qCountButtonTracker[counter] = counter;
    var optionNum = 1;
    $(buttonID).click(function () {
        $("#question" + qCountButtonTracker[counter]).append(ssHTML(qCountButtonTracker[counter], optionNum));
        optionNum++;
    });
}
