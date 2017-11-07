import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../GlobalThemes'

const L = styled(Link)`
  text-decoration: none;
  color: #F5F5F5;
  font-size: 30px;
  letter-spacing: 1px;

  &:hover {
    color: grey;
  }
`

const Head = styled.div`
  background-color: rgba(0, 0, 0, .8);
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => (
  <Head>
    <L to='/'>David Gremp</L>
  </Head>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="David Gremp Photography"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
