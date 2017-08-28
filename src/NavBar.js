import React, { Component } from 'react'
import { Menu, Icon, } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div>
      <Wrapper>
        <Menu pointing secondary inverted >
          <Link to='/'>
            <NavLink name='home' />
          </Link>
          <Link to='/about'>
            <NavLink name='about' />
          </Link>
          <Link to='/contact'>
            <NavLink name='Contact' />
          </Link>
          <Menu.Menu position='right'>
          <a href="https://www.linkedin.com/in/zoelarsen/" target="blank">
            <Icon bordered inverted color='black' name='linkedin square' link size='big'/>
          </a>
          <a href="https://github.com/zlarsen-zl" target="blank">
            <Icon bordered inverted color='black' name='github square' link size='big'/>
          </a>
          <a href="https://twitter.com/zl_larsen?lang=en" target="blank">
            <Icon bordered inverted color='black'name='twitter square'  link size='big'/>
          </a>
          </Menu.Menu>
          </Menu>
      </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.section`
	background: black;

`;


const NavLink= styled(Menu.Item)`
  background: black;
	font-weight: bold;
  font-size: 20px;
  color: white;
`;

export default withRouter(NavBar);
