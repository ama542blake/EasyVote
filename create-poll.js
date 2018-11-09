// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll/survey
// also serves as the way to enumerate each added question
var questionCount = 1;
// array that holds all questions
var questions = new Array(1);
// object to hold text response data

/* -------------------- V Action Listeners  V -------------------- */
$("#tr").click(function () {
   var newQuestion = new TextResponse.constructor(questionCount);
    newQuestion.questionInputHTML;
    questionCount++;
});

/* -------------------- V Question Types V -------------------- */

var TextResponse = {
    constructor: function TextResponse (qn) {
        this.qNum = qn;
    },
    
    questionInputHTML: function questionInputHTMl (questionNumber) {
        if (questionCount > MAX_QUESTIONS) {
            alert("Sorry, the maximum number of questions allowed is " + MAX_QUESTIONS + ".");
        } else {
            $("#qBlock").append('<div class="form-group input-field" id="TR_q' + questionNumber + '">'
                                + '<label>Question ' + questionNumber
                                    + '<input type="text" class="form-control" name="TR_q"' + '>'
                                + '</label>'
                              + '</div>');
            }
    }
};

// object to hold single selection response data
var SingleSelection = {
    SingleSelection: function (qn, qt) {
        this.qNum = qn;
        this.qText = qt;
        // functions the same way as questionCount
        // starts at 3 because 1 and 2 are constucted with the 
        this.optionCount = 3;
        // there should be at least 2 options in every SS question
        this.options = new Array(2);
    },
    
    questionInputHTML: function (questionNumber) {
        $("#qBlock").append('<div class="form-group input-field" id="SS_q' + questionNumber + '">'
                    + '<label>Question ' + questionNumber
                        + '<input type="text" class="form-control" name="SS_q"' + '>'
                    + '</label>'
                    + '<button type="button" class="btn btn-default" id=add_' + questionNumber + '">Add Option</button>'
                    + SingleSelection.optionHTML(questionNumber, 1) + SingleSelection.optionHTML(questionNumber, 2)
              + '</div>');
    },
    
    optionHTML: function (questionNumber, optionNumber) {
        return '<label>'
                    + '<input type="text" class="form-control" id="SS_q' + questionNumber + '_o' + optionNumber + '" name="SS_q' + questionNumber + '_o' + optionNumber + '">'
              + '</label>'
    }
};