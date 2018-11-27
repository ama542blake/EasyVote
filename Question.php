<?php
    public abstract class Question {
        protected $questionPrompt;
        protected $response;
    }

    public __construct($questionPrompt, $response) {
        $this->questionPrompt = $questionPrompt;
        $this->response = $response;
    }

    public getQuestionPrompt() {
        return $this->questionPrompt;
    }

    public getResponse() {
        return $this->getResponse;
    }

?>
