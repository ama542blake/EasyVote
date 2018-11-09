// counter for the number of questions
// starts at 2 because the first question is added on load
var questionCounter = 1;
// create different references to the question count for the add option buttons
var qCountButtonTracker = new Array(1);
// array to hold questions 


/* --------------------------------------------------Event Handlers-------------------------------------------------- */

// add a text response question
$("#tr").click(function () {
    //  adds a text response question, gives it an ID that corresponds to the question number
    $("#qBlock").append(generateQuestionTextHTML(questionCounter, 'TR')); 
    questionCounter++;
});

// add a multiple response question
$("#ms").click(function() {
    $("#qBlock").append(generateQuestionTextHTML(questionCounter, 'MS'));
    $("#MSquestion" + questionCounter).append(generateAddBtnOptionHTML(questionCounter));
    newAddOptionClickListener("#addButton" + questionCounter, questionCounter, 'MS');
    questionCounter++;
});

$("#ss").click(function() {
    $("#qBlock").append(generateQuestionTextHTML(questionCounter, 'SS'));
    $("#SSquestion" + questionCounter).append(generateAddBtnOptionHTML(questionCounter));
    newAddOptionClickListener("#addButton" + questionCounter, questionCounter, 'SS');
    questionCounter++;
});

$('input[name="theme"]').click(function () {
  console.log("ok");
  themeSelector();
});

// adds click listeners to the "Add Option" button
// buttonID: ID of the button to attact the function to
// questionNumber: question that the button is attached to
function newAddOptionClickListener(buttonID, questionNumber, questionType) {
    qCountButtonTracker[questionNumber] = questionNumber;
    var optionNum = 1;
    $(buttonID).click(function () {
        $("#" + questionType + "question" + qCountButtonTracker[questionNumber]).append(generateOptionInputHTML(qCountButtonTracker[questionNumber], optionNum));
        optionNum++;
    });
}

/* --------------------------------------------------HTML Generators-------------------------------------------------- */
// creates HTML for adding question text
// TODO: add name attribute once we figure out how the backend needs to receive data
// counter: counts the number of questions (corresponds do questionCounter)
// questionType: specifies the type of question (TR-text response; MS-multiple selection SS-single selection)
function generateQuestionTextHTML(counter, questionType) {
    if (counter > 25) {
        alert("You may only have up to 25 questions per poll.");
    } else {
        return '<div class="form-group input-field" id="' + questionType + 'question' + counter + '">'
            + '<label>Question ' + counter
            + '<input type="text" class="form-control">'
            + '</label></div>';
    }
}    

// create a button to add options
function generateAddBtnOptionHTML(counter) {
    return '<button type="button" class="btn btn-default" id="addButton' + counter + '">Add Option</button>';
}

// create a button to remove an option from a multiple choice questiion
function generateRemoveBtnOptionHTML(optionNum) {
    return '<button type="button" class="btn btn-default" id="removeOptionButton' + counter + '">Add Option</button>';
}
    
// TODO: determine how to identify each option textBox based on question type for submission to the database b
// creates the input boxes for options of multiple and single selection questions
// questionNum: used by the input box ID field
// optionNum: used by the input box ID field
function generateOptionInputHTML(questionNum, optionNum) {
    if (optionNum > 10) {
        alert("You may only add up to 10 options to a question.");
    } else {
            return '<label>Option ' + optionNum
                + '<input type=text class="form-control option-input" '
                + 'id="question' + questionNum + '-option'+ optionNum
                + '" name="question' + questionNum + '-option' + optionNum + '"></label>';
        }
}


function themeSelector() {
    var selectedTheme = $('input[name=theme]:checked').val();
    var body = document.querySelector("body");
    switch (selectedTheme) {
        case "Light":
            body.style.backgroundColor = "#dadada";
            body.style.color = "black";
            break;
            
        case "Dark":
            body.style.backgroundColor = "#232323";
            body.style.color = "#777777";
            break;
        case "Forest":
            body.style.backgroundColor = "#498645";
            body.style.color = "#222222";
            break;
        case "Seaside":
            body.style.backgroundColor = "#2A82ED";
            body.style.color = "#222222";
            break;
        default:
            body.style.backgroundColor = "#46C6C6";
            body.style.color = "white;"
    }
}
