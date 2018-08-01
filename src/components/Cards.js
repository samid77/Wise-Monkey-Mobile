import React, { Component } from 'react'
import { View } from 'react-native';
import { Image } from 'react-native';
import { Drawer } from 'native-base';
// import SideBar from './yourPathToSideBar';
import { Container, Header, Content, Item, Input, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List, ListItem } from 'native-base';

/** News API Key: 97d90855a824461a82dea9ed92371a6a */

export default class Cards extends Component {
  render() {
    return (
        <Content>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://cdn-images-1.medium.com/max/2000/1*i4JSARqDcVOH5tlQByxVEw.png'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{uri: 'https://cdn-images-1.medium.com/max/800/1*7lwP90uD_PsbkbLek7ffyQ.jpeg'}} style={{height: 200, width: 200, flex: 1}}/>
              <Text>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    )
  }
}