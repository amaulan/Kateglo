import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';
import { 
  Container, 
  Content, 
  List, 
  ListItem, 
  Text, 
  Icon, 
  Left, 
  Body, 
  Right, 
  Switch,
  Header,
  Button, 
  Item,
  Input,
  Title,
  Subtitle,
  Footer 
 } from 'native-base'
import SearchBar from 'react-native-searchbar'
import SplashScreen from 'react-native-splash-screen'
import SearchHeaderComponent from 'react-native-search-header';
import Axios from 'axios'

import { Actions } from 'react-native-router-flux'

const SearchHeaderView = SearchHeaderComponent();
const DEVICE_WIDTH = Dimensions.get(`window`).width;

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

export default class Detail extends Component {
  static navigationOptions = { title: 'Details', gestureEnabled: true, headerStyle: { backgroundColor : '#4FC3F7' }, headerTintColor : 'white' };
  constructor(){
    super()
    this.state = {
      data : null
    }
  }
  search(keyword){
    Axios.get('http://192.168.43.55:3000/api/kbbi/' + keyword)
    .then((res) => {
      console.log(res.data)
      this.setState({data : res.data})
    })
  }
  componentDidMount(){
      SplashScreen.hide()
  }
  
  render(){
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
             <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
             <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
             <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
             <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    textAlign: 'center'
  }
})
