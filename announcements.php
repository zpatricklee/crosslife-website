<!DOCTYPE html>
<html lang="en">
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
    <script defer src="js/script.js"></script>
  </head>
  <body>
    <header class="header">
      <nav class="nav">
        <a href="./"
          ><img
            class="crosslife-logo"
            src="images/crosslife-logo.png"
            alt=""
            class="nav__logo"
        /></a>
        <!-- <div id="announcement-banner">
          <p id="announcement-banner-text">RESURRECTION SUNDAY</p>
          <p id="easter-countdown"></p>
        </div> -->
        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" id="nav-home" href="./#home">HOME</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-sermons" href="./#sermons"
              >SERMONS</a
            >
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-giving" href="./#giving"
              >GIVING</a
            >
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-location" href="./#location"
              >LOCATION</a
            >
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-contact" href="./#contact"
              >CONTACT</a
            >
          </li>
          <li class="nav__item">
            <a
              class="nav__link nav--active"
              id="nav-announcements"
              href="./announcements"
              >ANNOUNCEMENTS</a
            >
          </li>
        </ul>
        <div class="menu-btn">
          <div class="menu-btn__burger"></div>
        </div>
      </nav>
    </header>

    <!-- Hamburger Menu -->
    <div class="menu__modal">
      <div class="menu__modal-content">
        <ul class="menu__links">
          <li class="menu__item">
            <a class="menu__link" href="./#home">HOME</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="./#sermons">SERMONS</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="./#giving">GIVING</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="./#location">LOCATION</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="./#contact">CONTACT</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="./announcements">ANNOUNCEMENTS!</a>
          </li>
        </ul>
      </div>
    </div>

    <section class="section" id="announcements">
      <h1 class="section__title">ANNOUNCEMENTS</h1>
      <br /><br />
      <div class="section__content">

        <div class="announcements">
          <?php include "./get-announcements.php" ?>
        </div>
        <!-- <ul class="announcements">
          <span class="announcements-header">DAILY DEVOTIONS</span>
          <li class="announcements-list">
            Monday-Saturday @ 6:45AM-7:15AM (online)
          </li>
          <br />
          <span class="announcements-header">DAILY CALLS TO PRAYER</span>
          <li class="announcements-list">
            Monday-Friday @ 6AM, 9AM, 12PM, 3PM, 6PM (we will join together to
            prayer at these times throughout the day)
          </li>
          <br />
          <span class="announcements-header">FASTING</span>
          <li class="announcements-list">
            I encourage you to schedule your fast for Passion Week, by day or by
            meal. Also, there will be fasting on during the day of Good Friday,
            which all are invited to participate in.
          </li>
          <br />
          <span class="announcements-header">GOOD FRIDAY WORSHIP</span>
          <li class="announcements-list">Friday @ 8PM (online)</li>
          <li class="announcements-list">
            Resurrection Sunday will be in-person, outside on our chapel patio
          </li>
          <li class="announcements-list">
            We will also be having Communion during this worship service.
          </li>
          <li class="announcements-list">
            Therefore, please prepare the elements for the LORD’s Table:
          </li>
          <li class="announcements-list">- Bread</li>
          <li class="announcements-list">
            - Cup: Grape or dark juice is preferable
          </li>
          <br />
          <span class="announcements-header">RESURRECTION SUNDAY</span>
          <li class="announcements-list">
            Sunday @ 11AM (In-Person & Live Streaming)
          </li>
          <li class="announcements-list">
            <strong>In-person:</strong> Worship will take place outside on the
            chapel patio. Safety protocols will be in place, including spaced
            seating, mandatory mask wearing throughout gathering. We hope you’ll
            join us for worship on the church campus!
          </li>
          <li class="announcements-list">
            <strong>Online:</strong> Worship will also be live streamed via
            YouTube Live for those who do not yet feel safe gathering in-person.
            <u
              >I will be sending out an email specifically providing the
              information for the live stream.</u
            >
          </li>
          <br />
          <span class="announcements-header">COMMUNITY GROUPS</span>
          <li class="announcements-list">
            Community Groups (CGs) will be on break this week.
          </li>
          <li class="announcements-list">South Bay CG on Tuesday nights</li>
          <li class="announcements-list">LA/OC CG on Wednesday nights</li>
          <br />
          <span class="announcements-header">PRAYER MEETING</span>
          <li class="announcements-list">
            Every Sunday morning @ 10AM, members of our church meet together to
            pray for our church. Everyone is invited to join in!
          </li>
          <br />
          <span class="announcements-header">STREAMING</span>
          <li class="announcements-list">
            Audio streaming for the sermons have moved to
            <a
              class="sermons__spotify-link"
              href="spotify:show:4kThl6swDryOK9aY1jOCov"
              ><strong>Spotify</strong></a
            >
            and
            <a class="sermons__anchor-link" href="https://anchor.fm/crosslifecf"
              ><strong>Anchor</strong></a
            >
          </li> 
        </ul> -->
      </div>
    </section>

    <footer class="footer bottom">
      <table class="footer__service-info">
        <tr class="footer__service-location">
          <td class="footer__service-img">
            <img src="./images/church.svg" alt="" />
          </td>
          <td class="footer__service-message"><b>JOIN US FOR WORSHIP!</b></td>
        </tr>
        <tr class="footer__service-location">
          <td class="footer__service-location-img">
            <svg
              class="footer__item--location-img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                style="fill: #ffffff"
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
            </svg>
          </td>
          <td class="footer__service-location-address">
            1340 W Gardena Blvd <br />
            Gardena, CA 90247 <br />
          </td>
        </tr>
        <tr class="footer__service-time">
          <td class="footer__service-time-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="footer__item--time-img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                style="fill: #ffffff"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
              />
            </svg>
          </td>
          <td class="footer__service-time-info">
            Sundays <br />
            11:00AM <br />
          </td>
        </tr>
      </table>
      <div class="footer__socials">
        <p><b>FOLLOW US!</b></p>
        <!-- <br /> -->
        <ul>
          <li class="footer__social-img">
            <a
              href="https://www.youtube.com/channel/UC9cqKtDJQFvr_0Yq09RLJRw"
              class="footer__social-link"
            >
              <img id="social--instagram" src="./images/youtube.svg" alt="" />
            </a>
          </li>
          <li class="footer__social-img">
            <a
              href="spotify:show:4kThl6swDryOK9aY1jOCov"
              class="footer__social-link"
            >
              <img id="social--instagram" src="./images/spotify.svg" alt="" />
            </a>
          </li>
          <li class="footer__social-img">
            <a
              href="https://www.instagram.com/crosslifechristianfellowship/?hl=en"
              class="footer__social-link"
            >
              <img id="social--instagram" src="./images/instagram.svg" alt="" />
            </a>
          </li>
          <li class="footer__social-img">
            <a
              href="https://www.facebook.com/CrosslifeChristianFellowship/"
              class="footer__social-link"
            >
              <img id="social--instagram" src="./images/facebook.svg" alt="" />
            </a>
          </li>
          <li class="footer__social-img">
            <a
              href="https://www.yelp.com/biz/crosslife-christian-fellowship-gardena"
              class="footer__social-link"
            >
              <img id="social--instagram" src="./images/yelp.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
</html>
