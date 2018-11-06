// counter for the number of questions
// starts at 2 because the first question is added on load
var questionCounter = 2;


// add a text response question
$("#tr").click(function () {
    //  adds a text response question, gives it an ID that corresponds to the question number
    $("#qBlock").append(questionTextHTML(questionCounter)); 
    questionCounter++;
});

// add a multiple response question
$("#ms").click(function() {
<<<<<<< HEAD
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
=======
    $("#qBlock").append(questionTextHTML(questionCounter) + optionDivHTML>');
>>>>>>> master
    questionCounter++;
});

$("#ss").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter));
    questionCounter++;
    
});

//event listener for the "+" buttons for adding options
$(".btn-+").click(function() {
    if (this.parent().attr("id").indexOf(""));
});

// creates HTML for adding question text
<<<<<<< HEAD
// TODO: add name attribute once we figure out how the backend needs to receive data
function questionTextHTML(counter) {
    return '<div class="form-group input-field" id="question"' + counter + '">'
        + '<label>Question ' + counter
        + '<input type="text" class="form-control">'
        + '</label></div>';
=======
// this resides within <div id="qBlock">
function questionTextHTML(counter) {
    return '<div class="form-group input-field"><label for="question' + counter + '">Question ' + counter + '</label><input type="text" class="form-control" id="question' + counter + '" name="q' + counter + 'text" placeholder="Enter question prompt here"><button type="button" class="btn btn-default btn-+">+</button></div>';
}

// creates the div that holds question options
function optionDivHTML(counter) {
    return '<div id="question' + counter + '-options">';
>>>>>>> master
}

// TODO: better define access to this data based on ID or name
// generates the HTML for the text box that will take the user's response
function textResponseHTML() {
    return '<textarea name="textArea" rows="5" cols="25"></textarea>'
}

<<<<<<< HEAD
function addOptionHTML(counter) {
    return '<button type="button" class="btn btn-default" id="button' + counter + '">+</button>';
}

function msHTML(questionNum, optionNum) {
    return '<label>Option ' + optionNum
           + '<input type=text class="form-control" '
           + 'id="question' + questionNum + '-option'+ optionNum
           + '"></label>';
=======
// create the HTML for the different options the question should have for both multi selection questions
// parentID is the ID of the question the option corresponds to
// optionNum is the optionNumber of the new option (determined by the number of children of the question)
function msHTML(parentID, optionNum) {
    

>>>>>>> master
}