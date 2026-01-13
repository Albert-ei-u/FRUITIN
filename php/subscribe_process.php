<?php
require 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['sub-email'];

    // Check if email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $sql = "INSERT INTO subscribers (email) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);

        try {
            if ($stmt->execute()) {
                echo "<script>alert('Subscribed successfully!'); window.history.back();</script>";
            }
        } catch (mysqli_sql_exception $e) {
            echo "<script>alert('This email is already subscribed!'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Invalid email address.'); window.history.back();</script>";
    }
}
?>