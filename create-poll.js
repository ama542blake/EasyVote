// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll/survey
// also serves as the way to enumerate each added question
var questionCount = 1;
// array that holds all questions
var questions = new Array(1);

$("#tr").click(function() {
    var newQuestion = new TextResponse();
    $("#qBlock").append(newQuestion.qTextHTML());
    questions[questionCount - 1] = newQuestion.id;
    questionCount++;
});

function TextResponse() {
    this.qNum = questionCount;
    this.id = 'TR_q' + this.qNum; 
    
    this.qTextHTML = function () {
        return '<div class="form-group" id="' + this.id + '">'
                    + '<label>Question ' + this.qNum 
                        + '<input type="text" class="form-control">'
                    +'</label>'
             + '</div>';
    };
}


$("#ss").click(function() {
    var newQuestion = new MultipleChoice("SS");
    $("#qBlock").append(newQuestion.qTextHTML());
    questions[questionCount - 1] = newQuestion.id;
    $('#' + newQuestion.id + '_options').append(addBtn(newQuestion.qNum)); 
    $("#addBtn" + newQuestion.qNum).click(function () {
        if (newQuestion.optionCount > MAX_OPTIONS) {
            alert("Sorry, you may only add " + MAX_OPTIONS + " options to a multiple choice question.");
        } else {
            $('#' + newQuestion.id + '_options').append(addOption(newQuestion.id, newQuestion.optionCount));
            newQuestion.optionCount++;
        }
    });
    questionCount++;
});

$("#ms").click(function() {
    var newQuestion = new MultipleChoice("MS");
    $("#qBlock").append(newQuestion.qTextHTML());
    questions[questionCount - 1] = newQuestion.id;
    $('#' + newQuestion.id + '_options').append(addBtn(newQuestion.qNum)); 
    $("#addBtn" + newQuestion.qNum).click(function () {
        if (newQuestion.optionCount > MAX_OPTIONS) {
            alert("Sorry, you may only add " + MAX_OPTIONS + " options to a multiple choice question.");
        } else {
            $('#' + newQuestion.id + '_options').append(addOption(newQuestion.id, newQuestion.optionCount));
            newQuestion.optionCount++;
        }
    });
                                          
    questionCount++;
});

function MultipleChoice(qType) {
    this.qNum = questionCount;
    this.qType = qType;
    this.optionCount = 3;
    // this will hold the ID's of each option
    this.options = new Array(1);
    this.id = qType + "_q" + this.qNum;
    
    this.qTextHTML = function() {
        return '<div class="form-group" id="' + this.id + '">'
                    + '<label> Question ' + this.qNum 
                        + '<input type="text" class="form-control">'
                        + '<div class="form-group input-field" id="' + this.id + '_options">'
                            + '<label class="option">Option 1'
                                + '<input type="text" class="form-control" id="' + this.id + '_o1">'
                            + '</label>'
                            + '<label class="option">Option 2'
                                + '<input type="text" class="form-control" id="' + this.id + '_o2">'
                            + '</label>'
                        + '</div'
                    +'</label>'
             + '</div>';
    };
    
}

function addBtn(qNum) {
    return '<button type="button" class="btn btn-default" id="addBtn' + qNum + '">Add Option</button>';
}

function addOption(id, optNum) {
    return '<label class="option">Option ' + optNum
            + '<input type="text" class="form-control" id="' + id + '_o' + optNum + '">'
         + '</label>'
}

$('input[name="theme"]').click(function () {
  console.log("ok");
  themeSelector();
});

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