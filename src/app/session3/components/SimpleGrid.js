import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const SimpleGrid = props => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={6}>{props.children}</Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default SimpleGrid;
