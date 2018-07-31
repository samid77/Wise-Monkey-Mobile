import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion, DatePicker, Form, Item, Input, H1, H2, H3} from 'native-base';

class Registration extends Component {
  render() {
    return (
        <Content padder>
            <H3 style={{textAlign: 'center'}}>Sign Up to Wisemonkey</H3>
            <Form>
                <Item>
                    <Input placeholder="Realname" />
                </Item>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item>
                    <Input placeholder="Email" />
                </Item>
                <Item>
                    <Input placeholder="Password" />
                </Item>
            </Form>
            <View style={{marginTop: 20}}>
                <Button block rounded success>
                    <Text>Register</Text>
                </Button>
            </View>
      </Content>
    )
  }
}
export default Registration;