<?php
  // Connect to DB
  include "db.php";

  $sql = "
  SELECT contents
  FROM announcement
  ORDER BY id DESC
  LIMIT 0,1
  ";
  $result = $conn->query($sql);
  // echo $result->num_rows;

  if($result->num_rows > 0){
    //output data
    $contents = $result->fetch_assoc();
    echo $contents['contents'];
  }

?>