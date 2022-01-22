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
        title={''}
          keywords={[`ashish dubey`, `blog`, `javascript`, `generative music`, `devops`]}
        />
        <p><b>Hello, I'm Ashish Dubey</b></p>
            
        <p>I'm a full-stack software engineer from India.</p>
        <p>Currently, I work with a brilliant group of techies and musicians at <a href="https://www.beatoven.ai">Beatoven.ai</a> where we are building simplified tools to help content creators make their videos and podcasts sound great.</p>
        <p>Earlier, I spent around 6 years with <a href="https://lambda.grofers.com/">the engineering team at Grofers</a>. I was fortunate to spend enough time working on various problems in different roles in a growing startup environment. At the time of leaving, my focus was on continuous delivery and developer experience in a cloud-native environment. Earlier, I worked with the web dev team for full-stack product engineering revolving around Grofers.com. Before that I've worked with the infrastructure team, helping teams scale their applications on AWS.</p>
        <p>In 2014, I joined <a href="https://www.browserstack.com/">BrowserStack</a> after I graduated from college, where I worked as a software engineer on the mobile device cloud team. As part of this team, I worked on the platform that'd allow our users to test their websites on real mobile devices by interacting with them within a web browser.</p>
        <p>Throughout my encounters with programming, audio, and music related applications have held a special spot. Recently, I've become more active in exploring the intersection of technology and music especially through WebAudio.</p>
        
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
