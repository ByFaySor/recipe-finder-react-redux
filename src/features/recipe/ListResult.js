import React from 'react';
import {
  Row, Col,
  Card, CardImg, CardBody,
  CardTitle, CardFooter,
  Badge
} from 'reactstrap';

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
                  <a
                    href="#top"
                    onClick={() => onLink(item)}
                  >
                    <CardImg
                      src={item.image}
                      top
                      width="100%"
                      alt={item.title}
                    />
                  </a>
                  <CardBody>
                    <a
                      href="#top"
                      onClick={() => onLink(item)}
                    >
                      <CardTitle>
                        {item.title}
                      </CardTitle>
                    </a>
                  </CardBody>
                  <CardFooter>
                    {item.dishTypes.map(dishType => (
                      <Badge color="primary" pill>{dishType}</Badge>
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
