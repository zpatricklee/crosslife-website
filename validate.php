<?php
  // connect to DB
  include "db.php";

  // $hashPW = password_hash($testPW, PASSWORD_BCRYPT);
  // echo "<br>" . $hashPW . "<br>";
  // echo password_verify("1", '$2y$10$4ilVvHOPdVZGB/dMV22/rOyLKD3.0jcf2bAM58a71mDZ2xb5NmZKC') . "<br>";
  // echo $_POST['email'] . " " . $_POST['password'] . "<br>";

  // $stmt = $conn->prepare("INSERT INTO admin VALUES (?, ?)");
  // $hashedPW = password_hash($_POST['password'], PASSWORD_BCRYPT);
  // $stmt->bind_param("ss", $_POST['email'], $hashedPW);
  // $stmt->execute();
  // echo $conn->insert_id;
  // $stmt->close();

  $stmt = $conn->prepare("SELECT * FROM admin WHERE email = ?");
  $stmt->bind_param("s", $_POST['email']);
  $stmt->execute();
  $result = $stmt->get_result()->fetch_assoc();

  echo "<br>";
  
  if(password_verify($_POST['password'], $result['hash_pw'])){
    session_start();
    $_SESSION['user'] = $_POST['email'];
    header("location: edit.php");
  }
  else{
    header("location: admin.php");
  }
  var_export();
?>