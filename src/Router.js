
import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    Navigator
} from 'react-native';
// import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';


import Main from './components/Main'
import Detail from './components/Detail'

export const Routing = StackNavigator({
    Main: { 
        screen: Main
    },
    Detail: { screen: Detail }
})
