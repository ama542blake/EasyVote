<?php
    public class FreeResponse extends Question {
        private $response;
        
        // when using the class to CREATE poll, pass in NULL for $response
        public __construct($questionPrompt, $response) {
            parent::__construct($questionPrompt, $response);
        }
    }
?>