import { Container, Grid } from 'semantic-ui-react'

import './Blog.css'

function Blog() {
  return (
    <Container className='content-container blog-container'>
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <p>Blog</p>
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

export default Blog