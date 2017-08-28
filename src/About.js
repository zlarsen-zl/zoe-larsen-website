import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

class About extends Component {

  render() {
    return (
      <div>
        <Wrapper>
          <Divider />
          <Title>
            About, Skillset, and Interests
          </Title>
          <Divider />
        </Wrapper>
        <SkillWrap>
        <Grid columns={3} padded='horizontally'>
          <Grid.Row>
            <Grid.Column>
              <Title2>Core</Title2>
              <Divider />
            </Grid.Column>
            <Grid.Column>
              <Title2>Libraries</Title2>
              <Divider />
            </Grid.Column>
            <Grid.Column>
              <Title2>Testing</Title2>
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Title3>
                Ruby on Rails
                <br/>
                JavaScript
                <br/>
                HTML/CSS
                <br/>
                Responsive Design
              </Title3>
            </Grid.Column>
            <Grid.Column>
            <Title3>
              React.js/Redux
              <br/>
              Styled Components
              <br/>
              BootStrap/Semantic
              <br/>
              Devise
            </Title3>
            </Grid.Column>
            <Grid.Column>
            <Title3>
              JEST
              <br/>
              Factory Girl
              <br/>
              RSPEC
              <br/>
              Selenium
            </Title3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </SkillWrap>
        <Wrapper>
          <Title4>
            I am a full stack developer residing in Salt Lake City, Utah.
            I recently moved here from sunny New Mexico to make a career move from neuroscience
            lab aide to software developer. I recently graduated from <a href="http://www.devpointlabs.com/" target="blank">
            DevPoint Labs
            </a> and am now intern at several
            Dev shops around town.
          </Title4>
          <Title4>
            I plan to start coordinating Meetups to help new Developers get their toes wet in programming!
          </Title4>
          <Title4>
            In my free time I am climbing my butt off, listening to podcasts, and enjoying some cold brews on my porch with pals.
          </Title4>
        </Wrapper>
      </div>
    );
  }
}

const Title = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 80px;
text-align: center;
color: black;
`;

const Title2 = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 40px;
text-align: center;
color: black;
`;

const Title3 = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 30px;
text-align: center;
line-height: 2;
color: black;
`;

const Title4 = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 30px;
text-align: justify;
line-height: 1.5;
color: black;
margin-left: 4em;
margin-right: 4em;
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

const Wrapper = styled.section`
  padding: 4em;
`;
const SkillWrap = styled.section`
  padding-right: 4em;
  padding-left: 4em;
  margin-left: 4em;
  margin-right: 4em;
`;



export default About;
