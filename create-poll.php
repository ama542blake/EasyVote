<?php
    /* Connect to DB */
    $servername="localhost";
    $username="root";
    $password="";
	$database="EVDemo";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Successful connection";
    /* End connect to DB */

    
    if(isset($_POST['questions']) && isset($_POST['poll-name']) && isset($_POST['theme'])) {
        $pollName = $_POST['poll-name'];
        $questions = $_POST['questions'];
        $theme = $_POST['theme'];

        // create new survey in the database
        $insertPoll = "INSERT INTO Surveys (name, theme) VALUES ('{$pollName}', '{$theme}')";
        // $conn->query($insertPoll) performs the actual insertion
        if ($conn->query($insertPoll) === FALSE) {
            echo "<br>Error: " . $insertPoll . "<br>" . $conn->error;
            die();
        }
        echo "<br>New record created successfully";
        // get the ID of the newly added poll
        $surveyID = $conn->insert_id;
        
        foreach ($questions as $key => $question) {
            // will hold all options for each question
            $optionContainer = [];
            // will be used to construct Question object
            $questionPrompt = NULL;
            // inner iteration counter
            $i = 0;
            // loop through the question text (index 0 is the question prompt, every thing after is an option)
            foreach ($question as $option) {
                // question text
                if ($i === 0) {
                    $questionPrompt = $option; 
                    $i++;
                } else { // option
                    // add the option to the options array
                    array_push($optionContainer, $option);
                    $i++;
                }
            } // end inner foreach

            // add questions and options to database
            if ($key === "FreeResponse") {
                //$newQuestion = new FreeResponse($questionPrompt, NULL);
                // insert question into DB
                $insertQuestion = "INSERT INTO questions (parent_survey_id, text, type) VALUES ('{$surveyID}', '{$questionPrompt}', '{$key}')";
                $conn->query($insertQuestion);
            } else { // question is a multiple choice question, doesn't matter which type
                // insert question into DB
                $insertQuestion = "INSERT INTO questions (parent_survey_id, text, type) VALUES ('{$surveyID}', '{$questionPrompt}', '{$key}')";
                $conn->query($insertQuestion);
                // id of most the most recent question options need to be added to DB
                $questionID = $conn->insert_id;
                foreach ($optionContainer as $option) {
                    $insertOption = "INSERT INTO options (text, parent_question_id) VALUES ('{$option}', '{$questionID}')";
                    $conn->query($insertOption);
                } // end option adding foreach
            } // end if else block
        } // end outer foreach
    } //end outer if

?>