import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div>
      <nav role="navigation">
        <ul class="nav nav-underline justify-content-center mt-4">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Give
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Announcements
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
      <h2 class="mt-4">Welcome to Crosslife Christian Fellowship</h2>
      <p class="mt-4">
        Ex ea ex reprehenderit commodo laborum deserunt non reprehenderit
        occaecat aliqua magna.
      </p>
    </div>
  );
};

export default HomePage;
