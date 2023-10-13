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
    <Card className="rounded-0 border-0 text-white text-center ">
      <Card.Body>
        <Card.Text className="card-text text-white mb-1">{text}</Card.Text>
        <Card.Title className="fs-4 fw-bold ">{title}</Card.Title>

        <Card.Subtitle className="card-subtitle">{percent}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
