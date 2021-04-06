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
          title=""
          keywords={[`ashish dubey`, `blog`, `javascript`, `generative music`, `devops`]}
        />
        <p><b>Hello, I'm Ashish Dubey</b></p>
            
        <p>I'm a full-stack software engineer from India.</p>

        <p>Currently I work with <a href="https://lambda.grofers.com/">the engineering team at Grofers</a>, focusing on continuous delivery and developer experience in a cloud-native environment. Earlier, I worked with the web dev team for full-stack product engineering revolving around <a href="https://grofers.com">Grofers.com</a>. Before that I've worked with the infrastructure team, helping teams scale their applications on AWS and setting up automation to help with auto-scaling and monitoring.</p>
        <p>In 2014 I joined <a href="https://www.browserstack.com/">BrowserStack</a> after I graduated from college where I worked as a software engineer on the mobile device cloud team. As part of this team, I worked on the platform that'd allow our users to interact with real mobile devices which we had setup in a custom data center setup.</p>
        <p>Throughout my encounters with programming, audio and music related applications have held a special spot. Recently, I've become more active in exploring the intersection of technology and music especially through Web Audio.</p>
        
        <p>Sometimes I write about my personal projects and other topics that I'm interested in. You can read those on my <a href="/blog">blog</a>.</p>

        <p>You can also find me on <a href="https://github.com/dash1291">GitHub</a>, <a href="https://twitter.com/dash1291">Twitter</a> and <a href="https://www.linkedin.com/in/ashishdd/">LinkedIn</a></p>
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
