import React, { Component } from 'react'
import { View } from 'react-native';
import { Image } from 'react-native';
import { Drawer } from 'native-base';
import axios from 'axios';

// import SideBar from './yourPathToSideBar';
import { Container, Header, Content, Item, Input, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, List, ListItem } from 'native-base';

/** News API Key: 97d90855a824461a82dea9ed92371a6a */

export default class Index extends Component {
  state = {
    newsList: [],
  }
  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=97d90855a824461a82dea9ed92371a6a`).then((getData) => {
      this.setState({
        newsList: getData.data.articles
      });
    })
  }
  render() {
    const newslist = this.state.newsList.map((isi, index) => {
      var urutan = index + 1;
      var title = isi.title;
      var description = isi.description;
      var image = isi.urlToImage;

      return <ListItem thumbnail key={index}>
        <Left>
          <Thumbnail square source={{ uri: 'https://www.99.co/blog/indonesia/wp-content/uploads/2016/08/warga-bekasi-dihimbau-tidak-tahun-baru-ke-jakarta-720x405.jpg' }} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note numberOfLines={1}>Its time to build a difference . .</Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    });
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
        <List>
          {newslist}
        </List>
      </Content>
    )
  }
}