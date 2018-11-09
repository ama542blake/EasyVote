// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS
// holds the number of questions in the poll/survey
// also serves as the way to enumerate each added question
var questionCount = 1;
// array that holds all questions
var questions = new Array(1);
// object to hold text response data
var TextResponse {
    function TextResponse(qn, qt) {
        this.qNum = qn;
        this.qText = qt;
    };
    
    function toHTML(questionNumber) {
        return '<div class="form-group input-field" id="TR_q' + questionNumber + '">'
                    + '<label>Question ' + questionNumber
                        + '<input type="text" class="form-control" name="TR_q"' + '>'
                    + '</label>
              + </div>';
    }
}

// object to hold single selection response data
var SingleSelection {
    function SingleSelection(qn, qt) {
        this.qNum = qn;
        this.qText = qt;
    };
    
    
}