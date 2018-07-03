<?php
$name = $_POST['Name'];
$vis_email = $_POST['Email'];
$message = $_POST['Message'];

// Collect the message
$from_email = 'nbrowne@ucsd.edu';
$email_subject = "From your website";
$email_body = "You've got a message from $name.\n Email address: $vis_email.\n Here's the message:\n $message";

$to_email = 'nbrowne@ucsd.edu';
$headers = "From: $from_email \r\n";

// Send the email
mail($to_email, $email_subject, $email_body, $headers);
header("Location: http://acsweb.ucsd.edu/~nbrowne/#contact");
?>