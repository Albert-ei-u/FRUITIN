<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = trim($_POST['name']);
    $email    = trim($_POST['email']);
    $phone    = trim($_POST['phone']);
    $location = trim($_POST['residence']);

    if (empty($name) || empty($email) || empty($phone)) {
        echo "<script>alert('Please fill in all required fields.'); window.history.back();</script>";
        exit;
    }

    $sql = "INSERT INTO contact_messages (name, email, phone, location) VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("ssss", $name, $email, $phone, $location);

    if ($stmt->execute()) {
        echo "<script>
                alert('Thank you, $name! Your message has been sent successfully.');
                window.location.href='contactUs.html';
              </script>";
    } else {
        echo "Oops! Something went wrong: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: contactUs.html");
}
