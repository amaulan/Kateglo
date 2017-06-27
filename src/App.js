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
import SearchHeaderComponent from 'react-native-search-header'
import Axios from 'axios'

import { Routing } from './Router'
// import {Scene, Router, Actions} from 'react-native-router-flux'
// import {Router, routerReducer, Route, Animations, Schema} from 'react-native-redux-router';


import Main from './components/Main'
import Detail from './components/Detail'
 
const SearchHeaderView = SearchHeaderComponent();
const DEVICE_WIDTH = Dimensions.get(`window`).width;

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data : null
    }
  }
  componentDidMount(){
      SplashScreen.hide()
  }
  
  render(){
    return (
        <Routing />
    );
  }
}
