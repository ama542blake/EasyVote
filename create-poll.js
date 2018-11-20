// the maximum number of questions and options per question
const MAX_QUESTIONS = 25;
const MAX_OPTIONS = 10;
// holds the number of questions in the poll
var questionCount = 0;

$("#fr").click(function() {
    questionCount++;
     if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
        questionCount--;
    } else {
        var newQuestion = new FreeResponse();
        $("#qBlock").append(newQuestion.qTextHTML());
    }
    initBtnRem(questionCount);
});

function FreeResponse() {    
    this.qTextHTML = function () {
        return '<div class="form-group" id="q"' + questionCount + '">'
                    + '<label>Question ' + questionCount + ': Free Response'
                        + '<input type="text" class="form-control" name="questions[][FreeResponse]">'
                        + qRemBtn(questionCount)
                    +'</label>'
             + '</div>';
    };
}


$("#ss").click(function() {
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
        questionCount--;
    } else {
        var newQuestion = new MultipleChoice("Single Selection");
        $("#qBlock").append(newQuestion.qTextHTML());
            }
        initBtnRem(questionCount);
        initBtnOAdd("SingleSelection");
        });

$("#ms").click(function() {
    questionCount++;
    if (questionCount > MAX_QUESTIONS) {
        alert("Sorry, you may only add up to " + MAX_QUESTIONS + " per poll.");
        questionCount--;
    } else {
        var newQuestion = new MultipleChoice("Multiple Selection");
        $("#qBlock").append(newQuestion.qTextHTML());
        }
            initBtnRem(questionCount);
            new initBtnOAdd('MultipleSelection');
        });

function MultipleChoice(qType) {
    // the question type without whitespace; for the option array
    noWSType = qType.replace(' ', '');
    this.qTextHTML = function() {
        return '<div class="form-group" id="q"' + questionCount + '">'
                    + '<label> Question ' + questionCount + ': ' + qType 
                        + '<input type="text" class="form-control" name="questions[]">'
                        + qRemBtn(questionCount)
                        + '<div class="form-group input-field option-block">'
                            + '<label class="option">Option'
                                + '<input type=text class="form-control" name=questions[][' + noWSType + ']>'
                            + '</label>'
                            + '<label class="option">Option'
                                + '<input type=text class="form-control" name=questions[][' + noWSType + ']>'
                            + '</label>'
                         + '</div>'
                         + oAddBtn(questionCount)
                    +'</label>'
             + '</div>';
    };
}

// button to remove a question
function qRemBtn(qNum) {
    return '<button type="button" class="btn btn-default" id="btn-rem' + qNum + '">Remove Question</button>'
}

function initBtnRem (qNum) {
    $("#btn-rem" + qNum).click(function () {
        $(this).parent().parent().remove(); 
        var thisQnum = qNum;
        console.log(thisQnum);
        // remove and reID the following questions
        for (i = thisQnum; i < questionCount; i++) {
            // reID the following question's div
            $("#q" + (i + 1)).attr('id', "q" + i);
            // reID the following question's remove button
            $("#btn-rem" + (i + 1)).attr('id',"btn-rem" + i);
            // reinitialize the button listener for the remove button
            $("#btn-rem" + i).unbind();
            initBtnRem(i);
        }
        questionCount--;
    });
}


function oAddBtn(qNum) {
    return '<button type="button" class="btn btn-default btn-oAdd' + qNum + '">Add Option</button>';
}

function initBtnOAdd(noWSType) {
    $(".btn-oAdd").click(function () {
        var times = 0;
        if (($(this).prev().children().length) >= MAX_OPTIONS) {
            alert("Sorry, you may only have " + MAX_OPTIONS + " options per question.")
        } else {
             $(this).prev().append(addOption(noWSType)); 
        } 
    });
}

function addOption(noWSType) {
    return '<label class="option">Option'
            + '<input type=text class="form-control" name="questions[][' + noWSType + '"]>'
         + '</label>';
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