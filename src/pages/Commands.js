import React from 'react';
import './Commands.css'
import { Card, Container } from 'semantic-ui-react'
import commands from './Command';

function Commands() {
  return (
    <div className='Commands'>
      <Container>
        <Card.Group items={commands} className='CommandsCard' itemsPerRow={4} stackable />
      </Container>

    </div >
  );
}

export default Commands;