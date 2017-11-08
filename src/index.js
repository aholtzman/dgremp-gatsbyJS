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
  border-bottom: 1px solid dimgrey;
  background-color: rgba(0, 0, 0, .8);
  text-align: center;
  height: 50px;
  position: fixed;
  padding-top: 8px;
  top: 0;
  width: 100%;
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
