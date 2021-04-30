<?php
  session_start();
  if(!isset($_SESSION['user'])){
    session_unset();
    session_destroy();
    header("location: admin"); 
  }
  // echo $_POST['livestream-link'];

  if(isset($_POST['livestream-link']) && !empty($_POST['livestream-link'])){
    // Connect to DB
    include "db.php";
    
    $livestream = $_POST['livestream-link'];
    
    if($stmt = $conn->prepare("INSERT INTO updates (user, contents, update_type) VALUES (?, ?, ?)")){
      // echo $livestream;
      $user = $_SESSION['user'];
      $contents = $_POST['livestream-link'];
      $update_type = "livestream";

      $stmt->bind_param("sss", $user, $contents, $update_type);
      $stmt->execute();
      $stmt->close();
    }
  } else header("location: admin");

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
      Successfully updated <br>
      <a href='./logout'>Log out</a> or <a href='./edit'>return to previous page</a>
    </p>
  </div>
</body>
</html>