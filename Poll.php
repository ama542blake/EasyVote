<?php   
     class Poll {
        static private pollCount = 0;
        private $ID;
        private $title;
        private $theme;
         // array of question objects, either MultipleChoice or FreeResponse
        private $author;
        private $questions;
        //$URL;
         
        // constructor, obviously
        public function __construct($title, $author, $theme, $questions) {
            $this->id = assignID();
            $this->title = $title;
            $this->author = $author;
            $this->theme = $theme;
            $this->questions = $questions;
            //$this.url = "http://104.196.131.103/" . $this.ID; ... possibly
        }
         
        // assigns ID based on number of questions
        private static assignID() {
            return ++$pollCount;
        }
         
        public getID() {
            return $this->ID;
        }
         
        public getTitle() {
            return $this->title;
        }
         
        public getID() {
            return $this->author;
        }
         
        public getTheme() {
            return $this->theme;
        }
         
        public getAuthor() {
            return $this->author;
        }
        
        public getQuestions() {
            return $this->questions;
        }
    }

?>
