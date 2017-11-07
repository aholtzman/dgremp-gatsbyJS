import styled from 'styled-components'
import React from 'react'

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
      <L to='/Downstate'>Downstate</L>
      <L to='/Chicago7879'>Chicago 78/79</L>
      <L to='/CruiseControl'>Cruise Control</L>
    </GalleryList>
      <L to='/About'>About</L>
    </List>
  );
}

export default NavList
