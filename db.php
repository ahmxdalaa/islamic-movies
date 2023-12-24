<?php
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];


if (isset($_POST['Book']))
{
    $host ="localhost";
    $user ="root";
    $password ="";
    $db ="islamic_movies";

    $conn = mysqli_connect($host,$user,$password,$db );


    $insert ="insert into users values('$email', '$password' )" ;

    mysqli_query($conn ,$insert);

    if($conn){
        echo("<h1>   done </h1>");
    }

    else{
        echo("<h1>  ERROR </h1>");
    }
}


?>