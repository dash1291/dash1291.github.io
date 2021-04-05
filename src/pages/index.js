import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'Ashish Dubey'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Ashish Dubey's Blog"
          keywords={[`ashish dubey`, `blog`, `javascript`, `generative music`, `devops`]}
        />
        <p>Hi, I'm Ashish Dubey</p>
            
        <p>I'm a full-stack software engineer from India.</p>

        <p>Currently I work with the engineering team at Grofers, focussing on continuous delivery and developer experience. In past I've worked with the infrastructure team and web dev team.</p>
        <p>In 2014 I joined Browserstack after I graduated from college where I worked as a software engineer on the mobile device cloud team. As part of this team, I worked on the platform that'd allow our users to interact with real mobile devices which we had setup in a custom data center setup.</p>
        
        <p>Throughout my encounters with programming, audio and music related applications have held a special spot. Recently, I've become more active in exploring the intersection of technology and music especially through Web Audio.</p>
        
        <p>Read my <a href="/blog">blog</a></p>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
