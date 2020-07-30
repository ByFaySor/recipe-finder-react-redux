import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Row, Col,
  Badge
} from 'reactstrap';

export function Recipe({
  selectedRecipe,
  ...props
}) {
  const toHome = useCallback(() => {
    props.history.push(`../home`);
  }, [props.history])

  useEffect(() => {
    if (!selectedRecipe.id) {
      toHome();
    }
  }, [selectedRecipe, toHome]);

  return (
    <>
      <h1>Detalles</h1>
      {selectedRecipe.id && (
        <Row>
          <Col md={3}>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              width="100%"
            />
            <Col md={12}>
              {selectedRecipe.dishTypes.map(dishType => (
                <Badge color="primary" pill>{dishType}</Badge>
              ))}
            </Col>
          </Col>
          <Col md={9}>
            <h2>{selectedRecipe.title}</h2>
            <a
              href="#top"
              title="Home"
              onClick={() => toHome()}
            >
              Regresar
            </a>
            <h3>Resumen</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedRecipe.summary
              }}
            >
            </div>
            <h3>Link de preparación de la receta</h3>
            <a
              href={selectedRecipe.spoonacularSourceUrl}
              target="_black"
            >
              Abrir página de preparación
            </a>
            <h3>Ingredientes</h3>
            <ul>
              {selectedRecipe.extendedIngredients.map(ingredient => (
                <li>{ingredient.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  selectedRecipe: state.selectedRecipe,
});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Recipe)
);
