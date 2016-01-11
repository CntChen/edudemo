'use strict';

var React = require('react-native');
var TabBar = require('./tabbar');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var App = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <View></View>
      <TabBar/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = App;