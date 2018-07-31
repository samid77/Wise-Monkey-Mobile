import React, { Component } from 'react';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion, DatePicker, Form, Item, Input} from 'native-base';
import { View} from 'react-native'

export default class Header extends Component {
  render() {
    return (
        <Header>
          <Left>
              <Button transparent>
              <Icon name='menu' />
              </Button>
          </Left>
          <Body>
              <Title>Header</Title>
          </Body>
          <Right />
      </Header>
    )
  }
}