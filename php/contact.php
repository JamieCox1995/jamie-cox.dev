<?php
    $sender_name = $_POST['name'];
    $sender_email = $_POST['email'];
    $sender_message = $_POST['message'];


    $recipient_email = 'jamie.cox1995@outlook.com';
    $email_subject = 'New Website Contact Form';
    $email_body = "You have received a new message from a user! $sender_name said: \n $sender_message";

    $email_headers = "From:  $sender_email \r\n";

    mail($recipient_email, $email_subject, $email_headers);
?>