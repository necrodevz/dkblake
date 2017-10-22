import React, {Component} from 'react'
import {
  Segment,
  Grid,
  Container,
  Image,
  Header,
  Loader,
  Card,
  Button,
  Icon,
  Divider,
  Label
} from 'semantic-ui-react'
import FixedMenu from '../containers/FixedMenu'

import profilePic from '../img/IMG_0044.JPG'
import ChartContainer from '../containers/ChartContainer'

const me = 'cj92zap5xai480165dxxmk6jk'

const ProfileHeader = () => (
  <Grid height='700px'>
    <Grid.Column width={4}>
      <Image src={profilePic} shape='circular' />
    </Grid.Column>
    <Grid.Column width={9} textAlign='center' verticalAlign='middle'>
      <Header
        as='h1'
        content='Devroy K. Blake'
        //inverted
        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0}}
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

const ProfileBody = ({projects}) => (
  <Grid>
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
          <p>SysAdmin, DevOps, Network Admin, Full-stack Dev, Cloud Solutions Architect.... This is by no means the exhaustive list of roles I've handed over my years in the Tech industry, but the only word which truly describes me is 'Technophile'.</p>
          <p> I've been in love with tech from my first computer at 12. I've done everything from building hardware systems from scratch to writing software over the ensuing years, and I feel like I've begun to just scratch the surface.</p>
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
        <ChartContainer />
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

const Project = ({project}) => (
  <Card>
      <Card.Content>
        <Card.Header>
          {project.name}
        </Card.Header>
        <Card.Meta>
          Languages:<br /> {project.languages.nodes.map((language, index) => (
            <Label key={index} as='a' style={{backgroundColor:language.color}}>
              <Icon name='tag' />
              {language.name}
            </Label>
          ))}
        </Card.Meta>
        <Card.Description>
          {project.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'><Icon name='star' /> Like</Button>
          <Button basic color='blue'><Icon name='external share' />View on Github</Button>
        </div>
      </Card.Content>
    </Card>
)

const ProfileProjects = ({projects}) => (
  <Grid attached='top'>
    <Grid.Row>
      <Grid.Column width={3}>
        
      </Grid.Column>
      <Grid.Column width={10} textAlign='center' verticalAlign='middle'>
        <Header
          as='h3'
          content='Projects'
          //inverted
          style={{ fontSize: '2.15em', fontWeight: 'normal', marginBottom: 0, }}
        />
        <Divider />
      </Grid.Column>
      <Grid.Column width={3}>
        
      </Grid.Column>
    </Grid.Row>
    
        
    <Card.Group itemsPerRow={3}>
      {projects.map(project => <Project key={project.id} project={project} />)}
    </Card.Group>
  </Grid>
)


const Profile =({location, data}) =>{
    
    if (data.loading){
      return (<Loader />)
      
    }
      return (
    <div>
      <FixedMenu location={location} />  
      <Container style={{marginTop: '70px'}}>
        <Segment id='header'>
          <ProfileHeader  />
        </Segment>
        <Segment id='body'>
          <ProfileBody  />
        </Segment>
        <Segment id='projects'>
          <ProfileProjects projects={data.viewer.starredRepositories.nodes} />
        </Segment>
      </Container>
    </div>
  )
}

export default Profile