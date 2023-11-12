import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Heading = () => {
  return (
    <div>
<Card>
      <Card.Header as="h3">Heading</Card.Header>
      <Card.Body>
        <Card.Title>Subheading</Card.Title>
       
        <Button variant="primary">CALL TO ACTION</Button>
      </Card.Body>
    </Card>



    </div>
  )
}

export default Heading;