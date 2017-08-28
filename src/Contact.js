import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

class Contact extends Component {

  render() {
    return (
      <div>
        <Wrapper>
          <Divider/>
          <Title>&lt; Contact &gt;</Title>
          <Divider/>
        </Wrapper>
        <Wrapper>
          <Para>
            Feel free to contact me if you would like to get in touch!
          </Para>
        </Wrapper>
        <ContactWrap>
          <a title="Email Zoe Larsen"
          href="mailto:zlarsen.zl@gmail.com">
            <Icon color='black' name='mail outline' link size='massive'/>
          </a>
          <a title="Zoe Larsen linkedin"
          href="https://www.linkedin.com/in/zoelarsen/"
          target="blank">
            <Icon  color='black' name='linkedin square' link size='massive'/>
          </a>
          <a title="Zoe Larsen Twitter"
          href="https://twitter.com/zl_larsen?lang=en"
          target="blank">
            <Icon color='black'name='twitter square' link size='massive'/>
          </a>
        </ContactWrap>
      </div>
    );
  }
}
const Wrapper = styled.section`
  padding: 4em;
`;

const ContactWrap = Wrapper.extend`
  justifyContent: center;
  text-align: center;
`;

const Title = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 80px;
text-align: center;
color: black;
`;

const Para = Title.extend`
  font-size: 60px;
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



export default Contact;
