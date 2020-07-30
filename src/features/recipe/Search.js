import React from 'react';
import {
  Row, Col,
  Button,
  FormGroup, Input,
} from 'reactstrap';

function Search({
  recipe,
  onChange,
  onClick,
}) {
  return (
    <Row form>
      <Col md={11}>
        <FormGroup>
          <Input
            type="text"
            value={recipe}
            placeholder="Buscador recetas"
            onChange={e => onChange(e.target.value)}
          />
        </FormGroup>
      </Col>
      <Col md={1}>
        <Button
          block
          onClick={onClick}
        >
          BUSCAR
        </Button>
      </Col>
    </Row>
  )
}

export default Search;
