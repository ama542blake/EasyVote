// counter for the number of questions
// starts at 2 because the first question is added on load
var questionCounter = 2;
// count number multiple selections
var msCounter = 1;
// count number of single selections
var ssCounter = 1;
// count number of subq

// add a text response question
$("#tr").click(function () {
    //  adds a text response question, gives it an ID that corresponds to the question number
    $("#qBlock").append(questionTextHTML(questionCounter)); 
    questionCounter++;
});

// add a multiple response question
$("#ms").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter) + addOptionHTML(questionCounter));
    // create callback for the button that was just created
    $("#button" + questionCounter).click(function() {
        console.log("in");
        //var optionNum = 1;
        //var questionNum = questionCounter;
        $("#button" + questionCounter).parent().append(msHTML(6, 9));
        //optionNum++;
        console.log("out");
    });
    questionCounter++;
});

$("#ss").click(function() {
    
});

// creates HTML for adding question text
// TODO: add name attribute once we figure out how the backend needs to receive data
function questionTextHTML(counter) {
    return '<div class="form-group input-field" id="question"' + counter + '">'
        + '<label>Question ' + counter
        + '<input type="text" class="form-control">'
        + '</label></div>';
}

// TODO: better define access to this data based on ID or name
// generates the HTML for the text box that will take the user's response
function textResponseHTML() {
    return '<textarea name="textArea" rows="5" cols="25"></textarea>'
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