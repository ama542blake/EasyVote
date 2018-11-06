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
    $("#qBlock").append(questionTextHTML(questionCounter) + optionDivHTML>');
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
// this resides within <div id="qBlock">
function questionTextHTML(counter) {
    return '<div class="form-group input-field"><label for="question' + counter + '">Question ' + counter + '</label><input type="text" class="form-control" id="question' + counter + '" name="q' + counter + 'text" placeholder="Enter question prompt here"><button type="button" class="btn btn-default btn-+">+</button></div>';
}

// creates the div that holds question options
function optionDivHTML(counter) {
    return '<div id="question' + counter + '-options">';
}

// TODO: better define access to this data based on ID or name
// generates the HTML for the text box that will take the user's response
function textResponseHTML() {
    return '<textarea name="textArea" rows="5" cols="25"></textarea>'
}

// create the HTML for the different options the question should have for both multi selection questions
// parentID is the ID of the question the option corresponds to
// optionNum is the optionNumber of the new option (determined by the number of children of the question)
function msHTML(parentID, optionNum) {
    

}