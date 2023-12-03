import Card from "react-bootstrap/Card";

function CardComponent() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://picsum.photos/300/200" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-center ">
          <h1>Welcome to Crosslife Christian Fellowship</h1>
        </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardComponent;
