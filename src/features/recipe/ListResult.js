import React from 'react';
import {
  Row, Col,
  Card, CardImg, CardBody,
  CardTitle, CardFooter,
  Badge
} from 'reactstrap';

const styleLinkTo = {
  color: `#007bff`,
  cursor: `pointer`,
};

function ListResult({
  items,
  onLink,
}) {
  return (
    <>
      {items.length > 0 && (
        <>
          <Row>
            <p>Resultados de la búsqueda</p>
          </Row>
          <Row>
            {items.map(item => (
              <Col md={3} key={`search__recipe-${item.id}`}>
                <Card>
                  <CardImg
                    src={item.image}
                    top
                    width="100%"
                    alt={item.title}
                    style={styleLinkTo}
                    onClick={() => onLink(item)}
                  />
                  <CardBody>
                    <CardTitle
                      style={styleLinkTo}
                      onClick={() => onLink(item)}
                    >
                      {item.title}
                    </CardTitle>
                  </CardBody>
                  <CardFooter>
                    {item.dishTypes.map(dishType => (
                      <Badge
                        key={`card__footer-${item.id}-${dishType}`}
                        color="primary"
                        pill
                      >
                        {dishType}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default ListResult;
