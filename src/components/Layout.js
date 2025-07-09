import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    
    if (location.pathname.startsWith('/blog')) {
      header = (
        <Link
          style={{
            fontFamily: `Montserrat, sans-serif`,
            fontSize: '18px',
            marginTop: 0,
            marginBottom: 0,
            fontWeight: 400,
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          Ashish Dubey's Blog
        </Link>
      )
    } else {
      header = '';
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: rhythm(1),
          padding: `${rhythm(0.5)} 0`,
          borderBottom: '1px solid #ccc',
          textAlign: 'right'
        }}>
          <div>
            {header}
          </div>
          <div>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                marginRight: rhythm(0.75),
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
          </div>
        </nav>
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
