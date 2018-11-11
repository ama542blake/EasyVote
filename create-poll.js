// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll/survey
// also serves as the way to enumerate each added question
var questionCount = 1;
// array that holds all questions
var questions = new Array(1);
// object to hold text response data

/* -------------------- V Text Responses V -------------------- */
$("#tr").click(function () {
   var newQuestion = new TextResponse();
   //newQuestion.questionInputHTML;
    console.log(newQuestion);
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
   var newQuestion = new SingleSelection();
   //newQuestion.questionInputHTML;
    console.log(newQuestion);
    newQuestion.questionInputHTML();
   questionCount++;
});



// constructs a Single Selection multiple choice question
function SingleSelection() {
    this.questionNumber = questionCount;
    this.optionCount = 3;
    this.question = this;
    this.questionInputHTML = function () {
        if (questionCount > MAX_QUESTIONS) {
            alert("Sorry, the maximum number of questions allowed is " + MAX_QUESTIONS + ".");
        } else {
            $("#qBlock").append('<div class="form-group input-field" id="SS_q' + this.questionNumber + '">'
                                    + '<label>Question ' + this.questionNumber
                                        + '<input type="text" class="form-control" name="SS_q"' + '>'
                                    + '</label>'
                                    + '<label>Option 1'
                                        + '<input type="text" class="form-control" id="SS_q' + this.questionNumber + '_o1" name="SS_q' + this.questionNumber + '_o1">'
                                    + '</label>'
                                    + '<label>Option 2'
                                        + '<input type="text" class="form-control" id="SS_q' + this.questionNumber + '_o2" name="SS_q' + this.questionNumber + '_o2">'
                                    + '</label>'
                                    + '<button type="button" class="btn btn-default" id="btnAdd' + this.questionNumber + '">Add Option</button>'
                              + '</div>');
                $("#btnAdd" + this.questionNumber).click(function () {
                    console.log(this);
                    if (this.optionCount > MAX_OPTIONS) {
                        alert("Sorry, you may not add more than " + MAX_OPTIONS + " options to a single selection question.");
                    } else {
                        $("#qBlock").append(
                             '<label>Option ' + this.optionCount
                                + '<input type="text" class="form-control" id="SS_q' + this.questionCount + '_o' + this.optionCount + '"name="SS_q' + this.questionCount + '_o' + this.optionCount + '">'
                            + '</label>');
                        alert("click");
                    }
                });
            this.optionCount++;
        };
    };
}


// object to hold single selection response data
//var SingleSelection = {
//    SingleSelection: function (qn, qt) {
//        this.qNum = qn;
//        this.qText = qt;
//        // functions the same way as questionCount
//        // starts at 3 because 1 and 2 are constucted with the 
//        this.optionCount = 3;
//        // there should be at least 2 options in every SS question
//        this.options = new Array(2);
//    },
//    
//    questionInputHTML: function (questionNumber) {
//        $("#qBlock").append('<div class="form-group input-field" id="SS_q' + questionNumber + '">'
//                    + '<label>Question ' + questionNumber
//                        + '<input type="text" class="form-control" name="SS_q"' + '>'
//                    + '</label>'
//                    + '<button type="button" class="btn btn-default" id=add_' + questionNumber + '">Add Option</button>'
//                    + SingleSelection.optionHTML(questionNumber, 1) + SingleSelection.optionHTML(questionNumber, 2)
//              + '</div>');
//    },
//    
//    optionHTML: function (questionNumber, optionNumber) {
//        return '<label>'
//                    + '<input type="text" class="form-control" id="SS_q' + questionNumber + '_o' + optionNumber + '" name="SS_q' + questionNumber + '_o' + optionNumber + '">'
//              + '</label>'
//    }
//};