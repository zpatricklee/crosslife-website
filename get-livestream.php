<?php
  // Connect to DB
  include "db.php";

  $sql = "
  SELECT contents
  FROM updates
  WHERE update_type = 'livestream'
  ORDER BY id DESC
  LIMIT 0,1
  ";
  
  $result = $conn->query($sql);


  if($result->num_rows > 0){
    //output data
    $contents = $result->fetch_assoc();
    echo $contents['contents'];
  }

?>