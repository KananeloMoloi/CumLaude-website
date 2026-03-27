<?php
header('Content-Type: application/json');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if(!$email){
        echo json_encode(['success' => false, 'error' => 'Invalid email']);
        exit;
    }

    // 1️⃣ Send email to you
    $to = "info@cumlaudeinstitute.co.za"; // must be your cPanel email
    $headers = "From: ".$to."\r\n"; // important: use your own email as From
    $headers .= "Reply-To: ".$email."\r\n"; // user's email goes here
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $sentToYou = mail($to, $subject, $body, $headers);

    // 2️⃣ Send automated thank-you email to sender
    $autoSubject = "Thank you for contacting CumLaude Research Institute";
    $autoMessage = "Hello $name,\n\nThank you for contacting CumLaude Research Institute. We will get back to you as soon as possible.\n\nKind regards,\nCumLaude Research Institute";
    $autoHeaders = "From: ".$to."\r\n"; // must be your cPanel email

    $sentToSender = mail($email, $autoSubject, $autoMessage, $autoHeaders);

    if($sentToYou && $sentToSender){
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Mail sending failed']);
    }

} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
}
?>