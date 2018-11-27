<?php
    $questions = $_POST['questions'];
    $theme = $_POST['theme'];

    foreach ($questions as $question) {
        foreach ($question as $option) {
            echo $option . '<br>';
        }
    }
?>