import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const List = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 250px;
  height: 400px;
  background-color: rgba(0, 0, 0, .7);
  border: 1px solid dimgrey;
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;

  @media (max-width: 850px) {
    grid-column-start: 2;
  }
`

const L = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  line-height: 200%;

  &:hover {
    color: grey;
  }
`

const GalleryList = styled.div`
  width: 200px;
  border-bottom: 1px solid dimgrey;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`

const NavList = () => {
  return(
    <List>
    <GalleryList>
      <L to='/Family-run'>Family Run</L>
      <L to='/DownState'>Downstate</L>
      <L to='/Chicago7879'>Chicago 78/79</L>
      <L to='/CruiseControl'>Cruise Control</L>
    </GalleryList>
      <L to='/About'>About</L>
    </List>
  );
}

const BG = styled.div`
  background: url(${require('./images/galleryFR/bg.jpg')}) no-repeat center;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 20px;
  grid-templete-rows: 1fr 3fr 1fr;

  @media (max-width: 850px) {
    background: url(${require('./images/galleryFR/bg2.jpg')}) no-repeat center;
    grid-template-columns: 1fr 3fr 1fr;
  }
`

const IndexPage = () => (
  <BG>
    <NavList />
  </BG>
)

export default IndexPage
