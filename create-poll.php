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

    /* insertions */
    if(isset($_POST['poll-name']) && isset($_POST['theme']) && isset($_POST['questions'])) {
        /* collect form data */
        $pollName = $_POST['poll-name'];
        $questionsArr = $_POST['questions'];
        $theme = $_POST['theme'];
        if (isset($_POST['options'])) {
            $optionsArr = $_POST['options']; 
        }
        /* end collect form data */
            
        /* insert poll into DB */
        $insertPoll = "INSERT INTO surveys (survey_name, survey_theme) VALUES ('{$pollName}', '{$theme}')";
        if ($conn->query($insertPoll) === TRUE) {
            global $pollID;
            echo "<br>Poll successfully inserted into DB!";
            $pollID = $conn->insert_id;
        } else {
            echo "<br>Error: " . $insertPoll . "<br>" . $conn->error;
            die();
        }
        echo "<br>New record created successfully";
        echo $pollID;
        /* end insert poll into DB */
        
        $qNum = 0;
        /* insert questions and options*/
        foreach ($questionsArr as $index => $questions) {
            ++$qNum;
            foreach ($questions as $type => $qText) {
                $insertQuestion = "INSERT INTO questions (survey_uid, question_text, question_type) VALUES ('{$pollID}', '{$qText}', '{$type}')";
                $conn->query($insertQuestion);
                $qID = $conn->insert_id;
                // insert options
                $i = 0;
                while (isset($optionsArr[$qNum][$i])){
                    $insertOption = "INSERT INTO options (option_text, parent_question_uid) VALUES ('{$optionsArr[$qNum][$i]}', '{$qID}')";
                    $conn->query($insertOption);
                    ++$i;
                }
            }
        }
        /* end insert questions and options*/
        
    } // end inertions
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="EasyVote">
    <meta name="keywords" content="HTML">
    <title>Create a Poll</title>

    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="../index.css">
</head>

<body>
    <header>
        <nav class="navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <!-- hamburger button -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headlinks" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="..index.html" class="navbar-brand"><img src="Images/Logo.png" width="55" height="30"></a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="..about.php">About</a></li>
                    <li><a href="..contact.html">Contact</a></li>
                </ul>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="headlinks">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="../signup.html">Sign Up</a></li>
                        <li><a href="../login.html">Log In</a></li>
                        <li><a href="../view-polls.php">View Polls</a></li>
                        <li><a href="#">Create Poll</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <form action="#" method="post">
        <label>Give your poll a name!
            <input type="text" name="poll-name" class="form-control">
        </label>
        
        <div id="qBlock">
        </div>

        <div>
            <button type="button" class="btn btn-default" id="fr">Add free response</button>
            <button type="button" class="btn btn-default" id="ms">Add multiple selection</button>
            <button type="button" class="btn btn-default" id="ss">Add single selection</button>
            <br> <br>
            <button type="submit" class="btn btn-default">Submit</button>
        </div>

        <div>
            <h4>Select a theme for your survey:</h4>
            <div class="radio">
                <label><input type="radio" name="theme" value="Default" checked>Default</label>
                <label><input type="radio" name="theme" value="Light">Light</label>
                <label><input type="radio" name="theme" value="Dark">Dark</label>
                <label><input type="radio" name="theme" value="Forest">Forest</label>
                <label><input type="radio" name="theme" value="Seaside">Seaside</label>
            </div>
        </div>

    </form>


    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="/js/create-poll.js"></script>
</body>

</html>