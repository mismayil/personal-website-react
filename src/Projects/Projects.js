import _ from 'lodash'
import { Card, Container, Grid, Image } from 'semantic-ui-react'

import './Projects.css'

function Projects() {
  const projects = [
    {
      image: '',
      title: 'kogito',
      years: '2022',
      description: '',
      affiliation: 'EPFL',
      link: ''
    },
    {
      image: '',
      title: 'Deep Learning Framework',
      years: '2022',
      description: '',
      affiliation: 'EPFL',
      link: ''
    },
    {
      image: '',
      title: 'Words & Personalities',
      years: '2021',
      description: '',
      affiliation: 'EPFL',
      link: ''
    },
    {
      image: '',
      title: 'DP Random Forest',
      years: '2021',
      description: '',
      affiliation: 'Open Source',
      link: ''
    },
    {
      image: '',
      title: 'Yoda',
      years: '2019',
      description: '',
      affiliation: 'Consulting',
      link: ''
    },
    {
      image: '',
      title: 'destin.ai',
      years: '2017-2019',
      description: '',
      affiliation: 'Destin AI',
      link: ''
    }
  ]

  return (
    <Container className='content-container projects-container'>
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <p>Projects</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group>
              {_.map(projects, (project, index) => {
                return (
                  <Card href={project['link']} key={index}>
                    <Image src={project['image']}/>
                    <Card.Content>
                      <Card.Header>{project['title']}</Card.Header>
                      <Card.Meta>{project['years']}</Card.Meta>
                      <Card.Description>{project['description']}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      {project['affiliation']}
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Projects