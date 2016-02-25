'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var App = React.createClass({
  getInitialState: function(){
    var data = [
      {
        title: '心理',
      },
    ];

    return {
      tabItems: data,
    }
  },

  render: function() {
    return (
      <View style={styles.container}></View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = App;