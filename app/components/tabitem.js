'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
} = React;

var TabItem = React.createClass({
  render: function(){
    return (
      <View style = {styles.container}>
        {(() => {if(this.props.title) return <Text style={styles.titleText}>{this.props.title}</Text>})()}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    color: 'tomato',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

module.exports = TabItem;