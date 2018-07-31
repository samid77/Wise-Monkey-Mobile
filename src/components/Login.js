import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion, DatePicker, Form, Item, Input, H1, H2, H3,} from 'native-base';

class Login extends Component {
  render() {
    return (
        <Container>
        <Header />
        <Content style={{marginTop: 70, marginLeft: 10, marginRight: 10}}>
            <H3 style={{textAlign: 'center'}}>Sign in to Wisemonkey</H3>
            <Form>
                <Item>
                    <Input placeholder="Username" style={{color: 'white'}} />
                </Item>
                <Item>
                    <Input placeholder="Password" />
                </Item>
            </Form>
            <View style={{marginTop: 20}}>
                <Button block rounded info onPress={() => this.props.navigation.navigate('Index')}>
                    <Text>Sign In</Text>
                </Button>
                <Button block rounded success style={{marginTop: 5}} onPress={() => this.props.navigation.navigate('Registration')}>
                    <Text>Register</Text>
                </Button>
            </View>
      </Content>
      </Container>
    )
  }
}
export default Login;