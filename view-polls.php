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
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="EasyVote">
    <meta name="keywords" content="HTML">
    <title>View Polls</title>
    
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="index-demo.css">
</head>
<body onload="runViewPoll();">
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
                    <a href="../index.html" class="navbar-brand"><img src="Images/Logo.png" width="55" height="30"></a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="../about.html">About</a></li>
                    <li><a href="../contact.html">Contact</a></li>
                </ul>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="headlinks">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="../signup.html">Sign Up</a></li>
                        <li><a href="../login.html">Log In</a></li>
                        <li><a href="../display-polls.html">View Polls</a></li>
                        <li><a href="../create-poll.php">Create Poll</a></li>
                    </ul>
                   </div>
            </div>
        </nav>
    </header>
    
    <form action="respond.php" method="post">
        <?php
            // create array of all poll-names
            $pollQuery = "SELECT survey_name FROM surveys";
            $queryRes = $conn->query($pollQuery);
            if ($queryRes->num_rows > 0) {
                while ($row = mysqli_fetch_assoc($queryRes)) {
                    $name = $row['name'];
                    echo "<label>View {$name}:<br>"
                        . "<input type='submit' class='btn btn-default' name='selectedPoll' value='{$name}'>"
                        . "</label><br>";
        }
    } 
        ?>
    </form>
    
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>