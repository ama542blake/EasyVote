// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll/survey
// also serves as the way to enumerate each added question
var questionCount = 1;
// array that holds all questions
var questions = new Array(1);


$("#tr").click(function () {
   var newQuestion = new TextResponse();
    questions[questionCount - 1] = newQuestion;
    console.log(questions[questionCount - 1]);
    console.log(questions);
    newQuestion.questionInputHTML();
   questionCount++;
});

function TextResponse() {
    this.questionNumber = questionCount;
    this.questionInputHTML = function () {
        if (questionCount > MAX_QUESTIONS) {
            alert("Sorry, the maximum number of questions allowed is " + MAX_QUESTIONS + ".");
        } else {
            $("#qBlock").append('<div class="form-group input-field" id="TR_q' + questionCount + '">'
                                + '<label>Question ' + questionCount
                                    + '<input type="text" class="form-control" name="TR_q"' + '>'
                                + '</label>'
                              + '</div>');
            }
    };
};

$("#ss").click(function () {
   var newQuestion = new MultipleChoice("SS");
    questions[questionCount - 1] = newQuestion;
    newQuestion.questionInputHTML();
   questionCount++;
});

$("#ms").click(function () {
    var newQuestion = new MultipleChoice("MS");
    questions[questionCount - 1] = newQuestion;
    newQuestion.questionInputHTML();
    questionCount++;
});


// constructs a Multiple Choice question (either multiple or single selection)
//qType: string that represent which type of multiple choice question shold be - SS = single selection - MS = multiple selection
function MultipleChoice(qType) {
    this.questionNumber = questionCount;
    this.optionCount = 3;
    this.questionType = qType;
    this.options = new Array(1);
    // the .append method changes scope, so to keep a reference to the current question, so thisQuestion keeps a reference to it
    thisQuestion = this;
    this.questionInputHTML = function () {
        if (questionCount > MAX_QUESTIONS) {
            alert("Sorry, the maximum number of questions allowed is " + MAX_QUESTIONS + ".");
        } else {
            // the .append method changes scope, so to keep a reference to the current question, so thisQuestion keeps a reference to it
            $("#qBlock").append('<div class="form-group input-field" id=' + thisQuestion.questionType + '_q' + this.questionNumber + '">'
                                    + '<label>Question ' + this.questionNumber
                                        + '<input type="text" class="form-control" name="' + thisQuestion.questionType +  '_q"' + '>'
                                    + '</label>'
                                        +'<div id="' + thisQuestion.questionType + '_q' + this.questionNumber + '_options">'
                                            + '<label class="option">Option 1'
                                                + '<input type="text" class="form-control" id="' + thisQuestion.questionType + '_q' + this.questionNumber + '_o1" name="_q' +    this.questionNumber + '_o1">'
                                            + '</label>'
                                            + '<label class="option">Option 2'
                                                + '<input type="text" class="form-control" id="' + thisQuestion.questionType + '_q' + this.questionNumber + '_o2" name="' + thisQuestion.questionType + '_q' +    this.questionNumber + '_o2">'
                                            + '</label>'
                                        + '</div>'
                                    + '<button type="button" class="btn btn-default" id="btnAdd' + this.questionNumber + '">Add Option</button>'
                              + '</div>');
                $("#btnAdd" + this.questionNumber).click(function () {
                    if (thisQuestion.optionCount > MAX_OPTIONS) {
                        alert("Sorry, you may not add more than " + MAX_OPTIONS + " options to a single selection question.");
                    } else {
                        $("#" + thisQuestion.questionType + "_q" + thisQuestion.questionNumber + '_options').append(Option(thisQuestion.questionNumber, thisQuestion.optionCount, thisQuestion.questionType));
                        thisQuestion.optionCount++;
                    }
                });
        };
    };
}

// construct the option text inputs
function Option(questionNumber, optionNumber, questionType) {
    return '<label class="option">Option ' + optionNumber
                + '<input type="text" class="form-control" id="' + questionType + '_q' + questionNumber + '_o' + optionNumber + '"name="' + questionType + '_q' + questionNumber + '_o' + optionNumber + '">'
         + '</label>'
}