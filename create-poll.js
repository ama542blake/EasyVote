// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll/survey
// also serves as the way to enumerate each added question
var questionCount = 0;
// array that holds all questions
var questions = new Array(1);

$("#tr").click(function() {
    questionCount++;
    var newQuestion = new TextResponse();
    $("#qBlock").append(newQuestion.qTextHTML());
    questions[questionCount - 1] = newQuestion;
});

function TextResponse() {
    this.qNum = questionCount;
    this.qType = "TR";
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
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
    } else {
        var newQuestion = new MultipleChoice("SS");
        $("#qBlock").append(newQuestion.qTextHTML());
        questions[questionCount - 1] = newQuestion;
        $('#' + newQuestion.id).append(oAddBtn(newQuestion.qNum)); 
        $("#oAddBtn" + newQuestion.qNum).click(function () {
            newQuestion.optionCount++;
            if (newQuestion.optionCount > MAX_OPTIONS) {
                alert("Sorry, you may only add " + MAX_OPTIONS + " options to a multiple choice question.");
            } else {
                $('#' + newQuestion.id + '_options').append(addOption(newQuestion.qNum, newQuestion.optionCount));
            }
        });
        /* 
           Callback for the remove question button.
           What happens when this button is pushed:
            1: remove newQuestion from the array andmove all questions after the removed question down by 1 index in the array 
                1a: remove the last element of the array because it will be null
            2: for each of the questions following the removed one, need to update:
                a: question number
                b: field label
                c: id
                d: name
                d: if it is a multiple choice question, update a-d for the options (leave option number the same)
            3: newQuestion is removed from the page (HTML) array, and should be nulled out
        */
        $("#qRemBtn" + newQuestion.qNum).click(function() {
            $('#' + newQuestion.id).remove();
            // for each following element, update HTML to reflect changes in questionNumber, and update the objects themselves
            for (i = newQuestion.qNum; i > questionCount; i++) {
                // (2a) decrement the following elements' question numbers
                questions[i].qNum--;
                // reset the id in the ARRAY
                questions[i].id = idUpdate(questions[i].qType, questions[i].qNum);
                // reset the actual HTML id, since the array and HTML are not directly linked
                // name and ID are the same so they use the the id attribute of each member of the questions array for their value
                $("#" + questions[i].id).attr({name: questions[i].id, id: questions[i].id});
                // reset the question's label in the HTML
                $("#" + questions[i].id + " label").html($("#" + questions[i-1].id + " label").html().replace(/Question [0-9][0-9]*/, "Question " + questions[i-1].qNum));
                
                //questions[i-1] = questions[i]; 
                
                
            }
            questions[questionCount - 1] = null;
            // remove null value at end of arrray
            questions = questions.filter(Boolean);
            questionCount--;    
        });
    }
});

$("#ms").click(function() {
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
    } else {
        var newQuestion = new MultipleChoice("MS");
        $("#qBlock").append(newQuestion.qTextHTML());
        questions[questionCount - 1] = newQuestion;
        $('#' + newQuestion.id).append(oAddBtn(newQuestion.qNum)); 
        $("#oAddBtn" + newQuestion.qNum).click(function () {
            newQuestion.optionCount++;
            if (newQuestion.optionCount > MAX_OPTIONS) {
                alert("Sorry, you may only add " + MAX_OPTIONS + " options to a multiple choice question.");
            } else {
                $('#' + newQuestion.id + '_options').append(addOption(newQuestion.qNum, newQuestion.optionCount));
            }
        }); 
        $("#qRemBtn" + newQuestion.qNum).click(function() {
           $('#' + newQuestion.id).html('');
        });
    }
});

function MultipleChoice(qType) {
    this.qNum = questionCount;
    this.qType = qType;
    this.optionCount = 2;
    // this will hold the ID's of each option
    this.options = new Array(1);
    this.id = qType + "_q" + this.qNum;
    
    this.qTextHTML = function() {
        return '<div class="form-group" id="' + this.id + '">'
                    + '<label> Question ' + this.qNum 
                        + '<input type="text" class="form-control">'
                        + qRemBtn(this.qNum)
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

// update a question div ID
    this.idUpdate = function(qType, qNum) {
        return qtype + "_q" + qNum;
    }

// button to remove a question
function qRemBtn(qNum) {
    return '<button type="button" class="btn btn-default" id="qRemBtn' + qNum + '">Remove Question</button>';
}

function oAddBtn(qNum) {
    return '<button type="button" class="btn btn-default" id="oAddBtn' + qNum + '">Add Option</button>';
}

function addOption(qNum, optNum) {
    return '<label class="option">Option ' + optNum
            + '<input type="text" class="form-control" id="oAddBtn_q' + qNum + '_o' + optNum + '">'
         + '</label>'
}

function oRemBtn(qNum, oNum) {
    return '<button type="button" class="btn btn-default" id="oRemBtn' + qNum + '_o' + oNum + '">Add Option</button>';
}

$('input[name="theme"]').click(function () {
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