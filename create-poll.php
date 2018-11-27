<?php
    $questions = $_POST['questions'];
    $theme = $_POST['theme'];

    // for now this just echos the fields, but will
    // actually do something later
    foreach ($questions as $key => $question) {
        echo $key . '<br>';
            foreach ($question as $option) {
                echo $option . '<br>';
        }
    }
?>