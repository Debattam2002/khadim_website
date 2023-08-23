<?php

$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'login');

if(isset($_POST['sign']))
{
    $email = $_POST['email'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];
    $mobile = $_POST['mobile'];

    $query = "insert into signup (`email`,`password1`,`password2`,`mobile`) values ('$email','$password1','$password2','$mobile')";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        echo '<script> alert("Data Saved"); </script>';
         header('Location : index.html');
        
       
    }
    else
    {
        echo '<script> alert("Data donot Saved"); </script>';
    }
}

?>