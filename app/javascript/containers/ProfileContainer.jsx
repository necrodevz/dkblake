import React, {Component} from 'react'
import {graphql, gql, compose} from 'react-apollo'
import {connect} from 'react-redux'
import Profile from '../pages/Profile'

const me = 'cj92zap5xai480165dxxmk6jk'

const ProfileContainer = ({location, data }) => (
      <div>
            <Profile location={location} data={data} />
      </div>
)


const mapStateToProps = (state) => state

const getPortfolioRepos = gql`
query ($repoLimit:Int, $languageLimit:Int, $ownRepos:Boolean) {
  viewer { 
  	starredRepositories(first: $repoLimit, ownedByViewer: $ownRepos){
      totalCount
      nodes{
        id
        name
        description
        nameWithOwner
        licenseInfo{
          name
          description
          body
        }
        homepageUrl
        labels(first: $languageLimit){
          nodes{
            name
            color
          }
        }
        milestones(first:$languageLimit){
          nodes{
            title
            description
            dueOn
            number
            state
          }
        }
        languages(first:$languageLimit){
          nodes {
            name
            color
          }
        }
      }
  	}
  }
}
`
export default compose(
connect(mapStateToProps),
graphql(getPortfolioRepos,{ options: {variables: {$repoLimit:8, $languageLimit:5, $ownRepos:true}}})
)(ProfileContainer)
