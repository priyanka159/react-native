import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Right, Left } from 'native-base';
import {Radio} from 'native-base'
export default class RadioButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Hello Man</Text>
            </Left>
            <Right>
              <Radio/>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}