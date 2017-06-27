import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    TouchableOpacity
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
 
const URL = 'http://popo.festiware.com:3000'

export default class Main extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
  constructor(){
    super()
    this.state = {
      data : null
    }
  }
  search(keyword){
    this.setState({data : null})
    Axios.get(URL + '/api/kbbi/' + keyword)
    .then((res) => {
      console.log(res.data)
      this.setState({data : res.data})
    }).catch((err) => {
     this.setState({data : null})
    })
  }
  componentDidMount(){
      SplashScreen.hide()
  }
  
  render(){
    const navigator = this.props.navigation
    return (
      <Container>
         <Header style={{backgroundColor : '#4FC3F7'}}>
          <Body style={{ alignItems: 'center' }}>
            <Title>KATEGLO</Title>
	   
          </Body> 
        </Header>
         <Header searchBar rounded style={{backgroundColor : '#4FC3F7'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(text) => this.search(text)} />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
	    { 
		    this.state.data == null ? 
		    <ListItem>
		    	<Body>
				<Text>Tidak Ditemukan </Text>
		    	</Body>
		    </ListItem>
		    :
		    this.state.data.data.kateglo.definition.map(item => {
			    return (
				<ListItem
				    key={item.def_num.toString()}
				>
              			<Body>
                			<Text>{ item.phrase }</Text>
                			<Text note>{ item.def_text }</Text>
              			</Body>
			        </ListItem>
			    )
		    })
	    }
            
          </List>
        </Content>
      </Container>
    );
  }
}

