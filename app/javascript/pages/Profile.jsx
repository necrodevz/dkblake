import React, {Component} from 'react'
import {
  Segment,
  Grid,
  Container,
  Image,
  Header
} from 'semantic-ui-react'
import FixedMenu from '../containers/FixedMenu'

import profilePic from '../img/IMG_0044.JPG'

const ProfileHeader = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src={profilePic} shape='circular' />
    </Grid.Column>
    <Grid.Column width={9} textAlign='center' verticalAlign='middle'>
      <Header
        as='h1'
        content='Devroy K. Blake'
        //inverted
        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, }}
      />
      <Header
        as='h2'
        content='Technology Solutions Architect'
        //inverted
        style={{ fontSize: '1.7em', fontWeight: 'normal' }}
      />
    </Grid.Column>
    <Grid.Column width={3}>
      
    </Grid.Column>
  </Grid>
)

const ProfileBody = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Header
          as='h3'
          content='About Me'
          //inverted
          style={{ fontSize: '2.15em', fontWeight: 'normal', marginBottom: 0, }}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Header
          as='p'
          content='placeholder for about me'
          //inverted
          style={{ fontSize: '1.5em', fontWeight: 'normal', marginBottom: 0, }}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <h3>Check out my blog</h3>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Header
          as='h3'
          content='Skills'
          //inverted
          style={{ fontSize: '2.15em', fontWeight: 'normal', marginBottom: 0, }}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Header
          as='h3'
          content='Graph'
          //inverted
          style={{ fontSize: '2.15em', fontWeight: 'normal', marginBottom: 0, }}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <Header
          as='h3'
          content='Key'
          //inverted
          style={{ fontSize: '2.15em', fontWeight: 'normal', marginBottom: 0, }}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const ProfileProjects = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        
      </Grid.Column>
      <Grid.Column>
        <Header
          as='h3'
          content='Projects'
          //inverted
          style={{ fontSize: '2.15em', fontWeight: 'normal', marginBottom: 0, }}
        />
      </Grid.Column>
      <Grid.Column>
        
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)


export default class Profile extends Component {
  state = {}
  render() {
      const {location} = this.props
    return (
      <div>
        <FixedMenu location={location} />  
        <Container style={{marginTop: '70px'}}>
          <Segment id='header'>
            <ProfileHeader />
          </Segment>
          <Segment id='body'>
            <ProfileBody />
          </Segment>
          <Segment id='projects'>
            <ProfileProjects />
          </Segment>
        </Container>
      </div>
    )
  }
}
