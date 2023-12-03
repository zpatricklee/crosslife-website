import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
// import CardComponent from "../components/CardComponent";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const mainCardImgClassName = `${classes["main-card-img"]}`;

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://picsum.photos/300/200"
          alt="Card image"
          className={mainCardImgClassName}
        />
        <Card.ImgOverlay>
          <Card.Title className="text-center">
            <h1>Welcome to Crosslife Christian Fellowship</h1>
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default HomePage;
