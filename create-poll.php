<?php
    $questions = $_POST['questions'];
    $theme = $_POST['theme'];

    // for now this just echos the fields, but will
    // actually do something later
    foreach ($questions as $key => $question) {
        // will hold all options for each question
        $optionContainer = new Array();
        // will be used to construct Question object
        $questionPrompt = NULL;
        // inner iteration counter
        $i = 0;
        
        // loop through the question text (index 0 is the question prompt, every thing after is an option)
        foreach ($question as $option) {
            // question text
            if ($i === 0) {
                $questionPrompt = $option;   
                i++;
            } else { // option
                // add the option to the options array
                array_push($optionContainer, $option);
                i++;
            }
        } // end inner foreach
        // create a question object with this data
        // then query the DB with this round of info: $questionPrompt, $optionContainer
        if ($key === "FreeResponse") {
            $newQuestion = new FreeResponse($questionPrompt, NULL);
            // query the DB
        } elseif ($key = "SingleSelection") {
            $newQuestion = new MultipleChoice($questionPrompt, NULL, $optionContainer, TRUE);
            // query the DB
        } else { // $key === "MultipleSelection
            $newQuestion = new MultipleChoice($questionPrompt, NULL, $optionContainer, FALSE);
            // query the DB
        }
    } // end outer foreach

?>