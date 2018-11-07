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

/* ISSUE: callback works for each button, but they can't store the question number they are created for. 
   The reason this is a problem is that we need to add input fields for the correct question, which requires
   a reference to the div with the id "question#" where # is the question number. Without this, we don't know where to
   add the HTML for the new inputs, and we also can't create the proper ID for each input, since the ID for each input
   requires the question number and option number (see the msHTML method for ID declarations that depend
   on the question and option number). 
   WHAT NEEDS TO BE DONE: (1) Find a way to store the question number and (2) option number for each individual callback method so
   that each individual instance of a button doesn't reference a static variable. 
   POSSIBLE SOLUTIONS
        FOR (1), since the ID of each button contains the question number '<button id="button"' + counter + '"...', we could
        parse the string to retrieve it, but this seems very convoluted and inefficient. It also doesn't provide any insight 
        on how to solve (2), and it would be ideal to solve both problems by just storing a unique value for each
        callback.
*/
// add a multiple response question
$("#ms").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter));
    console.log("in");
    $("#question" + questionCounter).append(addOptionHTML(questionCounter));
    console.log("out");
    newClickListener("#button" + questionCounter, questionCounter);
    questionCounter++;
});

$("#ss").click(function() {
    $("#qBlock").append(questionTextHTML(questionCounter));
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

// creates the div that holds question options
function optionDivHTML(counter) {
    return '<div id="question' + counter + '-options">';
}

function addOptionHTML(counter) {
    console.log('addOptionHTML button type="button" class="btn btn-default"" id="button' + counter + '">+</button>');
    return '<button type="button" class="btn btn-default" id="button' + counter + '">+</button>';
}
    
function msHTML(questionNum, optionNum) {
    console.log("in urmom");
    return '<label>Option ' + optionNum
           + '<input type=text class="form-control" '
           + 'id="question' + questionNum + '-option'+ optionNum
           + '"></label>';
}

function newClickListener(buttonID, counter) {
    console.log("in " + counter);
    console.log(buttonID);
    qCountButtonTracker[counter] = counter;
    console.log("-- " + qCountButtonTracker[counter] + " --");
    $(buttonID).click(function () {
        $("#question" + qCountButtonTracker[counter]).append(msHTML(qCountButtonTracker[counter], 1));
    });
}