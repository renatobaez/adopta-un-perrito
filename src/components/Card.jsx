import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardog = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} style={{ width: '10rem', height: '10rem' }} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
  
  export default Cardog