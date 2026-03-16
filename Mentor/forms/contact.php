<?php
// Replace with your real receiving email address
$receiving_email_address = "info@cumlaudeinstitute.co.za";

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $phone   = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';

    // Build the email content
    $email_content  = "From: $name\n";
    $email_content .= "Email: $email\n";
    if ($phone) {
        $email_content .= "Phone: $phone\n";
    }
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($receiving_email_address, $subject, $email_content, $headers)) {
        echo "OK"; // This is what the JS expects for success
    } else {
        echo "Error sending email!";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>