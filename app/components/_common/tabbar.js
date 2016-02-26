/**
 * by CntChen 2016.02.26
 */

'use strict';

var React = require('react-native');
var TabItem = require('./tabitem');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} = React;

var TabBar = React.createClass({
  getInitialState: function(){
    var data = [
      {
        key: '心理',
        title: '心理',
        icon: 'hello.png',
      },
      {
        key: '高校',
        title: '高校',
        icon: 'hello.png',
      },
      {
        key: '公共',
        title: '公共区',
        icon: 'hello.png',
      },
      {
        key: '我的',
        title: '我的',
        icon: 'hello.png',
      }
    ];

    return {
      tabItems: data,
    }
  },

  render: function(){
    return (
      <View style = {styles.container}>
        {
          this.state.tabItems.map(function(tabItem){
            return <TabItem key={tabItem.key} title={tabItem.title}></TabItem>;
          })
        }
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  },
});

module.exports = TabBar;