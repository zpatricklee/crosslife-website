<?php
  session_start();

  // Get connection to DB
  include "db.php";

  if($stmt = $conn->prepare("INSERT INTO announcement (user, contents) VALUES (?, ?)"))
  {
    $user = $_SESSION['user'];
    $contents = $_POST['editor1'];
  
    // var_dump($stmt);
  
    $stmt->bind_param("ss", $user, $contents);
    // $date_added = date('m/d/Y h:i:s a', time());
    $stmt->execute();
    $stmt->close();
  }

  // echo $contents;

  // echo date('m/d/Y h:i:s a');

  // Automatically log out user after submitting announcement changes


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    <?php include "./scss/main.css" ?>
  </style>
  <title>Crosslife</title>
</head>
<body>
  <div class="edit-confirmation">
    <p>
      Announcements successfully updated <br>
      <a href='./logout'>Log out</a> or <a href='./edit'>return to previous page</a>
    </p>
  </div>
</body>
</html>