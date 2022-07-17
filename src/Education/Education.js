import { Container, Grid, Item } from 'semantic-ui-react'
import _ from 'lodash'

import './Education.css'

function Education() {
  const educations = [
    {
      startYear: 2021,
      endYear: 'Present',
      university: 'École Polytechnique Fédérale de Lausanne (EPFL)',
      degree: 'Master',
      major: 'Data Science',
      description: 'lorem ipsum',
      image: '',
      location: 'Lausanne, Switzerland'
    },
    {
      startYear: 2012,
      endYear: 2016,
      university: 'University of Waterloo',
      degree: 'Bachelor',
      major: 'Computer Science',
      description: 'lorem ipsum',
      image: '',
      location: 'Waterloo, Canada'
    },
    {
      startYear: 2010,
      endYear: 2012,
      university: 'Baku State University',
      degree: 'Bachelor (incomplete)',
      major: 'Computer Science',
      description: 'lorem ipsum',
      image: '',
      location: 'Baku, Azerbaijan'
    },
  ]

  return (
    <Container className='content-container education-container'>
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <p>Education</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Item.Group>
              {_.map(educations, (edu, index) => {
                return (
                  <Item key={index}>
                    <Item.Image size='tiny' src={edu['image']}/>
                    <Item.Content>
                      <Item.Header>{edu['university']}</Item.Header>
                      <Item.Meta>{edu['degree']}, {edu['major']}</Item.Meta>
                      <Item.Description>{edu['description']}</Item.Description>
                      <Item.Extra>{edu['location']}</Item.Extra>
                      <Item.Extra>{edu['startYear']}-{edu['endYear']}</Item.Extra>
                    </Item.Content>
                  </Item>
                )
              })}
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Education