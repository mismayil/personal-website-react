import { Container, Grid, Item } from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import './Experience.css'
import _ from 'lodash'

function Experience() {
  const experiences = [
    {
      startYear: '2019',
      endYear: '2021',
      startMonth: 'July',
      endMonth: 'August',
      company: 'integrate.ai',
      title: 'Software/ML Engineer',
      location: 'Toronto, Canada',
      image: '',
      description: 'lorem ipsum'
    },
    {
      startYear: '2017',
      endYear: '2019',
      startMonth: 'September',
      endMonth: 'May',
      company: 'destin.ai',
      title: 'Co-founder & CTO',
      location: 'Toronto, Canada',
      image: '',
      description: 'lorem ipsum'
    },
    {
      startYear: '2017',
      endYear: '2018',
      startMonth: 'September',
      endMonth: 'June',
      company: 'Bluecat Networks',
      title: 'Software Engineer',
      location: 'Toronto, Canada',
      image: '',
      description: 'lorem ipsum'
    },
    {
      startYear: '2016',
      endYear: '2017',
      startMonth: 'July',
      endMonth: 'August',
      company: 'Cisco Systems',
      title: 'Software Engineer',
      location: 'Ottawa, Canada',
      image: '',
      description: 'lorem ipsum'
    },
    {
      startYear: '2015',
      endYear: '2015',
      startMonth: 'May',
      endMonth: 'August',
      company: 'Freescale Semiconductors',
      title: 'Software Engineer Intern',
      location: 'Ottawa, Canada',
      image: '',
      description: 'lorem ipsum'
    },
    {
      startYear: '2014',
      endYear: '2014',
      startMonth: 'May',
      endMonth: 'August',
      company: 'TD Securities',
      title: 'Software Developer Intern',
      location: 'Toronto, Canada',
      image: '',
      description: 'lorem ipsum'
    },
    {
      startYear: '2013',
      endYear: '2013',
      startMonth: 'August',
      endMonth: 'September',
      company: 'Azercell LLC',
      title: 'Software Developer Intern',
      location: 'Baku, Azerbaijan',
      image: '',
      description: 'lorem ipsum'
    }
  ]

  return (
    <Container className='content-container experience-container'>
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <p>Experience</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <VerticalTimeline>
              {_.map(experiences, (exp, index) => {
                return (
                  <VerticalTimelineElement
                    icon={<Item.Image size='tiny' src={exp['image']} circular/>}
                    date={`${exp['startYear']}-${exp['endYear']}`}
                  >
                    <Item.Group>
                      <Item key={index}>
                        <Item.Content>
                          <Item.Header>{exp['company']}</Item.Header>
                          <Item.Meta>{exp['title']}</Item.Meta>
                          <Item.Description>{exp['description']}</Item.Description>
                          <Item.Extra>{exp['location']}</Item.Extra>
                          <Item.Extra>{exp['startMonth']}, {exp['startYear']}-{exp['endMonth']}, {exp['endYear']}</Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Experience