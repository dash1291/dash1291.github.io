import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    
    if (location.pathname === rootPath) {
      header = ''
    } else if (location.pathname.startsWith('/blog')) {
      header = (
        <div>
          <h1
            style={{
              marginBottom: rhythm(1),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog`}
            >
              Ashish Dubey's blog
            </Link>
          </h1>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog`}
          >
            Ashish Dubey's blog
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <nav style={{
          marginBottom: rhythm(1),
          padding: `${rhythm(0.5)} 0`,
          borderBottom: '1px solid #ccc',
          textAlign: 'right'
        }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              marginRight: rhythm(1),
              fontWeight: location.pathname === '/' ? 'bold' : 'normal'
            }}
          >
            About
          </Link>
          <Link
            to="/blog"
            style={{
              textDecoration: 'none',
              fontWeight: location.pathname.startsWith('/blog') ? 'bold' : 'normal'
            }}
          >
            Blog
          </Link>
        </nav>
        {header}
        {children}
				<hr />
        <footer>
          © {new Date().getFullYear()}, Ashish Dubey
        </footer>
      </div>
    )
  }
}

export default Layout
