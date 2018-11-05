// counter for the number of questions
// starts at 2 because the first question is added on load
var questionCounter = 2;

// add a text response question
$("#tr").on("click", function () {
    //  adds a text response question, gives it an ID that corresponds to the question number
    $("#qBlock").append(questionTextHTML(questionCounter) + textResponseHTML()); 
    questionCounter++;
});

// creates HTML for adding question text
function questionTextHTML(counter) {
    return '<div class="form-group input-field"><label for="question' + counter + '">Question ' + counter + '</label><input type="text" class="form-control" id="question' + counter + '" name="q' + counter + 'text" placeholder="Enter question prompt here"></div>'
}

// TODO: better define access to this data based on ID or name
// generates the HTML for the text box that will take the user's response
function textResponseHTML() {
    return '<textarea name="textArea" rows="5" cols="25"></textarea>'
}