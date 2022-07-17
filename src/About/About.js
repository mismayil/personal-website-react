import { Container, Grid } from 'semantic-ui-react'

import './About.css'

function About() {
  return (
    <Container className='content-container about-container'>
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <p>About</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <p>Lorem ipsum</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default About