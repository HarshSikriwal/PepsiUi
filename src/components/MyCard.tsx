import Card from "react-bootstrap/Card";

const MyCard = ({
  title,
  percent,
  text,
}: {
  title: string;
  percent: string;
  text: string;
}) => {
  return (
    <div className="card-div">
      <Card className="card-main rounded-0 border-0 text-white text-center">
        <Card.Body>
          <Card.Text className="card-text text-white">{text}</Card.Text>
          <Card.Title className="fs-4 fw-bold ">{title}</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center card-sub rounded-0 p-2 text-white">
        <Card.Subtitle>{percent}</Card.Subtitle>
      </Card>
    </div>
  );
};

export default MyCard;
