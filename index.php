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
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,600;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./scss/main.css" />
    <title>Crosslife</title>
    <script defer src="js/script.js"></script>
  </head>
  <body>
    <header class="header">
      <nav class="nav">
        <a href="./"
          ><img class="crosslife-logo" src="images/crosslife-logo.png" alt="" class="nav__logo"
        /></a>
        <!-- <div id="announcement-banner">
          <p id="announcement-banner-text">RESURRECTION SUNDAY</p>
          <p id="easter-countdown"></p>
        </div> -->
        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link nav--active" id="nav-home" href="./#home">HOME</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-sermons" href="./#sermons">SERMONS</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-giving" href="./#giving">GIVING</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-location" href="./#location">LOCATION</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-contact" href="./#contact">CONTACT</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" id="nav-announcements" href="./announcements">ANNOUNCEMENTS</a>
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
            <a class="menu__link" href="./announcements">ANNOUNCEMENTS</a>
          </li>
        </ul>
      </div>
    </div>


    <section class="section-container" id="home">
      <div class="section">
      <h1 class="section__title">Welcome to Crosslife Christian Fellowship</h1>
      <br /><br />
      <p class="section__content">
        We exist as a church to make Jesus Christ known. <br />
        Our lives have been transformed through Him — His sacrifice and
        resurrection. <br />
        Therefore, our mission is to renew lives for Christ by experiencing
        discipleship together in community.
        <br />
        <br />
      </p>
      <br />

        <img class="home-pic" src="images/home-pic.gif" alt="" />

      </div>
    </section>

    <section class="section-container" id="sermons">
      <div class="section" >
        <h1 class="section__title">SERMONS</h1>
        <br />
        <br>
        <p class="section__content">
          <!-- <span id="livestream"><a href="https://www.youtube.com/channel/UC9cqKtDJQFvr_0Yq09RLJRw">Join us LIVE every Sunday @ 11:00AM!</a></span>
          <br><br>
          <div class="youtube-livestream">
            <iframe width="" height="" src="<?php include "./get-livestream.php" ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="lyrics-pdf">
            <strong>
            Click to open/download: <br> 
            >> <a href="resources/06_20_21_Praise_Lyrics.pdf" frameborder="0">PRAISE LYRICS</a> <<
            </strong>
          </div> -->
  
          <br><br>
          LAST WEEK'S SERMON <br />
          <div id="anchor-player">
            <iframe
              src="https://anchor.fm/crosslifecf/embed"
              frameborder=""
              scrolling="no"
            ></iframe>
          </div>
  
          <br /><br />
            Previous sermons can be found and listened to on
            <a
              class="sermons__spotify-link"
              href="spotify:show:4kThl6swDryOK9aY1jOCov"
              ><strong>Spotify</strong></a
            >
            or
            <a class="sermons__anchor-link" href="https://anchor.fm/crosslifecf"
              ><strong>Anchor</strong></a
            >
            <br />
            To find/follow us, click or use the Spotify code below<br />
          <br />
          <a href="spotify:show:4kThl6swDryOK9aY1jOCov"
            ><img
              class="sermons__spotify-code"
              src="images/spotify-code.png"
              alt=""
          /></a>
        </p>
      </div>
    </section>

    <section class="section-container" id="giving">
      <div class="section" >
      <h1 class="section__title">GIVING</h1>
      <br />
      <p class="section__content">
        <div class="giving-container">
          <div class="giving__section-2">
            We offer online giving through Tithe.ly<br />

              Please note the following fees when giving via Tithe.ly:<br /><br />
              <span class="giving__tithely-fees">
                2.9% + 0.30 per transaction <br />
                ACH/Bank: 1% + 30¢ <br />
                AMEX: 3.5% + 30¢ <br />
              </span>
            <br />
            <button class="tithely-give-btn" data-church-id="1294663">
              Give Online
            </button>
            <script src="https://tithe.ly/widget/v2/give.js?3"></script>
            <script>
              var config = {};
              var tw = create_tithely_widget(config);
            </script>
          </div>
        </div>
      </p>
      </div>
    </section>

    <section class="section-container" id="location">
      <div class="section" >
      <h1 class="section__title">LOCATION</h1>
      <br />
      <p class="section__content">
        1340 W Gardena Blvd. Gardena, CA 90247<br />
        Join us for service every Sunday @ 11:00AM <br />
        <span class="important-message"
          >**Due to COVID-19, our worship services have moved to our outdoor
          patio until further notice</span
        >
        <br /><br />
        <div class="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6624.67009077572!2d-118.29930200000001!3d33.881024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cb45a41293ad%3A0x17357299a30e056c!2sCrosslife%20Christian%20Fellowship!5e0!3m2!1sen!2sus!4v1616889848226!5m2!1sen!2sus"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </p>
      </div>
    </section>

    <!-- CONTACT FORM -->
    <section class="section-container" id="contact">
      <div class="section" >
        <h1 class="section__title">CONTACT US</h1>
        <div class="section__content">
          <form
            class="contact"
            action="https://formspree.io/f/xaylrnvy"
            method="POST"
          >
            <br />
            <input
              class="input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <br />
            <input
              class="input"
              type="email"
              name="_replyto"
              placeholder="Email"
              style="margin-top: 1rem"
              required
            />
            <br /><br />
            <textarea
              class="input"
              name="message"
              id="email-message"
              rows="12"
              placeholder="Enter your message here..."
            ></textarea>
            <br /><br />
            <input class="form-btn" type="submit" value="SEND" />
            
          </form>
        </div>
      </div>
    </section>
    <!-- ./ CONTACT FORM -->

    <footer class="footer">
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
