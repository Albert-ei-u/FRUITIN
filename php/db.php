<?php
$host = "localhost";
$user = "root";
$pass = "<mypass>"; 
$dbname = "fruitin_rwanda";
$port = 3306;

$conn = new mysqli($host, $user, $pass, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
