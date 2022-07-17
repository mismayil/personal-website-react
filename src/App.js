import { useState } from 'react'
import { Grid, Icon, Image, Dropdown, Menu, Transition } from 'semantic-ui-react'

import './App.css'
import avatar from './avatar.jpeg'
import About from './About/About'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Blog from './Blog/Blog'

function App() {
  const [activeItem, setActiveItem] = useState(null)
  const [homeWidth, setHomeWidth] = useState(16)
  const [contentVisible, setContentVisible] = useState(false)
  const [homeVisible, setHomeVisible] = useState(true)
  const [homeInCenter, setHomeInCenter] = useState(true)
  const [contentObj, setContentObj] = useState({content: null, className: ''})

  const contentMap = {
    about: {
      jsx: <About/>,
      className: 'content-about'
    },
    education: {
      jsx: <Education/>,
      className: 'content-education'
    },
    experience: {
      jsx: <Experience/>,
      className: 'content-experience'
    },
    projects: {
      jsx: <Projects/>,
      className: 'content-projects'
    },
    blog: {
      jsx: <Blog/>,
      className: 'content-blog'
    }
  }

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
    setContentObj(contentMap[name])

    if (homeInCenter) {
      setHomeWidth(15)
      setContentVisible(true)
      setHomeVisible(false)
    }
  }

  const handleHomeHide = () => {
    setHomeWidth(6)
    setHomeInCenter(false)
  }

  const homeJSX = (
    <Grid className='app-container' verticalAlign='middle'>
      <Grid.Column>
        <Grid container textAlign='center'>
          <Grid.Row centered>
            <Grid.Column width={4} textAlign='center'>
              <Image src={avatar} circular size='small' centered/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>Mahammad Mete Ismayilzada</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>lorem upsum</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Icon.Group size='large'>
                <Icon name='facebook f' circular/>
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='twitter' circular/>
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='linkedin' circular/>
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='github' circular/>
              </Icon.Group>
              <Icon.Group size='large'>
                <Icon name='instagram' circular/>
              </Icon.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Menu text compact>
                <Menu.Item
                  name='about'
                  active={activeItem === 'about'}
                  onClick={handleItemClick}
                >About</Menu.Item>
                <Menu.Item
                  name='education'
                  active={activeItem === 'education'}
                  onClick={handleItemClick}
                >Education</Menu.Item>
                <Menu.Item
                  name='experience'
                  active={activeItem === 'experience'}
                  onClick={handleItemClick}
                >Experience</Menu.Item>
                <Menu.Item
                  name='projects'
                  active={activeItem === 'projects'}
                  onClick={handleItemClick}
                >Projects</Menu.Item>
                <Menu.Item
                  name='blog'
                  active={activeItem === 'blog'}
                  onClick={handleItemClick}
                >Blog</Menu.Item>
                <Dropdown item text='Hobbies'>
                  <Dropdown.Menu>
                    <Dropdown.Item>Music</Dropdown.Item>
                    <Dropdown.Item>Books</Dropdown.Item>
                    <Dropdown.Item>Films</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid>
  )

  return (
    <Grid>
      {homeInCenter ? 
        <Transition animation='fade right' duration={500} visible={homeVisible} onHide={handleHomeHide}>
          <Grid.Column width={homeWidth}>
            {homeJSX}
          </Grid.Column>
        </Transition> : 
        <Grid.Column width={homeWidth}>
          {homeJSX}
        </Grid.Column>
      }
      {contentVisible ?
        <Transition animation='fade left' duration={5000} visible={contentVisible}>
          <Grid.Column width={16-homeWidth} className={contentObj['className']}>
            {contentObj['jsx']}
          </Grid.Column>
        </Transition> : null
      }
    </Grid>
  )
}

export default App
