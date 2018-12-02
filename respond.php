<?php
    /* connect to DB */
    $servername="localhost";
    $username="easyvote";
    $password="3asy123";
	$database="easy_vote";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Successful connection";
    /* end connect to DB */

    if (isset($_POST['selectedPoll'])) {
        $selectedPoll = $_POST['selectedPoll'];
        echo $selectedPoll;
    } else {
        echo("Bad request");
    }

    // get the ID for the survey that the questions need to be loaded for
    $getPoll = "SELECT survey_id FROM surveys WHERE survey_name='{$selectedPoll}' LIMIT 1";
    $result = $conn->query($getPoll);
    if ($result->num_rows === 1) {
        $row = mysqli_fetch_assoc($result);
        $poll_id = $row['survey_uid'];
    } else {
        echo "ERROR";
    }

    // use poll_ id to retrieve the questions
    $getQuestions = "SELECT question_id, question_text, question_type FROM questions WHERE parent_survey_uid='{$poll_id}'";
    $questions = $conn->query($getQuestions);
    if ($questions->num_rows !==0) {
        // holds all question_ids for the poll
        $question_id = [];
        // holds the text of each question
        $qText = [];
        // holds the question type of each question
        $qType = [];
        while ($row = mysqli_fetch_assoc($questions)) {
            array_push($question_id, $row['question_uid']);
            array_push($qText, $row['question_text']);
            array_push($qType, $row['question_type']);
        }
        
        echo "<form action='' method='post'>";
        // display the questions
        foreach ($question_id as $key => $value) {
            echo "<br><h1>{$qText[$key]}</h1>";
            // display options/text box
            if ($qType[$key] === "FreeResponse") {
                echo "<textarea rows='6' cols='36'></textarea>"; // need to add name
            } else if ($qType[$key] === "SingleSelection") {
                $getOptions = "SELECT option_text FROM options WHERE parent_question_uid ='{$question_id[$key]}'";
                $options = $conn->query($getOptions);
                //print_r($options);
                if ($options->num_rows > 0) {
                    while ($innerRow = mysqli_fetch_assoc($options)) {
                        $text = $innerRow['option_text'];
                        echo "<br><label><input type='radio' name='idkyet[]'>  {$text}</label>"; // NEED TO REPLACE 
                    } 
                } 
            } else if ($qType[$key] === "MultipleSelection") {
                $getOptions = "SELECT text FROM options WHERE parent_question_id ='{$question_id[$key]}'";
                $options = $conn->query($getOptions);
                //print_r($options);
                if ($options->num_rows > 0) {
                    while ($innerRow = mysqli_fetch_assoc($options)) {
                        $text = $innerRow['option_text'];
                        echo "<br><label><input type='checkbox' name='idkyet[]'>  {$text}</label>"; // NEED TO REPLACE 
                    }
                }
        
            }
            echo "</form>"
        }
    }

?>