<?php
  // $serverName = "localhost";
  // $username = "root";
  // $password = "";
  // $dbName = "crosslife";  
  
  $RDS_HOSTNAME = "crosslife-aws.ceya87m504ve.us-west-1.rds.amazonaws.com";
  $RDS_PORT = "3306";
  $RDS_DB_NAME = "crosslife";
  $RDS_USERNAME = "admin";
  $RDS_PASSWORD = "veriTas316";

  // Create connection
  $conn = new mysqli($RDS_HOSTNAME, $RDS_USERNAME, $RDS_PASSWORD, $RDS_DB_NAME, $RDS_PORT);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // echo "Connected successfully";
?>