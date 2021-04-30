<?php
  // if(isset($_SESSION['user'])){
    session_start();
    session_unset();
    session_destroy();
  // }
  // echo $_SESSION['user'];

  if(isset($_GET['login']) && $_GET['login'] === 'unsuccessful'){
    $errorMsg = "Email and/or password did not match";
  } 
  else $errorMsg = '';

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      <?php include "./scss/main.css" ?>
    </style>
    <title>Crosslife</title>
  </head>
  <body>
    <nav>
      <a href="./"
          ><img
            class="crosslife-logo"
            src="images/crosslife-logo.png"
            alt=""
            class="nav__logo"
        />
      </a>
    </nav>
    <table class="admin-login-container">
      <form action="validate.php" method="POST">
        <tr><th style="text-align: right">Email: </th><td><input type="text" name="email"></td></tr>
        <tr><th>Password: </th><td><input type="password" name="password"></td></tr>
        <tr><td></td><td style="text-align: center"><input class="submit" type="submit" value="LOGIN" name="login"></td></tr>        
      </form>
      <p style="color: red; text-align: center">
        <?php 
          if(isset($errorMsg) && !empty($errorMsg)){
            echo $errorMsg;
          }
        ?>
      </p>
      
    </table>
  </body>
</html>
