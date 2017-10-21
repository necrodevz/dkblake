import React, {Component} from 'react'
import {
  Segment,
  Grid,
  Container,
  Image
} from 'semantic-ui-react'
import FixedMenu from '../containers/FixedMenu'


const ProfileHeader = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='/assets/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='/assets/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

const ProfileBody = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='/assets/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const ProfileProjects = () => (
  <Grid columns={3} divided>
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
        <Container style={{marginTop: '50px'}}>
          <Segment>
            <ProfileHeader />
          </Segment>
          <Segment attatched='top'>
            <ProfileBody />
          </Segment>
          <Segment attatched='top'>
            <ProfileProjects />
          </Segment>
        </Container>
      </div>
    )
  }
}
