import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import NavList from '../components/NavList'

const BG = styled.div`
  background: url(${require('../images/galleryFR/bg.jpg')}) no-repeat center;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 20px;
  grid-templete-rows: 1fr 3fr 1fr;

  @media (max-width: 850px) {
  background: url(${require('../images/galleryFR/bg2.jpg')}) no-repeat center;
  grid-template-columns: 1fr 3fr 1fr;
  }
`

const IndexPage = () => (
  <BG>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </BG>
)

export default IndexPage
