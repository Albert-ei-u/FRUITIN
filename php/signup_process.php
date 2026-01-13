<?php
require 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['signup-name'];
    $email = $_POST['signup-email'];
    $password = password_hash($_POST['signup-password'],PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";
    
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $fullname, $email,$password);

    if ($stmt->execute()) {
        echo "Registration successful! <a href='login.html'>Click here to Login</a>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>