<?php
   public class MultipleChoice extends Question {
       //array of options
       private $options;
       // differentiate between multiple selection and single selection, T=single selection, F=multiple selection
       private $isSingleSelection;
       
       // when using the class to CREATE poll, pass in NULL for $options and $response
       public __construct($questionPrompt, $response, $options, $isSingleSelection) {
           parent::__construct($questionPrompt, $response);
           $this->options = $options;
           $this->isSingleSelection = $isSingleSelection;
       }
       
       public getOptions() {
           return $this->options;
       }
       
       // F = multiple selection, T = single selection
       public getQType() {
           return $this->isSingleSelector;
       }
   } 
?>