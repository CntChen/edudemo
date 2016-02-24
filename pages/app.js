'use strict';

var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var SignIn = require('./signin/index');

var MentalityPage = require('./mentalitypage');
var CollagePage = require('./collagepage');
var PublicPage = require('./publicpage');
var AboutMePage = require('./aboutmepage');

var userState = 'unsignin';

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var MyComponent = React.createClass({
  getInitialState: function(){
    var data = [
      {
        title: '心理',
        component: MentalityPage,
      },
      {
        title: '高校',
        component: CollagePage,
      },
      {
        title: '公共区',
        component: PublicPage,
      },
      {
        title: '我的',
        component: AboutMePage,
      }
    ];

    return {
      tabItems: data,
      userState: userState,
    }
  },

  render: function() {
    switch(this.state.userState)
    {
      case 'unsignin':
      return (
        <View style={styles.container}>
          <SignIn />
        </View>
      );
      break;
      case 'signined':
      return (
        <ScrollableTabView tabBarPosition='bottom'>
          <MentalityPage tabLabel={this.state.tabItems[0].title} />
          <CollagePage tabLabel={this.state.tabItems[1].title} />
          <PublicPage tabLabel={this.state.tabItems[2].title} />
          <AboutMePage tabLabel={this.state.tabItems[3].title} />
        </ScrollableTabView>
      );
      break;
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = MyComponent;