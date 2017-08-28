import React, { Component } from 'react';
import { Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components'

class Home extends Component {

  render() {
    return (
      <div>
      <Logo>
        <Image size='medium' centered src="http://i.imgur.com/YQX4SS3.jpg?1" />
        <br/>
        <Image size='big' src="http://res.cloudinary.com/dfzfgaosq/image/upload/v1503863981/logo2_kqr190.png" centered />
      </Logo>
      <Link href="https://medium.com/@zlarsen.zl" target="blank">
      <Wrapper>
          <Image size='medium' inline src="http://res.cloudinary.com/dfzfgaosq/image/upload/v1503883902/medium_logo1600_ri4jck.png"/>
          <Blurb>
          Check out my posts here!!
          </Blurb>
      </Wrapper>
      </Link>
      <Link href="https://github.com/zlarsen-zl" target="blank">
      <Wrapper2>
        <Blurb2>
          Scope out my coding chops!
        </Blurb2>
        <Image size='medium' inline src="http://res.cloudinary.com/dfzfgaosq/image/upload/v1503884439/GitHub_f3yyyt.png"/>
      </Wrapper2>
      </Link>
      </div>
    );
  }
}

const Blurb = styled.p`
  display: inline;
  font-family: 'Open Sans', sans-serif;
  font-size: 50px;
  text-align: justify;
  padding-left: 1em;
  padding-right: 0.5em;
  color: black;
`;

const Blurb2 = Blurb.extend`
  padding-left: 2em;
  padding-right: 1em;
`;

const Wrapper = styled.div`
  padding-right: 4em;
  padding-left: 4em;
  margin: 5em;
  border-left-style: solid;
  border-bottom-style: solid;
`;

const Wrapper2 = styled.div`
  margin: 5em;
  border-right-style: solid;
  border-bottom-style: solid;
`;

const Link = styled.a`
	color: black;
`;


const Divider = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  color: black;
  background-color: black;
  width: 90%;
  height: 2px
`;

const Logo = styled.section`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  padding: 4em;
	background: white;
  text-align: center;
`;


export default Home;
