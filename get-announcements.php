<?php
  // Connect to DB
  include "db.php";

  $stmt = $conn->prepare("
  SELECT contents
  FROM announcement
  ORDER BY id DESC
  LIMIT 0,1
  ");
  $stmt->execute();
  $stmt->store_result();
  if($stmt->num_rows === 0) exit('No rows');
  $stmt->bind_result($contents);
  $stmt->fetch();

  echo $contents;
?>