<?php
  session_start();
  if(!isset($_SESSION['user'])){
    session_unset();
    session_destroy();
    header("location: admin"); 
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <link
      href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap"
      rel="stylesheet"
    /> -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,600;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap"
      rel="stylesheet"
    />
    <!-- <link rel="stylesheet" href="./scss/main.css" /> -->
    <style>
      <?php include "./scss/main.css" ?>
    </style>
    <title>Crosslife</title>
    <script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
  </head>
  <body>
    <nav class="admin-nav">
      <a href="./"
          ><img
            class="crosslife-logo"
            src="images/crosslife-logo.png"
            alt=""
            class="nav__logo"
        />
      </a>
      <a class="admin-logout" href="logout">LOG OUT</a>
    </nav>
    <form style="text-align: center" action="update-announcements" method="POST">
      <textarea name="editor1" required></textarea><br>
      <input style="text-align: center; padding: 5px 10px" type="submit" value="UPDATE ANNOUNCEMENTS">
      <script>
        CKEDITOR.replace( 'editor1' );
      </script>
    </form>
    <br><br>
    <form class="update-livestream" style="text-align: center" action="update-livestream" method="POST">
      <input type="text" name="livestream-link" size="40" id="livestream-input" required><br>
      <input type="submit" value="UPDATE LIVESTREAM LINK" id="livestream-btn">
    </form>

    <!-- <?php
      echo $_SESSION['user'];
    ?> -->

  </body>
</html>